import getImage from './utils/getImage';

/**
 * @description export CompositeImage class
 * @exports class CompositeImage
 * @param {object} config
 * @param config.bgWidth background width
 * @param config.bgHeight background height
 */

interface baseConfigType {
  bgWidth: number;
  bgHeight: number;
};

interface imageQueryType {
  width: number;
  height: number;
  src: string;
  x: number;
  y: number;
};

export default class CompositeImage {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  config: baseConfigType;
  constructor (config: baseConfigType) {
    if (!(this instanceof CompositeImage)) {
      throw new Error('CompositeImage is a constructor and should be called with the `new` keyword');
    }
    if (typeof window === 'undefined' ) {
      throw new Error('run env error, CompositeImage should be runing browser');
    }
    this.canvas = document.createElement('canvas');
    this.canvas.width = config.bgWidth;
    this.canvas.height = config.bgHeight;
    this.ctx = this.canvas.getContext('2d');
    this.config = config;
  }

  /**
   * @description composite image
   * @param {object} config
   * @param config.src image source
   * @param config.width image width
   * @param config.height image height
   * @param config.x position x 
   * @param config.y position y
   */
  async composite(...args: Array<imageQueryType>) {
    if (!(this instanceof CompositeImage)) {
      throw new Error('instance error');
    }
    const images: Array<imageQueryType> = args;
    const imgSrcs = images.map(({ src }) => getImage(src));
    const imgEles = await Promise.all(imgSrcs);
    imgEles.map((ele, i) => {
      if (ele) {
        const { x = 0, y = 0, width = 0, height = 0 } = images[i];
        this.ctx.drawImage(ele, x, y, width, height);
      }
    });
  }

  // print canvas DataURL
  print(type?:string): string {
    if (!(this instanceof CompositeImage)) {
      throw new Error('instance error');
    }
    return this.canvas.toDataURL(type || 'png');
  }

  // file download
  download(fileName: string) {
    if (!(this instanceof CompositeImage)) {
      throw new Error('instance error');
    }
    this.canvas.toBlob(blob => {
      const a = document.createElement('a');
      a.download = fileName || `${Date.now()}.png`;
      a.style.display = 'none';
      a.href = URL.createObjectURL(blob);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }
}

