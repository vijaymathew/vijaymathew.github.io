#!/bin/bash
#
# Convert gallery and blog images to WebP for the web.
#
# Usage: convert-webp.sh [folder ...]
#
# With no arguments, walks the galleries/ and blog/ trees. Given one or more
# folders, walks those instead (recursively). Every non-WebP image found is
# written as a .webp next to it (same basename). The originals are left in
# place so you can compare quality and revert; remove them once you're happy
# (see the note printed at the end).
#
# The sources are ~4000px; that resolution is overkill for on-screen viewing
# and re-encoding it to WebP barely helps (sometimes hurts). The real win is
# resizing down to a generous display size AND using WebP.
#
# Encoding notes:
#   -resize 2560 0  cap the long-ish edge at 2560px (crisp full-screen on any
#                   normal display; only downscales, never upscales smaller imgs).
#   -q 82     visually indistinguishable from the source at this size.
#   -m 6      slowest / best compression search.
#   -metadata icc  preserve the embedded colour profile so colours stay accurate.
#
# Net effect: ~55-65% smaller than the current 4000px JPEGs.
#
# Idempotent: an image is skipped if its .webp already exists and is newer
# than the source, so re-running only picks up new or changed photos.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

if (( $# > 0 )); then
    IMAGE_ROOTS=("$@")
    for root in "${IMAGE_ROOTS[@]}"; do
        [[ -d "$root" ]] || { echo "error: not a directory: $root"; exit 1; }
    done
else
    IMAGE_ROOTS=("$SCRIPT_DIR/galleries" "$SCRIPT_DIR/blog")
fi

# Source formats cwebp reads. (GIF needs gif2webp, so it's not listed.)
EXTENSIONS=(jpg jpeg png tif tiff)

# -> ( -iname *.jpg -o -iname *.jpeg -o ... ), plus a quoted copy for printing.
find_expr=()
find_expr_str=""
for ext in "${EXTENSIONS[@]}"; do
    if (( ${#find_expr[@]} )); then
        find_expr+=(-o)
        find_expr_str+=" -o"
    fi
    find_expr+=(-iname "*.$ext")
    find_expr_str+=" -iname '*.$ext'"
done

command -v cwebp >/dev/null || { echo "error: cwebp not found (install webp)"; exit 1; }

quality=82
maxedge=2560
converted=0
skipped=0
in_bytes=0
out_bytes=0

while IFS= read -r -d '' src; do
    webp="${src%.*}.webp"

    if [[ -f "$webp" && "$webp" -nt "$src" ]]; then
        skipped=$((skipped + 1))
        continue
    fi

    # Cap the longer edge at $maxedge, downscaling only (never upscale).
    read -r w h < <(python3 -c "import sys;from PIL import Image;i=Image.open(sys.argv[1]);print(i.width,i.height)" "$src")
    resize=()
    if (( w >= h )); then
        (( w > maxedge )) && resize=(-resize "$maxedge" 0)
    else
        (( h > maxedge )) && resize=(-resize 0 "$maxedge")
    fi

    cwebp -quiet -q "$quality" -m 6 -metadata icc "${resize[@]}" "$src" -o "$webp"

    js=$(stat -c%s "$src")
    ws=$(stat -c%s "$webp")
    in_bytes=$((in_bytes + js))
    out_bytes=$((out_bytes + ws))
    converted=$((converted + 1))
    printf '  %5.0f KB -> %5.0f KB  %s\n' \
        "$(echo "$js/1024" | bc -l)" "$(echo "$ws/1024" | bc -l)" \
        "${src#"$SCRIPT_DIR"/}"
done < <(find "${IMAGE_ROOTS[@]}" -type f \( "${find_expr[@]}" \) -print0 | sort -z)

echo
echo "Converted: $converted   Skipped (up to date): $skipped"
if (( converted > 0 )); then
    printf 'New WebP total: %.0f MB  (was %.0f MB of originals)  — %.0f%% smaller\n' \
        "$(echo "$out_bytes/1048576" | bc -l)" \
        "$(echo "$in_bytes/1048576" | bc -l)" \
        "$(echo "(1 - $out_bytes/$in_bytes)*100" | bc -l)"
fi
echo
echo "Originals kept in place. After verifying quality, remove them with:"
echo "  find ${IMAGE_ROOTS[*]} -type f \\(${find_expr_str} \\) -delete"
