# CompositeImage 多图合并

## 介绍
支持多图合并，合并后下载。

## 安装
```bash
npm i --save composite-image
```
## 用法
```javascript
import CompositeImage from 'composite-image';

/**
 * @description 生成一张长300 宽400的画布
 * @bgWidth 画布宽
 * @bgHeight 画布高
 **/ 
const image = new CompositeImage({
  bgWidth: 300,  // 合成后图片的宽度
  bgHeight: 400,  // 合成后图片的高度
});

/**
 * @description 第一张图片
 * @src 图片链接
 * @x 相对于画布的x坐标
 * @y 相对于画布的y坐标
 * @width 图片的宽
 * @height 图片的高
 */ 
const cfg1 = {
  src: 'https://bpic.588ku.com/back_pic/19/04/14/bf310e139cf9fc16b3c032caccf6804a.jpg',
  x: 0,
  y: 0,
  width: 300,
  height: 300
};

/**
 * @description 第二张图片
 * @src 图片链接
 * @x 相对于画布的x坐标
 * @y 相对于画布的y坐标
 * @width 图片的宽
 * @height 图片的高
 */ 
const cfg2 = {
  src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1805103632,2396162225&fm=26&gp=0.jpg',
  x: 90,
  y: 70,
  width: 116,
  height: 116
};

// 合并操作，可支持传入多个图片
image.composite(cfg1, cfg2).then(() => {
  image.print(); // 图片地址dataUrl格式，可传入生成图片类型，默认'png'
  image.download('image.png'); // 将已生成图片下载至本地，可传入导出的文件名
})
```
## 入参图片
<img src="https://bpic.588ku.com/back_pic/19/04/14/bf310e139cf9fc16b3c032caccf6804a.jpg" height="300px" width="300px" />
<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1805103632,2396162225&fm=26&gp=0.jpg" height="116px" width="116px" />

## 结果

![合并结果](https://s1.ax1x.com/2020/03/14/8QKIn1.png)

## License
This code is distributed under the MIT License.
