#!/bin/bash

set -e

# Resolve the directory where the script is located
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# The directory containing the JPEG files is the parent of the script directory
IMAGE_DIR="$(dirname "$SCRIPT_DIR")/images"

# Output directory inside IMAGE_DIR
FINAL_DIR="$IMAGE_DIR/small"
mkdir -p "$FINAL_DIR"

echo "Script directory: $SCRIPT_DIR"
echo "Image directory:  $IMAGE_DIR"
echo "Output directory: $FINAL_DIR"

# Loop over JPEG files in IMAGE_DIR
shopt -s nullglob
for f in "$IMAGE_DIR"/*.jpg "$IMAGE_DIR"/*.jpeg; do
    base="$(basename "$f" | sed 's/\.[Jj][Pp][Ee]*[Gg]$//')"

    echo "Processing $f → $FINAL_DIR/${base}.jpg"

    ffmpeg -i "$f" -vf scale=4000:-1 -q:v 5 "$FINAL_DIR/${base}.jpg"
done
