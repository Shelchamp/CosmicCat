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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./javascripts/moving_object.js\");\n\n\nclass CatFish extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(props) {\n    super(props);\n    this.color = \"rgba(193, 176, 23, 0.01)\";\n    this.pos = [350, 200];\n    this.vel = [0, 0];\n    this.height = 50;\n    this.width = 50;\n    this.radius = 25;\n\n    let fish_pic = new Image();\n    fish_pic.src = \"assets/InBreadCat.png\";\n    this.fish_pic = fish_pic;\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);\n  }\n\n  update(vel, ctx) {\n    this.pos[0] += vel[0];\n    this.pos[1] += vel[1];\n    this.draw(ctx);\n    //drawImage(image, x, y, width, height)\n    ctx.drawImage(this.fish_pic, this.pos[0] - 3, this.pos[1] - 5, this.width + 10, this.height + 10);\n  }\n\n  swim(move) {\n    this.vel[0] += move[0];\n    this.vel[1] += move[1];\n  }\n\n  bindKeyHandlers() {\n\n    Object.keys(CatFish.MOVES).forEach(k => {\n      const move = CatFish.MOVES[k];\n      key(k, () => {\n        this.swim(move);\n      });\n    });\n  }\n\n}\n\nCatFish.MOVES = {\n  'w': [0, -0.25],\n  'a': [-0.25, 0],\n  's': [0, 0.25],\n  'd': [0.25, 0],\n\n  'up': [0, -0.25],\n  'left': [-0.25, 0],\n  'down': [0, 0.25],\n  'right': [0.25, 0]\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CatFish);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0cy9jYXRfZmlzaC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qYXZhc2NyaXB0cy9jYXRfZmlzaC5qcz9mYTM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9tb3Zpbmdfb2JqZWN0J1xuXG5jbGFzcyBDYXRGaXNoIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuY29sb3IgPSBcInJnYmEoMTkzLCAxNzYsIDIzLCAwLjAxKVwiO1xuICAgIHRoaXMucG9zID0gWzM1MCwgMjAwXVxuICAgIHRoaXMudmVsID0gWzAsMF07XG4gICAgdGhpcy5oZWlnaHQgPSA1MFxuICAgIHRoaXMud2lkdGggPSA1MFxuICAgIHRoaXMucmFkaXVzID0gMjU7XG5cbiAgICBsZXQgZmlzaF9waWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBmaXNoX3BpYy5zcmM9XCJhc3NldHMvSW5CcmVhZENhdC5wbmdcIlxuICAgIHRoaXMuZmlzaF9waWMgPSBmaXNoX3BpY1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5maWxsUmVjdChcbiAgICAgIHRoaXMucG9zWzBdLFxuICAgICAgdGhpcy5wb3NbMV0sXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHRcbiAgICApXG5cbiAgfVxuXG4gIHVwZGF0ZSh2ZWwsIGN0eCl7XG4gICAgdGhpcy5wb3NbMF0gKz0gdmVsWzBdXG4gICAgdGhpcy5wb3NbMV0gKz0gdmVsWzFdXG4gICAgdGhpcy5kcmF3KGN0eClcbiAgICAvL2RyYXdJbWFnZShpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuZmlzaF9waWMsIHRoaXMucG9zWzBdLTMsIHRoaXMucG9zWzFdLTUsIHRoaXMud2lkdGgrMTAsIHRoaXMuaGVpZ2h0KzEwKVxuICB9XG5cbiAgc3dpbShtb3ZlKXtcbiAgICB0aGlzLnZlbFswXSArPSBtb3ZlWzBdO1xuICAgIHRoaXMudmVsWzFdICs9IG1vdmVbMV07XG4gIH1cblxuICBiaW5kS2V5SGFuZGxlcnMoKXtcblxuICAgIE9iamVjdC5rZXlzKENhdEZpc2guTU9WRVMpLmZvckVhY2goKGspID0+e1xuICAgICAgY29uc3QgbW92ZSA9IENhdEZpc2guTU9WRVNba107XG4gICAgICBrZXkoaywgKCkgPT4ge3RoaXMuc3dpbShtb3ZlKTsgfSlcbiAgICB9KVxuXG4gIH1cblxuXG5cblxuXG59XG5cbkNhdEZpc2guTU9WRVMgPSB7XG4gICd3JzogWzAsIC0wLjI1XSxcbiAgJ2EnOiBbLTAuMjUsIDBdLFxuICAncyc6IFswLCAwLjI1XSxcbiAgJ2QnOiBbMC4yNSwgMF0sXG5cbiAgJ3VwJzogWzAsIC0wLjI1XSxcbiAgJ2xlZnQnOiBbLTAuMjUsIDBdLFxuICAnZG93bic6IFswLCAwLjI1XSxcbiAgJ3JpZ2h0JzogWzAuMjUsIDBdXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IENhdEZpc2g7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUEvQ0E7QUFDQTtBQXFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQ0E7QUFjQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./javascripts/cat_fish.js\n");

