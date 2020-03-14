'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

/**
 * @description generate HTMLImageElement
 */
function getImage(url) {
  var image = new window.Image();

  if (/^http/.test(url)) {
    image.setAttribute('crossOrigin', 'anonymous');
  }

  image.src = url;
  return new Promise(function (resolve, reject) {
    image.onload = function () {
      return resolve(image);
    };

    image.onerror = function () {
      return resolve(null);
    };
  });
}

var CompositeImage =
/** @class */
function () {
  function CompositeImage(config) {
    if (!(this instanceof CompositeImage)) {
      throw new Error('CompositeImage is a constructor and should be called with the `new` keyword');
    }

    if (typeof window === 'undefined') {
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


  CompositeImage.prototype.composite = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    return __awaiter(this, void 0, void 0, function () {
      var images, imgSrcs, imgEles;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(this instanceof CompositeImage)) {
              throw new Error('instance error');
            }

            images = args;
            imgSrcs = images.map(function (_a) {
              var src = _a.src;
              return getImage(src);
            });
            return [4
            /*yield*/
            , Promise.all(imgSrcs)];

          case 1:
            imgEles = _a.sent();
            imgEles.map(function (ele, i) {
              if (ele) {
                var _a = images[i],
                    _b = _a.x,
                    x = _b === void 0 ? 0 : _b,
                    _c = _a.y,
                    y = _c === void 0 ? 0 : _c,
                    _d = _a.width,
                    width = _d === void 0 ? 0 : _d,
                    _e = _a.height,
                    height = _e === void 0 ? 0 : _e;

                _this.ctx.drawImage(ele, x, y, width, height);
              }
            });
            return [2
            /*return*/
            ];
        }
      });
    });
  }; // print canvas DataURL


  CompositeImage.prototype.print = function (type) {
    if (!(this instanceof CompositeImage)) {
      throw new Error('instance error');
    }

    return this.canvas.toDataURL(type || 'png');
  }; // file download


  CompositeImage.prototype.download = function (fileName) {
    if (!(this instanceof CompositeImage)) {
      throw new Error('instance error');
    }

    this.canvas.toBlob(function (blob) {
      var a = document.createElement('a');
      a.download = fileName || Date.now() + ".png";
      a.style.display = 'none';
      a.href = URL.createObjectURL(blob);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };

  return CompositeImage;
}();

module.exports = CompositeImage;
//# sourceMappingURL=bundle.js.map
