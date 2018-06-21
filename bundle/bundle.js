/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascripts/catfish_entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascripts/cat_fish.js":
/*!*********************************!*\
  !*** ./javascripts/cat_fish.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./javascripts/moving_object.js\");\n\n\nclass CatFish extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(props) {\n    super(props);\n    this.color = \"rgba(193, 176, 23, 0.01)\";\n    this.pos = [0, 0];\n    this.vel = [0, 0];\n    this.height = 50;\n    this.width = 50;\n    this.radius = 25;\n\n    let fish_pic = new Image();\n    fish_pic.src = \"https://i.imgur.com/yIudEdm.png?1\";\n    this.fish_pic = fish_pic;\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);\n  }\n\n  update(vel, ctx) {\n    this.pos[0] += vel[0];\n    this.pos[1] += vel[1];\n    this.draw(ctx);\n    //drawImage(image, x, y, width, height)\n    ctx.drawImage(this.fish_pic, this.pos[0] - 3, this.pos[1] - 5, this.width + 10, this.height + 10);\n  }\n\n  swim(move) {\n    this.vel[0] += move[0];\n    this.vel[1] += move[1];\n  }\n\n  bindKeyHandlers() {\n\n    Object.keys(CatFish.MOVES).forEach(k => {\n      const move = CatFish.MOVES[k];\n      key(k, () => {\n        this.swim(move);\n      });\n    });\n  }\n\n}\n\nCatFish.MOVES = {\n  'w': [0, -0.25],\n  'a': [-0.25, 0],\n  's': [0, 0.25],\n  'd': [0.25, 0],\n\n  'up': [0, -0.25],\n  'left': [-0.25, 0],\n  'down': [0, 0.25],\n  'right': [0.25, 0]\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CatFish);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0cy9jYXRfZmlzaC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qYXZhc2NyaXB0cy9jYXRfZmlzaC5qcz9mYTM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9tb3Zpbmdfb2JqZWN0J1xuXG5jbGFzcyBDYXRGaXNoIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuY29sb3IgPSBcInJnYmEoMTkzLCAxNzYsIDIzLCAwLjAxKVwiO1xuICAgIHRoaXMucG9zID0gWzAsIDBdXG4gICAgdGhpcy52ZWwgPSBbMCwwXTtcbiAgICB0aGlzLmhlaWdodCA9IDUwXG4gICAgdGhpcy53aWR0aCA9IDUwXG4gICAgdGhpcy5yYWRpdXMgPSAyNTtcblxuICAgIGxldCBmaXNoX3BpYyA9IG5ldyBJbWFnZSgpO1xuICAgIGZpc2hfcGljLnNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20veUl1ZEVkbS5wbmc/MVwiXG4gICAgdGhpcy5maXNoX3BpYyA9IGZpc2hfcGljXG4gIH1cblxuICBkcmF3KGN0eCl7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KFxuICAgICAgdGhpcy5wb3NbMF0sXG4gICAgICB0aGlzLnBvc1sxXSxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodFxuICAgIClcblxuICB9XG5cbiAgdXBkYXRlKHZlbCwgY3R4KXtcbiAgICB0aGlzLnBvc1swXSArPSB2ZWxbMF1cbiAgICB0aGlzLnBvc1sxXSArPSB2ZWxbMV1cbiAgICB0aGlzLmRyYXcoY3R4KVxuICAgIC8vZHJhd0ltYWdlKGltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5maXNoX3BpYywgdGhpcy5wb3NbMF0tMywgdGhpcy5wb3NbMV0tNSwgdGhpcy53aWR0aCsxMCwgdGhpcy5oZWlnaHQrMTApXG4gIH1cblxuICBzd2ltKG1vdmUpe1xuICAgIHRoaXMudmVsWzBdICs9IG1vdmVbMF07XG4gICAgdGhpcy52ZWxbMV0gKz0gbW92ZVsxXTtcbiAgfVxuXG4gIGJpbmRLZXlIYW5kbGVycygpe1xuXG4gICAgT2JqZWN0LmtleXMoQ2F0RmlzaC5NT1ZFUykuZm9yRWFjaCgoaykgPT57XG4gICAgICBjb25zdCBtb3ZlID0gQ2F0RmlzaC5NT1ZFU1trXTtcbiAgICAgIGtleShrLCAoKSA9PiB7dGhpcy5zd2ltKG1vdmUpOyB9KVxuICAgIH0pXG5cbiAgfVxuXG5cblxuXG5cbn1cblxuQ2F0RmlzaC5NT1ZFUyA9IHtcbiAgJ3cnOiBbMCwgLTAuMjVdLFxuICAnYSc6IFstMC4yNSwgMF0sXG4gICdzJzogWzAsIDAuMjVdLFxuICAnZCc6IFswLjI1LCAwXSxcblxuICAndXAnOiBbMCwgLTAuMjVdLFxuICAnbGVmdCc6IFstMC4yNSwgMF0sXG4gICdkb3duJzogWzAsIDAuMjVdLFxuICAncmlnaHQnOiBbMC4yNSwgMF1cbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ2F0RmlzaDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQS9DQTtBQUNBO0FBcURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQWNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./javascripts/cat_fish.js\n");

/***/ }),

