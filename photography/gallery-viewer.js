(function () {
  function createViewer() {
    const viewer = document.createElement('div');
    viewer.className = 'gallery-viewer';
    viewer.setAttribute('aria-hidden', 'true');
    viewer.innerHTML = `
      <div class="gallery-viewer-panel">
        <button class="gallery-viewer-close" type="button" aria-label="Close image viewer">&times;</button>
        <div class="gallery-viewer-stage">
          <button class="gallery-viewer-nav gallery-viewer-prev" type="button" aria-label="Previous photograph">&#8249;</button>
          <figure class="gallery-viewer-figure">
            <div class="gallery-viewer-image-wrap">
              <img class="gallery-viewer-image" alt="">
              <div class="gallery-viewer-loading" aria-live="polite">Loading image…</div>
            </div>
            <figcaption class="gallery-viewer-meta">
              <span class="gallery-viewer-counter"></span>
              <span class="gallery-viewer-caption"></span>
            </figcaption>
          </figure>
          <button class="gallery-viewer-nav gallery-viewer-next" type="button" aria-label="Next photograph">&#8250;</button>
        </div>
      </div>
    `;
    document.body.appendChild(viewer);
    return viewer;
  }

  window.initializeGalleryViewer = function initializeGalleryViewer(options) {
    const galleryName = options.galleryName || 'Gallery';
    const links = Array.from(document.querySelectorAll('.photo-item'));

    if (!links.length) {
      return;
    }

    const entries = links.map((link, index) => {
      const captionNode = link.querySelector('.photo-caption');
      const imageNode = link.querySelector('img');
      return {
        href: link.href,
        caption: captionNode ? captionNode.textContent.trim() : `Image ${index + 1}`,
        alt: imageNode ? imageNode.alt : `${galleryName} photograph ${index + 1}`
      };
    });

    const viewer = createViewer();
    const viewerImage = viewer.querySelector('.gallery-viewer-image');
    const viewerCaption = viewer.querySelector('.gallery-viewer-caption');
    const viewerCounter = viewer.querySelector('.gallery-viewer-counter');
    const viewerClose = viewer.querySelector('.gallery-viewer-close');
    const viewerPrev = viewer.querySelector('.gallery-viewer-prev');
    const viewerNext = viewer.querySelector('.gallery-viewer-next');
    const viewerLoading = viewer.querySelector('.gallery-viewer-loading');

    let currentIndex = 0;
    let targetIndex = 0;
    let wheelLock = false;
    let isLoading = false;
    let loadToken = 0;
    const preloadCache = new Map();

    function setLoadingState(loading) {
      isLoading = loading;
      viewer.classList.toggle('is-loading', loading);
      viewerPrev.disabled = loading;
      viewerNext.disabled = loading;
      viewerLoading.textContent = 'Loading image…';
    }

    function preloadImage(href) {
      if (preloadCache.has(href)) {
        return preloadCache.get(href);
      }

      const image = new Image();
      const promise = new Promise((resolve, reject) => {
        image.onload = () => resolve(href);
        image.onerror = reject;
      });

      image.src = href;
      preloadCache.set(href, promise);
      return promise;
    }

    function prefetchNeighbors(index) {
      const nextIndex = (index + 1) % entries.length;
      const prevIndex = (index - 1 + entries.length) % entries.length;
      preloadImage(entries[nextIndex].href);
      preloadImage(entries[prevIndex].href);
    }

    function showPhoto(index) {
      const entry = entries[index];
      currentIndex = index;
      targetIndex = index;
      viewerImage.src = entry.href;
      viewerImage.alt = entry.alt;
      viewerCaption.textContent = entry.caption;
      viewerCounter.textContent = `${index + 1} / ${entries.length}`;
    }

    function loadPhoto(index) {
      const entry = entries[index];
      const requestToken = ++loadToken;

      targetIndex = index;
      setLoadingState(true);

      preloadImage(entry.href)
        .then(() => {
          if (requestToken !== loadToken) {
            return;
          }

          showPhoto(index);
          setLoadingState(false);
          prefetchNeighbors(index);
        })
        .catch(() => {
          if (requestToken !== loadToken) {
            return;
          }

          viewerLoading.textContent = 'Unable to load image.';
          viewer.classList.add('is-loading');
          viewerPrev.disabled = false;
          viewerNext.disabled = false;
          isLoading = false;
        });
    }

    function openViewer(index) {
      viewer.classList.add('is-open');
      viewer.setAttribute('aria-hidden', 'false');
      document.body.classList.add('gallery-viewer-open');
      loadPhoto(index);
    }

    function closeViewer() {
      loadToken += 1;
      viewer.classList.remove('is-open');
      viewer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('gallery-viewer-open');
      setLoadingState(false);
    }

    function navigate(delta) {
      if (isLoading) {
        return;
      }

      const nextIndex = (targetIndex + delta + entries.length) % entries.length;
      loadPhoto(nextIndex);
    }

    links.forEach((link, index) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        openViewer(index);
      });
    });

    viewerClose.addEventListener('click', closeViewer);
    viewerPrev.addEventListener('click', () => navigate(-1));
    viewerNext.addEventListener('click', () => navigate(1));
    viewer.addEventListener('click', (event) => {
      if (event.target === viewer) {
        closeViewer();
      }
    });
    viewer.addEventListener('wheel', (event) => {
      event.preventDefault();
      if (wheelLock) {
        return;
      }
      wheelLock = true;
      navigate(event.deltaY > 0 ? 1 : -1);
      window.setTimeout(() => {
        wheelLock = false;
      }, 220);
    }, { passive: false });

    document.addEventListener('keydown', (event) => {
      if (!viewer.classList.contains('is-open')) {
        return;
      }
      if (event.key === 'Escape') {
        closeViewer();
      } else if (event.key === 'ArrowRight') {
        navigate(1);
      } else if (event.key === 'ArrowLeft') {
        navigate(-1);
      }
    });
  };
})();
