// This function takes in a src string and a crop object {x, y} and returns a blob for uploading to the server
export async function createImage(src, crop) {
  const image = await new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', (error) => reject(error));
    img.src = src;
  });

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return null;
  }

  // set canvas size to match the bounding box
  canvas.width = image.width;
  canvas.height = image.height;

  // translate canvas context to a central location to allow rotating and flipping around the center
  ctx.translate(image.width / 2, image.height / 2);
  ctx.translate(-image.width / 2, -image.height / 2);

  // draw rotated image
  ctx.drawImage(image, 0, 0);

  // croppedAreaPixels values are bounding box relative
  // extract the cropped image using these values
  const data = ctx.getImageData(crop.x, crop.y, crop.width, crop.height);

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = crop.width;
  canvas.height = crop.height;

  // paste generated rotate image at the top left corner
  ctx.putImageData(data, 0, 0);

  // As a blob
  return new Promise((resolve) => {
    canvas.toBlob(resolve, 'image/jpeg', 1);
  });
}
