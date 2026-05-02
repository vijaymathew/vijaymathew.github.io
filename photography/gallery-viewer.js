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
            <img class="gallery-viewer-image" alt="">
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

    let currentIndex = 0;
    let wheelLock = false;

    function showPhoto(index) {
      const entry = entries[index];
      currentIndex = index;
      viewerImage.src = entry.href;
      viewerImage.alt = entry.alt;
      viewerCaption.textContent = entry.caption;
      viewerCounter.textContent = `${index + 1} / ${entries.length}`;
    }

    function openViewer(index) {
      showPhoto(index);
      viewer.classList.add('is-open');
      viewer.setAttribute('aria-hidden', 'false');
      document.body.classList.add('gallery-viewer-open');
    }

    function closeViewer() {
      viewer.classList.remove('is-open');
      viewer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('gallery-viewer-open');
    }

    function navigate(delta) {
      const nextIndex = (currentIndex + delta + entries.length) % entries.length;
      showPhoto(nextIndex);
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
