
const config = {
  src: 'https://n.sinaimg.cn/ent/transform/460/w630h630/20180824/Zaob-hicsiaw3749625.jpg',
  x: 0,
  y: 0,
  width: 250,
  height: 600
};

const config2 = {
  src: 'https://n.sinaimg.cn/ent/transform/460/w630h630/20180824/Zaob-hicsiaw3749625.jpg',
  x: 250,
  y: 0,
  width: 250,
  height: 600
};

const config3 = {
  src: 'https://bpic.588ku.com/back_pic/19/04/14/bf310e139cf9fc16b3c032caccf6804a.jpg',
  x: 0,
  y: 0,
  width: 300,
  height: 300
};

const config4 = {
  src: 'data:image/png;base64,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',
  x: 90,
  y: 70,
  width: 116,
  height: 116
};

describe('test composite image', function() {
  let compositeImage;
  before(async () => {
    compositeImage = new CompositeImage({
      bgWidth: 300,
      bgHeight: 300,
    });
    await compositeImage.composite(config3, config4);
  })
  describe('#print Data URL:', () => {
    it('should return base64 Data URL', () => {
      const dataUrlStartChar = 'data:image/png;base64';
      const dataUrl = compositeImage.print();
      document.querySelector('#img').setAttribute('src', dataUrl);
      const isExist = dataUrl.startsWith(dataUrlStartChar);
      chai.expect(isExist).to.be.true;
    });
  });
  describe('#download img Data URL:', () => {
    it('should download image', () => {
      compositeImage.download('image.png');
      chai.expect(true).to.be.true;
    });
  });
  describe('#download img Data URL:', () => {
    it('instance error', () => {
      try {
        const download = compositeImage.download
        download('image.png');
        throw new Error();
      } catch(error) {
        chai.expect(error.message).to.equal('instance error');
      }
    });
  });
});