/***/ "./javascripts/catfish_entry.js":
/*!**************************************!*\
  !*** ./javascripts/catfish_entry.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./javascripts/moving_object.js\");\n/* harmony import */ var _other_fish__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other_fish */ \"./javascripts/other_fish.js\");\n/* harmony import */ var _cat_fish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cat_fish */ \"./javascripts/cat_fish.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./javascripts/game.js\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('canny');\n  const c = canvas.getContext('2d');\n\n  let game = new _game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n  function animate() {\n    requestAnimationFrame(animate);\n    game.drawGame(c);\n  }\n\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0cy9jYXRmaXNoX2VudHJ5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2phdmFzY3JpcHRzL2NhdGZpc2hfZW50cnkuanM/OWM0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQgT3RoZXJGaXNoIGZyb20gJy4vb3RoZXJfZmlzaCc7XG5pbXBvcnQgQ2F0RmlzaCBmcm9tICcuL2NhdF9maXNoJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5ueScpO1xuICBjb25zdCBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cblxuICBsZXQgZ2FtZSA9IG5ldyBHYW1lXG5cblxuICBmdW5jdGlvbiBhbmltYXRlKCl7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIGdhbWUuZHJhd0dhbWUoYylcblxuICB9XG5cbiAgYW5pbWF0ZSgpO1xuXG5cblxuXG59KVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./javascripts/catfish_entry.js\n");

/***/ }),

/***/ "./javascripts/game.js":
/*!*****************************!*\
  !*** ./javascripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: Unexpected token (53:46)\\n\\n\\u001b[0m \\u001b[90m 51 | \\u001b[39m          \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mcatFish\\u001b[33m.\\u001b[39mheight \\u001b[33m+=\\u001b[39m \\u001b[35m2\\u001b[39m\\u001b[33m;\\u001b[39m\\n \\u001b[90m 52 | \\u001b[39m          \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mcatFish\\u001b[33m.\\u001b[39mwidth \\u001b[33m+=\\u001b[39m \\u001b[35m2\\u001b[39m\\u001b[33m;\\u001b[39m\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 53 | \\u001b[39m        } \\u001b[36melse\\u001b[39m \\u001b[36mif\\u001b[39m (\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mcatFish\\u001b[33m.\\u001b[39mheight \\u001b[33m<\\u001b[39m \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39m)\\n \\u001b[90m    | \\u001b[39m                                              \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 54 | \\u001b[39m        \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mallFish\\u001b[33m.\\u001b[39msplice(idx\\u001b[33m,\\u001b[39m \\u001b[35m1\\u001b[39m)\\u001b[33m;\\u001b[39m\\n \\u001b[90m 55 | \\u001b[39m      }\\n \\u001b[90m 56 | \\u001b[39m\\u001b[0m\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0cy9nYW1lLmpzLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./javascripts/game.js\n");

/***/ }),