/***/ }),

/***/ "./javascripts/catfish_entry.js":
/*!**************************************!*\
  !*** ./javascripts/catfish_entry.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./javascripts/moving_object.js\");\n/* harmony import */ var _other_fish__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other_fish */ \"./javascripts/other_fish.js\");\n/* harmony import */ var _cat_fish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cat_fish */ \"./javascripts/cat_fish.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./javascripts/game.js\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('canny');\n  const c = canvas.getContext('2d');\n  const start = document.getElementById('start');\n\n  function gameStart() {\n    animate();\n    start.classList.add('hideStart');\n  }\n\n  start.addEventListener(\"click\", gameStart);\n  start.addEventListener(\"click\", gameStart);\n\n  let game = new _game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n  function animate() {\n    if (game.gameOver === false) {\n      requestAnimationFrame(animate);\n      game.drawGame(c);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0cy9jYXRmaXNoX2VudHJ5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2phdmFzY3JpcHRzL2NhdGZpc2hfZW50cnkuanM/OWM0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQgT3RoZXJGaXNoIGZyb20gJy4vb3RoZXJfZmlzaCc7XG5pbXBvcnQgQ2F0RmlzaCBmcm9tICcuL2NhdF9maXNoJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5ueScpO1xuICBjb25zdCBjID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jyk7XG5cblxuXG4gIGZ1bmN0aW9uIGdhbWVTdGFydCgpe1xuICAgIGFuaW1hdGUoKVxuICAgIHN0YXJ0LmNsYXNzTGlzdC5hZGQoJ2hpZGVTdGFydCcpO1xuICB9XG5cblxuXG4gIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnYW1lU3RhcnQpXG4gIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnYW1lU3RhcnQpXG5cbiAgbGV0IGdhbWUgPSBuZXcgR2FtZVxuXG4gIGZ1bmN0aW9uIGFuaW1hdGUoKXtcbiAgICBpZiAoZ2FtZS5nYW1lT3ZlciA9PT0gZmFsc2UpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgIGdhbWUuZHJhd0dhbWUoYylcbiAgICB9XG4gIH1cblxuXG5cblxuXG5cblxuXG59KVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./javascripts/catfish_entry.js\n");

/***/ }),

