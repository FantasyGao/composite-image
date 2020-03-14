/**
 * @description generate HTMLImageElement
 */
export default function getImage(url: string): Promise<HTMLImageElement | null> {
  const image = new window.Image();

  if (/^http/.test(url)) {
    image.setAttribute('crossOrigin', 'anonymous');
  }
  image.src = url;

  return new Promise((resolve, reject) => {
    image.onload = function () {
      return resolve(image);
    };
    image.onerror = function () {
      return resolve(null);
    };
  });
}