/***/ "./javascripts/moving_object.js":
/*!**************************************!*\
  !*** ./javascripts/moving_object.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass MovingObject {\n  constructor(props) {\n    this.pos = props.pos;\n    this.vel = props.vel;\n    this.rad = props.rad;\n    this.height = props.height;\n    this.width = props.width;\n    this.color = \"rgb(122, 71, 180)\";\n\n    // fish_pic.addEventListener(\"load\",\n    //   ()=>c.drawImage(fish_pic, 0 ,0),\n    //   false);\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);\n    // ctx.beginPath();\n    // ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false)\n    // // ctx.stroke();\n    // ctx.fill();\n\n    // ctx.drawImage(this.fish_pic, 0, 0)\n  }\n\n  move() {\n    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n  }\n\n  isCollidedWith(otherFish) {\n    // square collision\n    if (this.pos[0] < otherFish.pos[0] + otherFish.width && this.pos[0] + this.width > otherFish.pos[0] && this.pos[1] < otherFish.pos[1] + otherFish.height && this.height + this.pos[1] > otherFish.pos[1]) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  bindKeyHandlers() {\n    const fish = this;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0cy9tb3Zpbmdfb2JqZWN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2phdmFzY3JpcHRzL21vdmluZ19vYmplY3QuanM/MWRlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICB0aGlzLnBvcyA9IHByb3BzLnBvcztcbiAgICB0aGlzLnZlbCA9IHByb3BzLnZlbDtcbiAgICB0aGlzLnJhZCA9IHByb3BzLnJhZDtcbiAgICB0aGlzLmhlaWdodCA9IHByb3BzLmhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gcHJvcHMud2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IFwicmdiKDEyMiwgNzEsIDE4MClcIlxuXG5cbiAgICAvLyBmaXNoX3BpYy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLFxuICAgIC8vICAgKCk9PmMuZHJhd0ltYWdlKGZpc2hfcGljLCAwICwwKSxcbiAgICAvLyAgIGZhbHNlKTtcbiAgfVxuXG4gIGRyYXcoY3R4KXtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHguZmlsbFJlY3QoXG4gICAgICB0aGlzLnBvc1swXSxcbiAgICAgIHRoaXMucG9zWzFdLFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0XG4gICAgKVxuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHguYXJjKHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSlcbiAgICAvLyAvLyBjdHguc3Ryb2tlKCk7XG4gICAgLy8gY3R4LmZpbGwoKTtcblxuICAgIC8vIGN0eC5kcmF3SW1hZ2UodGhpcy5maXNoX3BpYywgMCwgMClcbiAgfVxuXG4gIG1vdmUoKXtcbiAgICB0aGlzLnBvcyA9IFsodGhpcy5wb3NbMF0gKyB0aGlzLnZlbFswXSksICh0aGlzLnBvc1sxXSArIHRoaXMudmVsWzFdKV1cbiAgfVxuXG4gIGlzQ29sbGlkZWRXaXRoKG90aGVyRmlzaCl7XG4gICAgLy8gc3F1YXJlIGNvbGxpc2lvblxuICAgIGlmKHRoaXMucG9zWzBdIDwgb3RoZXJGaXNoLnBvc1swXSArIG90aGVyRmlzaC53aWR0aCAmJlxuICAgIHRoaXMucG9zWzBdICsgdGhpcy53aWR0aCA+IG90aGVyRmlzaC5wb3NbMF0gJiZcbiAgICB0aGlzLnBvc1sxXSA8IG90aGVyRmlzaC5wb3NbMV0gKyBvdGhlckZpc2guaGVpZ2h0ICYmXG4gICAgdGhpcy5oZWlnaHQgKyB0aGlzLnBvc1sxXSA+IG90aGVyRmlzaC5wb3NbMV0pe1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgYmluZEtleUhhbmRsZXJzKCl7XG4gICAgY29uc3QgZmlzaCA9IHRoaXM7XG5cbiAgfVxuXG5cblxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgTW92aW5nT2JqZWN0O1xuIl0sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQW5EQTtBQUNBO0FBeURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./javascripts/moving_object.js\n");

/***/ }),

/***/ "./javascripts/other_fish.js":
/*!***********************************!*\
  !*** ./javascripts/other_fish.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./javascripts/moving_object.js\");\n\n\nclass OtherFish extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(props) {\n    super(props);\n    let num = Math.random();\n    this.color = \"rgba(198, 85, 60, 0)\";\n    this.radius = 37;\n    this.height = 75;\n    this.width = 75;\n    this.vel = 1;\n\n    let fish_pic = new Image();\n    fish_pic.src = \"https://i.imgur.com/6AH9dwz.png\";\n    this.fish_pic = fish_pic;\n  }\n\n  update(vel, ctx) {\n    if (this.vel < 0) {\n      vel = -vel;\n    }\n    this.pos[0] += vel;\n    this.draw(ctx);\n    ctx.drawImage(this.fish_pic, this.pos[0] - 4, this.pos[1] - 5, this.width + 10, this.height + 10);\n  }\n}\n\nOtherFish.RND_DM = Math.random();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OtherFish);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0cy9vdGhlcl9maXNoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2phdmFzY3JpcHRzL290aGVyX2Zpc2guanM/M2JlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCdcblxuY2xhc3MgT3RoZXJGaXNoIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGxldCBudW0gPSBNYXRoLnJhbmRvbSgpO1xuICAgIHRoaXMuY29sb3IgPSBcInJnYmEoMTk4LCA4NSwgNjAsIDApXCI7XG4gICAgdGhpcy5yYWRpdXMgPSAzNztcbiAgICB0aGlzLmhlaWdodCA9IDc1O1xuICAgIHRoaXMud2lkdGggPSA3NTtcbiAgICB0aGlzLnZlbCA9IDE7XG5cbiAgICBsZXQgZmlzaF9waWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBmaXNoX3BpYy5zcmM9XCJodHRwczovL2kuaW1ndXIuY29tLzZBSDlkd3oucG5nXCJcbiAgICB0aGlzLmZpc2hfcGljID0gZmlzaF9waWNcbiAgfVxuXG4gIHVwZGF0ZSh2ZWwsIGN0eCl7XG4gICAgaWYgKHRoaXMudmVsIDwgMCkge1xuICAgICAgdmVsID0gLXZlbFxuICAgIH1cbiAgICB0aGlzLnBvc1swXSArPSB2ZWxcbiAgICB0aGlzLmRyYXcoY3R4KVxuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5maXNoX3BpYywgdGhpcy5wb3NbMF0tNCwgdGhpcy5wb3NbMV0tNSwgdGhpcy53aWR0aCsxMCwgdGhpcy5oZWlnaHQrMTApXG5cbiAgfVxufVxuXG5PdGhlckZpc2guUk5EX0RNID0gTWF0aC5yYW5kb20oKVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBPdGhlckZpc2g7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQXZCQTtBQUNBO0FBeUJBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./javascripts/other_fish.js\n");

/***/ })

/******/ });