/***/ "./javascripts/game.js":
/*!*****************************!*\
  !*** ./javascripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./javascripts/moving_object.js\");\n/* harmony import */ var _other_fish__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other_fish */ \"./javascripts/other_fish.js\");\n/* harmony import */ var _cat_fish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cat_fish */ \"./javascripts/cat_fish.js\");\n\n\n\n\nclass Game {\n  constructor() {\n    this.gameOver = false;\n    this.allFish = [];\n    this.catFish = new _cat_fish__WEBPACK_IMPORTED_MODULE_2__[\"default\"](Game.CATFISH);\n    this.wow = Game.WOW;\n    this.meow = Game.MEOW;\n\n    // CREATES FIRST BATCH OF FISH\n    for (let i = 0; i < Game.NUM_FISH; i++) {\n      this.addFish();\n    }\n\n    this.catFish.bindKeyHandlers();\n\n    // CREATE A FISH EVERYTHING SECOND\n    setInterval(() => {\n      this.addFish();\n    }, 1000);\n\n    // setInterval(()=>{\n    //   this.catFish.height -=2\n    //   this.catFish.width -=2\n    // }, 30000)\n\n\n    //constructor end\n  }\n\n  // ADDS A NEW FISH\n  addFish() {\n    let newFish = this.randomize(new _other_fish__WEBPACK_IMPORTED_MODULE_1__[\"default\"](Game.OTHERFISH));\n    this.allFish.push(newFish);\n\n    // addFish end\n  }\n\n  // DRAWS EVERYTHING\n  drawGame(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\n    this.catFish.update(this.catFish.vel, ctx);\n\n    this.allFish.forEach((fish, idx) => {\n      if (fish.pos[0] < -fish.width || fish.pos[0] > 700) {\n        this.allFish.shift();\n      }\n\n      if (fish.isCollidedWith(this.catFish)) {\n        if (fish.height < this.catFish.height) {\n          this.wow.play();\n          this.catFish.height += 2;\n          this.catFish.width += 2;\n          this.allFish.splice(idx, 1);\n        } else if (fish.height > this.catFish.height) {\n          // window.alert(\"Game over!\")\n          this.meow.play();\n          this.gameOver = true;\n        }\n      }\n\n      // draws each fish\n      this.allFish[idx].update(1, ctx);\n    });\n    this.allFish[this.allFish.length - 1].update(0, ctx);\n    this.wrap(this.catFish);\n    if (this.catFish.height > 400) {\n      this.catFish.height = 50;\n      this.catFish.width = 50;\n    }\n\n    // drawGame end\n  }\n\n  // GIVES FISH A RANDOM POSITION\n  randomize(fish) {\n    let random_y = Math.random() * (Game.DIM_Y - fish.rad);\n    let num = Math.random();\n\n    // for squares\n    fish.height = fish.height * 0.25 + fish.height * 0.75 * num;\n    fish.width = fish.width * 0.25 + fish.width * 0.75 * num;\n\n    // for circles\n    fish.radius = fish.radius * 0.25 + fish.radius * 0.75 * num;\n\n    switch (Math.round(Math.random())) {\n\n      case 0:\n        fish.pos = [0, random_y];\n        fish.vel = Math.abs(fish.vel);\n        return fish;\n\n      case 1:\n        fish.pos = [Game.DIM_X - fish.rad, random_y];\n        fish.vel = -fish.vel;\n        return fish;\n\n      default:\n        fish.pos = [Game.DIM_X - fish.rad, random_y];\n        fish.vel = -fish.vel;\n        return fish;\n    }\n\n    // randomize end\n  }\n\n  wrap(fish) {\n    if (fish.pos[0] < -fish.width / 2) {\n      fish.pos[0] = Game.DIM_X - fish.width / 2;\n    } else if (fish.pos[0] > Game.DIM_X - fish.width / 2) {\n      fish.pos[0] = -fish.width / 2;\n    } else if (fish.pos[1] < -fish.height / 2) {\n      fish.pos[1] = Game.DIM_Y - fish.height / 2;\n    } else if (fish.pos[1] > Game.DIM_Y - fish.height / 2) {\n      fish.pos[1] = -fish.height / 2;\n    }\n  }\n\n  // class end\n}\n\n// CLASS CONSTANTS\nGame.DIM_X = 700;\nGame.DIM_Y = 400;\nGame.NUM_FISH = 10;\n\nGame.CATFISH = {\n  pos: [300, 150],\n  vel: 1,\n  rad: 25,\n  height: 100,\n  width: 50\n};\n\nGame.OTHERFISH = {\n  pos: [400, 400],\n  vel: 1,\n  rad: 25,\n  height: 50,\n  width: 50\n};\n\nGame.WOW = new Audio(\"assets/WowMeow.mov\");\nGame.WOW.volume = 0.35;\n\nGame.MEOW = new Audio(\"assets/OneSecMeow.mov\");\nGame.MEOW.volume = 0.35;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0cy9nYW1lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2phdmFzY3JpcHRzL2dhbWUuanM/YzNlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQgT3RoZXJGaXNoIGZyb20gJy4vb3RoZXJfZmlzaCc7XG5pbXBvcnQgQ2F0RmlzaCBmcm9tICcuL2NhdF9maXNoJztcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlXG4gICAgdGhpcy5hbGxGaXNoID0gW11cbiAgICB0aGlzLmNhdEZpc2ggPSBuZXcgQ2F0RmlzaChHYW1lLkNBVEZJU0gpXG4gICAgdGhpcy53b3cgPSBHYW1lLldPV1xuICAgIHRoaXMubWVvdyA9IEdhbWUuTUVPV1xuXG4gICAgLy8gQ1JFQVRFUyBGSVJTVCBCQVRDSCBPRiBGSVNIXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lLk5VTV9GSVNIOyBpKyspIHtcbiAgICAgIHRoaXMuYWRkRmlzaCgpXG4gICAgfVxuXG4gICAgdGhpcy5jYXRGaXNoLmJpbmRLZXlIYW5kbGVycygpXG5cbiAgICAvLyBDUkVBVEUgQSBGSVNIIEVWRVJZVEhJTkcgU0VDT05EXG4gICAgc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgIHRoaXMuYWRkRmlzaCgpXG4gICAgfSwgMTAwMClcblxuICAgIC8vIHNldEludGVydmFsKCgpPT57XG4gICAgLy8gICB0aGlzLmNhdEZpc2guaGVpZ2h0IC09MlxuICAgIC8vICAgdGhpcy5jYXRGaXNoLndpZHRoIC09MlxuICAgIC8vIH0sIDMwMDAwKVxuXG5cblxuXG5cbiAgICAvL2NvbnN0cnVjdG9yIGVuZFxuICB9XG5cblxuICAvLyBBRERTIEEgTkVXIEZJU0hcbiAgYWRkRmlzaCgpe1xuICAgIGxldCBuZXdGaXNoID0gdGhpcy5yYW5kb21pemUobmV3IE90aGVyRmlzaChHYW1lLk9USEVSRklTSCkpXG4gICAgdGhpcy5hbGxGaXNoLnB1c2gobmV3RmlzaClcblxuICAgIC8vIGFkZEZpc2ggZW5kXG4gIH1cblxuICAvLyBEUkFXUyBFVkVSWVRISU5HXG4gIGRyYXdHYW1lKGN0eCl7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHYW1lLkRJTV9YLCBHYW1lLkRJTV9ZKTtcblxuICAgIHRoaXMuY2F0RmlzaC51cGRhdGUodGhpcy5jYXRGaXNoLnZlbCwgY3R4KTtcblxuICAgIHRoaXMuYWxsRmlzaC5mb3JFYWNoKChmaXNoLCBpZHgpID0+e1xuICAgICAgaWYgKGZpc2gucG9zWzBdIDwgLWZpc2gud2lkdGggfHwgZmlzaC5wb3NbMF0gPiA3MDApIHtcbiAgICAgICAgdGhpcy5hbGxGaXNoLnNoaWZ0KClcbiAgICAgIH1cblxuICAgICAgaWYgKGZpc2guaXNDb2xsaWRlZFdpdGgodGhpcy5jYXRGaXNoKSkge1xuICAgICAgICBpZiAoZmlzaC5oZWlnaHQgPCB0aGlzLmNhdEZpc2guaGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy53b3cucGxheSgpXG4gICAgICAgICAgdGhpcy5jYXRGaXNoLmhlaWdodCArPSAyO1xuICAgICAgICAgIHRoaXMuY2F0RmlzaC53aWR0aCArPSAyO1xuICAgICAgICAgIHRoaXMuYWxsRmlzaC5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaXNoLmhlaWdodCA+IHRoaXMuY2F0RmlzaC5oZWlnaHQpIHtcbiAgICAgICAgICAvLyB3aW5kb3cuYWxlcnQoXCJHYW1lIG92ZXIhXCIpXG4gICAgICAgICAgdGhpcy5tZW93LnBsYXkoKVxuICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICAvLyBkcmF3cyBlYWNoIGZpc2hcbiAgICAgIHRoaXMuYWxsRmlzaFtpZHhdLnVwZGF0ZSgxLCBjdHgpXG5cblxuICAgIH0pXG4gICAgdGhpcy5hbGxGaXNoW3RoaXMuYWxsRmlzaC5sZW5ndGgtMV0udXBkYXRlKDAsIGN0eClcbiAgICB0aGlzLndyYXAodGhpcy5jYXRGaXNoKVxuICAgIGlmKHRoaXMuY2F0RmlzaC5oZWlnaHQgPiA0MDApe1xuICAgICAgdGhpcy5jYXRGaXNoLmhlaWdodCA9IDUwXG4gICAgICB0aGlzLmNhdEZpc2gud2lkdGggPSA1MFxuICAgIH1cblxuXG4gICAgLy8gZHJhd0dhbWUgZW5kXG4gIH1cblxuICAvLyBHSVZFUyBGSVNIIEEgUkFORE9NIFBPU0lUSU9OXG4gIHJhbmRvbWl6ZShmaXNoKXtcbiAgICBsZXQgcmFuZG9tX3kgPSBNYXRoLnJhbmRvbSgpICogKEdhbWUuRElNX1kgLSBmaXNoLnJhZCk7XG4gICAgbGV0IG51bSA9IE1hdGgucmFuZG9tKCk7XG5cbiAgICAvLyBmb3Igc3F1YXJlc1xuICAgIGZpc2guaGVpZ2h0ID0gZmlzaC5oZWlnaHQgKiAwLjI1ICsgKGZpc2guaGVpZ2h0ICogMC43NSAqIG51bSlcbiAgICBmaXNoLndpZHRoID0gZmlzaC53aWR0aCAqIDAuMjUgKyAoZmlzaC53aWR0aCAqIDAuNzUgKiBudW0pXG5cbiAgICAvLyBmb3IgY2lyY2xlc1xuICAgIGZpc2gucmFkaXVzID0gZmlzaC5yYWRpdXMgKiAwLjI1ICsgKGZpc2gucmFkaXVzICogMC43NSAqIG51bSlcblxuICAgIHN3aXRjaCAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSkge1xuXG4gICAgICBjYXNlIDA6XG4gICAgICAgIGZpc2gucG9zID0gWzAsIHJhbmRvbV95XTtcbiAgICAgICAgZmlzaC52ZWwgPSBNYXRoLmFicyhmaXNoLnZlbCk7XG4gICAgICAgIHJldHVybiBmaXNoO1xuXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGZpc2gucG9zID0gW0dhbWUuRElNX1ggLSBmaXNoLnJhZCwgcmFuZG9tX3ldO1xuICAgICAgICBmaXNoLnZlbCA9IC1maXNoLnZlbDtcbiAgICAgICAgcmV0dXJuIGZpc2g7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGZpc2gucG9zID0gW0dhbWUuRElNX1ggLSBmaXNoLnJhZCwgcmFuZG9tX3ldO1xuICAgICAgICBmaXNoLnZlbCA9IC1maXNoLnZlbDtcbiAgICAgICAgcmV0dXJuIGZpc2g7XG4gICAgfVxuXG4gICAgLy8gcmFuZG9taXplIGVuZFxuICB9XG5cbiAgd3JhcChmaXNoKXtcbiAgICBpZiAoZmlzaC5wb3NbMF0gPCAtZmlzaC53aWR0aC8yKSB7XG4gICAgICBmaXNoLnBvc1swXSA9IEdhbWUuRElNX1ggLSBmaXNoLndpZHRoLzJcbiAgICB9IGVsc2UgaWYgKGZpc2gucG9zWzBdID4gR2FtZS5ESU1fWCAtIGZpc2gud2lkdGgvMiApe1xuICAgICAgZmlzaC5wb3NbMF0gPSAtZmlzaC53aWR0aC8yXG4gICAgfSBlbHNlIGlmIChmaXNoLnBvc1sxXSA8IC1maXNoLmhlaWdodC8yKXtcbiAgICAgIGZpc2gucG9zWzFdID0gR2FtZS5ESU1fWSAtIGZpc2guaGVpZ2h0LzJcbiAgICB9IGVsc2UgaWYgKGZpc2gucG9zWzFdID4gR2FtZS5ESU1fWSAtIGZpc2guaGVpZ2h0LzIpe1xuICAgICAgZmlzaC5wb3NbMV0gPSAtZmlzaC5oZWlnaHQvMlxuICAgIH1cbiAgfVxuXG4gIC8vIGNsYXNzIGVuZFxufVxuXG4vLyBDTEFTUyBDT05TVEFOVFNcbkdhbWUuRElNX1ggPSA3MDA7XG5HYW1lLkRJTV9ZID0gNDAwO1xuR2FtZS5OVU1fRklTSCA9IDEwO1xuXG5HYW1lLkNBVEZJU0ggPSB7XG4gIHBvczogWzMwMCwgMTUwXSxcbiAgdmVsOiAxLFxuICByYWQ6IDI1LFxuICBoZWlnaHQ6IDEwMCxcbiAgd2lkdGg6IDUwXG59XG5cbkdhbWUuT1RIRVJGSVNIID0ge1xuICBwb3M6IFs0MDAsIDQwMF0sXG4gIHZlbDogMSxcbiAgcmFkOiAyNSxcbiAgaGVpZ2h0OiA1MCxcbiAgd2lkdGg6IDUwXG59XG5cbkdhbWUuV09XID0gbmV3IEF1ZGlvKFwiYXNzZXRzL1dvd01lb3cubW92XCIpO1xuR2FtZS5XT1cudm9sdW1lID0gMC4zNTtcblxuR2FtZS5NRU9XID0gbmV3IEF1ZGlvKFwiYXNzZXRzL09uZVNlY01lb3cubW92XCIpO1xuR2FtZS5NRU9XLnZvbHVtZSA9IDAuMzU7XG5cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvSEE7QUFDQTtBQWlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./javascripts/game.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./javascripts/moving_object.js\");\n\n\nclass OtherFish extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(props) {\n    super(props);\n    let num = Math.random();\n    this.color = \"rgba(198, 85, 60, 0)\";\n    this.radius = 37;\n    this.height = 75;\n    this.width = 75;\n    this.vel = 1;\n\n    let fish_pic = new Image();\n    fish_pic.src = \"assets/BulletCat.png\";\n    this.fish_pic = fish_pic;\n  }\n\n  update(vel, ctx) {\n    if (this.vel < 0) {\n      vel = -vel;\n    }\n    this.pos[0] += vel;\n    this.draw(ctx);\n    ctx.drawImage(this.fish_pic, this.pos[0] - 4, this.pos[1] - 5, this.width + 10, this.height + 10);\n  }\n}\n\nOtherFish.RND_DM = Math.random();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OtherFish);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0cy9vdGhlcl9maXNoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2phdmFzY3JpcHRzL290aGVyX2Zpc2guanM/M2JlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCdcblxuY2xhc3MgT3RoZXJGaXNoIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGxldCBudW0gPSBNYXRoLnJhbmRvbSgpO1xuICAgIHRoaXMuY29sb3IgPSBcInJnYmEoMTk4LCA4NSwgNjAsIDApXCI7XG4gICAgdGhpcy5yYWRpdXMgPSAzNztcbiAgICB0aGlzLmhlaWdodCA9IDc1O1xuICAgIHRoaXMud2lkdGggPSA3NTtcbiAgICB0aGlzLnZlbCA9IDE7XG5cbiAgICBsZXQgZmlzaF9waWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBmaXNoX3BpYy5zcmM9XCJhc3NldHMvQnVsbGV0Q2F0LnBuZ1wiXG4gICAgdGhpcy5maXNoX3BpYyA9IGZpc2hfcGljXG4gIH1cblxuICB1cGRhdGUodmVsLCBjdHgpe1xuICAgIGlmICh0aGlzLnZlbCA8IDApIHtcbiAgICAgIHZlbCA9IC12ZWxcbiAgICB9XG4gICAgdGhpcy5wb3NbMF0gKz0gdmVsXG4gICAgdGhpcy5kcmF3KGN0eClcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuZmlzaF9waWMsIHRoaXMucG9zWzBdLTQsIHRoaXMucG9zWzFdLTUsIHRoaXMud2lkdGgrMTAsIHRoaXMuaGVpZ2h0KzEwKVxuXG4gIH1cbn1cblxuT3RoZXJGaXNoLlJORF9ETSA9IE1hdGgucmFuZG9tKClcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgT3RoZXJGaXNoO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUF2QkE7QUFDQTtBQXlCQTtBQUNBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./javascripts/other_fish.js\n");

/***/ })

/******/ });