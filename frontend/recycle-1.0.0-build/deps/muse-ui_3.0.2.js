var $deps = $deps || {}; $deps["muse-ui_3.0.2"] =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1533);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return colorsObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBar", function() { return AppBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoComplete", function() { return AutoComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomNav", function() { return BottomNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheet", function() { return BottomSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return Breadcrumbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chip", function() { return Chip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateInput", function() { return DateInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTable", function() { return DataTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return Divider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return Drawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionPanel", function() { return ExpansionPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridList", function() { return GridList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return Helpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMore", function() { return LoadMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paper", function() { return Paper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return Picker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidePicker", function() { return Picker$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snackbar", function() { return Snackbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stepper", function() { return Stepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubHeader", function() { return SubHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return TextField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(183);
/* muse-ui myron.liu version 3.0.2 */


var red50 = '#ffebee';
var red100 = '#ffcdd2';
var red200 = '#ef9a9a';
var red300 = '#e57373';
var red400 = '#ef5350';
var red500 = '#f44336';
var red600 = '#e53935';
var red700 = '#d32f2f';
var red800 = '#c62828';
var red900 = '#b71c1c';
var redA100 = '#ff8a80';
var redA200 = '#ff5252';
var redA400 = '#ff1744';
var redA700 = '#d50000';
var red = red500;

var pink50 = '#fce4ec';
var pink100 = '#f8bbd0';
var pink200 = '#f48fb1';
var pink300 = '#f06292';
var pink400 = '#ec407a';
var pink500 = '#e91e63';
var pink600 = '#d81b60';
var pink700 = '#c2185b';
var pink800 = '#ad1457';
var pink900 = '#880e4f';
var pinkA100 = '#ff80ab';
var pinkA200 = '#ff4081';
var pinkA400 = '#f50057';
var pinkA700 = '#c51162';
var pink = pink500;

var purple50 = '#f3e5f5';
var purple100 = '#e1bee7';
var purple200 = '#ce93d8';
var purple300 = '#ba68c8';
var purple400 = '#ab47bc';
var purple500 = '#9c27b0';
var purple600 = '#8e24aa';
var purple700 = '#7b1fa2';
var purple800 = '#6a1b9a';
var purple900 = '#4a148c';
var purpleA100 = '#ea80fc';
var purpleA200 = '#e040fb';
var purpleA400 = '#d500f9';
var purpleA700 = '#aa00ff';
var purple = purple500;

var deepPurple50 = '#ede7f6';
var deepPurple100 = '#d1c4e9';
var deepPurple200 = '#b39ddb';
var deepPurple300 = '#9575cd';
var deepPurple400 = '#7e57c2';
var deepPurple500 = '#673ab7';
var deepPurple600 = '#5e35b1';
var deepPurple700 = '#512da8';
var deepPurple800 = '#4527a0';
var deepPurple900 = '#311b92';
var deepPurpleA100 = '#b388ff';
var deepPurpleA200 = '#7c4dff';
var deepPurpleA400 = '#651fff';
var deepPurpleA700 = '#6200ea';
var deepPurple = deepPurple500;

var indigo50 = '#e8eaf6';
var indigo100 = '#c5cae9';
var indigo200 = '#9fa8da';
var indigo300 = '#7986cb';
var indigo400 = '#5c6bc0';
var indigo500 = '#3f51b5';
var indigo600 = '#3949ab';
var indigo700 = '#303f9f';
var indigo800 = '#283593';
var indigo900 = '#1a237e';
var indigoA100 = '#8c9eff';
var indigoA200 = '#536dfe';
var indigoA400 = '#3d5afe';
var indigoA700 = '#304ffe';
var indigo = indigo500;

var blue50 = '#e3f2fd';
var blue100 = '#bbdefb';
var blue200 = '#90caf9';
var blue300 = '#64b5f6';
var blue400 = '#42a5f5';
var blue500 = '#2196f3';
var blue600 = '#1e88e5';
var blue700 = '#1976d2';
var blue800 = '#1565c0';
var blue900 = '#0d47a1';
var blueA100 = '#82b1ff';
var blueA200 = '#448aff';
var blueA400 = '#2979ff';
var blueA700 = '#2962ff';
var blue = blue500;

var lightBlue50 = '#e1f5fe';
var lightBlue100 = '#b3e5fc';
var lightBlue200 = '#81d4fa';
var lightBlue300 = '#4fc3f7';
var lightBlue400 = '#29b6f6';
var lightBlue500 = '#03a9f4';
var lightBlue600 = '#039be5';
var lightBlue700 = '#0288d1';
var lightBlue800 = '#0277bd';
var lightBlue900 = '#01579b';
var lightBlueA100 = '#80d8ff';
var lightBlueA200 = '#40c4ff';
var lightBlueA400 = '#00b0ff';
var lightBlueA700 = '#0091ea';
var lightBlue = lightBlue500;

var cyan50 = '#e0f7fa';
var cyan100 = '#b2ebf2';
var cyan200 = '#80deea';
var cyan300 = '#4dd0e1';
var cyan400 = '#26c6da';
var cyan500 = '#00bcd4';
var cyan600 = '#00acc1';
var cyan700 = '#0097a7';
var cyan800 = '#00838f';
var cyan900 = '#006064';
var cyanA100 = '#84ffff';
var cyanA200 = '#18ffff';
var cyanA400 = '#00e5ff';
var cyanA700 = '#00b8d4';
var cyan = cyan500;

var teal50 = '#e0f2f1';
var teal100 = '#b2dfdb';
var teal200 = '#80cbc4';
var teal300 = '#4db6ac';
var teal400 = '#26a69a';
var teal500 = '#009688';
var teal600 = '#00897b';
var teal700 = '#00796b';
var teal800 = '#00695c';
var teal900 = '#004d40';
var tealA100 = '#a7ffeb';
var tealA200 = '#64ffda';
var tealA400 = '#1de9b6';
var tealA700 = '#00bfa5';
var teal = teal500;

var green50 = '#e8f5e9';
var green100 = '#c8e6c9';
var green200 = '#a5d6a7';
var green300 = '#81c784';
var green400 = '#66bb6a';
var green500 = '#4caf50';
var green600 = '#43a047';
var green700 = '#388e3c';
var green800 = '#2e7d32';
var green900 = '#1b5e20';
var greenA100 = '#b9f6ca';
var greenA200 = '#69f0ae';
var greenA400 = '#00e676';
var greenA700 = '#00c853';
var green = green500;

var lightGreen50 = '#f1f8e9';
var lightGreen100 = '#dcedc8';
var lightGreen200 = '#c5e1a5';
var lightGreen300 = '#aed581';
var lightGreen400 = '#9ccc65';
var lightGreen500 = '#8bc34a';
var lightGreen600 = '#7cb342';
var lightGreen700 = '#689f38';
var lightGreen800 = '#558b2f';
var lightGreen900 = '#33691e';
var lightGreenA100 = '#ccff90';
var lightGreenA200 = '#b2ff59';
var lightGreenA400 = '#76ff03';
var lightGreenA700 = '#64dd17';
var lightGreen = lightGreen500;

var lime50 = '#f9fbe7';
var lime100 = '#f0f4c3';
var lime200 = '#e6ee9c';
var lime300 = '#dce775';
var lime400 = '#d4e157';
var lime500 = '#cddc39';
var lime600 = '#c0ca33';
var lime700 = '#afb42b';
var lime800 = '#9e9d24';
var lime900 = '#827717';
var limeA100 = '#f4ff81';
var limeA200 = '#eeff41';
var limeA400 = '#c6ff00';
var limeA700 = '#aeea00';
var lime = lime500;

var yellow50 = '#fffde7';
var yellow100 = '#fff9c4';
var yellow200 = '#fff59d';
var yellow300 = '#fff176';
var yellow400 = '#ffee58';
var yellow500 = '#ffeb3b';
var yellow600 = '#fdd835';
var yellow700 = '#fbc02d';
var yellow800 = '#f9a825';
var yellow900 = '#f57f17';
var yellowA100 = '#ffff8d';
var yellowA200 = '#ffff00';
var yellowA400 = '#ffea00';
var yellowA700 = '#ffd600';
var yellow = yellow500;

var amber50 = '#fff8e1';
var amber100 = '#ffecb3';
var amber200 = '#ffe082';
var amber300 = '#ffd54f';
var amber400 = '#ffca28';
var amber500 = '#ffc107';
var amber600 = '#ffb300';
var amber700 = '#ffa000';
var amber800 = '#ff8f00';
var amber900 = '#ff6f00';
var amberA100 = '#ffe57f';
var amberA200 = '#ffd740';
var amberA400 = '#ffc400';
var amberA700 = '#ffab00';
var amber = amber500;

var orange50 = '#fff3e0';
var orange100 = '#ffe0b2';
var orange200 = '#ffcc80';
var orange300 = '#ffb74d';
var orange400 = '#ffa726';
var orange500 = '#ff9800';
var orange600 = '#fb8c00';
var orange700 = '#f57c00';
var orange800 = '#ef6c00';
var orange900 = '#e65100';
var orangeA100 = '#ffd180';
var orangeA200 = '#ffab40';
var orangeA400 = '#ff9100';
var orangeA700 = '#ff6d00';
var orange = orange500;

var deepOrange50 = '#fbe9e7';
var deepOrange100 = '#ffccbc';
var deepOrange200 = '#ffab91';
var deepOrange300 = '#ff8a65';
var deepOrange400 = '#ff7043';
var deepOrange500 = '#ff5722';
var deepOrange600 = '#f4511e';
var deepOrange700 = '#e64a19';
var deepOrange800 = '#d84315';
var deepOrange900 = '#bf360c';
var deepOrangeA100 = '#ff9e80';
var deepOrangeA200 = '#ff6e40';
var deepOrangeA400 = '#ff3d00';
var deepOrangeA700 = '#dd2c00';
var deepOrange = deepOrange500;

var brown50 = '#efebe9';
var brown100 = '#d7ccc8';
var brown200 = '#bcaaa4';
var brown300 = '#a1887f';
var brown400 = '#8d6e63';
var brown500 = '#795548';
var brown600 = '#6d4c41';
var brown700 = '#5d4037';
var brown800 = '#4e342e';
var brown900 = '#3e2723';
var brown = brown500;

var blueGrey50 = '#eceff1';
var blueGrey100 = '#cfd8dc';
var blueGrey200 = '#b0bec5';
var blueGrey300 = '#90a4ae';
var blueGrey400 = '#78909c';
var blueGrey500 = '#607d8b';
var blueGrey600 = '#546e7a';
var blueGrey700 = '#455a64';
var blueGrey800 = '#37474f';
var blueGrey900 = '#263238';
var blueGrey = blueGrey500;

var grey50 = '#fafafa';
var grey100 = '#f5f5f5';
var grey200 = '#eeeeee';
var grey300 = '#e0e0e0';
var grey400 = '#bdbdbd';
var grey500 = '#9e9e9e';
var grey600 = '#757575';
var grey700 = '#616161';
var grey800 = '#424242';
var grey900 = '#212121';
var grey = grey500;

var black = '#000000';
var white = '#ffffff';

var transparent = 'rgba(0, 0, 0, 0)';
var fullBlack = 'rgba(0, 0, 0, 1)';
var darkBlack = 'rgba(0, 0, 0, 0.87)';
var lightBlack = 'rgba(0, 0, 0, 0.54)';
var minBlack = 'rgba(0, 0, 0, 0.26)';
var faintBlack = 'rgba(0, 0, 0, 0.12)';
var fullWhite = 'rgba(255, 255, 255, 1)';
var darkWhite = 'rgba(255, 255, 255, 0.87)';
var lightWhite = 'rgba(255, 255, 255, 0.54)';

var colorsObj = /*#__PURE__*/Object.freeze({
  red50: red50,
  red100: red100,
  red200: red200,
  red300: red300,
  red400: red400,
  red500: red500,
  red600: red600,
  red700: red700,
  red800: red800,
  red900: red900,
  redA100: redA100,
  redA200: redA200,
  redA400: redA400,
  redA700: redA700,
  red: red,
  pink50: pink50,
  pink100: pink100,
  pink200: pink200,
  pink300: pink300,
  pink400: pink400,
  pink500: pink500,
  pink600: pink600,
  pink700: pink700,
  pink800: pink800,
  pink900: pink900,
  pinkA100: pinkA100,
  pinkA200: pinkA200,
  pinkA400: pinkA400,
  pinkA700: pinkA700,
  pink: pink,
  purple50: purple50,
  purple100: purple100,
  purple200: purple200,
  purple300: purple300,
  purple400: purple400,
  purple500: purple500,
  purple600: purple600,
  purple700: purple700,
  purple800: purple800,
  purple900: purple900,
  purpleA100: purpleA100,
  purpleA200: purpleA200,
  purpleA400: purpleA400,
  purpleA700: purpleA700,
  purple: purple,
  deepPurple50: deepPurple50,
  deepPurple100: deepPurple100,
  deepPurple200: deepPurple200,
  deepPurple300: deepPurple300,
  deepPurple400: deepPurple400,
  deepPurple500: deepPurple500,
  deepPurple600: deepPurple600,
  deepPurple700: deepPurple700,
  deepPurple800: deepPurple800,
  deepPurple900: deepPurple900,
  deepPurpleA100: deepPurpleA100,
  deepPurpleA200: deepPurpleA200,
  deepPurpleA400: deepPurpleA400,
  deepPurpleA700: deepPurpleA700,
  deepPurple: deepPurple,
  indigo50: indigo50,
  indigo100: indigo100,
  indigo200: indigo200,
  indigo300: indigo300,
  indigo400: indigo400,
  indigo500: indigo500,
  indigo600: indigo600,
  indigo700: indigo700,
  indigo800: indigo800,
  indigo900: indigo900,
  indigoA100: indigoA100,
  indigoA200: indigoA200,
  indigoA400: indigoA400,
  indigoA700: indigoA700,
  indigo: indigo,
  blue50: blue50,
  blue100: blue100,
  blue200: blue200,
  blue300: blue300,
  blue400: blue400,
  blue500: blue500,
  blue600: blue600,
  blue700: blue700,
  blue800: blue800,
  blue900: blue900,
  blueA100: blueA100,
  blueA200: blueA200,
  blueA400: blueA400,
  blueA700: blueA700,
  blue: blue,
  lightBlue50: lightBlue50,
  lightBlue100: lightBlue100,
  lightBlue200: lightBlue200,
  lightBlue300: lightBlue300,
  lightBlue400: lightBlue400,
  lightBlue500: lightBlue500,
  lightBlue600: lightBlue600,
  lightBlue700: lightBlue700,
  lightBlue800: lightBlue800,
  lightBlue900: lightBlue900,
  lightBlueA100: lightBlueA100,
  lightBlueA200: lightBlueA200,
  lightBlueA400: lightBlueA400,
  lightBlueA700: lightBlueA700,
  lightBlue: lightBlue,
  cyan50: cyan50,
  cyan100: cyan100,
  cyan200: cyan200,
  cyan300: cyan300,
  cyan400: cyan400,
  cyan500: cyan500,
  cyan600: cyan600,
  cyan700: cyan700,
  cyan800: cyan800,
  cyan900: cyan900,
  cyanA100: cyanA100,
  cyanA200: cyanA200,
  cyanA400: cyanA400,
  cyanA700: cyanA700,
  cyan: cyan,
  teal50: teal50,
  teal100: teal100,
  teal200: teal200,
  teal300: teal300,
  teal400: teal400,
  teal500: teal500,
  teal600: teal600,
  teal700: teal700,
  teal800: teal800,
  teal900: teal900,
  tealA100: tealA100,
  tealA200: tealA200,
  tealA400: tealA400,
  tealA700: tealA700,
  teal: teal,
  green50: green50,
  green100: green100,
  green200: green200,
  green300: green300,
  green400: green400,
  green500: green500,
  green600: green600,
  green700: green700,
  green800: green800,
  green900: green900,
  greenA100: greenA100,
  greenA200: greenA200,
  greenA400: greenA400,
  greenA700: greenA700,
  green: green,
  lightGreen50: lightGreen50,
  lightGreen100: lightGreen100,
  lightGreen200: lightGreen200,
  lightGreen300: lightGreen300,
  lightGreen400: lightGreen400,
  lightGreen500: lightGreen500,
  lightGreen600: lightGreen600,
  lightGreen700: lightGreen700,
  lightGreen800: lightGreen800,
  lightGreen900: lightGreen900,
  lightGreenA100: lightGreenA100,
  lightGreenA200: lightGreenA200,
  lightGreenA400: lightGreenA400,
  lightGreenA700: lightGreenA700,
  lightGreen: lightGreen,
  lime50: lime50,
  lime100: lime100,
  lime200: lime200,
  lime300: lime300,
  lime400: lime400,
  lime500: lime500,
  lime600: lime600,
  lime700: lime700,
  lime800: lime800,
  lime900: lime900,
  limeA100: limeA100,
  limeA200: limeA200,
  limeA400: limeA400,
  limeA700: limeA700,
  lime: lime,
  yellow50: yellow50,
  yellow100: yellow100,
  yellow200: yellow200,
  yellow300: yellow300,
  yellow400: yellow400,
  yellow500: yellow500,
  yellow600: yellow600,
  yellow700: yellow700,
  yellow800: yellow800,
  yellow900: yellow900,
  yellowA100: yellowA100,
  yellowA200: yellowA200,
  yellowA400: yellowA400,
  yellowA700: yellowA700,
  yellow: yellow,
  amber50: amber50,
  amber100: amber100,
  amber200: amber200,
  amber300: amber300,
  amber400: amber400,
  amber500: amber500,
  amber600: amber600,
  amber700: amber700,
  amber800: amber800,
  amber900: amber900,
  amberA100: amberA100,
  amberA200: amberA200,
  amberA400: amberA400,
  amberA700: amberA700,
  amber: amber,
  orange50: orange50,
  orange100: orange100,
  orange200: orange200,
  orange300: orange300,
  orange400: orange400,
  orange500: orange500,
  orange600: orange600,
  orange700: orange700,
  orange800: orange800,
  orange900: orange900,
  orangeA100: orangeA100,
  orangeA200: orangeA200,
  orangeA400: orangeA400,
  orangeA700: orangeA700,
  orange: orange,
  deepOrange50: deepOrange50,
  deepOrange100: deepOrange100,
  deepOrange200: deepOrange200,
  deepOrange300: deepOrange300,
  deepOrange400: deepOrange400,
  deepOrange500: deepOrange500,
  deepOrange600: deepOrange600,
  deepOrange700: deepOrange700,
  deepOrange800: deepOrange800,
  deepOrange900: deepOrange900,
  deepOrangeA100: deepOrangeA100,
  deepOrangeA200: deepOrangeA200,
  deepOrangeA400: deepOrangeA400,
  deepOrangeA700: deepOrangeA700,
  deepOrange: deepOrange,
  brown50: brown50,
  brown100: brown100,
  brown200: brown200,
  brown300: brown300,
  brown400: brown400,
  brown500: brown500,
  brown600: brown600,
  brown700: brown700,
  brown800: brown800,
  brown900: brown900,
  brown: brown,
  blueGrey50: blueGrey50,
  blueGrey100: blueGrey100,
  blueGrey200: blueGrey200,
  blueGrey300: blueGrey300,
  blueGrey400: blueGrey400,
  blueGrey500: blueGrey500,
  blueGrey600: blueGrey600,
  blueGrey700: blueGrey700,
  blueGrey800: blueGrey800,
  blueGrey900: blueGrey900,
  blueGrey: blueGrey,
  grey50: grey50,
  grey100: grey100,
  grey200: grey200,
  grey300: grey300,
  grey400: grey400,
  grey500: grey500,
  grey600: grey600,
  grey700: grey700,
  grey800: grey800,
  grey900: grey900,
  grey: grey,
  black: black,
  white: white,
  transparent: transparent,
  fullBlack: fullBlack,
  darkBlack: darkBlack,
  lightBlack: lightBlack,
  minBlack: minBlack,
  faintBlack: faintBlack,
  fullWhite: fullWhite,
  darkWhite: darkWhite,
  lightWhite: lightWhite
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var colors = Object.keys(colorsObj);
function getColor(color) {
  if (!color || ['primary', 'secondary', 'success', 'warning', 'info', 'error'].indexOf(color) !== -1) return '';
  return colors.indexOf(color) !== -1 ? colorsObj[color] : color;
}
function isNotNull(val) {
  return val !== undefined && val !== null;
}

function isNull(val) {
  return val === undefined || val === null;
}

function getWidth(w) {
  var width = String(w);
  if (width && width.indexOf('%') === -1 && width.indexOf('px') === -1) width += 'px';
  return width;
}

function isPc() {
  var uaInfo = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  var agents = ['Android', 'iPhone', 'Windows Phone', 'iPad', 'iPod'];
  var flag = true;
  for (var i = 0; i < agents.length; i++) {
    if (uaInfo.indexOf(agents[i]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

/**
 * 将 String, Object, Array 转成 Array
 */
function convertClass(classes) {
  var newClasses = [];
  if (!classes) return newClasses;
  if (classes instanceof Array) {
    newClasses = newClasses.concat(classes);
  } else if (classes instanceof Object) {
    for (var name in classes) {
      if (classes[name]) newClasses.push(name);
    }
  } else {
    newClasses = newClasses.concat(classes.split(' '));
  }
  return newClasses;
}

function createSimpleFunctional(c) {
  var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';
  var name = arguments[2];

  return {
    name: name,
    functional: true,

    render: function render(h, _ref) {
      var data = _ref.data,
          children = _ref.children;

      data.staticClass = (c + ' ' + (data.staticClass || '')).trim();

      return h(el, data, children);
    }
  };
}

function getFirstComponentChild(children) {
  return children && children.filter(function (c) {
    return c && c.tag;
  })[0];
}
function isPromise(val) {
  return val && typeof val.then === 'function';
}

function isObject(val) {
  return val !== null && val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && !Array.isArray(val);
}

function getObjAttr(obj, attrs) {
  if (!obj || !attrs) return;
  var value = obj;
  attrs.split('.').forEach(function (key, index) {
    if (!value) return;
    value = value[key];
  });
  return value;
}

var color = {
  props: {
    color: String
  },
  methods: {
    getColorClass: function getColorClass() {
      var addInverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      return this.getNormalColorClass(this.color, false, addInverse);
    },
    getTextColorClass: function getTextColorClass() {
      return this.getNormalColorClass(this.textColor, true, true);
    },
    getColor: function getColor$$1(color, disabled) {
      if (disabled || this.disabled) return;
      return getColor(color);
    },
    getNormalColorClass: function getNormalColorClass(color) {
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var addInverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var classObj = {};
      var themes = ['primary', 'secondary', 'success', 'warning', 'info', 'error'];

      themes.forEach(function (theme) {
        classObj['mu-' + theme + (text ? '-text' : '') + '-color'] = color === theme;
      });
      if (!text && addInverse) classObj['mu-inverse'] = !!color;

      return convertClass(classObj).join(' ');
    }
  }
};

var BaseTheme = (function (theme) {
  return "\n  body{\n    background-color: " + theme.background.default + ";\n    color: " + theme.text.primary + ";\n  }\n\n  a{\n    color: " + theme.secondary + ";\n  }\n  ";
});

var ColorTheme = (function (theme) {
  return "\n  .mu-primary-color {\n    background-color: " + theme.primary + ";\n  }\n  .mu-secondary-color {\n    background-color: " + theme.secondary + ";\n  }\n  .mu-success-color {\n    background-color: " + theme.success + ";\n  }\n  .mu-warning-color {\n    background-color: " + theme.warning + ";\n  }\n  .mu-info-color {\n    background-color: " + theme.info + ";\n  }\n  .mu-error-color {\n    background-color: " + theme.error + ";\n  }\n  .mu-inverse {\n    color: #fff;\n  }\n  .mu-primary-text-color {\n    color: " + theme.primary + ";\n  }\n  .mu-secondary-text-color {\n    color: " + theme.secondary + ";\n  }\n  .mu-success-text-color {\n    color: " + theme.success + ";\n  }\n  .mu-warning-text-color {\n    color: " + theme.warning + ";\n  }\n  .mu-info-text-color {\n    color: " + theme.info + ";\n  }\n  .mu-error-text-color {\n    color: " + theme.error + ";\n  }\n  ";
});

var light = {
  type: 'light',
  primary: blue,
  secondary: pinkA200,
  success: green,
  warning: yellow600,
  info: blue,
  error: red,
  track: grey400,
  text: {
    primary: darkBlack,
    secondary: lightBlack,
    alternate: white,
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)' // 提示文字颜色
  },
  divider: faintBlack,
  background: {
    paper: white,
    chip: grey300,
    default: grey50
  }
};

var dark = {
  type: 'dark',
  primary: blue700,
  secondary: pinkA200,
  success: green,
  warning: yellow600,
  info: blue,
  error: red,
  track: grey600,
  text: {
    primary: white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    alternate: '#303030',
    disabled: 'rgba(255, 255, 255, 0.3)',
    hint: 'rgba(255, 255, 255, 0.3)' // 提示文字颜色
  },
  divider: 'rgba(255, 255, 255, 0.3)',
  background: {
    paper: grey800,
    chip: grey700,
    default: '#303030'
  }
};

var themes = [BaseTheme, ColorTheme];

var vars = {
  light: light,
  dark: dark
};

function getThemeStyle() {
  var themeId = 'muse-theme';
  var styleEl = document.getElementById(themeId);
  if (styleEl) return styleEl;
  styleEl = document.createElement('style');
  styleEl.id = themeId;
  document.body.appendChild(styleEl);
  return styleEl;
}

var theme = {
  addCreateTheme: function addCreateTheme(theme) {
    var length = themes.length;
    themes.splice(length - 1, 0, theme);
    return this;
  },
  add: function add(name) {
    var varObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var extendName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'light';

    var theme = _extends({
      name: name
    }, vars[extendName], varObj);
    vars[name] = theme;
    return this;
  },
  use: function use(name) {
    var themeEl = getThemeStyle();
    themeEl.innerHTML = themes.map(function (theme) {
      return theme(vars[name], vars[name].type, name);
    }).join(' ');
    return this;
  },
  generate: function generate(name) {
    return themes.map(function (theme) {
      return theme(vars[name], vars[name].type, name);
    }).join(' ');
  }
};

/**
 * material-ui colorManipulator.js
 * https://github.com/mui-org/material-ui/blob/master/src/utils/colorManipulator.js
 */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value, min, max) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of, 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
function convertColorToString(color) {
  var type = color.type,
      values = color.values;


  if (type.indexOf('rgb') > -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    for (var i = 0; i < 3; i++) {
      values[i] = parseInt(values[i]);
    }
  }

  var colorString = void 0;

  if (type.indexOf('hsl') > -1) {
    colorString = color.type + '(' + values[0] + ', ' + values[1] + '%, ' + values[2] + '%';
  } else {
    colorString = color.type + '(' + values[0] + ', ' + values[1] + ', ' + values[2];
  }

  if (values.length === 4) {
    colorString += ', ' + color.values[3] + ')';
  } else {
    colorString += ')';
  }

  return colorString;
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 *  @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 *  @returns {string} A CSS rgb color string
 */
function convertHexToRGB(color) {
  if (color.length === 4) {
    var extendedColor = '#';
    for (var i = 1; i < color.length; i++) {
      extendedColor += color.charAt(i) + color.charAt(i);
    }
    color = extendedColor;
  }

  var values = {
    r: parseInt(color.substr(1, 2), 16),
    g: parseInt(color.substr(3, 2), 16),
    b: parseInt(color.substr(5, 2), 16)
  };

  return 'rgb(' + values.r + ', ' + values.g + ', ' + values.b + ')';
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values and color names.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {{type: string, values: number[]}} A MUI color object
 */
function decomposeColor(color) {
  if (color.charAt(0) === '#') {
    return decomposeColor(convertHexToRGB(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);
  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });

  return { type: type, values: values };
}

/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/WAI/GL/wiki/Relative_luminance
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
  color = decomposeColor(color);

  if (color.type.indexOf('rgb') > -1) {
    var rgb = color.values.map(function (val) {
      val /= 255; // normalized
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)); // Truncate at 3 digits
  } else if (color.type.indexOf('hsl') > -1) {
    return color.values[2] / 100;
  }
}

/**
 * Darken or lighten a colour, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;

  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}

/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value, 0, 1);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  color.values[3] = value;

  return convertColorToString(color);
}

/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient, 0, 1);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i++) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return convertColorToString(color);
}

/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient, 0, 1);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i++) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return convertColorToString(color);
}

var ButtonTheme = (function (theme) {
  return '\n  .mu-raised-button {\n    background-color: ' + theme.background.paper + ';\n    color: ' + theme.text.primary + ';\n  }\n  .mu-raised-button.disabled{\n    color: ' + fade(theme.text.primary, 0.3) + ';\n    background-color: ' + darken(theme.text.alternate, 0.1) + ';\n  }\n  .mu-flat-button {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-flat-button.disabled {\n    color: ' + theme.text.disabled + ';\n  }\n  .mu-icon-button {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-icon-button.disabled {\n    color: ' + theme.text.disabled + ';\n  }\n  .mu-fab-button {\n    background-color: ' + theme.primary + ';\n    color: ' + theme.text.alternate + ';\n  }\n  .mu-fab-button.disabled {\n    color: ' + fade(theme.text.primary, 0.3) + ';\n    background-color: ' + darken(theme.text.alternate, 0.1) + ';\n  }\n  ';
});

var route = {
  props: {
    href: String,
    target: String,
    to: {
      type: [String, Object]
    },
    tag: {
      type: String,
      default: 'a'
    },
    activeClass: String,
    event: {
      type: [String, Array],
      default: 'click'
    },
    exact: Boolean,
    exactActiveClass: String,
    append: Boolean,
    replace: Boolean
  },
  methods: {
    generateRouteProps: function generateRouteProps() {
      return {
        href: this.href,
        target: this.target,
        to: this.to,
        tag: this.tag,
        activeClass: this.activeClass,
        event: this.event,
        exact: this.exact,
        exactActiveClass: this.exactActiveClass,
        append: this.append,
        replace: this.replace
      };
    }
  }
};

var ripple = {
  props: {
    ripple: {
      type: Boolean,
      default: true
    },
    rippleColor: {
      type: String,
      default: ''
    },
    rippleOpacity: {
      type: Number
    }
  }
};

var button = {
  props: {
    disabled: Boolean,
    type: {
      type: String,
      default: 'button'
    },
    keyboardFocused: Boolean
  },
  data: function data() {
    return {
      focus: this.focus
    };
  },

  methods: {
    handleClick: function handleClick(e) {
      this.$emit('click', e);
    },
    handleKeyboardFocus: function handleKeyboardFocus(isFocus) {
      this.focus = isFocus;
      this.$emit('keyboard-focus', isFocus);
    },
    handleHover: function handleHover(e) {
      this.$emit('hover', e);
    },
    handleHoverExit: function handleHoverExit(e) {
      this.$emit('hover-exit', e);
    },
    getListener: function getListener() {
      return _extends({}, this.$listeners, {
        click: this.handleClick,
        keyboardFocus: this.handleKeyboardFocus,
        hover: this.handleHover,
        hoverExit: this.handleHoverExit
      });
    }
  }
};

var CircleRipple = {
  props: {
    mergeStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    color: {
      type: String,
      default: ''
    },
    opacity: {
      type: Number
    }
  },
  computed: {
    styles: function styles() {
      return _extends({
        color: this.color,
        opacity: this.opacity
      }, this.mergeStyle);
    }
  },
  render: function render(h) {
    return h('transition', {
      props: {
        name: 'mu-ripple'
      }
    }, [h('div', {
      class: 'mu-circle-ripple',
      style: this.styles
    })]);
  }
};

function getScrollEventTarget(element) {
  var currentNode = element;
  while (currentNode && currentNode.tagName !== 'HTML' && currentNode.nodeType === 1) {
    var overflowY = window.getComputedStyle(currentNode).overflowY;
    if (overflowY === 'scroll' || overflowY === 'auto') {
      return currentNode;
    }
    currentNode = currentNode.parentNode;
  }
  return window;
}

function getScrollTop(element) {
  if (element === window) {
    return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
  } else {
    return element.scrollTop;
  }
}

function getOffset(el) {
  var box = el.getBoundingClientRect();
  var body = document.body;
  var clientTop = el.clientTop || body.clientTop || 0;
  var clientLeft = el.clientLeft || body.clientLeft || 0;
  var scrollTop = window.pageYOffset || el.scrollTop;
  var scrollLeft = window.pageXOffset || el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}

function transitionEnd(el, fun) {
  var arr = ['msTransitionEnd', 'mozTransitionEnd', 'oTransitionEnd', 'webkitTransitionEnd', 'transitionend'];
  var handler = {
    handleEvent: function handleEvent(event) {
      arr.forEach(function (eventName) {
        el.removeEventListener(eventName, handler, false);
      });
      fun.apply(el, arguments);
    }
  };
  arr.forEach(function (eventName) {
    el.addEventListener(eventName, handler, false);
  });
}

function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = curClass ? curClass.trim() : curClass;
  }
}

var TouchRipple = {
  props: {
    centerRipple: {
      type: Boolean,
      default: false
    },
    rippleWrapperClass: {},
    tag: {
      type: String,
      default: 'div'
    },
    autoBind: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: ''
    },
    opacity: Number
  },
  data: function data() {
    return {
      nextKey: 0,
      ripples: []
    };
  },

  methods: {
    start: function start(event, isRippleTouchGenerated) {
      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
        this.ignoreNextMouseDown = false;
        return;
      }
      this.ripples.push({
        key: this.nextKey++,
        color: this.color,
        opacity: this.opacity,
        style: this.centerRipple ? {} : this.getRippleStyle(event)
      });
      this.ignoreNextMouseDown = isRippleTouchGenerated;
    },
    end: function end() {
      if (this.ripples.length === 0) return;
      this.ripples.splice(0, 1);
      this.stopListeningForScrollAbort();
    },
    stopListeningForScrollAbort: function stopListeningForScrollAbort() {
      if (!this.handleMove) this.handleMove = this.handleTouchMove.bind(this);
      document.body.removeEventListener('touchmove', this.handleMove, false);
    },
    startListeningForScrollAbort: function startListeningForScrollAbort(event) {
      this.firstTouchY = event.touches[0].clientY;
      this.firstTouchX = event.touches[0].clientX;
      document.body.addEventListener('touchmove', this.handleMove, false);
    },
    handleMouseDown: function handleMouseDown(event) {
      if (event.button === 0) {
        this.start(event, false);
      }
    },
    handleTouchStart: function handleTouchStart(event) {
      if (event.touches) {
        this.startListeningForScrollAbort(event);
        this.startTime = Date.now();
      }
      this.start(event.touches[0], true);
    },
    handleTouchMove: function handleTouchMove(event) {
      var deltaY = Math.abs(event.touches[0].clientY - this.firstTouchY);
      var deltaX = Math.abs(event.touches[0].clientX - this.firstTouchX);
      // 判断滚动 6px
      if (deltaY > 6 || deltaX > 6) this.end();
      // const timeSinceStart = Math.abs(Date.now() - this.startTime)
      // if (timeSinceStart > 300) {
      //   this.stopListeningForScrollAbort()
      //   return
      // }
    },
    getRippleStyle: function getRippleStyle(event) {
      var el = this.$refs.holder;
      if (!el) return;
      var offset = getOffset(el);
      var elHeight = el.offsetHeight;
      var elWidth = el.offsetWidth;
      var isTouchEvent = event.touches && event.touches.length;
      var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
      var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
      var pointerX = pageX - offset.left;
      var pointerY = pageY - offset.top;
      var topLeftDiag = this.calcDiag(pointerX, pointerY);
      var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
      var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
      var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
      var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
      var rippleSize = rippleRadius * 2;
      var left = pointerX - rippleRadius;
      var top = pointerY - rippleRadius;

      return {
        directionInvariant: true,
        height: rippleSize + 'px',
        width: rippleSize + 'px',
        top: top + 'px',
        left: left + 'px'
      };
    },
    calcDiag: function calcDiag(a, b) {
      return Math.sqrt(a * a + b * b);
    },
    createCircleRipple: function createCircleRipple(h) {
      return this.ripples.map(function (ripple) {
        return h(CircleRipple, {
          props: {
            color: ripple.color,
            opacity: ripple.opacity,
            mergeStyle: ripple.style
          },
          key: ripple.key
        });
      });
    }
  },
  render: function render(h) {
    var listeners = this.autoBind ? _extends({}, this.$listeners, {
      mousedown: this.handleMouseDown,
      mouseup: this.end,
      mouseleave: this.end,
      touchstart: this.handleTouchStart,
      touchend: this.end,
      touchcancel: this.end
    }) : _extends({}, this.$listeners);
    return h(this.tag, {
      on: listeners
    }, [h('div', {
      class: this.rippleWrapperClass,
      attrs: {
        class: 'mu-ripple-wrapper'
      },
      ref: 'holder'
    }, this.createCircleRipple(h)), this.$slots.default]);
  }
};

var FocusRipple = {
  props: {
    color: {
      type: String,
      default: ''
    },
    opacity: {
      type: Number
    }
  },
  computed: {
    style: function style() {
      return {
        color: this.color,
        opacity: this.opacity
      };
    }
  },
  methods: {
    setRippleSize: function setRippleSize() {
      var el = this.$refs.innerCircle;
      var height = el.offsetHeight;
      var width = el.offsetWidth;
      var size = Math.max(height, width);

      var oldTop = 0;

      if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
        oldTop = parseInt(el.style.top);
      }

      el.style.height = size + 'px';
      el.style.top = height / 2 - size / 2 + oldTop + 'px';
    }
  },
  mounted: function mounted() {
    this.setRippleSize();
  },
  updated: function updated() {
    this.setRippleSize();
  },
  render: function render(h) {
    return h('div', {
      class: 'mu-focus-ripple-wrapper'
    }, [h('div', {
      ref: 'innerCircle',
      style: this.style,
      class: 'mu-focus-ripple'
    })]);
  }
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var keycode = createCommonjsModule(function (module, exports) {
// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

function keyCode(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode;
    if (hasKeyCode) searchInput = hasKeyCode;
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput);

  // check codes
  var foundNamedKey = codes[search.toLowerCase()];
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()];
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Compares a keyboard event with a given keyCode or keyName.
 *
 * @param {Event} event Keyboard event that should be tested
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Boolean}
 * @api public
 */
keyCode.isEventKey = function isEventKey(event, nameOrCode) {
  if (event && 'object' === typeof event) {
    var keyCode = event.which || event.keyCode || event.charCode;
    if (keyCode === null || keyCode === undefined) { return false; }
    if (typeof nameOrCode === 'string') {
      // check codes
      var foundNamedKey = codes[nameOrCode.toLowerCase()];
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    
      // check aliases
      var foundNamedKey = aliases[nameOrCode.toLowerCase()];
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    } else if (typeof nameOrCode === 'number') {
      return nameOrCode === keyCode;
    }
    return false;
  }
};

exports = module.exports = keyCode;

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
};

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'spacebar': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
};

/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32;

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i;

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111;

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96;

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {}; // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i;

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias];
}
});
var keycode_1 = keycode.code;
var keycode_2 = keycode.codes;
var keycode_3 = keycode.aliases;
var keycode_4 = keycode.names;
var keycode_5 = keycode.title;

var tabPressed = false;
var listening = false;

function listenForTabPresses() {
  if (!listening) {
    typeof window !== 'undefined' && window.addEventListener('keydown', function (event) {
      tabPressed = keycode(event) === 'tab';
    });
    listening = true;
  }
}

var AbstractButton = {
  mixins: [route, ripple],
  props: {
    disabled: Boolean,
    centerRipple: Boolean,
    containerElement: String,
    disableKeyboardFocus: Boolean,
    wrapperClass: String,
    wrapperStyle: [String, Object],
    type: {
      type: String,
      default: 'button'
    },
    keyboardFocused: Boolean
  },
  data: function data() {
    return {
      hover: false,
      isKeyboardFocused: false
    };
  },

  computed: {
    buttonClass: function buttonClass() {
      var classNames = [];
      if (this.disabled) classNames.push('disabled');
      if (!this.disabled && (this.hover || this.isKeyboardFocused)) classNames.push('hover');
      return classNames.join(' ');
    }
  },
  beforeMount: function beforeMount() {
    var disabled = this.disabled,
        disableKeyboardFocus = this.disableKeyboardFocus,
        keyboardFocused = this.keyboardFocused;

    if (!disabled && keyboardFocused && !disableKeyboardFocus) {
      this.isKeyboardFocused = true;
    }
  },
  mounted: function mounted() {
    listenForTabPresses();
    if (this.isKeyboardFocused) {
      this.$el.focus();
      this.$emit('keyboardFocus', true);
    }
  },
  beforeUpdate: function beforeUpdate() {
    if ((this.disabled || this.disableKeyboardFocus) && this.isKeyboardFocused) {
      this.isKeyboardFocused = false;
      this.$emit('keyboardFocus', false);
    }
  },
  beforeDestory: function beforeDestory() {
    this.cancelFocusTimeout();
  },

  methods: {
    handleHover: function handleHover(event) {
      if (!this.disabled && isPc()) {
        this.hover = true;
        this.$emit('hover', event);
        this.$emit('mouseenter', event);
      }
    },
    handleOut: function handleOut(event) {
      if (!this.disabled && isPc()) {
        this.hover = false;
        this.$emit('hoverExit', event);
        this.$emit(event.type, event);
      }
    },
    removeKeyboardFocus: function removeKeyboardFocus(event) {
      if (this.isKeyboardFocused) {
        this.isKeyboardFocused = false;
        this.$emit('KeyboardFocus', false);
      }
    },
    setKeyboardFocus: function setKeyboardFocus(event) {
      if (!this.isKeyboardFocused) {
        this.isKeyboardFocused = true;
        this.$emit('KeyboardFocus', true);
      }
    },
    cancelFocusTimeout: function cancelFocusTimeout() {
      if (this.focusTimeout) {
        clearTimeout(this.focusTimeout);
        this.focusTimeout = null;
      }
    },
    handleKeydown: function handleKeydown(event) {
      if (!this.disabled && !this.disableKeyboardFocus) {
        if (keycode(event) === 'enter' && this.isKeyboardFocused) {
          this.$el.click();
          event.preventDefault();
        }
        if (keycode(event) === 'esc' && this.isKeyboardFocused) {
          this.removeKeyboardFocus(event);
        }
      }
      this.$emit('keydown', event);
    },
    handleFocus: function handleFocus(event) {
      var _this = this;

      if (!this.disabled && !this.disableKeyboardFocus) {
        this.focusTimeout = setTimeout(function () {
          if (tabPressed) {
            _this.setKeyboardFocus(event);
            tabPressed = false;
          }
        }, 150);
        this.$emit('focus', event);
      }
    },
    handleBlur: function handleBlur(event) {
      this.cancelFocusTimeout();
      this.removeKeyboardFocus(event);
      this.$emit('blur', event);
    },
    handleClick: function handleClick(event) {
      if (!this.disabled) {
        tabPressed = false;
        // this.$el.blur(); // 点击之后失去焦点
        this.removeKeyboardFocus(event);
        this.$emit('click', event);
      }
    },
    getTagName: function getTagName() {
      var defaultTag = 'button';
      switch (true) {
        case !!this.to:
          return 'router-link';
        case !!this.href:
          return 'a';
        case !!this.containerElement:
          return this.containerElement;
        default:
          return defaultTag;
      }
    },
    createButtonChildren: function createButtonChildren(h) {
      var isKeyboardFocused = this.isKeyboardFocused,
          disabled = this.disabled,
          ripple$$1 = this.ripple,
          disableKeyboardFocus = this.disableKeyboardFocus,
          rippleColor = this.rippleColor,
          rippleOpacity = this.rippleOpacity;

      var children = [];
      children = children.concat(this.$slots.default);
      var FocusRippleEL = isKeyboardFocused && !disableKeyboardFocus && !disabled && ripple$$1 ? h(FocusRipple, {
        color: rippleColor,
        opacity: rippleOpacity
      }) : undefined;

      if (!disabled && ripple$$1) {
        children = [h(TouchRipple, {
          class: this.wrapperClass,
          style: this.wrapperStyle,
          ref: 'ripple',
          props: {
            autoBind: false,
            color: this.rippleColor,
            centerRipple: this.centerRipple,
            opacity: this.rippleOpacity
          }
        }, this.$slots.default)];
      } else {
        children = [h('div', {
          class: this.wrapperClass,
          style: this.wrapperStyle
        }, this.$slots.default)];
      }
      children.unshift(FocusRippleEL);
      return children;
    }
  },
  watch: {
    disabled: function disabled(val) {
      if (!val) this.hover = false;
    }
  },
  render: function render(h) {
    var _this2 = this;

    var tagName = this.getTagName();
    var attrs = {
      target: this.target,
      tabindex: !this.disabled ? this.$attrs.tabindex || 0 : -1
    };

    if (tagName === 'button') {
      attrs.disabled = this.disabled;
      attrs.type = this.type;
    }

    if (this.href && !this.disabled) {
      attrs.href = this.href;
    }

    var props = this.to ? {
      to: this.to,
      tag: this.tag,
      activeClass: this.activeClass,
      event: this.event,
      exact: this.exact,
      append: this.append,
      replace: this.replace,
      exactActiveClass: this.exactActiveClass
    } : {};

    return h(tagName, defineProperty({
      class: this.buttonClass,
      attrs: attrs,
      props: props,
      style: tagName === 'button' ? {
        'user-select': this.disabled ? '' : 'none',
        '-webkit-user-select': this.disabled ? '' : 'none',
        'outline': 'none',
        'appearance': 'none'
      } : {}
    }, tagName === 'router-link' ? 'nativeOn' : 'on', _extends({}, this.$listeners, {
      mouseup: function mouseup(e) {
        _this2.$refs.ripple && _this2.$refs.ripple.end(e);
        _this2.$emit('mouseup', e);
      },
      mousedown: function mousedown(e) {
        _this2.$refs.ripple && _this2.$refs.ripple.handleMouseDown(e);
        _this2.$emit('mousedown', e);
      },
      mouseenter: this.handleHover,
      mouseleave: function mouseleave(e) {
        _this2.$refs.ripple && _this2.$refs.ripple.end(e);
        _this2.handleOut(e);
      },
      touchstart: function touchstart(e) {
        _this2.$refs.ripple && _this2.$refs.ripple.handleTouchStart(e);
        _this2.$emit('touchstart', e);
      },
      touchend: function touchend(e) {
        _this2.$refs.ripple && _this2.$refs.ripple.end(e);
        _this2.handleOut(e);
      },
      touchcancel: function touchcancel(e) {
        _this2.$refs.ripple && _this2.$refs.ripple.end(e);
        _this2.handleOut(e);
      },
      click: this.handleClick,
      focus: this.handleFocus,
      blur: this.handleBlur,
      keydown: this.handleKeydown
    })), this.createButtonChildren(h));
  }
};

var Button = {
  name: 'mu-button',
  mixins: [route, ripple, button, color],
  props: {
    fab: Boolean,
    flat: Boolean,
    icon: Boolean,
    small: Boolean,
    large: Boolean,
    round: Boolean,
    textColor: String,
    fullWidth: Boolean
  },
  computed: {
    buttonClass: function buttonClass() {
      var _ref;

      var colorClass = this.getNormalColorClass(this.color, this.icon || this.flat);
      var textColorClass = this.getTextColorClass();
      return _ref = {
        'mu-fab-button': this.fab,
        'mu-flat-button': this.flat,
        'mu-icon-button': this.icon,
        'mu-raised-button': !this.icon && !this.flat && !this.fab,
        'mu-button-small': this.small,
        'mu-button-large': this.large,
        'mu-button-full-width': !this.fab && !this.icon && this.fullWidth
      }, defineProperty(_ref, colorClass, true), defineProperty(_ref, textColorClass, true), defineProperty(_ref, 'mu-button-round', this.round), defineProperty(_ref, 'is-focus', this.focus), _ref;
    }
  },
  render: function render(h) {
    var flat = this.flat || this.icon;
    var color$$1 = this.getColor(this.textColor);
    if (!color$$1 && flat) color$$1 = this.getColor(this.color);
    return h(AbstractButton, {
      staticClass: 'mu-button',
      class: this.buttonClass,
      style: {
        'background-color': !flat ? this.getColor(this.color) : '',
        color: color$$1
      },
      props: _extends({
        wrapperClass: 'mu-button-wrapper',
        disabled: this.disabled,
        keyboardFocused: this.keyboardFocused,
        type: this.type,
        centerRipple: this.icon,
        ripple: this.ripple,
        rippleOpacity: this.rippleOpacity,
        rippleColor: this.rippleColor
      }, this.generateRouteProps()),
      on: this.getListener()
    }, this.$slots.default);
  }
};

Button.install = function (Vue$$1) {
  Vue$$1.component(Button.name, Button);
};

theme.addCreateTheme(ButtonTheme);

var Alert = {
  name: 'mu-alert',
  mixins: [color],
  props: {
    delete: Boolean,
    transition: String,
    mode: String
  },
  methods: {
    handleDelete: function handleDelete(e) {
      e.stopPropagation();
      this.$emit('delete');
    }
  },
  render: function render(h) {
    var deleteIcon = h(Button, {
      staticClass: 'mu-alert-delete-btn',
      props: {
        icon: true
      },
      on: {
        click: this.handleDelete
      }
    }, [h('svg', {
      staticClass: 'mu-alert-delete-icon',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [h('path', {
      attrs: {
        d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
      }
    }), h('path', {
      attrs: {
        d: 'M0 0h24v24H0z',
        fill: 'none'
      }
    })])]);
    var alert = h('div', {
      staticClass: 'mu-alert ' + this.getColorClass(),
      style: {
        'background-color': this.getColor(this.color)
      },
      on: this.$listeners
    }, [this.$slots.default, this.delete ? deleteIcon : undefined]);
    return this.transition ? h('transition', {
      props: {
        mode: this.mode,
        name: this.transition
      }
    }, [alert]) : alert;
  }
};

Alert.install = function (Vue$$1) {
  Vue$$1.component(Alert.name, Alert);
};

var AppBarTheme = (function (theme, type) {
  return '\n    .mu-appbar {\n      background-color: ' + (type === 'light' ? '#f5f5f5' : '#212121') + ';\n      color: ' + theme.text.primary + ';\n    }\n  ';
});

var AppBar = {
  name: 'mu-appbar',
  mixins: [color],
  props: {
    zDepth: {
      type: [Number, String],
      default: 4,
      validator: function validator(val) {
        return val >= 0 && val <= 24;
      }
    },
    title: {
      type: String,
      default: ''
    },
    textColor: String
  },
  render: function render(h) {
    var slots = this.$slots;
    var left = slots.left && slots.left.length > 0 ? h('div', { staticClass: 'mu-appbar-left' }, slots.left) : undefined;
    var right = slots.right && slots.right.length > 0 ? h('div', { staticClass: 'mu-appbar-right' }, slots.right) : undefined;
    var center = h('div', { staticClass: 'mu-appbar-title' }, slots.default && slots.default.length > 0 ? slots.default : this.title);

    return h('header', {
      staticClass: 'mu-appbar ' + this.getColorClass() + ' ' + this.getTextColorClass() + ' mu-elevation-' + this.zDepth,
      style: {
        'background-color': this.getColor(this.color),
        color: this.getColor(this.textColor)
      }
    }, [left, center, right]);
  }
};

AppBar.install = function (Vue$$1) {
  Vue$$1.component(AppBar.name, AppBar);
};

theme.addCreateTheme(AppBarTheme);

var Icon = {
  name: 'mu-icon',
  functional: true,
  props: {
    value: String,
    left: Boolean,
    right: Boolean,
    size: [Number, String],
    color: String
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props;

    if (!props.value) return null;
    data.style = data.style || {};
    data.style = _extends({}, data.style, {
      'user-select': 'none',
      'font-size': props.size + 'px',
      'width': props.size + 'px',
      'height': props.size + 'px',
      'color': color.methods.getColor(props.color)
    });
    var isMaterial = props.value.indexOf(':') !== 0;
    var text = isMaterial ? props.value : '';

    data.staticClass = (data.staticClass || '') + ' mu-icon ' + color.methods.getNormalColorClass(props.color, true) + ' ' + (isMaterial ? 'material-icons' : props.value.substring(1)) + ' ' + (props.left ? 'mu-icon-left' : '') + ' ' + (props.right ? 'mu-icon-right' : '');
    return h('i', data, text);
  }
};

Icon.install = function (Vue$$1) {
  Vue$$1.component(Icon.name, Icon);
};

var input = {
  inheritAttrs: false,
  mixins: [color],
  model: {
    prop: 'value',
    event: 'input'
  },
  inject: {
    muFormItem: {
      default: ''
    }
  },
  props: {
    icon: String,
    label: String,
    labelFloat: Boolean,
    actionIcon: String,
    actionClick: Function,
    suffix: String,
    prefix: String,
    errorText: String,
    helpText: String,
    fullWidth: Boolean,
    disabled: Boolean,
    solo: Boolean,
    underlineColor: String,
    value: {}
  },
  data: function data() {
    return {
      isFocused: false
    };
  },

  computed: {
    error: function error() {
      return !!this.errorText || this.muFormItem && this.muFormItem.errorMessage;
    },
    inputClass: function inputClass() {
      return {
        'mu-input__focus': this.isFocused,
        'has-label': this.label,
        'no-empty-state': this.value,
        'has-icon': this.icon,
        'mu-input__error': this.error,
        'multi-line': this.multiLine,
        'disabled': this.disabled,
        'full-width': this.fullWidth,
        'is-solo': this.solo
      };
    },
    float: function float() {
      return this.labelFloat && !this.isFocused && !this.value && this.value !== 0;
    }
  },
  methods: {
    createIcon: function createIcon(h) {
      if (!this.icon) return;
      return h(Icon, {
        staticClass: 'mu-input-icon',
        props: {
          value: this.icon
        }
      });
    },
    createLabel: function createLabel(h) {
      return !this.solo && this.label ? h('div', {
        staticClass: 'mu-input-label',
        class: {
          float: this.float
        }
      }, this.label) : undefined;
    },
    createUnderline: function createUnderline(h) {
      if (this.solo) return;
      return h('div', [h('div', {
        staticClass: 'mu-input-line',
        class: {
          disabled: this.disabled
        }
      }), this.disabled ? undefined : h('div', {
        staticClass: ['mu-input-focus-line', this.getNormalColorClass(this.underlineColor, false, false)].join(' '),
        class: {
          focus: this.isFocused
        },
        style: {
          'background-color': this.getColor(this.underlineColor)
        }
      })]);
    },
    createHelpText: function createHelpText(h) {
      if (!this.errorText && !this.helpText && !this.maxLength) return;
      return h('div', {
        staticClass: 'mu-input-help'
      }, [h('div', {}, (this.errorText ? this.errorText : this.helpText) || ''), this.maxLength ? h('div', {}, (this.value ? String(this.value).length : 0) + ' / ' + this.maxLength) : undefined]);
    },
    createActionIcon: function createActionIcon(h) {
      var _this = this;

      return this.actionIcon ? h(Icon, {
        staticClass: 'mu-input-action-icon',
        props: {
          value: this.actionIcon
        },
        on: {
          click: function click() {
            return !_this.disabled && _this.actionClick && _this.actionClick();
          }
        }
      }) : undefined;
    },
    createInput: function createInput(h, data, children, defaultAction) {
      data.staticClass = (data.staticClass || '') + ' mu-input-content';
      var isFocus = !this.disabled && !this.errorText && this.isFocused;
      var colorClass = isFocus ? this.getNormalColorClass(this.color, true) : '';
      var color$$1 = isFocus ? this.getColor(this.color) : '';
      return h('div', {
        staticClass: 'mu-input ' + colorClass,
        class: this.inputClass,
        style: {
          color: color$$1
        }
      }, [this.createIcon(h), this.createLabel(h), h('div', data, [this.$slots.prepend, this.prefix && !this.float ? h('span', { staticClass: 'mu-input-prefix-text' }, this.prefix) : undefined].concat(toConsumableArray(children), [this.suffix && !this.float ? h('span', { staticClass: 'mu-input-suffix-text' }, this.suffix) : undefined, defaultAction || this.createActionIcon(h), this.$slots.append, this.createUnderline(h), this.createHelpText(h)]))]);
    }
  },
  watch: {
    isFocused: function isFocused(val) {
      if (!this.muFormItem) return;
      val ? this.muFormItem.onFocus() : this.muFormItem.onBlur();
    }
  }
};

var clickoutsideContext = '@@clickoutsideContext';

var clickOutSide = {
  name: 'click-outside',
  bind: function bind(el, binding, vnode) {
    var documentHandler = function documentHandler(e) {
      if (!vnode.context || el.contains(e.target)) return;
      if (binding.expression) {
        vnode.context[el[clickoutsideContext].methodName](e);
      } else {
        el[clickoutsideContext].bindingFn(e);
      }
    };
    el[clickoutsideContext] = {
      documentHandler: documentHandler,
      methodName: binding.expression,
      bindingFn: binding.value
    };
    setTimeout(function () {
      document.addEventListener('click', documentHandler);
    }, 0);
  },
  update: function update(el, binding) {
    el[clickoutsideContext].methodName = binding.expression;
    el[clickoutsideContext].bindingFn = binding.value;
  },
  unbind: function unbind(el) {
    document.removeEventListener('click', el[clickoutsideContext].documentHandler);
  }
};

var PopoverTheme = (function (theme) {
  return "\n  .mu-popover{\n    background: " + theme.background.paper + ";\n  }\n  ";
});

var bodyScrollLock_min = createCommonjsModule(function (module, exports) {
!function(e,t){if(false)undefined(["exports"],t);else t(exports);}(commonjsGlobal,function(exports){function r(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}Object.defineProperty(exports,"__esModule",{value:!0});var l=!1;if("undefined"!=typeof window){var e={get passive(){l=!0;}};window.addEventListener("testPassive",null,e), window.removeEventListener("testPassive",null,e);}var d="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),c=[],u=!1,a=-1,s=void 0,v=void 0,f=function(t){return c.some(function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))})},m=function(e){var t=e||window.event;return!!f(t.target)||(1<t.touches.length||(t.preventDefault&&t.preventDefault(), !1))},o=function(){setTimeout(function(){void 0!==v&&(document.body.style.paddingRight=v, v=void 0), void 0!==s&&(document.body.style.overflow=s, s=void 0);});};exports.disableBodyScroll=function(i,e){if(d){if(!i)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(i&&!c.some(function(e){return e.targetElement===i})){var t={targetElement:i,options:e||{}};c=[].concat(r(c),[t]), i.ontouchstart=function(e){1===e.targetTouches.length&&(a=e.targetTouches[0].clientY);}, i.ontouchmove=function(e){var t,o,n,r;1===e.targetTouches.length&&(o=i, r=(t=e).targetTouches[0].clientY-a, !f(t.target)&&(o&&0===o.scrollTop&&0<r?m(t):(n=o)&&n.scrollHeight-n.scrollTop<=n.clientHeight&&r<0?m(t):t.stopPropagation()));}, u||(document.addEventListener("touchmove",m,l?{passive:!1}:void 0), u=!0);}}else{n=e, setTimeout(function(){if(void 0===v){var e=!!n&&!0===n.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(v=document.body.style.paddingRight, document.body.style.paddingRight=t+"px");}void 0===s&&(s=document.body.style.overflow, document.body.style.overflow="hidden");});var o={targetElement:i,options:e||{}};c=[].concat(r(c),[o]);}var n;}, exports.clearAllBodyScrollLocks=function(){d?(c.forEach(function(e){e.targetElement.ontouchstart=null, e.targetElement.ontouchmove=null;}), u&&(document.removeEventListener("touchmove",m,l?{passive:!1}:void 0), u=!1), c=[], a=-1):(o(), c=[]);}, exports.enableBodyScroll=function(t){if(d){if(!t)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");t.ontouchstart=null, t.ontouchmove=null, c=c.filter(function(e){return e.targetElement!==t}), u&&0===c.length&&(document.removeEventListener("touchmove",m,l?{passive:!1}:void 0), u=!1);}else 1===c.length&&c[0].targetElement===t?(o(), c=[]):c=c.filter(function(e){return e.targetElement!==t});};});
});

unwrapExports(bodyScrollLock_min);
var bodyScrollLock_min_1 = bodyScrollLock_min.disableBodyScroll;
var bodyScrollLock_min_2 = bodyScrollLock_min.enableBodyScroll;
var bodyScrollLock_min_3 = bodyScrollLock_min.clearAllBodyScrollLocks;

function getSize(size) {
  if (!size) return 0;
  var index = size.indexOf('px');
  if (index === -1) return 0;
  return Number(size.substring(0, index));
}
var ExpandTransition = {
  name: 'mu-expand-transition',
  methods: {
    beforeEnter: function beforeEnter(el) {
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;
      el.style.paddingTop = '0';
      el.style.paddingBottom = '0';
      el.style.height = '0';
    },
    enter: function enter(el) {
      el.style.display = 'block';
      el.style.overflow = 'hidden';
      el.style.height = el.scrollHeight + getSize(el.dataset.oldPaddingTop) + getSize(el.dataset.oldPaddingBottom) + 'px';
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    },
    afterEnter: function afterEnter(el) {
      el.style.display = '';
      // uc浏览器上设置height会闪屏
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    },
    beforeLeave: function beforeLeave(el) {
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;

      el.style.display = 'block';
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px';
      }
      el.style.overflow = 'hidden';
    },
    leave: function leave(el) {
      if (el.scrollHeight !== 0) {
        setTimeout(function () {
          el.style.height = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        });
      }
    },
    afterLeave: function afterLeave(el) {
      el.style.display = 'none';
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
  },
  render: function render(h) {
    return h('transition', {
      props: {
        name: 'mu-expand'
      },
      on: {
        'before-enter': this.beforeEnter,
        enter: this.enter,
        'after-enter': this.afterEnter,
        'before-leave': this.beforeLeave,
        leave: this.leave,
        'after-leave': this.afterLeave
      }
    }, this.$slots.default);
  }
};

function createTransition(name, mode) {
  return {
    name: name,
    functional: true,
    render: function render(h, context) {
      context.data = context.data || {};
      context.data.props = { name: name };
      context.data.on = context.data.on || {};
      if (!Object.isExtensible(context.data.on)) {
        context.data.on = _extends({}, context.data.on);
      }

      if (mode) context.data.props.mode = mode;

      return h('transition', context.data, context.children);
    }
  };
}

var FadeTransition = createTransition('mu-fade-transition');
var SlideTopTransition = createTransition('mu-slide-top-transition');
var SlideBottomTransition = createTransition('mu-slide-bottom-transition');
var SlideLeftTransition = createTransition('mu-slide-left-transition');
var SlideRightTransition = createTransition('mu-slide-right-transition');
var PopoverTransiton = createTransition('mu-popover-transition');
var BottomSheetTransition = createTransition('mu-bottom-sheet-transition');
var ScaleTransition = createTransition('mu-scale-transition');

var overlayOpt = {
  name: 'mu-overlay',
  props: {
    show: Boolean,
    fixed: Boolean,
    onClick: Function,
    opacity: {
      type: Number,
      default: 0.4
    },
    color: String,
    zIndex: Number
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        'opacity': this.opacity,
        'background-color': this.color,
        'position': this.fixed ? 'fixed' : '',
        'z-index': this.zIndex
      };
    }
  },
  methods: {
    prevent: function prevent(event) {
      event.preventDefault();
      event.stopPropagation();
    },
    handleClick: function handleClick() {
      if (this.onClick) {
        this.onClick();
      }
    }
  },
  render: function render(h) {
    return h(FadeTransition, [h('div', {
      staticClass: 'mu-overlay',
      style: this.overlayStyle,
      directives: [{
        name: 'show',
        value: this.show
      }],
      on: {
        click: this.handleClick,
        touchmove: this.prevent
      }
    })]);
  }
};

var Overlay = __WEBPACK_IMPORTED_MODULE_0_vue__["default"].extend(overlayOpt);

var PopupManager = {
  instances: [],
  overlay: false,

  open: function open(instance) {
    if (!instance || this.instances.indexOf(instance) !== -1) return;
    if (!this.overlay && instance.overlay) {
      this.showOverlay(instance);
    }
    this.instances.push(instance);
    this.changeOverlayStyle();
  },
  close: function close(instance) {
    var index = this.instances.indexOf(instance);
    if (index === -1) return;
    this.instances.splice(index, 1);
    this.changeOverlayStyle();
  },
  showOverlay: function showOverlay(instance) {
    var overlay = this.overlay = new Overlay({
      el: document.createElement('div')
    });
    overlay.fixed = true;
    overlay.color = instance.overlayColor;
    overlay.opacity = instance.overlayOpacity;
    overlay.zIndex = instance.overlayZIndex;
    overlay.onClick = this.handleOverlayClick.bind(this);
    document.body.appendChild(overlay.$el);
    if (instance.lockScroll) this.preventScrolling();
    __WEBPACK_IMPORTED_MODULE_0_vue__["default"].nextTick(function () {
      overlay.show = true;
    });
  },

  // 禁止滚动
  preventScrolling: function preventScrolling() {
    var _this = this;

    if (this.locked) return;
    // body 操作
    var body = document.getElementsByTagName('body')[0];
    bodyScrollLock_min_1(body, {
      reserveScrollBarGap: true,
      allowTouchMove: function allowTouchMove(el) {
        for (var i = 0; i < _this.instances.length; i++) {
          if (_this.instances[i] && _this.instances[i].$el && _this.instances[i].$el.contains(el)) {
            return true;
          }
        }
        return false;
      }
    });
    this.locked = true;
  },


  // 还原滚动设置
  allowScrolling: function allowScrolling() {
    var body = document.getElementsByTagName('body')[0];
    bodyScrollLock_min_2(body, {
      reserveScrollBarGap: true
    });
    bodyScrollLock_min_3();
    this.locked = false;
  },
  closeOverlay: function closeOverlay() {
    if (!this.overlay) return;
    this.allowScrolling();
    var overlay = this.overlay;
    overlay.show = false;
    this.overlay = null;
    setTimeout(function () {
      document.body.removeChild(overlay.$el);
      overlay.$destroy();
    }, 450);
  },
  changeOverlayStyle: function changeOverlayStyle() {
    if (!this.overlay) return;
    var instance = void 0;
    for (var i = 1; i <= this.instances.length; i++) {
      instance = this.instances[this.instances.length - i];
      if (instance && instance.overlay) {
        break;
      }
      instance = null;
    }

    if (!instance) return this.closeOverlay();

    if (instance && instance.overlay) {
      this.overlay.color = instance.overlayColor;
      this.overlay.opacity = instance.overlayOpacity;
      this.overlay.zIndex = instance.overlayZIndex;
    }
  },
  handleOverlayClick: function handleOverlayClick() {
    if (this.instances.length === 0) return;
    var instance = this.instances[this.instances.length - 1];
    if (instance.overlayClick) {
      instance.overlayClick();
    }
  }
};

typeof window !== 'undefined' && window.addEventListener('keydown', function (e) {
  if (PopupManager.instances.length === 0 || keycode(e) !== 'esc') return;
  var instance = PopupManager.instances[PopupManager.instances.length - 1];
  if (instance.escPress) {
    instance.escPress();
  }
});

var zIndex = 20141223;

var getZIndex = function getZIndex() {
  return zIndex++;
};

var popup = {
  props: {
    open: Boolean,
    overlay: {
      type: Boolean,
      default: true
    },
    overlayClose: {
      type: Boolean,
      default: true
    },
    overlayOpacity: {
      type: Number,
      default: 0.4
    },
    overlayColor: {
      type: String,
      default: '#000'
    },
    escPressClose: { // 按退出键是否触发关闭事件
      type: Boolean,
      default: true
    },
    lockScroll: { // 是否锁定全局滚动
      type: Boolean,
      default: false
    },
    appendBody: { // 是否添加到 body 元素后, 内部使用
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      overlayZIndex: getZIndex(),
      zIndex: getZIndex()
    };
  },

  methods: {
    overlayClick: function overlayClick(e) {
      if (!this.overlay || !this.overlayClose || !this.open) return;
      this.$emit('update:open', false);
      this.$emit('close', 'overlay');
    },
    escPress: function escPress(e) {
      if (!this.escPressClose || !this.open) return;
      this.$emit('update:open', false);
      this.$emit('close', 'esc');
    },
    resetZIndex: function resetZIndex() {
      this.overlayZIndex = getZIndex();
      this.zIndex = getZIndex();
    },
    popupEl: function popupEl() {
      return this.$el;
    },
    appendPopupElToBody: function appendPopupElToBody() {
      var _this = this;

      if (!this.appendBody || this.appened) return;
      this.$nextTick(function () {
        document.body.appendChild(_this.$el);
        _this.appened = true;
      });
    }
  },
  mounted: function mounted() {
    if (this.open) {
      PopupManager.open(this);
      this.appendPopupElToBody();
    }
  },
  beforeDestroy: function beforeDestroy() {
    PopupManager.close(this);
    if (this.appendBody) {
      if (!this.$el) return;
      if (this.$el.parentNode) this.$el.parentNode.removeChild(this.$el);
    }
  },

  watch: {
    open: function open(val, oldVal) {
      if (val) {
        this.resetZIndex();
        PopupManager.open(this);
        this.appendPopupElToBody();
      } else {
        PopupManager.close(this);
      }
    }
  }
};

function bindScroll(el, binding) {
  var callback = typeof binding.value === 'function' ? binding.value : binding.value.callback;
  var options = binding.value.options || { passive: true };
  var target = binding.value.target || window;
  if (target === 'undefined') return;
  if (target instanceof Element) {
    target = getScrollEventTarget(target);
  } else if (target !== window) {
    target = document.querySelector(target);
  }

  var handleScroll = function handleScroll(e) {
    callback(target, e);
  };
  if (el._onScroll && target !== el._onScroll.target) unbind(el, binding);

  target.addEventListener('scroll', handleScroll, options);

  el._onScroll = {
    callback: handleScroll,
    options: options,
    target: target
  };
}

function unbind(el, binding) {
  var _el$_onScroll = el._onScroll,
      callback = _el$_onScroll.callback,
      options = _el$_onScroll.options,
      target = _el$_onScroll.target;

  if (!target) return;
  target.removeEventListener('scroll', callback, options);
}
var scroll = {
  name: 'scroll',
  inserted: bindScroll,
  update: bindScroll,
  unbind: unbind
};

var resize = {
  name: 'resize',
  inserted: function inserted(el, binding) {
    var cb = binding.value;
    var debounce = 200;
    var callOnLoad = true;

    if (typeof binding.value !== 'function') {
      cb = binding.value.value;
      debounce = binding.value.debounce || debounce;
      callOnLoad = binding.value.quiet !== null ? false : callOnLoad;
    }

    var debounceTimeout = null;
    var onResize = function onResize() {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(cb, debounce);
    };

    window.addEventListener('resize', onResize, { passive: true });
    el._onResize = onResize;

    callOnLoad && onResize();
  },
  unbind: function unbind(el, binding) {
    window.removeEventListener('resize', el._onResize);
  }
};

var SPACE = 8;
var Popover = {
  name: 'mu-popover',
  mixins: [popup],
  directives: {
    scroll: scroll,
    resize: resize,
    'click-outside': clickOutSide
  },
  props: {
    overlay: {
      default: false
    },
    lazy: Boolean,
    cover: Boolean,
    space: {
      type: Number,
      default: 0
    }, // 距离trigger 的间隔, 在cover false的情况下完成
    trigger: {},
    placement: {
      type: String,
      default: 'bottom-start',
      validator: function validator(val) {
        return ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'].indexOf(val) !== -1;
      }
    }
  },
  methods: {
    getLeftPosition: function getLeftPosition(width, react) {
      var left = 0;
      var maxLeft = window.innerWidth - SPACE - width;
      var minLeft = SPACE;
      switch (this.placement) {
        case 'left':
        case 'left-start':
        case 'left-end':
          left = react.left - width - this.space;
          if (this.cover) {
            left += react.width;
          } else if (left < minLeft) {
            left = react.left + react.width + this.space;
          }          break;
        case 'right':
        case 'right-start':
        case 'right-end':
          left = this.cover ? react.left : react.left + react.width > maxLeft ? react.left - width - this.space : react.left + react.width + this.space;
          break;
        case 'top':
        case 'bottom':
          left = react.left + react.width / 2 - width / 2;
          break;
        case 'bottom-start':
        case 'top-start':
          left = react.left;
          break;
        case 'bottom-end':
        case 'top-end':
          left = react.left + react.width - width;
          break;
      }
      left = Math.min(maxLeft, left);
      left = Math.max(minLeft, left);
      return left;
    },
    getTopPosition: function getTopPosition(height, react) {
      var top = 0;
      var maxTop = window.innerHeight - SPACE - height;
      var minTop = SPACE;
      switch (this.placement) {
        case 'top':
        case 'top-start':
        case 'top-end':
          top = react.top - height;
          if (!this.cover) {
            top += this.space;
            if (top < minTop) top = react.top + react.height + this.space;
          } else {
            top += react.height;
          }
          break;
        case 'bottom':
        case 'bottom-start':
        case 'bottom-end':
          top = this.cover ? react.top : react.top + react.height + this.space > maxTop ? react.top - height - this.space : react.top + react.height + this.space;
          break;
        case 'left':
        case 'right':
          top = react.top + react.height / 2 - height / 2;
          break;
        case 'left-start':
        case 'right-start':
          top = react.top;
          break;
        case 'left-end':
        case 'right-end':
          top = react.top + react.height - height;
          break;
      }
      top = Math.min(maxTop, top);
      top = Math.max(minTop, top);
      return top;
    },
    setStyle: function setStyle() {
      if (!this.open) return;
      var el = this.$el;
      var triggerEl = this.trigger;
      if (!el || !triggerEl) return;
      var react = triggerEl.getBoundingClientRect();
      if (react.top < -react.height || react.top > window.innerHeight) this.close('overflow');
      el.style.top = this.getTopPosition(el.offsetHeight, react) + 'px';
      el.style.left = this.getLeftPosition(el.offsetWidth, react) + 'px';
    },
    close: function close(reason) {
      if (!this.open) return;
      this.$emit('update:open', false);
      this.$emit('close', reason);
    },
    clickOutSide: function clickOutSide$$1(e) {
      if (this.trigger && this.trigger.contains(e.target)) return;
      this.close('clickOutSide');
    },
    getTransitionName: function getTransitionName() {
      if (this.cover) return 'transition-' + this.placement;
      return this.placement.indexOf('top') !== -1 || ['left-end', 'right-end'].indexOf(this.placement) !== -1 ? 'transition-top' : 'transition-bottom';
    }
  },
  mounted: function mounted() {
    this.setStyle();
  },
  updated: function updated() {
    var _this = this;

    setTimeout(function () {
      _this.setStyle();
    }, 0);
  },
  render: function render(h) {
    var directives = [{
      name: 'resize',
      value: this.setStyle
    }, {
      name: 'scroll',
      value: {
        target: this.trigger,
        callback: this.setStyle
      }
    }, {
      name: 'click-outside',
      value: this.clickOutSide
    }];
    if (!this.lazy) {
      directives.push({
        name: 'show',
        value: this.open
      });
    }

    var transition = this.getTransitionName();
    return h(PopoverTransiton, [!this.lazy || this.open ? h('div', {
      staticClass: 'mu-popover ' + transition,
      style: {
        'z-index': this.zIndex
      },
      on: this.$listeners,
      directives: directives
    }, this.$slots.default) : undefined]);
  }
};

Popover.install = function (Vue$$1) {
  Vue$$1.component(Popover.name, Popover);
};

theme.addCreateTheme(PopoverTheme);

var ListTheme = (function (theme) {
  return '\n  .mu-item-wrapper.hover {\n    background-color: ' + fade(theme.text.primary, 0.1) + ';\n  }\n  .mu-item {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-item-action {\n    color: ' + theme.text.secondary + ';\n  }\n  .mu-item.is-selected {\n    color: ' + theme.primary + ';\n  }\n  .mu-item-sub-title {\n    color: ' + theme.text.secondary + ';\n  }\n  .mu-item-after-text {\n   color: ' + theme.text.secondary + ';\n  }\n  ';
});

var List = {
  name: 'mu-list',
  provide: function provide() {
    return {
      listItemClick: this.listItemClick,
      getNestedLevel: this.getNestedLevel,
      getToggleNested: this.getToggleNested,
      getToggleNestedType: this.getToggleNestedType,
      getListValue: this.getListValue,
      getNestedIndent: this.getNestedIndent
    };
  },

  props: {
    nestedLevel: {
      type: Number,
      default: 0
    },
    textline: {
      type: String,
      default: '',
      validator: function validator(val) {
        return ['', 'two-line', 'three-line'].indexOf(val) !== -1;
      }
    },
    nestedIndent: {
      type: Boolean,
      default: true
    },
    toggleNested: Boolean,
    toggleNestedType: {
      type: String,
      default: 'expand',
      validator: function validator(val) {
        return ['expand', 'popover'].indexOf !== -1;
      }
    },
    dense: Boolean,
    value: {}
  },
  methods: {
    listItemClick: function listItemClick(item) {
      this.$emit('change', item.value);
      this.$emit('item-click', item);
    },
    getListValue: function getListValue() {
      return this.value;
    },
    getNestedLevel: function getNestedLevel() {
      return this.nestedLevel;
    },
    getNestedIndent: function getNestedIndent() {
      return this.nestedIndent;
    },
    getToggleNested: function getToggleNested() {
      return this.toggleNested;
    },
    getToggleNestedType: function getToggleNestedType() {
      return this.toggleNestedType;
    }
  },
  render: function render(h) {
    var _class;

    return h('ul', {
      staticClass: 'mu-list',
      class: (_class = {}, defineProperty(_class, 'mu-list-' + this.textline, this.textline), defineProperty(_class, 'mu-list-dense', this.dense), _class),
      on: this.$listeners
    }, this.$slots.default);
  }
};

var ListItem = {
  name: 'mu-list-item',
  mixins: [route, ripple],
  inject: ['listItemClick', 'getNestedLevel', 'getNestedIndent', 'getListValue', 'getToggleNested', 'getToggleNestedType'],
  props: {
    button: Boolean,
    nestedListClass: [String, Object, Array],
    open: {
      type: Boolean,
      default: true
    },
    avatar: Boolean,
    nested: Boolean, // 是否允许嵌套
    tabIndex: [String, Number],
    value: {}
  },
  data: function data() {
    return {
      nestedOpen: this.open
    };
  },

  computed: {
    nestedLevel: function nestedLevel() {
      return this.getNestedLevel();
    },
    nestedIndent: function nestedIndent() {
      return this.getNestedIndent();
    },
    toggleNested: function toggleNested() {
      return this.getToggleNested();
    },
    toggleNestedType: function toggleNestedType() {
      return this.getToggleNestedType();
    }
  },
  created: function created() {
    if (this.toggleNestedType === 'popover' && this.nestedOpen) {
      this.nestedOpen = false;
    }
  },

  methods: {
    handleClick: function handleClick(e) {
      this.$emit('click', e);
      this.listItemClick(this);
      if (this.toggleNested) this.handleToggleNested();
    },
    handleKeyboardFocus: function handleKeyboardFocus(isFocus) {
      this.$emit('keyboard-focus', isFocus);
    },
    handleHover: function handleHover(event) {
      this.$emit('hover', event);
    },
    handleHoverExit: function handleHoverExit(event) {
      this.$emit('hover-exit', event);
    },
    handleToggleNested: function handleToggleNested() {
      this.nestedOpen = !this.nestedOpen;
      this.$emit('toggle-nested', this.nestedOpen);
    },
    handleNestedClick: function handleNestedClick(item) {
      this.listItemClick(item);
    },
    createItem: function createItem(h) {
      var listValue = this.getListValue();
      var nestedPadding = this.nestedIndent && this.toggleNestedType === 'expand' ? 18 * this.nestedLevel : 0;
      var itemClass = ['mu-item', this.nestedOpen && this.nested ? 'mu-item__open' : '', this.avatar ? 'has-avatar' : '', this.textline, isNotNull(listValue) && isNotNull(this.value) && listValue === this.value ? 'is-selected' : ''].join(' ');

      return h(AbstractButton, {
        class: 'mu-item-wrapper',
        ref: 'button',
        attrs: {
          tabindex: this.tabIndex
        },
        props: _extends({
          containerElement: this.button ? 'a' : 'div',
          wrapperClass: itemClass,
          wrapperStyle: {
            'margin-left': nestedPadding ? nestedPadding + 'px' : ''
          },
          disabled: !this.button,
          ripple: this.button && this.ripple,
          rippleColor: this.rippleColor,
          rippleOpacity: this.rippleOpacity,
          centerRipple: false
        }, this.generateRouteProps()),
        on: {
          click: this.handleClick,
          keyboardFocus: this.handleKeyboardFocus,
          hover: this.handleHover,
          hoverExit: this.handleHoverExit
        }
      }, this.$slots.default);
    },
    createNestedList: function createNestedList(h) {
      if (!this.nested) return null;
      var list = h(List, {
        class: this.nestedListClass,
        props: {
          nestedIndent: this.nestedIndent,
          toggleNested: this.toggleNested,
          toggleNestedType: this.toggleNestedType,
          nestedLevel: this.nestedLevel + 1,
          value: this.getListValue()
        },
        on: {
          'item-click': this.handleNestedClick
        }
      }, this.$slots.nested);

      switch (this.toggleNestedType) {
        case 'expand':
          return h(ExpandTransition, {}, [this.nestedOpen ? list : undefined]);
        case 'popover':
          return h(Popover, {
            props: {
              open: this.nestedOpen,
              trigger: this.$el,
              appendBody: false,
              placement: 'right-start'
            },
            on: {
              close: this.handleToggleNested
            }
          }, [list]);
      }
      return null;
    }
  },
  render: function render(h) {
    return h('li', [this.createItem(h), this.createNestedList(h)]);
  },

  watch: {
    open: function open(val) {
      this.nestedOpen = val;
    },
    nestedOpen: function nestedOpen(val) {
      this.$emit('update:open', val);
    }
  }
};

var ListAction = {
  name: 'mu-list-item-action',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = 'mu-item-action ' + (children && children.length > 1 ? 'is-more' : '') + ' ' + (data.staticClass || '');
    return h('div', data, children);
  }
};

var ListItemContent = createSimpleFunctional('mu-item-content', 'div', 'mu-list-item-content');
var ListItemTitle = createSimpleFunctional('mu-item-title', 'div', 'mu-list-item-title');
var ListItemSubTitle = createSimpleFunctional('mu-item-sub-title', 'div', 'mu-list-item-sub-title');
var ListItemAfterText = createSimpleFunctional('mu-item-after-text', 'span', 'mu-list-item-after-text');

List.install = function (Vue$$1) {
  Vue$$1.component(List.name, List);
  Vue$$1.component(ListItem.name, ListItem);
  Vue$$1.component(ListAction.name, ListAction);
  Vue$$1.component(ListItemContent.name, ListItemContent);
  Vue$$1.component(ListItemTitle.name, ListItemTitle);
  Vue$$1.component(ListItemSubTitle.name, ListItemSubTitle);
  Vue$$1.component(ListItemAfterText.name, ListItemAfterText);
};

theme.addCreateTheme(ListTheme);

var caseSensitiveFilter = (function () {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var maxSearchResults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var results = [];
  for (var i = 0; i < data.length; i++) {
    var value = getValueByItem(data[i]);
    var index = value.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) continue;
    var before = value.substring(0, index);
    var highlight = value.substring(index, index + query.length);
    var after = value.substring(index + query.length);
    results.push({
      value: value,
      item: data[i],
      highlight: [before, '<span class="mu-secondary-text-color">' + highlight + '</span>', after].join('')
    });
    if (maxSearchResults > 0 && maxSearchResults === results.length) break;
  }
  return results;
});

function getValueByItem(item) {
  if (!item) return '';
  return typeof item === 'string' ? item : item.value;
}

var AutoComplete = {
  name: 'mu-auto-complete',
  mixins: [input],
  directives: {
    'click-outside': clickOutSide
  },
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    maxHeight: {
      type: [String, Number],
      default: 300
    },
    debounce: {
      type: Number,
      default: 200,
      validator: function validator(val) {
        return val > 0;
      }
    },
    filter: {
      type: Function,
      default: caseSensitiveFilter
    },
    maxSearchResults: {
      type: Number,
      default: 0
    },
    openOnFocus: Boolean,
    dense: {
      type: Boolean,
      default: true
    },
    textline: List.props.textline,
    popoverClass: String,
    placement: {
      type: String,
      default: 'bottom-start'
    },
    space: Number,
    avatar: Boolean
  },
  data: function data() {
    return {
      open: false,
      enableData: [],
      focusIndex: -1
    };
  },

  methods: {
    setValue: function setValue(value, item, e) {
      this.open = false;
      this.focusIndex = -1;
      if (!item) return;
      this.$emit('input', value, e);
      this.$emit('select', value, item, e);
      this.$emit('change', value, e);
    },
    onKeydown: function onKeydown(e) {
      if (this.disabled || this.$attrs.readonly) return;
      var code = keycode(e);
      var maxIndex = this.enableData.length - 1;
      var minIndex = 0;
      switch (code) {
        case 'enter':
          if (this.focusIndex === -1) return;
          var _enableData$focusInde = this.enableData[this.focusIndex],
              value = _enableData$focusInde.value,
              item = _enableData$focusInde.item;

          this.setValue(value, item, e);
          break;
        case 'up':
          event.preventDefault();
          if (!this.open) return;
          this.focusIndex--;
          if (this.focusIndex < minIndex) this.focusIndex = maxIndex;
          break;
        case 'down':
          event.preventDefault();
          if (!this.open) return;
          this.focusIndex++;
          if (this.focusIndex > maxIndex) this.focusIndex = minIndex;
          break;
        case 'tab':
          this.blur(e);
          break;
        default:
          this.focusIndex = -1;
          break;
      }
      this.$emit('keydown', e);
    },
    onInput: function onInput(e) {
      var _this = this;

      var value = e.target.value;
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this.filterData(value);
      }, this.debounce);
      this.$emit('input', value, e);
    },
    focus: function focus(e) {
      this.isFocused = true;
      if (this.openOnFocus) this.filterData(this.value);
      this.$emit('focus', e);
    },
    filterData: function filterData(val) {
      var _this2 = this;

      this.open = true;
      var results = this.filter(val, this.data, this.maxSearchResults);
      switch (true) {
        case Array.isArray(results):
          this.enableData = results;
          return;
        case isPromise(results):
          results.then(function (results) {
            _this2.enableData = Array.isArray(results) ? results : [];
          });
          return;
      }
      this.enableData = [];
    },
    blur: function blur(e) {
      this.isFocused = false;
      this.focusIndex = -1;
      this.open = false;
      this.$emit('blur', e);
    },
    setScollPosition: function setScollPosition(index) {
      var _this3 = this;

      if (!this.open) return;
      this.$nextTick(function () {
        var popoverEl = _this3.$refs.list.$el;
        var optionEl = popoverEl.querySelector('.is-focused');
        if (!optionEl) return;
        var optionHeight = optionEl.offsetHeight;
        var scrollTop = optionEl.offsetTop - optionHeight;
        if (scrollTop < optionHeight) scrollTop = 0;
        popoverEl.scrollTop = scrollTop;
      });
    },
    createTextField: function createTextField(h) {
      var _this4 = this;

      var listeners = _extends({}, this.$listeners, {
        input: this.onInput,
        change: function change(e) {
          return _this4.$emit('change', e.target.value, e);
        },
        keydown: this.onKeydown,
        focus: this.focus
      });
      var placeholder = !this.labelFloat ? this.$attrs.placeholder : '';
      return [h('input', {
        staticClass: 'mu-text-field-input',
        ref: 'input',
        attrs: _extends({
          tabindex: 0
        }, this.$attrs, {
          disabled: this.disabled,
          placeholder: placeholder
        }),
        domProps: {
          value: this.value
        },
        on: listeners
      })];
    },
    createContentList: function createContentList(h) {
      var _this5 = this;

      return h(List, {
        staticClass: 'mu-option-list',
        ref: 'list',
        props: {
          dense: this.dense,
          textline: this.textline
        },
        style: {
          'maxHeight': this.maxHeight + 'px'
        }
      }, this.enableData.map(function (item, index) {
        return h(ListItem, {
          staticClass: 'mu-option',
          class: {
            'is-focused': _this5.focusIndex === index
          },
          props: {
            button: true,
            avatar: _this5.avatar
          },
          on: {
            click: function click(e) {
              return _this5.setValue(item.value, item.item, e);
            }
          }
        }, _this5.$scopedSlots.default ? _this5.$scopedSlots.default(_extends({}, item, {
          index: index
        })) : [h('span', {
          domProps: {
            innerHTML: item.highlight
          }
        })]);
      }));
    }
  },
  render: function render(h) {
    var _this6 = this;

    var trigger = this.$refs.input;
    return this.createInput(h, {
      staticClass: 'mu-text-field',
      ref: 'content',
      directives: [{
        name: 'click-outside',
        value: function value(e) {
          if (_this6.$refs.popover.$el.contains(e.target)) return;
          _this6.blur(e);
        }
      }]
    }, [this.createTextField(h), this.$slots.default, h(Popover, {
      staticClass: [this.popoverClass || ''].join(' '),
      props: {
        trigger: trigger,
        placement: this.placement,
        space: this.space,
        open: this.open
      },
      on: {
        close: function close() {
          return _this6.open = false;
        }
      },
      ref: 'popover',
      style: {
        'visibility': this.enableData.length === 0 ? 'hidden' : '',
        'min-width': trigger ? trigger.offsetWidth + 'px' : ''
      }
    }, [this.createContentList(h), this.$slots.popover])]);
  },

  watch: {
    focusIndex: function focusIndex() {
      this.setScollPosition();
    }
  }
};

AutoComplete.install = function (Vue$$1) {
  Vue$$1.component(AutoComplete.name, AutoComplete);
};

var AvatarTheme = (function (theme) {
  return "\n    .mu-avatar {\n      background-color: " + theme.track + ";\n      color: " + theme.text.alternate + ";\n    }\n  ";
});

var Avatar = {
  name: 'mu-avatar',
  mixins: [color],
  props: {
    textColor: String,
    size: {
      type: [Number, String],
      default: 40
    }
  },
  render: function render(h) {
    var size = getWidth(this.size);
    return h('div', {
      staticClass: 'mu-avatar ' + this.getColorClass() + ' ' + this.getTextColorClass(),
      style: {
        width: size,
        height: size,
        'font-size': this.size / 2 + 'px',
        'background-color': this.getColor(this.color),
        'color': this.getColor(this.textColor)
      },
      on: this.$listeners
    }, [h('div', { class: 'mu-avatar-inner' }, this.$slots.default)]);
  }
};

Avatar.install = function (Vue$$1) {
  Vue$$1.component(Avatar.name, Avatar);
};

theme.addCreateTheme(AvatarTheme);

var BadgeTheme = (function (theme) {
  return "\n    .mu-badge{\n      background-color: " + theme.track + ";\n      color: " + theme.text.alternate + ";\n    }\n  ";
});

var Badge = {
  name: 'mu-badge',
  mixins: [color],
  props: {
    content: {
      type: String,
      default: ''
    },
    circle: Boolean,
    badgeClass: [String, Object, Array]
  },
  render: function render(h) {
    var slots = this.$slots;
    var isFloat = slots.default && slots.default.length > 0;
    var badge = h('em', {
      staticClass: 'mu-badge ' + convertClass(this.badgeClass).join(' ') + ' ' + this.getColorClass(),
      style: {
        'background-color': this.getColor(this.color)
      },
      class: {
        'mu-badge-circle': this.circle,
        'mu-badge-float': isFloat
      }
    }, slots.content && slots.content.length > 0 ? slots.content : this.content);

    return h('div', {
      staticClass: 'mu-badge-container',
      on: this.$listeners
    }, [slots.default, badge]);
  }
};

Badge.install = function (Vue$$1) {
  Vue$$1.component(Badge.name, Badge);
};

theme.addCreateTheme(BadgeTheme);

var BottomNavTheme = (function (theme) {
  return '\n  .mu-bottom-nav{\n    background-color: ' + theme.background.paper + ';\n  }\n\n  .mu-bottom-nav-shift{\n    background-color: ' + theme.primary + ';\n  }\n  .mu-bottom-item {\n    color: ' + theme.text.secondary + ';\n  }\n  .mu-bottom-nav-shift .mu-bottom-item {\n    color: ' + fade(theme.text.alternate, 0.7) + ';\n  }\n  .mu-bottom-item-active .mu-bottom-item-icon,\n  .mu-bottom-item-active .mu-bottom-item-text {\n    color: ' + theme.primary + ';\n  }\n  .mu-bottom-nav-shift .mu-bottom-item-active .mu-bottom-item-icon,\n  .mu-bottom-nav-shift .mu-bottom-item-active .mu-bottom-item-text {\n    color: ' + theme.text.alternate + ';\n  }\n  ';
});

var BottomNav = {
  name: 'mu-bottom-nav',
  mixins: [color],
  provide: function provide() {
    return {
      getBottomNavValue: this.getBottomNavValue,
      getBottomNavShift: this.getBottomNavShift,
      bottomNavItemClick: this.bottomNavItemClick,
      getDefaultVal: this.getDefaultVal,
      getActiveColor: this.getActiveColor
    };
  },

  props: {
    shift: Boolean,
    value: {}
  },
  data: function data() {
    return {
      activeValue: this.value || 0
    };
  },

  methods: {
    getBottomNavValue: function getBottomNavValue() {
      return this.activeValue;
    },
    getBottomNavShift: function getBottomNavShift() {
      return this.shift;
    },
    getDefaultVal: function getDefaultVal() {
      if (!this.index) this.index = 0;
      return this.index++;
    },
    getActiveColor: function getActiveColor() {
      return {
        className: this.getNormalColorClass(this.color, true),
        color: this.getColor(this.color)
      };
    },
    bottomNavItemClick: function bottomNavItemClick(value) {
      this.activeValue = value;
    }
  },
  watch: {
    value: function value(val) {
      this.activeValue = val;
    },
    activeValue: function activeValue(val) {
      if (val === this.value) return;
      this.$emit('update:value', val);
      this.$emit('change', val);
    }
  },
  render: function render(h) {
    return h(AbstractButton, {
      class: defineProperty({
        'mu-bottom-nav': true,
        'mu-bottom-nav-shift': this.shift
      }, this.getColorClass(false), this.shift),
      style: {
        'background-color': this.shift ? this.getColor(this.color) : ''
      },
      props: {
        ripple: this.shift,
        wrapperClass: 'mu-bottom-nav-shift-wrapper',
        containerElement: 'div',
        rippleOpacity: 0.3
      }
    }, this.$slots.default);
  }
};

var BottomNavItem = {
  name: 'mu-bottom-nav-item',
  mixins: [route, ripple],
  inject: ['getBottomNavValue', 'getBottomNavShift', 'getDefaultVal', 'bottomNavItemClick', 'getActiveColor'],
  props: {
    icon: String,
    title: String,
    value: {}
  },
  data: function data() {
    return {
      itemVal: null
    };
  },
  created: function created() {
    this.itemVal = isNotNull(this.value) ? this.value : this.getDefaultVal();
  },

  computed: {
    active: function active() {
      return this.getBottomNavValue() === this.itemVal;
    },
    activeClassName: function activeClassName() {
      return this.getActiveColor().className;
    },
    activeColor: function activeColor() {
      return this.getActiveColor().color;
    },
    shift: function shift() {
      return this.getBottomNavShift();
    }
  },
  methods: {
    handleClick: function handleClick() {
      this.bottomNavItemClick(this.itemVal);
    }
  },
  watch: {
    value: function value(val) {
      this.itemVal = val;
    }
  },
  render: function render(h) {
    var icon = this.icon ? h(Icon, { class: 'mu-bottom-item-icon', props: { value: this.icon } }) : undefined;
    var title = this.title ? h('span', { staticClass: 'mu-bottom-item-text' }, this.title) : undefined;
    return h(AbstractButton, {
      staticClass: 'mu-bottom-item',
      class: defineProperty({
        'mu-bottom-item-active': this.active,
        'is-shift': this.active && this.shift
      }, this.activeClassName, !this.shift && this.active),
      style: {
        color: !this.shift && this.active ? this.activeColor : ''
      },
      props: _extends({
        ripple: !this.shift && this.ripple,
        containerElement: 'div',
        wrapperClass: 'mu-bottom-item-wrapper'
      }, this.generateRouteProps()),
      on: {
        click: this.handleClick
      }
    }, [icon, title]);
  }
};

BottomNav.install = function (Vue$$1) {
  Vue$$1.component(BottomNav.name, BottomNav);
  Vue$$1.component(BottomNavItem.name, BottomNavItem);
};

theme.addCreateTheme(BottomNavTheme);

var BottomSheetTheme = (function (theme) {
  return "\n    .mu-bottom-sheet {\n      background-color: " + theme.background.paper + ";\n    }\n  ";
});

var BottomSheet = {
  name: 'mu-bottom-sheet',
  mixins: [popup],
  props: {
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  render: function render(h) {
    return h(BottomSheetTransition, [this.open ? h('div', {
      staticClass: 'mu-bottom-sheet',
      style: {
        'z-index': this.zIndex
      }
    }, this.$slots.default) : undefined]);
  }
};

BottomSheet.install = function (Vue$$1) {
  Vue$$1.component(BottomSheet.name, BottomSheet);
};

theme.addCreateTheme(BottomSheetTheme);

var BreadcrumbsTheme = (function (theme) {
  return "\n  .mu-breadcrumbs-item {\n    color: " + theme.primary + ";\n  }\n  .mu-breadcrumbs-item.is-disabled {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-breadcrumbs-divider {\n    color: " + theme.text.disabled + ";\n  }\n  ";
});

var Breadcrumbs = {
  name: 'mu-breadcrumbs',
  props: {
    divider: {
      type: String,
      default: '/'
    }
  },
  methods: {
    createChildren: function createChildren(h) {
      var _this = this;

      if (!this.$slots.default) return;
      var divider = this.$slots.divider ? this.$slots.divider : this.divider;
      var children = [];
      var length = this.$slots.default.length;
      var dividerData = { staticClass: 'mu-breadcrumbs-divider' };

      this.$slots.default.forEach(function (el, i) {
        children.push(el);
        if (!el.componentOptions || el.componentOptions.tag !== 'mu-breadcrumbs-item' || i === length - 1) return;

        children.push(_this.$createElement('li', dividerData, divider));
      });
      return children;
    }
  },
  render: function render(h) {
    return h('ul', {
      staticClass: 'mu-breadcrumbs',
      on: this.$listeners
    }, this.createChildren(h));
  }
};

var BreadcrumbsItem = {
  name: 'mu-breadcrumbs-item',
  mixins: [route],
  props: {
    disabled: Boolean
  },
  render: function render(h) {
    var props = this.to ? this.generateRouteProps() : {
      href: this.href
    };
    return h('li', {
      staticClass: 'mu-breadcrumbs-item',
      class: this.disabled ? 'is-disabled' : ''
    }, [h(this.to ? 'router-link' : 'a', {
      props: props
    }, this.$slots.default)]);
  }
};

Breadcrumbs.install = function (Vue$$1) {
  Vue$$1.component(Breadcrumbs.name, Breadcrumbs);
  Vue$$1.component(BreadcrumbsItem.name, BreadcrumbsItem);
};

theme.addCreateTheme(BreadcrumbsTheme);

var CardTheme = (function (theme) {
  return '\n    .mu-card {\n      background-color: ' + theme.background.paper + ';\n    }\n    .mu-card-header-title .mu-card-title{\n      color: ' + fade(theme.text.primary, 0.87) + ';\n    }\n    .mu-card-header-title .mu-card-sub-title{\n      color: ' + fade(theme.text.primary, 0.57) + ';\n    }\n    .mu-card-text{\n      color: ' + theme.text.primary + ';\n    }\n    .mu-card-title-container .mu-card-title{\n      color: ' + theme.text.primary + ';\n    }\n    .mu-card-title-container .mu-card-sub-title {\n      color: ' + theme.text.secondary + ';\n    }\n  ';
});

var Card = {
  name: 'mu-card',
  props: {
    raised: Boolean
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-card',
      class: {
        'mu-card__raised': this.raised
      },
      on: this.$listeners
    }, this.$slots.default);
  }
};

var CardHeader = {
  name: 'mu-card-header',
  functional: true,
  props: {
    title: String,
    subTitle: String
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        slots = _ref.slots;

    slots = slots();
    var title = props.title || props.subTitle ? h('div', {
      staticClass: 'mu-card-header-title'
    }, [h('div', { staticClass: 'mu-card-title' }, props.title), h('div', { staticClass: 'mu-card-sub-title' }, props.subTitle)]) : undefined;

    data.staticClass = (data.staticClass || '') + ' mu-card-header';
    return h('div', data, [slots.avatar, title, slots.default]);
  }
};

var CardMedia = {
  name: 'mu-card-media',
  functional: true,
  props: {
    title: String,
    subTitle: String
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    var title = props.title || props.subTitle ? h('div', {
      staticClass: 'mu-card-media-title'
    }, [h('div', { staticClass: 'mu-card-title' }, props.title), h('div', { staticClass: 'mu-card-sub-title' }, props.subTitle)]) : undefined;

    data.staticClass = (data.staticClass || '') + ' mu-card-media';
    return h('div', data, [children, title]);
  }
};

var CardTitle = {
  name: 'mu-card-title',
  functional: true,
  props: {
    title: String,
    subTitle: String
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props;

    data.staticClass = (data.staticClass || '') + ' mu-card-title-container';
    return h('div', data, [h('div', { staticClass: 'mu-card-title' }, props.title), h('div', { staticClass: 'mu-card-sub-title' }, props.subTitle)]);
  }
};

var CardActions = createSimpleFunctional('mu-card-actions', 'div', 'mu-card-actions');
var CardText = createSimpleFunctional('mu-card-text', 'div', 'mu-card-text');

Card.install = function (Vue$$1) {
  Vue$$1.component(Card.name, Card);
  Vue$$1.component(CardHeader.name, CardHeader);
  Vue$$1.component(CardMedia.name, CardMedia);
  Vue$$1.component(CardTitle.name, CardTitle);
  Vue$$1.component(CardActions.name, CardActions);
  Vue$$1.component(CardText.name, CardText);
};

theme.addCreateTheme(CardTheme);

var IS_TOUCH = typeof window !== 'undefined' && ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);

var Drag = function () {
  function Drag(element, onlyTouch) {
    classCallCheck(this, Drag);

    this.el = element;
    this.startPos = {};
    this.endPos = {};
    this.starts = [];
    this.drags = [];
    this.ends = [];
    this.onlyTouch = onlyTouch;
    if (IS_TOUCH || onlyTouch) {
      this.el.addEventListener('touchstart', this);
    } else {
      this.el.addEventListener('mousedown', this);
    }
  }

  createClass(Drag, [{
    key: 'handleEvent',
    value: function handleEvent(event) {
      switch (event.type) {
        case 'touchstart':
          this.touchStart(event);
          break;
        case 'touchmove':
          this.touchMove(event);
          break;
        case 'touchcancel':
        case 'touchend':
          this.touchEnd(event);
          break;
        case 'mousedown':
          this.mouseStart(event);
          break;
        case 'mousemove':
          this.mouseMove(event);
          break;
        case 'mouseleave':
        case 'mouseup':
          this.mouseEnd(event);
          break;
      }
    }
  }, {
    key: 'touchStart',
    value: function touchStart(event) {
      var _this = this;

      var touch = event.touches[0];
      this.startPos = { // 取第一个touch的坐标值
        x: touch.pageX,
        y: touch.pageY,
        time: new Date().getTime()
      };
      this.endPos = {};
      document.addEventListener('touchmove', this, {
        passive: false
      });
      document.addEventListener('touchend', this, {
        passive: false
      });
      this.starts.map(function (func) {
        func.call(_this, _this.startPos, event);
      });
    }
  }, {
    key: 'touchMove',
    value: function touchMove(event) {
      var _this2 = this;

      if (event.touches.length > 1 || event.scale && event.scale !== 1) return;
      var touch = event.touches[0];
      this.endPos = {
        x: touch.pageX - this.startPos.x,
        y: touch.pageY - this.startPos.y,
        time: new Date().getTime() - this.startPos.time
      };
      this.drags.map(function (func) {
        func.call(_this2, _this2.endPos, event);
      });
    }
  }, {
    key: 'touchEnd',
    value: function touchEnd(event) {
      var _this3 = this;

      this.endPos.time = new Date().getTime() - this.startPos.time;

      document.removeEventListener('touchmove', this);
      document.removeEventListener('touchend', this);
      this.ends.map(function (func) {
        func.call(_this3, _this3.endPos, event);
      });
    }
  }, {
    key: 'mouseStart',
    value: function mouseStart(event) {
      var _this4 = this;

      this.startPos = {
        x: event.clientX,
        y: event.clientY,
        time: new Date().getTime()
      };
      this.endPos = {};
      document.addEventListener('mousemove', this);
      document.addEventListener('mouseup', this);
      this.starts.map(function (func) {
        func.call(_this4, _this4.startPos, event);
      });
    }
  }, {
    key: 'mouseMove',
    value: function mouseMove(event) {
      var _this5 = this;

      this.endPos = {
        x: event.clientX - this.startPos.x,
        y: event.clientY - this.startPos.y
      };

      this.drags.map(function (func) {
        func.call(_this5, _this5.endPos, event);
      });
    }
  }, {
    key: 'mouseEnd',
    value: function mouseEnd(event) {
      var _this6 = this;

      document.removeEventListener('mousemove', this);
      document.removeEventListener('mouseup', this);

      this.endPos.time = new Date().getTime() - this.startPos.time;

      this.ends.map(function (func) {
        func.call(_this6, _this6.endPos, event);
      });
    }
  }, {
    key: 'start',
    value: function start(fun) {
      this.starts.push(fun);
      return this;
    }
  }, {
    key: 'end',
    value: function end(fun) {
      this.ends.push(fun);
      return this;
    }
  }, {
    key: 'drag',
    value: function drag(fun) {
      this.drags.push(fun);
      return this;
    }
  }, {
    key: 'reset',
    value: function reset(event) {
      var touch = event.touches ? event.touches[0] : {};
      this.startPos = { // 取第一个touch的坐标值
        x: touch.pageX || event.clientX,
        y: touch.pageY || event.clientY,
        time: new Date().getTime()
      };
      this.endPos = {
        x: 0,
        y: 0
      };
    }
  }, {
    key: 'destory',
    value: function destory() {
      if (IS_TOUCH || this.onlyTouch) {
        this.el.removeEventListener('touchstart', this);
      } else {
        this.el.removeEventListener('mousedown', this);
      }
    }
  }]);
  return Drag;
}();

function inserted(el, _ref) {
  var value = _ref.value,
      modifiers = _ref.modifiers;

  var drag = new Drag(el, modifiers.touch);
  el._drag = drag;
  drag.start(function (pos, e) {
    value.start && value.start(pos, drag, e);
  });
  drag.drag(function (pos, e) {
    value.move && value.move(pos, drag, e);
  });
  drag.end(function (pos, e) {
    value.end && value.end(pos, drag, e);
    var dirRatio = 0.5;
    var minDistance = 16;
    if (Math.abs(pos.y) < dirRatio * Math.abs(pos.x)) {
      value.left && pos.x < -minDistance && value.left(pos, drag, e);
      value.right && pos.x > minDistance && value.right(pos, e);
    }

    if (Math.abs(pos.x) < dirRatio * Math.abs(pos.y)) {
      value.up && pos.y < -minDistance && value.up(pos, drag, e);
      value.down && pos.y > minDistance && value.down(pos, drag, e);
    }
  });
}
function unbind$1(el) {
  if (el._drag) el._drag.destory();
  el._drag = null;
}

var swipe = {
  name: 'swipe',
  inserted: inserted,
  unbind: unbind$1
};

var Carousel = {
  name: 'mu-carousel',
  directives: {
    swipe: swipe
  },
  provide: function provide() {
    return {
      addCarouselItem: this.addCarouselItem,
      removeCarouselItem: this.removeCarouselItem,
      isCarouselActive: this.isCarouselActive,
      getCarouselTransition: this.getTransition
    };
  },

  props: {
    active: {
      type: Number,
      default: 0
    },
    cycle: {
      type: Boolean,
      default: true
    },
    interval: {
      type: [Number, String],
      default: 6000,
      validator: function validator(value) {
        return value > 0;
      }
    },
    transition: {
      type: String,
      default: 'slide',
      validator: function validator(val) {
        return ['slide', 'fade'].indexOf(val) !== -1;
      }
    },
    hideIndicators: Boolean,
    hideControls: Boolean
  },
  data: function data() {
    return {
      items: [],
      inverse: false,
      activeIndex: this.active
    };
  },
  mounted: function mounted() {
    this.startAutoNext();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.timer) clearInterval(this.timer);
  },

  methods: {
    getTransition: function getTransition() {
      return this.transition;
    },
    addCarouselItem: function addCarouselItem(item) {
      var index = this.$children.indexOf(item);
      return index === -1 ? this.items.push(item) : this.items.splice(index, 0, item);
    },
    removeCarouselItem: function removeCarouselItem(item) {
      var index = this.items.indexOf(item);
      if (index === -1) return;
      this.items.splice(index, 1);
    },
    isCarouselActive: function isCarouselActive(item) {
      return this.items.indexOf(item) === this.activeIndex;
    },
    startAutoNext: function startAutoNext() {
      var _this = this;

      if (this.timer) clearInterval(this.timer);
      if (!this.cycle) return;
      this.timer = setInterval(function () {
        return _this.next();
      }, this.interval > 0 ? this.interval : 6000);
    },
    next: function next() {
      var maxIndex = this.items.length - 1;
      var index = this.activeIndex + 1;
      if (index > maxIndex) index = 0;
      this.activeIndex = index;
      this.inverse = false;
    },
    prev: function prev() {
      var index = this.activeIndex - 1;
      if (index < 0) index = this.items.length - 1;
      this.activeIndex = index;
      this.inverse = true;
    },
    changeActiveIndex: function changeActiveIndex(index) {
      if (index !== this.activeIndex) {
        this.inverse = this.activeIndex > index;
        this.activeIndex = index;
      }
    },
    createControls: function createControls(h) {
      if (this.hideControls) return [];
      return [h(Button, {
        class: 'mu-carousel-button mu-carousel-button__left',
        props: {
          icon: true
        },
        on: {
          click: this.prev
        }
      }, [this.$slots.left && this.$slots.left.length > 0 ? this.$slots.left : h('svg', {
        staticClass: 'mu-carousel-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
        }
      }), h('path', {
        attrs: {
          d: 'M0 0h24v24H0z',
          fill: 'none'
        }
      })])]), h(Button, {
        class: 'mu-carousel-button mu-carousel-button__right',
        props: {
          icon: true
        },
        on: {
          click: this.next
        }
      }, [this.$slots.right && this.$slots.right.length > 0 ? this.$slots.right : h('svg', {
        staticClass: 'mu-carousel-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
        }
      }), h('path', {
        attrs: {
          d: 'M0 0h24v24H0z',
          fill: 'none'
        }
      })])])];
    },
    createIndicators: function createIndicators(h) {
      var _this2 = this;

      if (this.hideIndicators) return;
      return h('div', {
        staticClass: 'mu-carousel-indicators'
      }, this.items.map(function (item, index) {
        var active = index === _this2.activeIndex;
        return _this2.$scopedSlots.indicator ? _this2.$scopedSlots.indicator({ index: index, active: active }) : h(Button, {
          staticClass: 'mu-carousel-indicator-button',
          class: {
            'mu-carousel-indicator-button__active': active
          },
          props: {
            icon: true
          },
          on: {
            click: function click() {
              return _this2.changeActiveIndex(index);
            }
          }
        }, [h('span', {
          staticClass: 'mu-carousel-indicator-icon'
        })]);
      }));
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-carousel',
      class: {
        'mu-carousel__transition_inverse': this.inverse
      },
      directives: [{
        name: 'swipe',
        value: {
          left: this.next,
          right: this.prev
        },
        modifiers: {
          touch: true
        }
      }]
    }, [].concat(toConsumableArray(this.createControls(h)), [this.createIndicators(h), this.$slots.default]));
  },

  watch: {
    activeIndex: function activeIndex(val) {
      this.startAutoNext();
      this.$emit('change', val);
      this.$emit('update:active', val);
    },
    active: function active(val) {
      this.changeActiveIndex(val);
    },
    cycle: function cycle() {
      this.startAutoNext();
    },
    interval: function interval() {
      this.startAutoNext();
    }
  }
};

var CarouselItem = {
  name: 'mu-carousel-item',
  inject: ['addCarouselItem', 'removeCarouselItem', 'isCarouselActive', 'getCarouselTransition'],
  data: function data() {
    return {
      classes: []
    };
  },

  computed: {
    active: function active() {
      return this.isCarouselActive(this);
    },
    transition: function transition() {
      return this.getCarouselTransition();
    }
  },
  created: function created() {
    this.addCarouselItem(this);
  },
  beforeDestroy: function beforeDestroy() {
    this.removeCarouselItem(this);
  },
  render: function render(h) {
    return h('transition', {
      props: {
        name: 'mu-carousel-' + this.transition
      }
    }, [h('div', {
      staticClass: 'mu-carousel-item',
      class: [].concat(toConsumableArray(this.classes)),
      directives: [{
        name: 'show',
        value: this.active
      }]
    }, this.$slots.default)]);
  }
};

Carousel.install = function (Vue$$1) {
  Vue$$1.component(Carousel.name, Carousel);
  Vue$$1.component(CarouselItem.name, CarouselItem);
};

var CheckboxTheme = (function (theme) {
  return "\n  .mu-checkbox {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-checkbox.disabled {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-checkbox-checked {\n    color: " + theme.primary + ";\n  }\n  .mu-checkbox.disabled .mu-checkbox-label {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-checkbox-label {\n    color: " + theme.text.primary + ";\n  }\n  ";
});

function select () {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'checkbox';
  // checkbox
  var iconProps = type === 'switch' ? {} : { uncheckIcon: String, checkedIcon: String };
  return {
    mixins: [color, ripple],
    inheritAttrs: false,
    inject: {
      muFormItem: {
        default: ''
      }
    },
    model: {
      prop: 'inputValue',
      event: 'change'
    },
    props: _extends({
      label: String,
      labelLeft: Boolean,
      readonly: Boolean
    }, iconProps, {
      disabled: Boolean,
      tabIndex: [Number, String]
    }),
    methods: {
      start: function start(event) {
        if (this.disabled) return;
        if (this.ripple && (event.type !== 'mousedown' || event.button === 0)) {
          this.$refs.ripple.start(event);
        }
        this.$emit(event.type, event);
      },
      end: function end(event) {
        if (this.disabled) return;
        if (this.ripple) this.$refs.ripple.end();
        if (event) this.$emit(event.type, event);
      },
      handleClick: function handleClick(e) {
        if (this.disabled || this.readonly) return;
        this.end();
        this.toggle();
        if (!this) return; // #1136
        this.muFormItem && this.muFormItem.onBlur();
        this.$emit('click', e);
      },
      handleKeydown: function handleKeydown(e) {
        if (this.disabled) return;
        this.end(e);
        if (keycode(e) === 'enter' && !this.readonly) this.handleClick(e);
      },
      createRipple: function createRipple(h, staticClass, children) {
        return this.disabled || !this.ripple ? h('div', {
          staticClass: staticClass
        }, children) : h(TouchRipple, {
          staticClass: staticClass,
          props: {
            rippleWrapperClass: 'mu-' + type + '-ripple-wrapper',
            centerRipple: true,
            color: this.rippleColor,
            opacity: this.rippleOpacity
          },
          ref: 'ripple'
        }, children);
      },
      createInputElement: function createInputElement(h) {
        return h('input', {
          attrs: _extends({}, this.$attrs, {
            type: type === 'switch' ? 'checkbox' : type,
            disabled: this.disabled,
            checked: this.checked,
            readonly: this.readonly,
            tabindex: -1
          })
        });
      },
      createSelect: function createSelect(h, view) {
        var _class;

        var colorClass = this.getNormalColorClass(this.color, true);
        var label = this.label ? h('div', { staticClass: 'mu-' + type + '-label' }, this.label) : undefined;
        var wrapper = h('div', {
          staticClass: 'mu-' + type + '-wrapper'
        }, this.labelLeft ? [label, view] : [view, label]);

        return h('div', {
          staticClass: 'mu-' + type + ' ' + (this.checked ? colorClass : ''),
          attrs: {
            tabindex: this.disabled ? -1 : this.tabIndex ? this.tabIndex : 0
          },
          style: {
            color: this.checked && !this.disabled ? this.getColor(this.color) : ''
          },
          class: (_class = {
            'label-left': this.labelLeft,
            'disabled': this.disabled
          }, defineProperty(_class, 'mu-' + type + '-checked', this.checked), defineProperty(_class, 'no-label', !this.label), _class),
          on: _extends({}, this.$listeners, {
            click: this.handleClick,
            keydown: this.handleKeydown,
            mousedown: this.start,
            mouseleave: this.end,
            mouseup: this.end,
            touchstart: this.start,
            touchend: this.end,
            touchcancel: this.end,
            focus: this.start,
            blur: this.end
          })
        }, [this.createInputElement(h), wrapper]);
      }
    }
  };
}

var Checkbox = {
  name: 'mu-checkbox',
  mixins: [select('checkbox')],
  props: {
    inputValue: [Boolean, Array]
  },
  computed: {
    checked: function checked() {
      if (!this.inputValue) return false;
      var inputValue = this.inputValue;
      var value = this.$attrs.value;
      if (inputValue instanceof Array) return inputValue.indexOf(value) !== -1;
      return inputValue;
    }
  },
  methods: {
    toggle: function toggle() {
      var inputValue = this.inputValue;
      var value = this.$attrs.value;
      if (!inputValue || typeof inputValue === 'boolean') {
        this.$emit('change', !inputValue);
        return;
      }
      if (this.checked) {
        inputValue.splice(inputValue.indexOf(value), 1);
        this.$emit('change', inputValue);
      } else {
        this.$emit('change', [].concat(toConsumableArray(inputValue), [value]));
      }
    }
  },
  render: function render(h) {
    var defaultSvgUnCheckIcon = h('svg', {
      staticClass: 'mu-checkbox-icon-uncheck mu-checkbox-svg-icon',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [h('path', {
      attrs: {
        d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'
      }
    })]);
    var defaultSvgCheckedIcon = h('svg', {
      staticClass: 'mu-checkbox-icon-checked mu-checkbox-svg-icon',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [h('path', {
      attrs: {
        d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
      }
    })]);
    var view = this.createRipple(h, 'mu-checkbox-icon', [this.uncheckIcon ? h(Icon, {
      staticClass: 'mu-checkbox-icon-uncheck',
      props: {
        value: this.uncheckIcon
      }
    }) : defaultSvgUnCheckIcon, this.checkedIcon ? h(Icon, {
      staticClass: 'mu-checkbox-icon-checked',
      props: {
        value: this.checkedIcon
      }
    }) : defaultSvgCheckedIcon]);
    return this.createSelect(h, view);
  }
};

Checkbox.install = function (Vue$$1) {
  Vue$$1.component(Checkbox.name, Checkbox);
};

theme.addCreateTheme(CheckboxTheme);

var ChipTheme = (function (theme) {
  return '\n  .mu-chip {\n    background-color: ' + theme.background.chip + ';\n    color: ' + theme.text.primary + ';\n  }\n  .mu-chip:hover .mu-chip-delete-icon{\n    color: ' + fade(fade(theme.text.primary, 0.26), 0.4) + ';\n  }\n  .mu-chip-delete-icon{\n    color: ' + fade(theme.text.primary, 0.26) + ';\n  }\n  .mu-chip:active,\n  .mu-chip:focus,\n  .mu-chip.is-deletable {\n    background-color: ' + emphasize(theme.background.chip, 0.08) + ';\n  }\n  .mu-chip:hover{\n    background-color: ' + emphasize(theme.background.chip, 0.08) + ';\n  }\n  .mu-chip.mu-primary-color {\n    background-color: ' + theme.primary + ';\n  }\n  .mu-chip.mu-secondary-color {\n    background-color: ' + theme.secondary + ';\n  }\n  .mu-chip.mu-success-color {\n    background-color: ' + theme.success + ';\n  }\n  .mu-chip.mu-warning-color {\n    background-color: ' + theme.warning + ';\n  }\n  .mu-chip.mu-info-color {\n    background-color: ' + theme.info + ';\n  }\n  .mu-chip.mu-error-color {\n    background-color: ' + theme.error + ';\n  }\n  ';
});

var Chip = {
  name: 'mu-chip',
  mixins: [color],
  props: {
    delete: Boolean,
    selected: Boolean,
    textColor: String
  },
  methods: {
    handleDelete: function handleDelete(e) {
      e.stopPropagation();
      this.$emit('delete');
    }
  },
  render: function render(h) {
    var svgDeleteIcon = h('svg', {
      staticClass: 'mu-chip-delete-icon',
      attrs: {
        viewBox: '0 0 24 24'
      },
      on: {
        click: this.handleDelete
      }
    }, [h('path', {
      attrs: {
        d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
      }
    })]);

    return h('span', {
      staticClass: 'mu-chip ' + this.getColorClass() + ' ' + this.getTextColorClass(),
      class: {
        'is-deletable': this.selected
      },
      attrs: {
        tabindex: 0
      },
      style: {
        color: this.getColor(this.textColor),
        backgroundColor: this.getColor(this.color)
      },
      on: this.$listeners
    }, [this.$slots.default, this.delete ? svgDeleteIcon : undefined]);
  }
};

Chip.install = function (Vue$$1) {
  Vue$$1.component(Chip.name, Chip);
};

theme.addCreateTheme(ChipTheme);

var tabPressed$1 = false;
var listening$1 = false;

function listenForTabPresses$1() {
  if (!listening$1) {
    typeof window !== 'undefined' && window.addEventListener('keydown', function (event) {
      tabPressed$1 = keycode(event) === 'tab';
    });
    listening$1 = true;
  }
}

var keyboardcontext = '@@keyboardcontext';
var keyboardFocus = {
  name: 'keyboard-focus',
  bind: function bind(el, binding, vnode) {
    listenForTabPresses$1();
    var timer = void 0;
    var handleFocus = function handleFocus(e) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        if (tabPressed$1) {
          if (binding.expression) {
            vnode.context[el[keyboardcontext].methodName](e);
          } else {
            el[keyboardcontext].bindingFn(e);
          }
          tabPressed$1 = false;
        }
      }, 150);
    };

    el[keyboardcontext] = {
      handleFocus: handleFocus,
      methodName: binding.expression,
      bindingFn: binding.value
    };
    el.addEventListener('focus', handleFocus);
    el.addEventListener('blur', function () {
      if (timer) clearTimeout(timer);
    });
  },
  update: function update(el, binding) {
    el[keyboardcontext].methodName = binding.expression;
    el[keyboardcontext].bindingFn = binding.value;
  },
  unbind: function unbind(el) {
    el.removeEventListener('focus', el[keyboardcontext].handleFocus);
  }
};

var PickerTheme = (function (theme, type) {
  return '\n  .mu-picker {\n    color: ' + theme.primary + ';\n    background-color: ' + theme.background.paper + ';\n  }\n  .mu-picker-display {\n    background-color: ' + (type === 'dark' ? '#555555' : 'currentColor') + ';\n  }\n  .mu-datepicker-week,\n  .mu-datepicker-toolbar-title,\n  .mu-datepicker-tool-btn,\n  .mu-datepicker-svg-icon,\n  .mu-day-button-text,\n  .mu-month-button-text,\n  .mu-year-button-text,\n  .mu-timepicker-number {\n    color: ' + theme.text.primary + ';\n  }\n\n  .mu-day-button:hover:not(:disabled) .mu-day-button-text,\n  .mu-day-button.selected .mu-day-button-text{\n    color: ' + theme.text.alternate + ';\n  }\n\n  .mu-month-button:hover .mu-month-button-text,\n  .mu-month-button.selected .mu-month-button-text {\n    color: ' + theme.text.alternate + ';\n  }\n  .mu-month-button:disabled .mu-month-button-text {\n    color: ' + theme.text.disabled + ';\n  }\n\n  .mu-timepicker-number__selected {\n    background-color: ' + theme.primary + ';\n    color: ' + theme.text.alternate + ';\n  }\n\n  .mu-timepicker-pointer-mark {\n     background-color: ' + theme.text.alternate + ';\n  }\n  .mu-timepicker-list-hours {\n    border-right-color: ' + theme.divider + ';\n  }\n  .mu-timepicker-hour-button,\n  .mu-timepicker-minute-button {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-timepicker-hour-button:hover,\n  .mu-timepicker-minute-button:hover,\n  .mu-year-button:hover {\n    background-color: ' + fade(theme.text.primary, 0.1) + ';\n  }\n  .mu-datetime-picker .mu-tabs {\n    background-color: ' + (type === 'dark' ? '#555555' : '') + ';\n    color: ' + (type === 'dark' ? theme.text.secondary : '') + '\n  }\n  .mu-datetime-picker .mu-tab-active {\n    color: ' + (type === 'dark' ? theme.text.primary : '') + '\n  }\n  ';
});

var pickerProps = {
  props: {
    landscape: Boolean,
    noDisplay: Boolean,
    displayColor: String
  }
};

var DateDisplay = {
  mixins: [color],
  props: {
    type: String,
    dateTimeFormat: Object,
    monthDaySelected: {
      type: Boolean,
      default: true
    },
    displayDate: Date
  },
  data: function data() {
    return {
      displayDates: [this.displayDate],
      slideType: 'next'
    };
  },

  methods: {
    replaceSelected: function replaceSelected(date) {
      var oldDate = this.displayDates[0];
      this.slideType = date.getTime() > oldDate.getTime() ? 'next' : 'prev';
      this.displayDates.push(date);
      this.displayDates.splice(0, 1);
    },
    createYearSlide: function createYearSlide(h) {
      var _this = this;

      return this.displayDates.map(function (displayDate, index) {
        var fullYear = displayDate.getFullYear();
        return h('transition', {
          props: {
            name: 'mu-date-display-' + _this.slideType
          },
          key: index
        }, [h('div', {
          staticClass: 'mu-date-display-slideIn-wrapper',
          key: fullYear
        }, [h('div', { staticClass: 'mu-date-display-year-title' }, fullYear)])]);
      });
    },
    createMonthSlide: function createMonthSlide(h) {
      var _this2 = this;

      return this.displayDates.map(function (displayDate, index) {
        var displayMonthDay = _this2.type === 'date' ? _this2.dateTimeFormat.formatDisplay(displayDate) : _this2.dateTimeFormat.getMonthList()[displayDate.getMonth()];
        return h('transition', {
          props: {
            name: 'mu-date-display-' + _this2.slideType
          },
          key: index
        }, [h('div', {
          staticClass: 'mu-date-display-slideIn-wrapper',
          key: displayMonthDay
        }, [h('div', { staticClass: 'mu-date-display-monthday-title' }, displayMonthDay)])]);
      });
    }
  },
  render: function render(h) {
    var _this3 = this;

    var displayYear = h('div', {
      staticClass: 'mu-date-display-year',
      on: {
        click: function click() {
          return _this3.$emit('changeView', 'year');
        }
      }
    }, this.createYearSlide(h));
    var displayMonthDay = this.type !== 'year' ? h('div', {
      staticClass: 'mu-date-display-monthday',
      on: {
        click: function click() {
          return _this3.$emit('changeView', _this3.type === 'date' ? 'monthDay' : 'month');
        }
      }
    }, this.createMonthSlide(h)) : undefined;

    return h('div', {
      staticClass: 'mu-picker-display mu-date-display ' + this.getColorClass(false),
      style: {
        'background-color': this.getColor(this.color)
      },
      class: {
        'selected-year': !this.monthDaySelected
      }
    }, [displayYear, displayMonthDay]);
  },

  watch: {
    displayDate: function displayDate(val) {
      this.replaceSelected(val);
    }
  }
};

var DayButton = {
  inject: ['getDayButtonSlots'],
  props: {
    selected: Boolean,
    date: Date,
    disabled: Boolean
  },
  data: function data() {
    return {
      hover: false
    };
  },

  computed: {
    isNow: function isNow() {
      var now = new Date();
      return this.date && this.date.getYear() === now.getYear() && this.date.getMonth() === now.getMonth() && this.date.getDate() === now.getDate();
    },
    dayButtonClass: function dayButtonClass() {
      return {
        selected: this.selected,
        disabled: this.disabled,
        now: this.isNow
      };
    }
  },
  render: function render(h) {
    var scopedSlot = this.getDayButtonSlots();
    return this.date ? h('button', {
      staticClass: 'mu-day-button',
      class: this.dayButtonClass,
      on: this.$listeners,
      domProps: {
        disabled: this.disabled
      }
    }, scopedSlot ? scopedSlot({
      selected: this.selected,
      date: this.date,
      disabled: this.disabled,
      now: this.isNow
    }) : [h('div', { class: 'mu-day-button-bg' }), h('span', {
      class: 'mu-day-button-text',
      domProps: {
        innerHTML: this.date.getDate()
      }
    })]) : h('span', { class: 'mu-day-empty' });
  }
};

var Toolbar = {
  props: {
    dateTimeFormat: Object,
    displayDates: Array,
    type: {
      type: String,
      default: 'month'
    }, // month, year
    nextMonth: {
      type: Boolean,
      default: true
    },
    prevMonth: {
      type: Boolean,
      default: true
    },
    slideType: String
  },
  methods: {
    createTitleSlide: function createTitleSlide(h) {
      var _this = this;

      return this.displayDates.map(function (displayDate, index) {
        var title = _this.type === 'month' ? _this.dateTimeFormat.formatMonth(displayDate) : displayDate.getFullYear();
        return h('transition', {
          props: {
            name: 'mu-datepicker-slide-' + _this.slideType
          },
          key: index
        }, [h('div', {
          staticClass: 'mu-datepicker-toolbar-title',
          class: {
            'clickable': true
          },
          key: title,
          on: {
            click: function click(e) {
              return _this.$emit('click', e);
            }
          }
        }, title)]);
      });
    },
    createPrevIcon: function createPrevIcon(h) {
      return h('svg', {
        staticClass: 'mu-datepicker-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
        }
      })]);
    },
    createNextIcon: function createNextIcon(h) {
      return h('svg', {
        staticClass: 'mu-datepicker-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
        }
      })]);
    }
  },
  render: function render(h) {
    var _this2 = this;

    return h('div', {
      staticClass: 'mu-datepicker-toolbar'
    }, [h(Button, {
      staticClass: 'mu-datepicker-tool-btn',
      props: {
        icon: true,
        disabled: !this.prevMonth
      },
      on: {
        click: function click() {
          return _this2.$emit('change', -1);
        }
      }
    }, [this.createPrevIcon(h)]), h('div', {
      staticClass: 'mu-datepicker-toolbar-title-wrapper',
      on: {
        click: function click() {
          return _this2.$emit('changeView', 'month');
        }
      }
    }, [this.createTitleSlide(h)]), h(Button, {
      staticClass: 'mu-datepicker-tool-btn',
      props: {
        icon: true,
        disabled: !this.nextMonth
      },
      on: {
        click: function click() {
          return _this2.$emit('change', 1);
        }
      }
    }, [this.createNextIcon(h)])]);
  }
};

/**
 * material-ui dateUtils.js
 * https://github.com/callemall/material-ui/blob/master/src/DatePicker/dateUtils.js
 */
var localConfig = {
  dayAbbreviation: ['日', '一', '二', '三', '四', '五', '六'],
  dayList: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  monthList: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  monthLongList: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
};

var dateTimeFormat = {
  formatDisplay: function formatDisplay(date) {
    var day = date.getDate();
    return localConfig.monthList[date.getMonth()] + '-' + (day > 9 ? day : '0' + day) + ' ' + localConfig.dayList[date.getDay()];
  },
  formatDateDisplay: function formatDateDisplay(date) {
    var day = date.getDate();
    return localConfig.monthList[date.getMonth()] + '-' + (day > 9 ? day : '0' + day);
  },
  formatMonth: function formatMonth(date) {
    return date.getFullYear() + ' ' + localConfig.monthLongList[date.getMonth()];
  },
  getWeekDayArray: function getWeekDayArray(firstDayOfWeek) {
    var beforeArray = [];
    var afterArray = [];
    var dayAbbreviation = localConfig.dayAbbreviation;
    for (var i = 0; i < dayAbbreviation.length; i++) {
      if (i < firstDayOfWeek) {
        afterArray.push(dayAbbreviation[i]);
      } else {
        beforeArray.push(dayAbbreviation[i]);
      }
    }
    return beforeArray.concat(afterArray);
  },
  getMonthList: function getMonthList() {
    return localConfig.monthLongList;
  }
};

function getDaysInMonth(d) {
  var resultDate = getFirstDayOfMonth(d);

  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);

  return resultDate.getDate();
}

function getFirstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function getMonthArray(d) {
  var length = 3;
  var months = [];
  var month = [];
  for (var i = 0; i < 12; i++) {
    month.push(new Date(d.getFullYear(), i, 1, d.getHours(), d.getMinutes()));
    if (month.length === length) {
      months.push(month);
      month = [];
    }
  }

  return months;
}

function getWeekArray(d, firstDayOfWeek) {
  var dayArray = [];
  var daysInMonth = getDaysInMonth(d);
  var weekArray = [];
  var week = [];

  for (var i = 1; i <= daysInMonth; i++) {
    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i, d.getHours(), d.getMinutes()));
  }

  var addWeek = function addWeek(week) {
    var emptyDays = 7 - week.length;
    for (var _i = 0; _i < emptyDays; ++_i) {
      week[weekArray.length ? 'push' : 'unshift'](null);
    }
    weekArray.push(week);
  };

  dayArray.forEach(function (day) {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      addWeek(week);
      week = [];
    }
    week.push(day);
    if (dayArray.indexOf(day) === dayArray.length - 1) {
      addWeek(week);
    }
  });

  return weekArray;
}

function addMonths(d, months) {
  var newDate = cloneDate(d);
  newDate.setMonth(d.getMonth() + months);
  return newDate;
}

function addYears(d, years) {
  var newDate = cloneDate(d);
  newDate.setFullYear(d.getFullYear() + years);
  return newDate;
}

function cloneDate(d) {
  return new Date(d.getTime());
}

function cloneAsDate(d) {
  var clonedDate = cloneDate(d);
  clonedDate.setHours(0, 0, 0, 0);
  return clonedDate;
}

function isBeforeDate(d1, d2) {
  var date1 = cloneAsDate(d1);
  var date2 = cloneAsDate(d2);

  return date1.getTime() < date2.getTime();
}

function isAfterDate(d1, d2) {
  var date1 = cloneAsDate(d1);
  var date2 = cloneAsDate(d2);

  return date1.getTime() > date2.getTime();
}

function isBetweenDates(dateToCheck, startDate, endDate) {
  return !isBeforeDate(dateToCheck, startDate) && !isAfterDate(dateToCheck, endDate);
}

function isEqualDate(d1, d2) {
  return d1 && d2 && d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}

function monthDiff(d1, d2) {
  var m = void 0;
  m = (d1.getFullYear() - d2.getFullYear()) * 12;
  m += d1.getMonth();
  m -= d2.getMonth();
  return m;
}

var MonthDayView = {
  props: {
    dateTimeFormat: Object,
    firstDayOfWeek: {
      type: Number,
      default: 1
    },
    maxDate: Date,
    minDate: Date,
    displayDate: Date,
    selectedDate: Date,
    shouldDisableDate: Function
  },
  data: function data() {
    var displayDate = cloneDate(this.displayDate);
    displayDate.setDate(1);
    return {
      weekTexts: this.dateTimeFormat.getWeekDayArray(this.firstDayOfWeek),
      displayDates: [displayDate],
      slideType: 'next'
    };
  },

  computed: {
    prevMonth: function prevMonth() {
      return this.displayDates && monthDiff(this.displayDates[0], this.minDate) > 0;
    },
    nextMonth: function nextMonth() {
      return this.displayDates && monthDiff(this.displayDates[0], this.maxDate) < 0;
    }
  },
  methods: {
    equalsDate: function equalsDate(date) {
      return isEqualDate(date, this.selectedDate);
    },
    isDisableDate: function isDisableDate(day) {
      if (day === null) return false;
      var disabled = false;
      if (this.maxDate && this.minDate) disabled = !isBetweenDates(day, this.minDate, this.maxDate);
      if (!disabled && this.shouldDisableDate) disabled = this.shouldDisableDate(day);
      return disabled;
    },
    handleClick: function handleClick(date) {
      if (date) this.$emit('select', date);
    },
    handleChange: function handleChange(val) {
      var displayDate = addMonths(this.displayDates[0], val);
      this.changeDisplayDate(displayDate);
    },
    changeDisplayDate: function changeDisplayDate(date) {
      var oldDate = this.displayDates[0];
      if (date.getFullYear() === oldDate.getFullYear() && date.getMonth() === oldDate.getMonth()) return;
      this.slideType = date.getTime() > oldDate.getTime() ? 'next' : 'prev';
      var displayDate = cloneDate(date);
      displayDate.setDate(1);
      this.displayDates.push(displayDate);
      this.displayDates.splice(0, 1);
    },
    createWeek: function createWeek(h) {
      return h('div', {
        staticClass: 'mu-datepicker-week'
      }, this.weekTexts.map(function (weekText, index) {
        return h('span', {
          staticClass: 'mu-datepicker-week-day',
          key: index
        }, weekText);
      }));
    },
    createMonthDay: function createMonthDay(h) {
      var _this = this;

      return h('div', {
        staticClass: 'mu-datepicker-monthday'
      }, this.displayDates.map(function (displayDate, index) {
        return h('transition', {
          props: {
            name: 'mu-datepicker-slide-' + _this.slideType
          },
          key: index
        }, [h('div', {
          staticClass: 'mu-datepicker-monthday-slide',
          key: displayDate.getTime()
        }, [_this.createContent(h, displayDate)])]);
      }));
    },
    createContent: function createContent(h, displayDate) {
      var _this2 = this;

      var weeksArray = getWeekArray(displayDate || new Date(), this.firstDayOfWeek);
      return h('div', {
        staticClass: 'mu-datepicker-monthday-content'
      }, weeksArray.map(function (week, i) {
        return h('div', {
          staticClass: 'mu-datepicker-monthday-row',
          key: i
        }, week.map(function (date, j) {
          return h(DayButton, {
            props: {
              disabled: _this2.isDisableDate(date),
              selected: _this2.equalsDate(date),
              date: date
            },
            on: {
              click: function click() {
                return _this2.handleClick(date);
              }
            },
            key: 'dayButton' + i + j
          });
        }));
      }));
    }
  },
  render: function render(h) {
    var _this3 = this;

    return h('div', {
      staticClass: 'mu-datepicker-monthday-container'
    }, [h(Toolbar, {
      props: {
        slideType: this.slideType,
        nextMonth: this.nextMonth,
        prevMonth: this.prevMonth,
        displayDates: this.displayDates,
        dateTimeFormat: this.dateTimeFormat
      },
      on: {
        click: function click() {
          return _this3.$emit('changeView', 'month');
        },
        change: this.handleChange
      }
    }), this.createWeek(h), this.createMonthDay(h)]);
  },

  watch: {
    displayDate: function displayDate(val) {
      this.changeDisplayDate(val);
    }
  }
};

var YearButton = {
  props: {
    year: [String, Number],
    selected: Boolean
  },
  mounted: function mounted() {
    if (this.selected) this.$parent.scrollToSelectedYear(this.$el);
  },
  render: function render(h) {
    return h('button', {
      staticClass: 'mu-year-button',
      class: {
        selected: this.selected
      },
      on: this.$listeners
    }, [h('span', {
      staticClass: 'mu-year-button-text'
    }, this.year)]);
  },

  watch: {
    selected: function selected(val) {
      if (val) this.$parent.scrollToSelectedYear(this.$el);
    }
  }

};

var YearView = {
  props: {
    maxDate: Date,
    minDate: Date,
    displayDate: Date
  },
  computed: {
    years: function years() {
      var minYear = this.minDate.getFullYear();
      var maxYear = this.maxDate.getFullYear();
      var years = [];
      for (var year = minYear; year <= maxYear; year++) {
        years.push(year);
      }
      return years;
    }
  },
  methods: {
    scrollToSelectedYear: function scrollToSelectedYear(yearButtonNode) {
      var container = this.$refs.container;
      var containerHeight = container.clientHeight;
      var yearButtonNodeHeight = yearButtonNode.clientHeight || 32;
      var scrollYOffset = yearButtonNode.offsetTop + yearButtonNodeHeight / 2 - containerHeight / 2;
      setTimeout(function () {
        return container.scrollTop = scrollYOffset;
      }, 0);
    },
    createYearButtons: function createYearButtons(h) {
      var _this = this;

      return this.years.map(function (year) {
        return h(YearButton, {
          props: {
            year: year,
            selected: year === _this.displayDate.getFullYear()
          },
          on: {
            click: function click(e) {
              _this.$emit('change', year);
            }
          }
        });
      });
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-datepicker-year-container'
    }, [h('div', {
      staticClass: 'mu-datepicker-year',
      ref: 'container'
    }, [h('div', {
      staticClass: 'mu-datepicker-year-list'
    }, this.createYearButtons(h))])]);
  }
};

var MonthView = {
  props: {
    dateTimeFormat: Object,
    maxDate: Date,
    minDate: Date,
    displayDate: Date
  },
  data: function data() {
    var displayDate = cloneDate(this.displayDate);
    displayDate.setDate(1);
    return {
      displayDates: [displayDate],
      slideType: 'next'
    };
  },

  methods: {
    changeDisplayDate: function changeDisplayDate(date) {
      var oldDate = this.displayDates[0];
      if (date.getFullYear() === oldDate.getFullYear() && date.getMonth() === oldDate.getMonth()) return;
      this.slideType = date.getTime() > oldDate.getTime() ? 'next' : 'prev';
      var displayDate = cloneDate(date);
      displayDate.setDate(1);
      this.displayDates.push(displayDate);
      this.displayDates.splice(0, 1);
    },
    handleChange: function handleChange(val) {
      var displayDate = cloneDate(this.displayDates[0]);
      displayDate.setFullYear(displayDate.getFullYear() + val);
      this.changeDisplayDate(displayDate);
    },
    createMonth: function createMonth(h) {
      var _this = this;

      return h('div', {
        staticClass: 'mu-datepicker-month'
      }, this.displayDates.map(function (displayDate, index) {
        return h('transition', {
          props: {
            name: 'mu-datepicker-slide-' + _this.slideType
          },
          key: index
        }, [h('div', {
          staticClass: 'mu-datepicker-month-slide',
          key: displayDate.getTime()
        }, [_this.createContent(h, displayDate)])]);
      }));
    },
    createContent: function createContent(h, displayDate) {
      var _this2 = this;

      var monthArray = getMonthArray(displayDate);
      return h('div', {
        staticClass: 'mu-datepicker-month-content'
      }, monthArray.map(function (month, i) {
        return h('div', {
          staticClass: 'mu-datepicker-month-row',
          key: i
        }, month.map(function (date) {
          return _this2.createMonthButton(h, date);
        }));
      }));
    },
    createMonthButton: function createMonthButton(h, date) {
      var _this3 = this;

      var monthText = this.dateTimeFormat.getMonthList()[date.getMonth()];
      var maxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
      var minDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
      var disabled = date.getTime() > maxDate.getTime() || date.getTime() < minDate.getTime();
      return h('button', {
        staticClass: 'mu-month-button',
        attrs: {
          disabled: disabled
        },
        class: {
          selected: date.getFullYear() === this.displayDate.getFullYear() && date.getMonth() === this.displayDate.getMonth()
        },
        on: {
          click: function click() {
            return !disabled && _this3.$emit('change', date);
          }
        }
      }, [h('div', { staticClass: 'mu-month-button-bg' }), h('span', { staticClass: 'mu-month-button-text' }, monthText)]);
    }
  },
  render: function render(h) {
    var _this4 = this;

    return h('div', {
      staticClass: 'mu-datepicker-month-container'
    }, [h(Toolbar, {
      props: {
        slideType: this.slideType,
        type: 'year',
        displayDates: this.displayDates,
        dateTimeFormat: this.dateTimeFormat
      },
      on: {
        click: function click() {
          return _this4.$emit('changeView', 'year');
        },
        change: this.handleChange
      }
    }), this.createMonth(h)]);
  }
};

var DatePicker = {
  name: 'mu-date-picker',
  mixins: [color, pickerProps],
  provide: function provide() {
    return {
      getDayButtonSlots: this.getDayButtonSlots,
      getMonthButtonSlots: this.getMonthButtonSlots,
      getYearButtonSlots: this.getYearButtonSlots
    };
  },

  props: {
    dateTimeFormat: {
      type: Object,
      default: function _default() {
        return dateTimeFormat;
      }
    },
    firstDayOfWeek: {
      type: Number,
      default: 0
    },
    date: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    type: {
      type: String,
      default: 'date' // date, year, month
    },
    maxDate: {
      type: Date,
      default: function _default() {
        return addYears(new Date(), 100);
      }
    },
    minDate: {
      type: Date,
      default: function _default() {
        return addYears(new Date(), -100);
      }
    },
    shouldDisableDate: Function
  },
  data: function data() {
    return {
      displayDate: this.date,
      view: this.type === 'date' ? 'monthDay' : this.type === 'year' ? 'year' : 'month'
    };
  },

  methods: {
    getDayButtonSlots: function getDayButtonSlots() {
      return this.$scopedSlots.day;
    },
    getMonthButtonSlots: function getMonthButtonSlots() {
      return this.$scopedSlots.month;
    },
    getYearButtonSlots: function getYearButtonSlots() {
      return this.$scopedSlots.year;
    },
    handleYearChange: function handleYearChange(year) {
      var date = cloneAsDate(this.displayDate);
      date.setDate(1);
      date.setFullYear(year);
      this.changeDisplayDate(date);
      if (this.type === 'year') return this.changeDate(date);
      this.changeView(this.type === 'month' ? 'month' : 'monthDay');
    },
    handleMonthChange: function handleMonthChange(date) {
      this.changeDisplayDate(date);
      if (this.type === 'month') return this.changeDate(date);
      this.changeView('monthDay');
    },
    handleSelect: function handleSelect(date) {
      if (date.getTime() > this.maxDate.getTime()) date = new Date(this.maxDate.getTime());
      if (date.getTime() < this.minDate.getTime()) date = new Date(this.minDate.getTime());
      this.changeDisplayDate(date);
      this.changeDate(date);
    },
    changeDate: function changeDate(date) {
      this.$emit('change', date);
      this.$emit('update:date', date);
    },
    changeDisplayDate: function changeDisplayDate(date) {
      this.displayDate = date;
    },
    changeView: function changeView(view) {
      this.view = view;
    }
  },
  render: function render(h) {
    var colorClass = this.getNormalColorClass(this.color, true);
    var color$$1 = this.getColor(this.color);
    var monthdayView = h(MonthDayView, {
      props: {
        dateTimeFormat: this.dateTimeFormat,
        firstDayOfWeek: this.firstDayOfWeek,
        maxDate: this.maxDate,
        minDate: this.minDate,
        displayDate: this.displayDate,
        selectedDate: this.date,
        shouldDisableDate: this.shouldDisableDate
      },
      on: {
        changeView: this.changeView,
        select: this.handleSelect
      }
    });
    var yearView = h(YearView, {
      props: {
        displayDate: this.displayDate,
        maxDate: this.maxDate,
        minDate: this.minDate
      },
      on: {
        change: this.handleYearChange
      }
    });
    var monthView = h(MonthView, {
      props: {
        dateTimeFormat: this.dateTimeFormat,
        maxDate: this.maxDate,
        minDate: this.minDate,
        displayDate: this.displayDate
      },
      on: {
        changeView: this.changeView,
        change: this.handleMonthChange
      }
    });
    return h('div', {
      staticClass: 'mu-picker mu-datepicker ' + colorClass,
      class: {
        'mu-picker-landspace': this.landscape
      },
      style: {
        color: color$$1
      }
    }, [!this.noDisplay ? h(DateDisplay, {
      props: {
        type: this.type,
        monthDaySelected: this.view !== 'year',
        color: this.displayColor,
        displayDate: this.displayDate,
        dateTimeFormat: this.dateTimeFormat
      },
      on: {
        changeView: this.changeView
      }
    }) : undefined, h('div', {
      staticClass: 'mu-picker-container'
    }, [this.view === 'monthDay' ? monthdayView : this.view === 'month' ? monthView : yearView, this.$slots.default])]);
  },

  watch: {
    date: function date(val) {
      this.displayDate = val;
    }
  }
};

var TimeDisplay = {
  mixins: [color],
  props: {
    affix: {
      type: String,
      default: '',
      validator: function validator(val) {
        return ['', 'pm', 'am'].indexOf(val) !== -1;
      }
    },
    format: {
      type: String,
      validator: function validator(val) {
        return val && ['ampm', '24hr'].indexOf(val) !== -1;
      }
    },
    mode: {
      type: String,
      default: 'hour',
      validator: function validator(val) {
        return ['hour', 'minute'].indexOf(val) !== -1;
      }
    },
    selectedTime: {
      type: Date,
      default: function _default() {
        return new Date();
      },

      required: true
    },
    viewType: String
  },
  computed: {
    sanitizeTime: function sanitizeTime() {
      var hour = this.selectedTime.getHours();
      var min = this.selectedTime.getMinutes().toString();
      if (this.format === 'ampm') {
        hour %= 12;
        hour = hour || 12;
      }
      hour = hour.toString();
      if (hour.length < 2) hour = '0' + hour;
      if (min.length < 2) min = '0' + min;
      return [hour, min];
    }
  },
  methods: {
    handleSelectAffix: function handleSelectAffix(affix) {
      this.$emit('selectAffix', affix);
    },
    handleSelectHour: function handleSelectHour() {
      this.$emit('changeView', 'hour');
    },
    handleSelectMin: function handleSelectMin() {
      this.$emit('changeView', 'minute');
    }
  },
  render: function render(h) {
    var _this = this;

    var displayTime = h('div', {
      staticClass: 'mu-time-display-time'
    }, [h('span', {
      staticClass: 'mu-time-display-clickable',
      class: {
        'inactive': this.viewType === 'clock' && this.mode === 'minute'
      },
      on: {
        click: this.viewType === 'list' ? function () {} : this.handleSelectHour
      }
    }, this.sanitizeTime[0]), h('span', {}, ':'), h('span', {
      staticClass: 'mu-time-display-clickable',
      class: {
        'inactive': this.viewType === 'clock' && this.mode === 'hour'
      },
      on: {
        click: this.viewType === 'list' ? function () {} : this.handleSelectMin
      }
    }, this.sanitizeTime[1])]);

    var displayAffix = this.format === 'ampm' ? h('div', {
      staticClass: 'mu-time-display-affix'
    }, [h('div', {
      staticClass: 'mu-time-display-clickable',
      class: {
        'inactive': this.affix === 'am'
      },
      on: {
        click: function click() {
          return _this.handleSelectAffix('pm');
        }
      }
    }, 'PM'), h('div', {
      staticClass: 'mu-time-display-clickable',
      class: {
        'inactive': this.affix === 'pm'
      },
      on: {
        click: function click() {
          return _this.handleSelectAffix('am');
        }
      }
    }, 'AM')]) : undefined;
    return h('div', {
      staticClass: 'mu-picker-display mu-time-display ' + this.getColorClass(false),
      style: {
        'background-color': this.getColor(this.color)
      }
    }, [h('div', {
      staticClass: 'mu-time-display-text'
    }, [this.format === 'ampm' ? h('div', {
      staticClass: 'mu-time-display-affix'
    }) : undefined, displayTime, displayAffix])]);
  }
};

/**
 * material-ui timeUtils.js
 * https://github.com/callemall/material-ui/blob/master/src/TimePicker/timeUtils.js
 */

function rad2deg(rad) {
  return rad * 57.29577951308232;
}

function getTouchEventOffsetValues(event) {
  var el = event.target;
  var boundingRect = el.getBoundingClientRect();

  return {
    offsetX: event.clientX - boundingRect.left,
    offsetY: event.clientY - boundingRect.top
  };
}

function isInner(props) {
  if (props.type !== 'hour') {
    return false;
  }
  return props.value < 1 || props.value > 12;
}

var positions = [[0, 5], [54.5, 16.6], [94.4, 59.5], [109, 114], [94.4, 168.5], [54.5, 208.4], [0, 223], [-54.5, 208.4], [-94.4, 168.5], [-109, 114], [-94.4, 59.5], [-54.5, 19.6]];
var innerPositions = [[0, 40], [36.9, 49.9], [64, 77], [74, 114], [64, 151], [37, 178], [0, 188], [-37, 178], [-64, 151], [-74, 114], [-64, 77], [-37, 50]];
var ClockNumber = {
  inject: ['getColorObject'],
  props: {
    value: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'minute',
      validator: function validator(val) {
        return ['hour', 'minute'].indexOf(val) !== -1;
      }
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isInner: function isInner$$1() {
      return isInner(this);
    },
    numberClass: function numberClass() {
      return {
        'mu-timepicker-number__selected': this.selected,
        'mu-timepicker-number__inner': this.isInner
      };
    },
    numberStyle: function numberStyle() {
      var pos = this.value;
      if (this.type === 'hour') {
        pos %= 12;
      } else {
        pos = pos / 5;
      }
      var transformPos = positions[pos];
      if (this.isInner) transformPos = innerPositions[pos];

      var _transformPos = transformPos,
          _transformPos2 = slicedToArray(_transformPos, 2),
          x = _transformPos2[0],
          y = _transformPos2[1];

      return {
        transform: 'translate(' + x + 'px, ' + y + 'px)',
        left: this.isInner ? 'calc(50% - 14px)' : 'calc(50% - 16px)'
      };
    }
  },
  render: function render(h) {
    var _getColorObject = this.getColorObject(),
        color = _getColorObject.color,
        bgColorClass = _getColorObject.bgColorClass;

    return h('span', {
      staticClass: 'mu-timepicker-number ' + (this.selected ? bgColorClass : ''),
      class: this.numberClass,
      style: _extends({
        'background-color': this.selected ? color : ''
      }, this.numberStyle)
    }, this.value === 0 ? '00' : this.value);
  }
};

var ClockPointer = {
  props: {
    hasSelected: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'minute',
      validator: function validator(val) {
        return ['hour', 'minute'].indexOf(val) !== -1;
      }
    },
    value: {
      type: Number
    }
  },
  computed: {
    isInner: function isInner$$1() {
      return isInner(this);
    },
    pointerStyle: function pointerStyle() {
      var type = this.type,
          value = this.value,
          calcAngle = this.calcAngle;

      var angle = type === 'hour' ? calcAngle(value, 12) : calcAngle(value, 60);
      return {
        transform: 'rotateZ(' + angle + 'deg)'
      };
    }
  },
  methods: {
    calcAngle: function calcAngle(value, base) {
      value %= base;
      var angle = 360 / base * value;
      return angle;
    }
  },
  render: function render(h) {
    if (this.value === undefined || this.value === null) return h('span', {});
    return h('div', {
      staticClass: 'mu-timepicker-pointer',
      class: {
        'inner': this.isInner
      },
      style: this.pointerStyle
    }, [h('div', {
      staticClass: 'mu-timepicker-pointer-mark',
      class: {
        'has-selected': this.hasSelected
      }
    })]);
  }
};

var ClockHours = {
  props: {
    format: {
      type: String,
      default: 'ampm',
      validator: function validator(val) {
        return ['ampm', '24hr'].indexOf(val) !== -1;
      }
    },
    initialHours: {
      type: Number,
      default: new Date().getHours()
    }
  },
  computed: {
    hours: function hours() {
      var hourSize = this.format === 'ampm' ? 12 : 24;
      var hours = [];
      for (var i = 1; i <= hourSize; i++) {
        hours.push(i % 24);
      }
      return hours;
    }
  },
  mounted: function mounted() {
    var clockElement = this.$refs.mask;
    this.center = {
      x: clockElement.offsetWidth / 2,
      y: clockElement.offsetHeight / 2
    };
    this.basePoint = {
      x: this.center.x,
      y: 0
    };
  },

  methods: {
    getSelected: function getSelected() {
      var hour = this.initialHours;
      if (this.format === 'ampm') {
        hour %= 12;
        hour = hour || 12;
      }
      return hour;
    },
    isMousePressed: function isMousePressed(event) {
      if (typeof event.buttons === 'undefined') {
        return event.nativeEvent.which;
      }
      return event.buttons;
    },
    handleDown: function handleDown(event) {
      this.isMouseDown = true;
    },
    handleUp: function handleUp(event) {
      if (!this.isMouseDown) return;
      event.preventDefault();
      this.isMouseDown = false;
      this.setClock(event, true);
    },
    handleMove: function handleMove(event) {
      event.preventDefault();
      if (this.isMousePressed(event) !== 1) return;
      this.setClock(event, false);
    },
    handleTouchMove: function handleTouchMove(event) {
      event.preventDefault();
      this.setClock(event.changedTouches[0], false);
    },
    handleTouchEnd: function handleTouchEnd(event) {
      event.preventDefault();
      this.setClock(event.changedTouches[0], true);
    },
    setClock: function setClock(event, finish) {
      if (typeof event.offsetX === 'undefined') {
        var offset = getTouchEventOffsetValues(event);
        event.offsetX = offset.offsetX;
        event.offsetY = offset.offsetY;
      }
      var hours = this.getHours(event.offsetX, event.offsetY);
      this.$emit('change', hours, finish);
    },
    getHours: function getHours(offsetX, offsetY) {
      var step = 30;
      var x = offsetX - this.center.x;
      var y = offsetY - this.center.y;
      var cx = this.basePoint.x - this.center.x;
      var cy = this.basePoint.y - this.center.y;
      var atan = Math.atan2(cx, cy) - Math.atan2(x, y);
      var deg = rad2deg(atan);
      deg = Math.round(deg / step) * step;
      deg %= 360;
      var value = Math.floor(deg / step) || 0;
      var delta = Math.pow(x, 2) + Math.pow(y, 2);
      var distance = Math.sqrt(delta);
      value = value || 12;
      if (this.format === '24hr') {
        if (distance < 90) {
          value += 12;
          value %= 24;
        }
      } else {
        value %= 12;
      }
      return value;
    }
  },
  render: function render(h) {
    var _this = this;

    return h('div', {
      staticClass: 'mu-timepicker-hours'
    }, [h(ClockPointer, {
      props: {
        type: 'hour',
        hasSelected: true,
        value: this.getSelected()
      }
    }), this.hours.map(function (hour) {
      return h(ClockNumber, {
        props: {
          selected: _this.getSelected() === hour,
          type: 'hour',
          value: hour
        },
        key: hour
      });
    }), h('div', {
      staticClass: 'mu-timepicker-hours-mask',
      on: {
        mousedown: this.handleDown,
        mouseup: this.handleUp,
        mousemove: this.handleMove,
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      },
      ref: 'mask'
    })]);
  }
};

var ClockMinutes = {
  props: {
    initialMinutes: {
      type: Number,
      default: function _default() {
        return new Date().getMinutes();
      }
    }
  },
  mounted: function mounted() {
    var clockElement = this.$refs.mask;
    this.center = {
      x: clockElement.offsetWidth / 2,
      y: clockElement.offsetHeight / 2
    };
    this.basePoint = {
      x: this.center.x,
      y: 0
    };
  },
  data: function data() {
    return {
      minutes: null
    };
  },
  created: function created() {
    this.minutes = this.getMinuteNumbers();
  },

  methods: {
    getMinuteNumbers: function getMinuteNumbers() {
      var minutes = [];
      for (var i = 0; i < 12; i++) {
        minutes.push(i * 5);
      }
      var selectedMinutes = this.initialMinutes;
      var hasSelected = false;
      var numbers = minutes.map(function (minute) {
        var isSelected = selectedMinutes === minute;
        if (isSelected) {
          hasSelected = true;
        }
        return {
          minute: minute,
          isSelected: isSelected
        };
      });
      return {
        numbers: numbers,
        hasSelected: hasSelected,
        selected: selectedMinutes
      };
    },
    isMousePressed: function isMousePressed(event) {
      if (typeof event.buttons === 'undefined') {
        return event.nativeEvent.which;
      }
      return event.buttons;
    },
    handleDown: function handleDown(event) {
      this.isMouseDown = true;
    },
    handleUp: function handleUp(event) {
      if (!this.isMouseDown) return;
      event.preventDefault();
      this.isMouseDown = false;
      this.setClock(event, true);
    },
    handleMove: function handleMove(event) {
      event.preventDefault();
      if (this.isMousePressed(event) !== 1) {
        return;
      }
      this.setClock(event, false);
    },
    handleTouch: function handleTouch(event) {
      event.preventDefault();
      this.setClock(event.changedTouches[0], event.type.toLowerCase() === 'touchend');
    },
    setClock: function setClock(event, finish) {
      if (typeof event.offsetX === 'undefined') {
        var offset = getTouchEventOffsetValues(event);
        event.offsetX = offset.offsetX;
        event.offsetY = offset.offsetY;
      }
      var minutes = this.getMinutes(event.offsetX, event.offsetY);
      this.$emit('change', minutes, finish);
    },
    getMinutes: function getMinutes(offsetX, offsetY) {
      var step = 6;
      var x = offsetX - this.center.x;
      var y = offsetY - this.center.y;
      var cx = this.basePoint.x - this.center.x;
      var cy = this.basePoint.y - this.center.y;
      var atan = Math.atan2(cx, cy) - Math.atan2(x, y);
      var deg = rad2deg(atan);
      deg = Math.round(deg / step) * step;
      deg %= 360;
      var value = Math.floor(deg / step) || 0;
      return value;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-timepicker-minutes'
    }, [h(ClockPointer, {
      props: {
        hasSelected: this.minutes.hasSelected,
        value: this.minutes.selected,
        type: 'minute'
      }
    }), this.minutes.numbers.map(function (minute) {
      return h(ClockNumber, {
        props: {
          selected: minute.isSelected,
          type: 'minute',
          value: minute.minute
        },
        key: minute.minute
      });
    }), h('div', {
      staticClass: 'mu-timepicker-minutes-mask',
      on: {
        mousedown: this.handleDown,
        mouseup: this.handleUp,
        mousemove: this.handleMove,
        touchmove: this.handleTouch,
        touchend: this.handleTouch
      },
      ref: 'mask'
    })]);
  },

  watch: {
    initialMinutes: function initialMinutes(val) {
      this.minutes = this.getMinuteNumbers();
    }
  }
};

var ListView = {
  props: {
    format: {
      type: String,
      default: 'ampm',
      validator: function validator(val) {
        return ['ampm', '24hr'].indexOf(val) !== -1;
      }
    },
    time: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    }
  },
  computed: {
    hours: function hours() {
      var hourSize = this.format === 'ampm' ? 12 : 24;
      var hours = [];
      for (var i = 1; i <= hourSize; i++) {
        var num = i % 24;
        num === 0 ? hours.unshift('00') : hours.push(num > 9 ? num : '0' + num);
      }
      return hours;
    },
    minutes: function minutes() {
      var minutes = [];
      for (var i = 1; i <= 60; i++) {
        var num = i % 60;
        num === 0 ? minutes.unshift('00') : minutes.push(num > 9 ? num : '0' + num);
      }
      return minutes;
    }
  },
  mounted: function mounted() {
    this.scrollToSelected(this.$refs.hours);
    this.scrollToSelected(this.$refs.minutes);
  },

  methods: {
    scrollToSelected: function scrollToSelected(container) {
      var buttonNode = container.querySelector('.is-active');
      var btnTop = buttonNode.offsetTop;
      var btnHeight = buttonNode.offsetHeight;
      var containerTop = container.offsetTop;
      var containerHeight = container.offsetHeight;
      var top = containerTop + containerHeight / 2;
      var maxScrollTop = container.scrollHeight - containerHeight;
      var scrollTop = btnTop + btnHeight / 2 - top;
      scrollTop = Math.min(maxScrollTop, scrollTop);
      scrollTop = Math.max(0, scrollTop);
      setTimeout(function () {
        return container.scrollTop = scrollTop;
      }, 0);
    },
    createHoursList: function createHoursList(h) {
      var _this = this;

      var buttons = this.hours.map(function (hour) {
        var val = Number(hour);
        var curHour = _this.time.getHours();
        if (_this.format === 'ampm') {
          curHour %= 12;
          curHour = curHour || 12;
        }
        var isActive = curHour === val;
        return h('button', {
          staticClass: 'mu-timepicker-hour-button',
          class: {
            'is-active': isActive
          },
          on: {
            click: function click() {
              return _this.$emit('changeHours', val);
            }
          }
        }, hour);
      });
      return h('div', {
        staticClass: 'mu-timepicker-list-hours',
        ref: 'hours'
      }, buttons);
    },
    createMinutesList: function createMinutesList(h) {
      var _this2 = this;

      var buttons = this.minutes.map(function (minute) {
        var val = Number(minute);
        return h('button', {
          staticClass: 'mu-timepicker-minute-button',
          class: {
            'is-active': _this2.time.getMinutes() === val
          },
          on: {
            click: function click() {
              return _this2.$emit('changeMinutes', val);
            }
          }
        }, minute);
      });
      return h('div', {
        staticClass: 'mu-timepicker-list-minutes',
        ref: 'minutes'
      }, buttons);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-timepicker-list'
    }, [this.createHoursList(h), this.createMinutesList(h)]);
  },

  watch: {
    time: function time() {
      var _this3 = this;

      if (this.$isServer) return;
      this.$nextTick(function () {
        _this3.scrollToSelected(_this3.$refs.hours);
        _this3.scrollToSelected(_this3.$refs.minutes);
      });
    }
  }
};

var TimePicker = {
  name: 'mu-time-picker',
  provide: function provide() {
    return {
      getColorObject: this.getColorObject
    };
  },

  mixins: [color, pickerProps],
  props: {
    viewType: {
      type: String,
      default: 'clock',
      validator: function validator(val) {
        return ['clock', 'list'].indexOf(val) !== -1;
      }
    },
    format: {
      type: String,
      default: 'ampm',
      validator: function validator(val) {
        return ['ampm', '24hr'].indexOf(val) !== -1;
      }
    },
    time: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    }
  },
  data: function data() {
    return {
      view: 'hour'
    };
  },

  methods: {
    getColorObject: function getColorObject() {
      return {
        color: this.getColor(this.color),
        colorClass: this.getNormalColorClass(this.color, true),
        bgColorClass: this.getNormalColorClass(this.color)
      };
    },
    getAffix: function getAffix() {
      if (this.format !== 'ampm') return '';
      var hours = this.time.getHours();
      if (hours < 12) {
        return 'am';
      }
      return 'pm';
    },
    handleSelectAffix: function handleSelectAffix(affix) {
      if (affix === this.getAffix()) return;
      var hours = this.time.getHours();
      if (affix === 'am') {
        this.handleChangeHours(hours - 12, affix);
        return;
      }
      this.handleChangeHours(hours + 12, affix);
    },
    handleChangeHours: function handleChangeHours(hours, finished) {
      var time = new Date(this.time);
      var affix = void 0;
      if (typeof finished === 'string') {
        affix = finished;
        finished = undefined;
      }
      if (!affix) {
        affix = this.getAffix();
      }
      if (affix === 'pm' && hours < 12) {
        hours += 12;
      }
      time.setHours(hours);
      this.changeTime(time, 'hour', finished);
      if (finished) this.view = 'minute';
    },
    handleChangeMinutes: function handleChangeMinutes(minutes, finished) {
      var time = new Date(this.time);
      time.setMinutes(minutes);
      this.changeTime(time, 'minute', finished);
      if (finished) this.view = 'hour';
    },
    changeTime: function changeTime(time, view, finished) {
      this.$emit('change', time, view, finished);
      this.$emit('update:time', time);
    },
    changeView: function changeView(view) {
      this.view = view;
    },
    createTimeDisplay: function createTimeDisplay(h) {
      if (this.noDisplay) return;
      return h(TimeDisplay, {
        props: {
          selectedTime: this.time,
          format: this.format,
          mode: this.view,
          color: this.displayColor,
          viewType: this.viewType,
          affix: this.getAffix()
        },
        on: {
          changeView: this.changeView,
          selectAffix: this.handleSelectAffix
        }
      });
    },
    createClock: function createClock(h) {
      return h('div', {
        staticClass: 'mu-timepicker-clock'
      }, [h('div', { staticClass: 'mu-timepicker-circle' }), this.view === 'hour' ? h(ClockHours, {
        props: {
          format: this.format,
          initialHours: this.time.getHours()
        },
        on: {
          change: this.handleChangeHours
        }
      }) : undefined, this.view === 'minute' ? h(ClockMinutes, {
        props: {
          initialMinutes: this.time.getMinutes()
        },
        on: {
          change: this.handleChangeMinutes
        }
      }) : undefined]);
    },
    createList: function createList(h) {
      var _this = this;

      return h(ListView, {
        props: {
          format: this.format,
          time: this.time
        },
        on: {
          changeHours: function changeHours(val) {
            return _this.handleChangeHours(val, true);
          },
          changeMinutes: function changeMinutes(val) {
            return _this.handleChangeMinutes(val, true);
          }
        }
      });
    }
  },
  render: function render(h) {
    var _getColorObject = this.getColorObject(),
        color$$1 = _getColorObject.color,
        colorClass = _getColorObject.colorClass;

    return h('div', {
      staticClass: 'mu-picker mu-timepicker ' + colorClass,
      style: {
        color: color$$1
      },
      class: {
        'mu-picker-landspace': this.landscape
      }
    }, [this.createTimeDisplay(h), h('div', {
      staticClass: 'mu-picker-container'
    }, [this.viewType === 'list' ? this.createList(h) : this.createClock(h), this.$slots.default])]);
  }
};

var DateTimeDisplay = {
  mixins: [color],
  props: {
    affix: String,
    dateTimeFormat: Object,
    view: String,
    format: String,
    viewType: String,
    displayDate: Date
  },
  computed: {
    sanitizeTime: function sanitizeTime() {
      var hour = this.displayDate.getHours();
      var min = this.displayDate.getMinutes().toString();
      if (this.format === 'ampm') {
        hour %= 12;
        hour = hour || 12;
      }
      hour = hour.toString();
      if (hour.length < 2) hour = '0' + hour;
      if (min.length < 2) min = '0' + min;
      return [hour, min];
    }
  },
  methods: {
    createDateDisplay: function createDateDisplay(h) {
      var _this = this;

      var fullYear = this.displayDate.getFullYear();
      var displayMonthDay = this.dateTimeFormat.formatDateDisplay(this.displayDate);
      return h('div', {
        staticClass: 'mu-date-display'
      }, [h('div', {
        staticClass: 'mu-date-display-year',
        class: {
          active: this.view === 'year'
        },
        on: {
          click: function click() {
            return _this.$emit('changeView', 'year');
          }
        }
      }, [h('div', {
        staticClass: 'mu-date-display-year-title'
      }, fullYear)]), h('div', {
        staticClass: 'mu-date-display-monthday',
        class: {
          active: this.view === 'monthDay' || this.view === 'month'
        },
        on: {
          click: function click() {
            return _this.$emit('changeView', 'monthDay');
          }
        }
      }, [h('div', {
        staticClass: 'mu-date-display-monthday-title'
      }, displayMonthDay)])]);
    },
    createTimeDisplay: function createTimeDisplay(h) {
      var _this2 = this;

      var displayTime = h('div', {
        staticClass: 'mu-time-display-time'
      }, [h('span', {
        staticClass: 'mu-time-display-clickable',
        class: {
          'active': this.view === 'hour' || this.view === 'minute' && this.viewType === 'list'
        },
        on: {
          click: this.viewType === 'list' ? function () {} : function () {
            return _this2.$emit('changeView', 'hour');
          }
        }
      }, this.sanitizeTime[0]), h('span', {}, ':'), h('span', {
        staticClass: 'mu-time-display-clickable',
        class: {
          'active': this.view === 'minute' || this.view === 'hour' && this.viewType === 'list'
        },
        on: {
          click: this.viewType === 'list' ? function () {} : function () {
            return _this2.$emit('changeView', 'minute');
          }
        }
      }, this.sanitizeTime[1])]);

      var displayAffix = this.format === 'ampm' ? h('div', {
        staticClass: 'mu-time-display-affix'
      }, [h('div', {
        staticClass: 'mu-time-display-clickable',
        class: {
          'active': this.affix === 'pm'
        },
        on: {
          click: function click() {
            return _this2.$emit('selectAffix', 'pm');
          }
        }
      }, 'PM'), h('div', {
        staticClass: 'mu-time-display-clickable',
        class: {
          'active': this.affix === 'am'
        },
        on: {
          click: function click() {
            return _this2.$emit('selectAffix', 'am');
          }
        }
      }, 'AM')]) : undefined;
      return h('div', {
        staticClass: ' mu-time-display'
      }, [h('div', {
        staticClass: 'mu-time-display-text'
      }, [this.format === 'ampm' ? h('div', {
        staticClass: 'mu-time-display-affix'
      }) : undefined, displayTime, displayAffix])]);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-picker-display mu-date-time-display ' + this.getColorClass(false),
      style: {
        'background-color': this.getColor(this.color)
      }
    }, [this.createDateDisplay(h), this.createTimeDisplay(h)]);
  }
};

var TabsTheme = (function (theme) {
  return '\n  .mu-tabs{\n    background-color: ' + theme.primary + ';\n    color: ' + fade(theme.text.alternate, 0.7) + ';\n  }\n\n  .mu-tabs-inverse {\n    background-color: ' + theme.background.default + ';\n    color: ' + theme.text.secondary + ';\n  }\n\n  .mu-tab-link-highlight{\n    background-color: ' + theme.secondary + ';\n  }\n  .mu-tab-active {\n    color: ' + theme.text.alternate + ';\n  }\n  .mu-tab-active.is-inverse {\n    color: ' + theme.text.primary + ';\n  }\n  ';
});

var docStyle = typeof document !== 'undefined' ? document.documentElement.style : {};
var engine;
var translate3d = false;

if (typeof window !== 'undefined' && window.opera && Object.prototype.toString.call(window.opera) === '[object Opera]') {
  engine = 'presto';
} else if ('MozAppearance' in docStyle) {
  engine = 'gecko';
} else if ('WebkitAppearance' in docStyle) {
  engine = 'webkit';
} else if (typeof navigator !== 'undefined' && typeof navigator.cpuClass === 'string') {
  engine = 'trident';
} else {
  engine = 'node';
}

var cssPrefix = { trident: '-ms-', gecko: '-moz-', webkit: '-webkit-', presto: '-o-' }[engine];

var vendorPrefix = { trident: 'ms', gecko: 'Moz', webkit: 'Webkit', presto: 'O' }[engine];

var helperElem = typeof document !== 'undefined' ? document.createElement('div') : {};
var perspectiveProperty = vendorPrefix + 'Perspective';
var transformProperty = vendorPrefix + 'Transform';
var transformStyleName = cssPrefix + 'transform';
var transitionProperty = vendorPrefix + 'Transition';
var transitionStyleName = cssPrefix + 'transition';
var transitionEndProperty = (vendorPrefix || '').toLowerCase() + 'TransitionEnd';

if (helperElem.style && helperElem.style[perspectiveProperty] !== undefined) {
  translate3d = true;
}

var getTranslate = function getTranslate(element) {
  var result = { left: 0, top: 0 };
  if (element === null || element.style === null) return result;

  var transform = element.style[transformProperty];
  var matches = /translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/g.exec(transform);
  if (matches) {
    result.left = +matches[1];
    result.top = +matches[3];
  }

  return result;
};

var translateElement = function translateElement(element, x, y) {
  if (x === null && y === null) return;

  if (element === null || element.style === null) return;

  if (!element.style[transformProperty] && x === 0 && y === 0) return;

  if (x === null || y === null) {
    var translate = getTranslate(element);
    if (x === null) {
      x = translate.left;
    }
    if (y === null) {
      y = translate.top;
    }
  }

  cancelTranslateElement(element);

  if (translate3d) {
    element.style[transformProperty] += ' translate(' + (x ? x + 'px' : '0px') + ',' + (y ? y + 'px' : '0px') + ') translateZ(0px)';
  } else {
    element.style[transformProperty] += ' translate(' + (x ? x + 'px' : '0px') + ',' + (y ? y + 'px' : '0px') + ')';
  }
};

var cancelTranslateElement = function cancelTranslateElement(element) {
  if (element === null || element.style === null) return;
  var transformValue = element.style[transformProperty];
  if (transformValue) {
    transformValue = transformValue.replace(/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/g, '');
    element.style[transformProperty] = transformValue;
  }
};

var translateUtil = {
  transformProperty: transformProperty,
  transformStyleName: transformStyleName,
  transitionProperty: transitionProperty,
  transitionStyleName: transitionStyleName,
  transitionEndProperty: transitionEndProperty,
  getElementTranslate: getTranslate,
  translateElement: translateElement,
  cancelTranslateElement: cancelTranslateElement
};

var Tabs = {
  name: 'mu-tabs',
  mixins: [color],
  provide: function provide() {
    return {
      tabClick: this.handleTabClick,
      getDefaultVal: this.getDefaultVal,
      addTab: this.addTab,
      removeTab: this.removeTab,
      setTabHighLineStyle: this.setTabHighLineStyle,
      getActiveValue: this.getActiveValue,
      getActiveColor: this.getActiveColor,
      getTabsInverse: this.getInverse
    };
  },

  props: {
    inverse: Boolean,
    indicatorColor: String,
    fullWidth: Boolean,
    center: Boolean,
    value: {}
  },
  data: function data() {
    return {
      tabs: [],
      activeValue: isNotNull(this.value) ? this.value : 0
    };
  },
  created: function created() {
    this.tabIndex = 0;
  },
  mounted: function mounted() {
    this.setTabHighLineStyle();
  },
  updated: function updated() {
    this.setTabHighLineStyle();
  },

  methods: {
    handleTabClick: function handleTabClick(value, tab) {
      if (this.activeValue !== value) {
        this.activeValue = value;
        this.$emit('update:value', value);
        this.$emit('change', value);
      }
    },
    getActiveValue: function getActiveValue() {
      return this.activeValue;
    },
    getDefaultVal: function getDefaultVal() {
      return this.tabIndex++;
    },
    getActiveColor: function getActiveColor() {
      return this.inverse ? {
        className: this.getNormalColorClass(this.color, true),
        color: this.getColor(this.color)
      } : { className: '', color: '' };
    },
    getInverse: function getInverse() {
      return this.inverse;
    },
    addTab: function addTab(tab) {
      var index = this.$children.indexOf(tab);
      return index === -1 ? this.tabs.push(tab) : this.tabs.splice(index, 0, tab);
    },
    removeTab: function removeTab(tab) {
      var index = this.tabs.indexOf(tab);
      if (index === -1) return;
      this.tabs.splice(index, 1);
    },
    getActiveTab: function getActiveTab() {
      return this.tabs.filter(function (tab) {
        return tab.active;
      })[0];
    },
    setTabHighLineStyle: function setTabHighLineStyle() {
      var activeTab = this.getActiveTab();
      if (!activeTab || !this.$refs.line || !activeTab.$el) return;
      var el = activeTab.$el;
      var lineEl = this.$refs.line;
      var rect = el.getBoundingClientRect();
      var tabsRect = this.$el.getBoundingClientRect();
      lineEl.style.width = rect.width + 'px';
      translateUtil.translateElement(lineEl, rect.left - tabsRect.left, 0);
    }
  },
  watch: {
    value: function value(val) {
      this.activeValue = val;
    },
    activeValue: function activeValue() {
      this.setTabHighLineStyle();
    }
  },
  directives: {
    resize: resize
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-tabs ' + (!this.inverse ? this.getColorClass(false) : ''),
      class: {
        'mu-tabs-full-width': this.fullWidth,
        'mu-tabs-center': this.center,
        'mu-tabs-inverse': this.inverse
      },
      style: {
        'background-color': !this.inverse ? this.getColor(this.color) : ''
      },
      directives: [{
        name: 'resize',
        value: this.setTabHighLineStyle
      }]
    }, [this.$slots.default, h('span', {
      staticClass: 'mu-tab-link-highlight ' + this.getNormalColorClass(this.indicatorColor, false, false),
      style: {
        'background-color': this.getColor(this.indicatorColor)
      },
      ref: 'line'
    })]);
  }
};

var Tab = {
  name: 'mu-tab',
  mixins: [route, ripple],
  inject: ['tabClick', 'getActiveValue', 'getDefaultVal', 'addTab', 'removeTab', 'setTabHighLineStyle', 'getActiveColor', 'getTabsInverse'],
  props: {
    disabled: Boolean,
    value: {}
  },
  data: function data() {
    return {
      tabVal: 0
    };
  },

  computed: {
    active: function active() {
      return !this.disabled && this.getActiveValue() === this.tabVal;
    },
    activeColor: function activeColor() {
      return this.getActiveColor();
    }
  },
  created: function created() {
    this.tabVal = isNotNull(this.value) ? this.value : this.getDefaultVal();
    this.addTab(this);
  },

  methods: {
    handleClick: function handleClick(e) {
      this.tabClick(this.tabVal, this);
      this.$emit('click', e);
    }
  },
  beforeDestory: function beforeDestory() {
    this.removeTab(this);
  },

  watch: {
    active: function active(val, oldVal) {
      if (val) this.$emit('active');
    },
    value: function value(val) {
      this.tabVal = val;
      this.setTabHighLineStyle();
    }
  },
  render: function render(h) {
    return h(AbstractButton, {
      staticClass: 'mu-tab',
      props: _extends({}, this.generateRouteProps(), {
        containerElement: 'div',
        wrapperClass: 'mu-tab-wrapper',
        disabled: this.disabled,
        ripple: this.ripple,
        rippleOpacity: this.rippleOpacity,
        rippleColor: this.rippleColor
      }),
      style: {
        color: this.active ? this.activeColor.color : ''
      },
      class: defineProperty({
        'mu-tab-active': this.active,
        'is-inverse': this.active && this.getTabsInverse() && !this.activeColor.className && !this.activeColor.color
      }, this.activeColor.className, this.active),
      on: {
        click: this.handleClick
      }
    }, this.$slots.default);
  }
};

Tabs.install = function (Vue$$1) {
  Vue$$1.component(Tabs.name, Tabs);
  Vue$$1.component(Tab.name, Tab);
};

theme.addCreateTheme(TabsTheme);

var props = _extends({}, DatePicker.props, TimePicker.props);

delete props.time;
delete props.type;
delete props.landscape;
var DateTimePicker = {
  name: 'mu-date-time-picker',
  provide: function provide() {
    return {
      getColorObject: this.getColorObject,
      getDayButtonSlots: this.getDayButtonSlots,
      getMonthButtonSlots: this.getMonthButtonSlots,
      getYearButtonSlots: this.getYearButtonSlots
    };
  },

  mixins: [pickerProps, color],
  props: props,
  data: function data() {
    return {
      displayDate: this.date,
      view: 'monthDay',
      type: 'date' // date, time
    };
  },

  methods: {
    getDayButtonSlots: function getDayButtonSlots() {
      return this.$scopedSlots.day;
    },
    getMonthButtonSlots: function getMonthButtonSlots() {
      return this.$scopedSlots.month;
    },
    getYearButtonSlots: function getYearButtonSlots() {
      return this.$scopedSlots.year;
    },
    getColorObject: function getColorObject() {
      return {
        color: this.getColor(this.color),
        colorClass: this.getNormalColorClass(this.color, true),
        bgColorClass: this.getNormalColorClass(this.color)
      };
    },
    getAffix: function getAffix() {
      if (this.format !== 'ampm') return '';
      var hours = this.date.getHours();
      if (hours < 12) {
        return 'am';
      }
      return 'pm';
    },
    handleYearChange: function handleYearChange(year) {
      var date = cloneAsDate(this.displayDate);
      date.setDate(1);
      date.setFullYear(year);
      this.changeDisplayDate(date);
      this.changeView('monthDay');
    },
    handleMonthChange: function handleMonthChange(date) {
      this.changeDisplayDate(date);
      this.changeView('monthDay');
    },
    handleSelect: function handleSelect(date) {
      if (date.getTime() > this.maxDate.getTime()) date = new Date(this.maxDate.getTime());
      if (date.getTime() < this.minDate.getTime()) date = new Date(this.minDate.getTime());
      this.changeDisplayDate(date);
      this.changeTime(date, 'monthDay', false);
      this.changeType('time');
    },
    changeDisplayDate: function changeDisplayDate(date) {
      this.displayDate = date;
    },
    changeType: function changeType(type) {
      this.type = type;
      if (type === 'date' && ['hour', 'minute'].indexOf(this.view) !== -1) {
        this.changeView('monthDay');
      } else if (type === 'time' && ['monthDay', 'month', 'year'].indexOf(this.view) !== -1) {
        this.changeView('hour');
      }
    },
    changeView: function changeView(view) {
      this.view = view;
      if (['hour', 'minute'].indexOf(view) !== -1 && this.type === 'date') {
        this.changeType('time');
      } else if (['monthDay', 'month', 'year'].indexOf(view) !== -1 && this.type === 'time') {
        this.changeType('date');
      }
    },
    handleSelectAffix: function handleSelectAffix(affix) {
      if (affix === this.getAffix()) return;
      var hours = this.date.getHours();
      if (affix === 'am') {
        this.handleChangeHours(hours - 12, affix);
        return;
      }
      this.handleChangeHours(hours + 12, affix);
    },
    handleChangeHours: function handleChangeHours(hours, finished) {
      var time = new Date(this.date);
      var affix = void 0;
      if (typeof finished === 'string') {
        affix = finished;
        finished = undefined;
      }
      if (!affix) {
        affix = this.getAffix();
      }
      if (affix === 'pm' && hours < 12) {
        hours += 12;
      }
      time.setHours(hours);
      this.changeTime(time, 'hour', finished);
      if (finished) this.view = 'minute';
    },
    handleChangeMinutes: function handleChangeMinutes(minutes, finished) {
      var time = new Date(this.date);
      time.setMinutes(minutes);
      this.changeTime(time, 'minute', finished);
    },
    changeTime: function changeTime(time, view, finished) {
      this.$emit('change', time, view, finished);
      this.$emit('update:date', time);
    },
    createDisplay: function createDisplay(h) {
      if (this.noDisplay) return;
      return h(DateTimeDisplay, {
        props: {
          affix: this.getAffix(),
          dateTimeFormat: this.dateTimeFormat,
          view: this.view,
          format: this.format,
          viewType: this.viewType,
          color: this.displayColor,
          displayDate: this.displayDate
        },
        on: {
          changeView: this.changeView,
          selectAffix: this.handleSelectAffix
        }
      });
    },
    createClock: function createClock(h) {
      return h('div', {
        staticClass: 'mu-timepicker-clock'
      }, [h('div', { staticClass: 'mu-timepicker-circle' }), this.view === 'hour' ? h(ClockHours, {
        props: {
          format: this.format,
          initialHours: this.date.getHours()
        },
        on: {
          change: this.handleChangeHours
        }
      }) : undefined, this.view === 'minute' ? h(ClockMinutes, {
        props: {
          initialMinutes: this.date.getMinutes()
        },
        on: {
          change: this.handleChangeMinutes
        }
      }) : undefined]);
    },
    createList: function createList(h) {
      var _this = this;

      return h(ListView, {
        props: {
          format: this.format,
          time: this.date
        },
        on: {
          changeHours: function changeHours(val) {
            return _this.handleChangeHours(val, true);
          },
          changeMinutes: function changeMinutes(val) {
            return _this.handleChangeMinutes(val, true);
          }
        }
      });
    },
    createTabs: function createTabs(h) {
      return h(Tabs, {
        props: {
          value: this.type,
          color: this.displayColor || this.color,
          fullWidth: true
        },
        on: {
          'update:value': this.changeType
        }
      }, [h(Tab, {
        props: {
          value: 'date'
        }
      }, [h('svg', {
        staticClass: 'mu-datetime-picker-svg',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z'
        }
      }), h('path', {
        attrs: {
          d: 'M0 0h24v24H0z',
          fill: 'none'
        }
      })])]), h(Tab, {
        props: {
          value: 'time'
        }
      }, [h('svg', {
        staticClass: 'mu-datetime-picker-svg',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
        }
      }), h('path', {
        attrs: {
          d: 'M0 0h24v24H0z',
          fill: 'none'
        }
      }), h('path', {
        attrs: {
          d: 'M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z'
        }
      })])])]);
    },
    createContent: function createContent(h) {
      switch (this.view) {
        case 'monthDay':
          return h(MonthDayView, {
            props: {
              dateTimeFormat: this.dateTimeFormat,
              firstDayOfWeek: this.firstDayOfWeek,
              maxDate: this.maxDate,
              minDate: this.minDate,
              displayDate: this.displayDate,
              selectedDate: this.date,
              shouldDisableDate: this.shouldDisableDate
            },
            on: {
              changeView: this.changeView,
              select: this.handleSelect
            }
          });
        case 'month':
          return h(MonthView, {
            props: {
              dateTimeFormat: this.dateTimeFormat,
              maxDate: this.maxDate,
              minDate: this.minDate,
              displayDate: this.displayDate
            },
            on: {
              changeView: this.changeView,
              change: this.handleMonthChange
            }
          });
        case 'year':
          return h(YearView, {
            props: {
              displayDate: this.displayDate,
              maxDate: this.maxDate,
              minDate: this.minDate
            },
            on: {
              change: this.handleYearChange
            }
          });
      }
      return this.viewType === 'clock' ? this.createClock(h) : this.createList(h);
    }
  },
  render: function render(h) {
    var _getColorObject = this.getColorObject(),
        color$$1 = _getColorObject.color,
        colorClass = _getColorObject.colorClass;

    return h('div', {
      staticClass: 'mu-picker mu-datetime-picker ' + colorClass,
      style: {
        color: color$$1
      }
    }, [this.createDisplay(h), h('div', {
      staticClass: 'mu-picker-container'
    }, [this.createTabs(h), h(FadeTransition, [this.createContent(h)]), this.$slots.default])]);
  },

  watch: {
    date: function date(val) {
      this.displayDate = val;
    }
  }
};

theme.addCreateTheme(PickerTheme);
var Picker = {
  install: function install(Vue$$1) {
    Vue$$1.component(DatePicker.name, DatePicker);
    Vue$$1.component(TimePicker.name, TimePicker);
    Vue$$1.component(DateTimePicker.name, DateTimePicker);
  }
};

var DialogTheme = (function (theme) {
  return '\n  .mu-dialog {\n    background-color: ' + theme.background.paper + ';\n  }\n  .mu-dialog-scrollable .mu-dialog-title {\n    border-bottom-color: ' + theme.divider + ';\n  }\n  .mu-dialog-scrollable .mu-dialog-actions {\n    border-top-color: ' + theme.divider + ';\n  }\n  .mu-dialog-title {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-dialog-body {\n    color: ' + fade(theme.text.primary, 0.6) + ';\n  }\n  ';
});

var Dialog = {
  name: 'mu-dialog',
  mixins: [popup],
  directives: {
    resize: resize
  },
  props: {
    dialogClass: [String, Array, Object],
    title: String,
    scrollable: Boolean,
    padding: { // 设置scrollable 之后dailog 框距离顶部和底部的值
      type: Number,
      default: 64
    },
    fullscreen: Boolean,
    width: [String, Number],
    maxWidth: [String, Number],
    lockScroll: {
      type: Boolean,
      default: true
    },
    transition: {
      type: String,
      default: 'scale',
      validator: function validator(val) {
        return ['slide-top', 'slide-bottom', 'slide-left', 'slide-right', 'fade', 'scale'];
      }
    }
  },
  mounted: function mounted() {
    this.setMaxDialogContentHeight();
  },
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      _this.setMaxDialogContentHeight();
    });
  },

  methods: {
    handleWrapperClick: function handleWrapperClick(e) {
      if (this.$el !== e.target) return;
      this.overlayClick(e);
    },
    setMaxDialogContentHeight: function setMaxDialogContentHeight() {
      var dialogEl = this.$refs.dialog;
      if (!dialogEl) return;
      if (!this.scrollable) {
        dialogEl.style.maxHeight = '';
        return;
      }
      var maxDialogContentHeight = window.innerHeight - 2 * this.padding;
      var _$refs = this.$refs,
          footer = _$refs.footer,
          title = _$refs.title,
          elBody = _$refs.elBody;

      if (elBody) {
        var maxBodyHeight = maxDialogContentHeight;
        if (footer) maxBodyHeight -= footer.offsetHeight;
        if (title) maxBodyHeight -= title.offsetHeight;
        elBody.style.maxHeight = maxBodyHeight + 'px';
      }
      dialogEl.style.maxHeight = maxDialogContentHeight + 'px';
    }
  },
  watch: {
    open: function open(newValue) {
      var _this2 = this;

      if (!newValue) return;
      this.$nextTick(function () {
        _this2.setMaxDialogContentHeight();
      });
    }
  },
  render: function render(h) {
    var _this3 = this;

    var hasTitleSlots = this.$slots.title && this.$slots.title.length > 0;
    var isShowTitle = this.title || hasTitleSlots;
    var dialogTitle = isShowTitle ? h('div', {
      staticClass: 'mu-dialog-title',
      ref: 'title'
    }, hasTitleSlots ? this.$slots.title : this.title) : undefined;

    var dialogBody = h('div', {
      staticClass: 'mu-dialog-body',
      ref: 'elBody'
    }, this.$slots.default);

    var dialogActions = this.$slots.actions && this.$slots.actions.length > 0 ? h('div', {
      staticClass: 'mu-dialog-actions',
      ref: 'footer'
    }, this.$slots.actions) : undefined;

    var data = {
      staticClass: 'mu-dialog ' + convertClass(this.dialogClass).join(' '),
      class: defineProperty({
        'mu-dialog-fullscreen': this.fullscreen,
        'mu-dialog-scrollable': this.scrollable
      }, 'mu-' + this.transition, true),
      ref: 'dialog'
    };

    if (!this.fullscreen) {
      data.style = {
        'max-width': this.maxWidth === 'auto' ? undefined : getWidth(this.maxWidth),
        'width': this.width === 'auto' ? undefined : getWidth(this.width)
      };
    }
    var dialog = h('div', data, [dialogTitle, dialogBody, dialogActions]);

    return this.open ? h('transition', {
      props: {
        name: 'mu-dialog-transition'
      }
    }, [h('div', {
      staticClass: 'mu-dialog-wrapper',
      directives: [{
        name: 'resize',
        value: function value() {
          return _this3.setMaxDialogContentHeight();
        }
      }],
      style: {
        'z-index': this.zIndex
      },
      on: {
        click: this.handleWrapperClick
      }
    }, [dialog])]) : null;
  }
};

Dialog.install = function (Vue$$1) {
  Vue$$1.component(Dialog.name, Dialog);
};

theme.addCreateTheme(DialogTheme);

var Container = {
  props: {
    container: {
      type: String,
      default: 'popover', // dialog popover bottomSheet
      validator: function validator(val) {
        return val && ['dialog', 'popover', 'bottomSheet'].indexOf(val) !== -1;
      }
    },
    trigger: {},
    open: Boolean
  },
  methods: {
    createWrap: function createWrap(h, children) {
      switch (this.container) {
        case 'popover':
          return h(Popover, {
            props: {
              open: this.open,
              cover: true,
              lazy: true,
              trigger: this.trigger
            },
            on: this.$listeners
          }, children);
        case 'dialog':
          return h(Dialog, {
            props: {
              open: this.open,
              dialogClass: 'mu-picker-dialog',
              transition: 'slide-top'
            },
            on: this.$listeners
          }, children);
        case 'bottomSheet':
          return h(BottomSheet, {
            props: {
              open: this.open
            },
            on: this.$listeners
          }, children);
      }
    }
  },
  render: function render(h) {
    return this.createWrap(h, this.$slots.default);
  }
};

const SECONDS_A_MINUTE = 60;
const SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
const SECONDS_A_DAY = SECONDS_A_HOUR * 24;
const SECONDS_A_WEEK = SECONDS_A_DAY * 7;

const MILLISECONDS_A_SECOND = 1e3;
const MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
const MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
const MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
const MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND;

// English locales
const MS = 'millisecond';
const S = 'second';
const MIN = 'minute';
const H = 'hour';
const D = 'day';
const W = 'week';
const M = 'month';
const Q = 'quarter';
const Y = 'year';
const DATE = 'date';

const FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ssZ';

const INVALID_DATE_STRING = 'Invalid Date';

// regex
const REGEX_PARSE = /^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/;
const REGEX_FORMAT = /\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

const en = {
  name: 'en',
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_')
};

const padStart = (string, length, pad) => {
  const s = String(string);
  if (!s || s.length >= length) return string
  return `${Array((length + 1) - s.length).join(pad)}${string}`
};

const padZoneStr = (negMinuts) => {
  const minutes = Math.abs(negMinuts);
  const hourOffset = Math.floor(minutes / 60);
  const minuteOffset = minutes % 60;
  return `${negMinuts <= 0 ? '+' : '-'}${padStart(hourOffset, 2, '0')}:${padStart(minuteOffset, 2, '0')}`
};

const monthDiff$1 = (a, b) => {
  // function from moment.js in order to keep the same result
  const wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month());
  const anchor = a.clone().add(wholeMonthDiff, 'months');
  const c = b - anchor < 0;
  const anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), 'months');
  return Number(-(wholeMonthDiff + ((b - anchor) / (c ? (anchor - anchor2) :
    (anchor2 - anchor)))) || 0)
};

const absFloor = n => (n < 0 ? Math.ceil(n) || 0 : Math.floor(n));

const prettyUnit = (u) => {
  const special = {
    M: M,
    y: Y,
    w: W,
    d: D,
    h: H,
    m: MIN,
    s: S,
    ms: MS
  };
  return special[u] || String(u || '').toLowerCase().replace(/s$/, '')
};

const isUndefined = s => s === undefined;

var U = {
  padStart,
  padZoneStr,
  monthDiff: monthDiff$1,
  absFloor,
  prettyUnit,
  isUndefined
}

let L = 'en'; // global locale
const Ls = {}; // global loaded locale
Ls[L] = en;

const isDayjs = d => d instanceof Dayjs; // eslint-disable-line no-use-before-define

const parseLocale = (preset, object, isLocal) => {
  let l;
  if (!preset) return null
  if (typeof preset === 'string') {
    if (Ls[preset]) {
      l = preset;
    }
    if (object) {
      Ls[preset] = object;
      l = preset;
    }
  } else {
    const { name } = preset;
    Ls[name] = preset;
    l = name;
  }
  if (!isLocal) L = l;
  return l
};

const dayjs = (date, c) => {
  if (isDayjs(date)) {
    return date.clone()
  }
  // eslint-disable-next-line no-nested-ternary
  const cfg = c ? (typeof c === 'string' ? { format: c } : c) : {};
  cfg.date = date;
  return new Dayjs(cfg) // eslint-disable-line no-use-before-define
};

const wrapper = (date, instance) => dayjs(date, { locale: instance.$L });

const Utils = U; // for plugin use
Utils.parseLocale = parseLocale;
Utils.isDayjs = isDayjs;
Utils.wrapper = wrapper;

const parseDate = (date) => {
  let reg;
  if (date === null) return new Date(NaN) // Treat null as an invalid date
  if (Utils.isUndefined(date)) return new Date()
  if (date instanceof Date) return date
  // eslint-disable-next-line no-cond-assign
  if ((typeof date === 'string')
    && (/.*[^Z]$/i.test(date)) // looking for a better way
    && (reg = date.match(REGEX_PARSE))) {
    // 2018-08-08 or 20180808
    return new Date(
      reg[1], reg[2] - 1, reg[3] || 1,
      reg[5] || 0, reg[6] || 0, reg[7] || 0, reg[8] || 0
    )
  }
  return new Date(date) // timestamp
};

class Dayjs {
  constructor(cfg) {
    this.parse(cfg); // for plugin
  }

  parse(cfg) {
    this.$d = parseDate(cfg.date);
    this.init(cfg);
  }

  init(cfg) {
    const { $d } = this;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
    this.$L = this.$L || parseLocale(cfg.locale, null, true) || L;
  }

  // eslint-disable-next-line class-methods-use-this
  $utils() {
    return Utils
  }

  isValid() {
    return !(this.$d.toString() === INVALID_DATE_STRING)
  }

  isSame(that, units) {
    const other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units)
  }

  isAfter(that, units) {
    return dayjs(that) < this.startOf(units)
  }

  isBefore(that, units) {
    return this.endOf(units) < dayjs(that)
  }

  year() {
    return this.$y
  }

  month() {
    return this.$M
  }

  day() {
    return this.$W
  }

  date() {
    return this.$D
  }

  hour() {
    return this.$H
  }

  minute() {
    return this.$m
  }

  second() {
    return this.$s
  }

  millisecond() {
    return this.$ms
  }

  unix() {
    return Math.floor(this.valueOf() / 1000)
  }

  valueOf() {
    // timezone(hour) * 60 * 60 * 1000 => ms
    return this.$d.getTime()
  }

  startOf(units, startOf) { // startOf -> endOf
    const isStartOf = !Utils.isUndefined(startOf) ? startOf : true;
    const unit = Utils.prettyUnit(units);
    const instanceFactory = (d, m) => {
      const ins = wrapper(new Date(this.$y, m, d), this);
      return isStartOf ? ins : ins.endOf(D)
    };
    const instanceFactorySet = (method, slice) => {
      const argumentStart = [0, 0, 0, 0];
      const argumentEnd = [23, 59, 59, 999];
      return wrapper(this.toDate()[method].apply( // eslint-disable-line prefer-spread
        this.toDate(),
        (isStartOf ? argumentStart : argumentEnd).slice(slice)
      ), this)
    };

    switch (unit) {
      case Y:
        return isStartOf ? instanceFactory(1, 0) :
          instanceFactory(31, 11)
      case M:
        return isStartOf ? instanceFactory(1, this.$M) :
          instanceFactory(0, this.$M + 1)
      case W:
        return isStartOf ? instanceFactory(this.$D - this.$W, this.$M) :
          instanceFactory(this.$D + (6 - this.$W), this.$M)
      case D:
      case DATE:
        return instanceFactorySet('setHours', 0)
      case H:
        return instanceFactorySet('setMinutes', 1)
      case MIN:
        return instanceFactorySet('setSeconds', 2)
      case S:
        return instanceFactorySet('setMilliseconds', 3)
      default:
        return this.clone()
    }
  }

  endOf(arg) {
    return this.startOf(arg, false)
  }

  $set(units, int) { // private set
    const unit = Utils.prettyUnit(units);
    const name = {
      [D]: 'setDate',
      [DATE]: 'setDate',
      [M]: 'setMonth',
      [Y]: 'setFullYear',
      [H]: 'setHours',
      [MIN]: 'setMinutes',
      [S]: 'setSeconds',
      [MS]: 'setMilliseconds'
    }[unit];
    const arg = unit === D ? this.$D + (int - this.$W) : int;

    if (this.$d[name]) this.$d[name](arg);

    this.init();
    return this
  }

  set(string, int) {
    return this.clone().$set(string, int)
  }

  add(number, units) {
    number = Number(number); // eslint-disable-line no-param-reassign
    const unit = Utils.prettyUnit(units);
    const instanceFactory = (u, n) => {
      const date = this.set(DATE, 1).set(u, n + number);
      return date.set(DATE, Math.min(this.$D, date.daysInMonth()))
    };
    const instanceFactorySet = (n) => {
      const date = new Date(this.$d);
      date.setDate(date.getDate() + (n * number));
      return wrapper(date, this)
    };
    if (unit === M) {
      return instanceFactory(M, this.$M)
    }
    if (unit === Y) {
      return instanceFactory(Y, this.$y)
    }
    if (unit === D) {
      return instanceFactorySet(1)
    }
    if (unit === W) {
      return instanceFactorySet(7)
    }
    const step = {
      [MIN]: MILLISECONDS_A_MINUTE,
      [H]: MILLISECONDS_A_HOUR,
      [S]: MILLISECONDS_A_SECOND
    }[unit] || 1; // ms

    const nextTimeStamp = this.valueOf() + (number * step);
    return wrapper(nextTimeStamp, this)
  }

  subtract(number, string) {
    return this.add(number * -1, string)
  }

  format(formatStr) {
    if (!this.isValid()) return INVALID_DATE_STRING

    const str = formatStr || FORMAT_DEFAULT;
    const zoneStr = Utils.padZoneStr(this.$d.getTimezoneOffset());
    const locale = this.$locale();
    const {
      weekdays, months
    } = locale;
    const getShort = (arr, index, full, length) => (
      (arr && arr[index]) || full[index].substr(0, length)
    );
    const get$H = (match) => {
      if (this.$H === 0) return 12
      return Utils.padStart(this.$H < 13 ? this.$H : this.$H - 12, match === 'hh' ? 2 : 1, '0')
    };

    const matches = {
      YY: String(this.$y).slice(-2),
      YYYY: String(this.$y),
      M: String(this.$M + 1),
      MM: Utils.padStart(this.$M + 1, 2, '0'),
      MMM: getShort(locale.monthsShort, this.$M, months, 3),
      MMMM: months[this.$M],
      D: String(this.$D),
      DD: Utils.padStart(this.$D, 2, '0'),
      d: String(this.$W),
      dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
      ddd: getShort(locale.weekdaysShort, this.$W, weekdays, 3),
      dddd: weekdays[this.$W],
      H: String(this.$H),
      HH: Utils.padStart(this.$H, 2, '0'),
      h: get$H('h'),
      hh: get$H('hh'),
      a: this.$H < 12 ? 'am' : 'pm',
      A: this.$H < 12 ? 'AM' : 'PM',
      m: String(this.$m),
      mm: Utils.padStart(this.$m, 2, '0'),
      s: String(this.$s),
      ss: Utils.padStart(this.$s, 2, '0'),
      SSS: Utils.padStart(this.$ms, 3, '0'),
      Z: zoneStr
    };

    return str.replace(REGEX_FORMAT, (match) => {
      if (match.indexOf('[') > -1) return match.replace(/\[|\]/g, '')
      return matches[match] || zoneStr.replace(':', '') // 'ZZ'
    })
  }

  utcOffset() {
    // Because a bug at FF24, we're rounding the timezone offset around 15 minutes
    // https://github.com/moment/moment/pull/1871
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15
  }

  diff(input, units, float) {
    const unit = Utils.prettyUnit(units);
    const that = dayjs(input);
    const zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
    const diff = this - that;
    let result = Utils.monthDiff(this, that);

    result = {
      [Y]: result / 12,
      [M]: result,
      [Q]: result / 3,
      [W]: (diff - zoneDelta) / MILLISECONDS_A_WEEK,
      [D]: (diff - zoneDelta) / MILLISECONDS_A_DAY,
      [H]: diff / MILLISECONDS_A_HOUR,
      [MIN]: diff / MILLISECONDS_A_MINUTE,
      [S]: diff / MILLISECONDS_A_SECOND
    }[unit] || diff; // milliseconds

    return float ? result : Utils.absFloor(result)
  }

  daysInMonth() {
    return this.endOf(M).$D
  }

  $locale() { // get locale object
    return Ls[this.$L]
  }

  locale(preset, object) {
    const that = this.clone();
    that.$L = parseLocale(preset, object, true);
    return that
  }

  clone() {
    return wrapper(this.toDate(), this)
  }

  toDate() {
    return new Date(this.$d)
  }

  toArray() {
    return [
      this.$y,
      this.$M,
      this.$D,
      this.$H,
      this.$m,
      this.$s,
      this.$ms
    ]
  }

  toJSON() {
    return this.toISOString()
  }

  toISOString() {
    // ie 8 return
    // new Dayjs(this.valueOf() + this.$d.getTimezoneOffset() * 60000)
    // .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    return this.$d.toISOString()
  }

  toObject() {
    return {
      years: this.$y,
      months: this.$M,
      date: this.$D,
      hours: this.$H,
      minutes: this.$m,
      seconds: this.$s,
      milliseconds: this.$ms
    }
  }

  toString() {
    return this.$d.toUTCString()
  }
}

dayjs.prototype = Dayjs.prototype;

dayjs.extend = (plugin, option) => {
  plugin(option, Dayjs, dayjs);
  return dayjs
};

dayjs.locale = parseLocale;

dayjs.isDayjs = isDayjs;

dayjs.unix = timestamp => (
  dayjs(timestamp * 1e3)
);

dayjs.en = Ls[L];

var DEFAULT_FORMAT = {
  date: 'YYYY-MM-DD',
  time: 'HH:mm',
  year: 'YYYY',
  month: 'YYYY-MM',
  dateTime: 'YYYY-MM-DD HH:mm'
};

var PickerProps = _extends({}, TimePicker.props, DatePicker.props, pickerProps.props);

delete PickerProps.date;
delete PickerProps.time;
delete PickerProps.type;
delete PickerProps.format;

var DateInput = {
  name: 'mu-date-input',
  mixins: [_extends({}, input)],
  directives: {
    keyboardFocus: keyboardFocus
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: _extends({
    container: {
      type: String,
      default: 'popover', // dialog popover bottomSheet
      validator: function validator(val) {
        return val && ['dialog', 'popover', 'bottomSheet'].indexOf(val) !== -1;
      }
    },
    type: {
      type: String,
      default: 'date' // date, time, year, month, dateTime, dateRange
    },
    format: {
      type: String
    },
    rangeSeparator: {
      type: String,
      default: '—'
    },
    actions: Boolean,
    clockType: TimePicker.props.format,
    okLabel: {
      type: String,
      default: '确定'
    },
    cancelLabel: {
      type: String,
      default: '取消'
    },
    value: {},
    valueFormat: String
  }, PickerProps),
  data: function data() {
    return {
      open: false,
      date: this.value ? dayjs(this.value).toDate() : new Date()
    };
  },

  methods: {
    changeValue: function changeValue() {
      this.closePicker();
      var value = this.valueFormat ? dayjs(this.date).format(this.valueFormat) : this.date;
      this.$emit('input', value);
      this.$emit('change', value);
      if (this.muFormItem) this.muFormItem.onBlur();
    },
    focus: function focus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },
    blur: function blur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },
    closePicker: function closePicker() {
      this.open = false;
    },
    handleDateChange: function handleDateChange(date) {
      this.date = date;
      if (!this.actions) this.changeValue();
    },
    handleTimeChange: function handleTimeChange(date, mode, finished) {
      this.date = date;
      if (!finished || mode !== 'minute') return;
      if (!this.actions) this.changeValue();
    },
    generateTextFieldProps: function generateTextFieldProps() {
      return this.generateProps(input.props);
    },
    generatePickerProps: function generatePickerProps() {
      return this.generateProps(pickerProps.props);
    },
    generateDatePickerProps: function generateDatePickerProps() {
      return this.generateProps(DatePicker.props);
    },
    generateTimePickerProps: function generateTimePickerProps() {
      return this.generateProps(TimePicker.props);
    },
    generateProps: function generateProps(props) {
      var _this = this;

      var obj = {};
      Object.keys(props).forEach(function (key) {
        obj[key] = _this[key];
      });
      return obj;
    },
    createTextField: function createTextField(h) {
      var _this2 = this;

      var dateStr = this.value ? dayjs(this.value).format(this.format ? this.format : DEFAULT_FORMAT[this.type]) : '';
      var listeners = _extends({}, this.$listeners, {
        keydown: function keydown(e) {
          if (keycode(e) === 'tab') {
            _this2.blur(e);
            _this2.open = false;
          }
        },
        click: function click() {
          return _this2.open = true;
        },
        focus: this.focus,
        blur: this.blur
      });
      delete listeners.input;
      delete listeners.change;
      var placeholder = !this.labelFloat ? this.$attrs.placeholder : '';
      return [h('input', {
        staticClass: 'mu-text-field-input',
        ref: 'input',
        attrs: _extends({
          tabindex: 0
        }, this.$attrs, {
          disabled: this.disabled,
          placeholder: placeholder,
          readonly: true
        }),
        domProps: {
          value: dateStr
        },
        directives: [{
          name: 'keyboard-focus',
          value: function value() {
            return _this2.open = true;
          }
        }],
        on: listeners
      })];
    },
    createActions: function createActions(h) {
      if (!this.actions) return;
      return h('div', {
        staticClass: 'mu-picker-actions'
      }, [h(Button, {
        props: {
          flat: true,
          color: 'primary'
        },
        on: {
          click: this.closePicker
        }
      }, this.cancelLabel), h(Button, {
        props: {
          flat: true,
          color: 'primary'
        },
        on: {
          click: this.changeValue
        }
      }, this.okLabel)]);
    },
    createPicker: function createPicker(h) {
      switch (this.type) {
        case 'date':
        case 'year':
        case 'month':
          return h(DatePicker, {
            props: _extends({}, this.generateDatePickerProps(), this.generatePickerProps(), {
              type: this.type === 'month' ? 'month' : this.type === 'year' ? 'year' : 'date',
              date: this.date
            }),
            on: {
              change: this.handleDateChange
            },
            style: {
              width: this.container === 'bottomSheet' ? 'auto' : ''
            },
            scopedSlots: {
              day: this.$scopedSlots.day
            }
          }, [this.createActions(h)]);
        case 'dateTime':
          return h(DateTimePicker, {
            props: _extends({}, this.generateDatePickerProps(), this.generateTimePickerProps(), this.generatePickerProps(), {
              format: this.clockType,
              date: this.date
            }),
            scopedSlots: {
              day: this.$scopedSlots.day
            },
            on: {
              change: this.handleTimeChange
            },
            style: {
              width: this.container === 'bottomSheet' ? 'auto' : ''
            }
          }, [this.createActions(h)]);
        case 'time':
          return h(TimePicker, {
            props: _extends({}, this.generateTimePickerProps(), this.generatePickerProps(), {
              time: this.date,
              format: this.clockType
            }),
            on: {
              change: this.handleTimeChange
            },
            style: {
              width: this.container === 'bottomSheet' ? 'auto' : ''
            }
          }, [this.createActions(h)]);
      }
    }
  },
  render: function render(h) {
    return this.createInput(h, {
      staticClass: 'mu-text-field',
      ref: 'content'
    }, [this.createTextField(h), this.$slots.default, h(Container, {
      props: {
        container: this.container,
        open: this.open,
        trigger: this.$el ? this.$el.querySelector('.mu-text-field') : undefined
      },
      ref: 'popover',
      on: {
        close: this.closePicker
      }
    }, [this.createPicker(h)])]);
  },
  beforeDestroy: function beforeDestroy() {
    this.closePicker();
  },

  watch: {
    value: function value(val) {
      this.date = val ? dayjs(val).toDate() : undefined;
    }
  }
};

DateInput.install = function (Vue$$1) {
  Vue$$1.component(DateInput.name, DateInput);
};

var DataTableTheme = (function (theme, type) {
  return '\n  .mu-table {\n    background-color: ' + theme.text.alternate + ';\n  }\n  .mu-table tr {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-table tr.is-stripe {\n    background-color: ' + (type === 'dark' ? grey800 : grey50) + ';\n  }\n  .mu-table tr.is-hover {\n    background-color: ' + (type === 'dark' ? 'rgba(0, 0, 0, .14)' : grey200) + ';\n  }\n  .mu-table tr.is-selected {\n    background-color: ' + (type === 'dark' ? grey700 : grey100) + ';\n  }\n  .mu-table td {\n    border-bottom-color: ' + theme.divider + ';\n  }\n  .mu-table th {\n    color: ' + theme.text.secondary + ';\n    border-bottom-color: ' + theme.divider + ';\n  }\n  .mu-table th.is-sortable:hover {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-table th.is-sorting {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-table-border {\n    border-color: ' + theme.divider + ';\n  }\n  .mu-table-border th,\n  .mu-table-border td {\n    border-right-color: ' + theme.divider + ';\n  }\n  .mu-table-empty {\n    color: ' + theme.text.secondary + ';\n  }\n  .mu-table-expand-row td.is-expand {\n    border-bottom-color: ' + theme.divider + ';\n  }\n  ';
});

var SPACE$1 = 8;
var TooltipContent = {
  name: 'mu-tooltip-content',
  mixins: [popup],
  directives: {
    resize: resize,
    scroll: scroll
  },
  props: {
    overlay: {
      default: false
    },
    escPressClose: {
      default: false
    },
    placement: {
      type: String,
      default: 'bottom',
      validator: function validator(val) {
        return ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'].indexOf(val) !== -1;
      }
    },
    trigger: {}
  },
  mounted: function mounted() {
    this.setStyle();
  },
  updated: function updated() {
    var _this = this;

    setTimeout(function () {
      return _this.setStyle();
    }, 0);
  },

  methods: {
    getLeftPosition: function getLeftPosition(width, react) {
      switch (this.placement) {
        case 'left':
        case 'left-start':
        case 'left-end':
          return react.left - width - SPACE$1;
        case 'right':
        case 'right-start':
        case 'right-end':
          return react.left + react.width + SPACE$1;
        case 'top':
        case 'bottom':
          return react.left + react.width / 2 - width / 2;
        case 'bottom-start':
        case 'top-start':
          return react.left;
        case 'bottom-end':
        case 'top-end':
          return react.left + react.width - width;
      }
    },
    getTopPosition: function getTopPosition(height, react) {
      switch (this.placement) {
        case 'top':
        case 'top-start':
        case 'top-end':
          return react.top - height - SPACE$1;
        case 'bottom':
        case 'bottom-start':
        case 'bottom-end':
          return react.top + react.height + SPACE$1;
        case 'left':
        case 'right':
          return react.top + react.height / 2 - height / 2;
        case 'left-start':
        case 'right-start':
          return react.top;
        case 'left-end':
        case 'right-end':
          return react.top + react.height - height;
      }
    },
    setStyle: function setStyle() {
      if (!this.open) return;
      var el = this.$el;
      var triggerEl = this.trigger;
      if (!el || !triggerEl) return;
      var elReact = el.getBoundingClientRect();
      var react = triggerEl.getBoundingClientRect();
      el.style.top = this.getTopPosition(elReact.height, react) + 'px';
      el.style.left = this.getLeftPosition(elReact.width, react) + 'px';
    }
  },
  render: function render(h) {
    return h('transition', {
      props: {
        name: 'mu-tooltip-' + this.placement.split('-')[0]
      }
    }, [this.open ? h('div', {
      staticClass: 'mu-tooltip',
      style: {
        'z-index': this.zIndex
      },
      directives: [{
        name: 'resize',
        value: this.setStyle
      }, {
        name: 'scroll',
        value: this.setStyle
      }]
    }, this.$slots.default) : undefined]);
  }
};

var Tooltip = {
  name: 'mu-tooltip',
  props: {
    content: String,
    placement: TooltipContent.props.placement,
    open: Boolean,
    tooltipClass: [String, Object, Array]
  },
  data: function data() {
    return {
      active: this.open,
      trigger: null
    };
  },
  beforeCreate: function beforeCreate() {
    if (this.$isServer) return;

    this.tooltipVM = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
      data: { node: '' },
      render: function render(h) {
        return this.node;
      }
    }).$mount();
  },
  mounted: function mounted() {
    this.trigger = this.$el;
  },

  methods: {
    addEventHandle: function addEventHandle(old, fn) {
      if (!old) {
        return fn;
      } else if (Array.isArray(old)) {
        return old.indexOf(fn) > -1 ? old : old.concat(fn);
      } else {
        return old === fn ? old : [old, fn];
      }
    },
    show: function show() {
      if (this.timer) clearTimeout(this.timer);
      this.active = true;
    },
    hide: function hide() {
      var _this = this;

      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this.active = false;
      }, 200);
    }
  },
  watch: {
    active: function active(val) {
      this.$emit('update:open', val);
    },
    open: function open(val) {
      this.active = val;
    }
  },
  render: function render(h) {
    var _this2 = this;

    var content = (this.$slots.content && this.$slots.content.length > 0 ? this.$slots.content : this.content) || '';
    if (this.tooltipVM) {
      this.tooltipVM.node = h(TooltipContent, {
        class: this.tooltipClass,
        props: {
          placement: this.placement,
          open: this.active,
          trigger: this.trigger
        },
        nativeOn: {
          mouseenter: function mouseenter() {
            return _this2.show();
          },
          mouseleave: function mouseleave() {
            return _this2.hide();
          }
        }
      }, content);
    }

    var vnode = getFirstComponentChild(this.$slots.default);
    if (!vnode) return vnode;
    vnode.data = vnode.data || {};
    var on = vnode.data.on = vnode.data.on || {};
    var nativeOn = vnode.data.nativeOn = vnode.data.nativeOn || {};
    nativeOn.mouseenter = on.mouseenter = this.addEventHandle(on.mouseenter, this.show);
    nativeOn.mouseleave = on.mouseleave = this.addEventHandle(on.mouseleave, this.hide);
    return vnode;
  }
};

Tooltip.install = function (Vue$$1) {
  Vue$$1.component(Tooltip.name, Tooltip);
};

var header = {
  methods: {
    toggleSelectAll: function toggleSelectAll(val) {
      this.isSelectAll = val;
      var selects = [];
      if (this.isSelectAll) {
        var i = 0;
        while (i < this.data.length) {
          selects.push(i++);
        }
      }
      this.$emit('update:selects', selects);
    },
    handleSortChange: function handleSortChange(column) {
      var sort = _extends({}, this.sort);

      if (this.sort && this.sort.name === column.name) {
        sort.order = sort.order === 'desc' ? 'asc' : 'desc';
      } else {
        sort.name = column.name;
        sort.order = 'desc';
      }

      this.$emit('update:sort', sort);
      this.$emit('sort-change', sort);
    },
    createSlotHeader: function createSlotHeader() {
      return this.$scopedSlots.header({
        columns: this.columns
      });
    },
    createSlotTh: function createSlotTh(column) {
      return this.$scopedSlots.th(_extends({}, column));
    },
    createDefaultTh: function createDefaultTh(h, column) {
      return [column.sortable ? h('svg', {
        staticClass: 'mu-table-sort-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z'
        }
      })]) : undefined, column.title];
    },
    createTh: function createTh(h, column) {
      return this.$scopedSlots.th ? this.createSlotTh(column) : this.createDefaultTh(h, column);
    },
    createCheckboxTh: function createCheckboxTh(h) {
      var isEnable = this.selectable && this.selectAll;
      return h('th', {
        staticClass: 'mu-checkbox-col'
      }, [h(Checkbox, {
        props: {
          inputValue: this.isSelectAll,
          disabled: !isEnable
        },
        on: {
          change: this.toggleSelectAll
        }
      })]);
    },
    createTHeader: function createTHeader(h) {
      var _this = this;

      var arr = this.columns.map(function (column) {
        var th = h('th', {
          class: [column.align ? 'is-' + column.align : '', column.class || '', column.sortable ? 'is-sortable' : '', column.sortable && _this.sort && _this.sort.name === column.name ? 'is-sorting' : '', column.sortable && _this.sort && _this.sort.name === column.name && _this.sort.order === 'asc' ? 'sort-asc' : ''],
          on: {
            click: function click() {
              return column.sortable && _this.handleSortChange(column);
            }
          }
        }, _this.createTh(h, column));

        return column.tooltip ? h(Tooltip, {
          props: {
            content: column.tooltip
          }
        }, [th]) : th;
      });

      if (this.checkbox) arr.unshift(this.createCheckboxTh(h));
      return h('tr', {}, arr);
    },
    createHeader: function createHeader(h) {
      return h('div', {
        staticClass: 'mu-table-header-wrapper',
        ref: 'header',
        directives: [{
          name: 'mousewheel',
          value: this.handleHeaderFooterMousewheel
        }]
      }, [h('table', {
        staticClass: 'mu-table-header',
        style: {
          width: this.tableWidth
        }
      }, [this.createColGroup(h), h('thead', {}, [this.$scopedSlots.header ? this.createSlotHeader() : this.createTHeader(h)])])]);
    }
  }
};

var body = {
  props: {
    expandRowIndex: {
      type: Number,
      default: -1
    },
    autoExpand: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      hoverIndex: -1,
      expandIndex: this.expandRowIndex,
      isSelectAll: false
    };
  },

  methods: {
    handleScroll: function handleScroll(e) {
      var scrollLeft = e.target.scrollLeft;
      var theader = this.$refs.header;
      var tfooter = this.$refs.tfooter;
      if (theader) theader.scrollLeft = scrollLeft;
      if (tfooter) tfooter.scrollLeft = scrollLeft;
    },
    isSelected: function isSelected(index) {
      return this.selects.indexOf(index) !== -1;
    },
    toggleSelect: function toggleSelect(index) {
      if (!this.selectable) return;
      var selects = [].concat(toConsumableArray(this.selects));
      var selectIndex = selects.indexOf(index);
      if (selectIndex !== -1) {
        selects.splice(selectIndex, 1);
      } else {
        selects.push(index);
      }
      selects.sort(function (a, b) {
        return a - b;
      });
      this.$emit('update:selects', selects);
      this.$emit('select-change', index, selects);
    },
    toggleExpand: function toggleExpand(index) {
      this.expandIndex = this.expandIndex === index ? -1 : index;
    },
    createEmpty: function createEmpty(h) {
      return [this.$slots.empty ? this.$slots.empty : h('div', { staticClass: 'mu-table-empty' }, this.noDataText)];
    },
    createSlotContent: function createSlotContent(row, index) {
      return this.$scopedSlots.default({
        row: row,
        $index: index
      });
    },
    createCheckboxTd: function createCheckboxTd(h, index) {
      var _this = this;

      return h('td', {
        staticClass: 'mu-checkbox-col'
      }, [h(Checkbox, {
        props: {
          inputValue: this.isSelected(index),
          disabled: !this.selectable
        },
        on: {
          change: function change() {
            return _this.toggleSelect(index);
          },
          click: function click(e) {
            e.stopPropagation();
          }
        }
      })]);
    },
    createContent: function createContent(h) {
      var _this2 = this;

      var contents = [];

      var _loop = function _loop(index) {
        var row = _this2.data[index];
        var arr = _this2.$scopedSlots.default ? _this2.createSlotContent(row, index) : _this2.columns.map(function (column) {
          var text = column.formatter && typeof column.formatter === 'function' ? column.formatter(row[column.name], row) : row[column.name];
          return h('td', {
            class: [column.align || column.cellAlign ? 'is-' + (column.cellAlign || column.align) : '']
          }, text);
        }) || [];
        if (_this2.checkbox) arr.unshift(_this2.createCheckboxTd(h, index));

        var rowClassName = typeof _this2.rowClassName === 'function' ? _this2.rowClassName(index, row) : _this2.rowClassName;
        contents.push(h('tr', {
          staticClass: rowClassName,
          class: {
            'is-hover': _this2.hover && _this2.hoverIndex === index,
            'is-stripe': _this2.stripe && index % 2 !== 0,
            'is-selected': _this2.isSelected(index)
          },
          style: typeof _this2.rowStyle === 'function' ? _this2.rowStyle(index, row) : _this2.rowStyle,
          on: {
            mouseenter: function mouseenter(e) {
              _this2.hoverIndex = index;
              _this2.$emit('row-mouseenter', index, row, e);
            },
            mouseleave: function mouseleave(e) {
              _this2.hoverIndex = -1;
              _this2.$emit('row-mouseleave', index, row, e);
            },
            contextmenu: function contextmenu(e) {
              _this2.$emit('row-contextmenu', index, row, e);
            },
            click: function click(e) {
              if (!_this2.checkbox) _this2.toggleSelect(index);
              if (_this2.autoExpand) _this2.toggleExpand(index);
              _this2.$emit('row-click', index, row, e);
            },
            dblclick: function dblclick(e) {
              return _this2.$emit('row-dblclick', index, row, e);
            }
          },
          key: row[_this2.rowKey]
        }, arr));

        if (_this2.$scopedSlots.expand) {
          contents.push(h('tr', {
            staticClass: 'mu-table-expand-row'
          }, [h('td', {
            attrs: {
              colspan: _this2.columns.length + (_this2.checkbox ? 1 : 0)
            },
            class: {
              'is-expand': _this2.expandIndex === index
            }
          }, _this2.expandIndex === index ? [h(ExpandTransition, {}, _this2.$scopedSlots.expand({
            row: row,
            $index: index
          }))] : undefined)]));
        }
      };

      for (var index = 0; index < this.data.length; index++) {
        _loop(index);
      }
      return contents;
    },
    createBody: function createBody(h) {
      return this.data && this.data.length > 0 ? h('div', {
        staticClass: 'mu-table-body-wrapper',
        on: {
          scroll: this.handleScroll
        },
        ref: 'body'
      }, [h('table', {
        staticClass: 'mu-table-body',
        style: {
          width: this.tableWidth
        }
      }, [this.createColGroup(h), h('tbody', {}, this.createContent(h))])]) : this.createEmpty(h);
    }
  },
  watch: {
    selects: function selects(val) {
      this.isSelectAll = val && val.length >= this.data.length;
    },
    expandRowIndex: function expandRowIndex(val) {
      if (this.expandIndex === val) return;
      this.expandIndex = val;
    },
    expandIndex: function expandIndex(val) {
      this.$emit('update:expandRowIndex', val);
      this.$emit('change-expand', val);
    }
  }
};

var footer = {
  methods: {
    createFooter: function createFooter(h) {
      return this.$scopedSlots.footer ? h('div', {
        staticClass: 'mu-table-footer-wrapper',
        ref: 'footer'
      }, [h('table', {
        staticClass: 'mu-table-footer',
        style: {
          width: this.tableWidth
        }
      }, [this.createColGroup(h), h('tbody', {}, this.$scopedSlots.footer({
        columns: this.columns
      }))])]) : undefined;
    }
  }
};

var colgroup = {
  props: {
    minColWidth: {
      type: Number,
      default: 128
    },
    checkboxColWidth: {
      type: Number,
      default: 75
    }
  },
  data: function data() {
    return {
      cols: [],
      tableWidth: ''
    };
  },
  mounted: function mounted() {
    this.setCols();
  },

  methods: {
    setCols: function setCols() {
      var _this = this;

      var tableElWidth = this.$el.offsetWidth;
      var widthArr = this.columns.filter(function (column) {
        return column.width;
      }).map(function (column) {
        return Number(column.width);
      });
      widthArr.forEach(function (width) {
        return tableElWidth -= width;
      });
      if (this.checkbox) tableElWidth -= this.checkboxColWidth;

      var otherWidth = Math.floor(tableElWidth / (this.columns.length - widthArr.length));

      if (otherWidth < this.minColWidth) otherWidth = this.minColWidth;
      this.cols = this.columns.map(function (column) {
        return column.width ? column.width : _this.fit ? otherWidth : _this.minColWidth;
      });
      if (this.checkbox) this.cols.unshift(this.checkboxColWidth);
      var tableWidth = 0;
      this.cols.forEach(function (width) {
        return tableWidth += Number(width);
      });
      this.tableWidth = tableWidth + 'px';
    },
    createColGroup: function createColGroup(h) {
      return h('colgroup', {}, this.cols.map(function (width) {
        return h('col', {
          attrs: {
            width: width
          }
        });
      }));
    }
  },
  watch: {
    columns: function columns() {
      this.setCols();
    }
  },
  directives: {
    resize: resize
  }
};

var ProgressTheme = (function (theme) {
  return "\n  .mu-linear-progress.mu-secondary-color .mu-linear-progress-background,\n  .mu-linear-progress.mu-secondary-color .mu-linear-progress-indeterminate,\n  .mu-linear-progress.mu-secondary-color .mu-linear-progress-determinate {\n    background-color: " + theme.secondary + ";\n  }\n  .mu-linear-progress.mu-success-color .mu-linear-progress-background,\n  .mu-linear-progress.mu-success-color .mu-linear-progress-indeterminate,\n  .mu-linear-progress.mu-success-color .mu-linear-progress-determinate {\n    background-color: " + theme.success + ";\n  }\n  .mu-linear-progress.mu-warning-color .mu-linear-progress-background,\n  .mu-linear-progress.mu-warning-color .mu-linear-progress-indeterminate,\n  .mu-linear-progress.mu-warning-color .mu-linear-progress-determinate {\n    background-color: " + theme.warning + ";\n  }\n  .mu-linear-progress.mu-info-color .mu-linear-progress-background,\n  .mu-linear-progress.mu-info-color .mu-linear-progress-indeterminate,\n  .mu-linear-progress.mu-info-color .mu-linear-progress-determinate {\n    background-color: " + theme.info + ";\n  }\n  .mu-linear-progress.mu-error-color .mu-linear-progress-background,\n  .mu-linear-progress.mu-error-color .mu-linear-progress-indeterminate,\n  .mu-linear-progress.mu-error-color .mu-linear-progress-determinate {\n    background-color: " + theme.error + ";\n  }\n  .mu-linear-progress-background {\n    background-color: " + theme.primary + ";\n  }\n  .mu-linear-progress-indeterminate{\n    background-color: " + theme.primary + ";\n  }\n  .mu-linear-progress-determinate{\n    background-color: " + theme.primary + ";\n  }\n  .mu-circle-spinner {\n    border-color: " + theme.primary + ";\n  }\n  .mu-circle-spinner.mu-secondary-color {\n    border-color: " + theme.secondary + ";\n  }\n  .mu-circular-progress.mu-secondary-color .mu-circular-progress-determinate-path {\n    stroke: " + theme.secondary + ";\n  }\n  .mu-circle-spinner.mu-success-color {\n    border-color: " + theme.success + ";\n  }\n  .mu-circular-progress.mu-success-color .mu-circular-progress-determinate-path {\n    stroke: " + theme.success + ";\n  }\n  .mu-circle-spinner.mu-warning-color {\n    border-color: " + theme.warning + ";\n  }\n  .mu-circular-progress.mu-warning-color .mu-circular-progress-determinate-path {\n    stroke: " + theme.warning + ";\n  }\n  .mu-circle-spinner.mu-info-color {\n    border-color: " + theme.info + ";\n  }\n  .mu-circular-progress.mu-info-color .mu-circular-progress-determinate-path {\n    stroke: " + theme.info + ";\n  }\n  .mu-circle-spinner.mu-error-color {\n    border-color: " + theme.error + ";\n  }\n  .mu-circular-progress.mu-error-color .mu-circular-progress-determinate-path {\n    stroke: " + theme.error + ";\n  }\n  .mu-circular-progress-determinate-path{\n    stroke: " + theme.primary + ";\n  }\n  ";
});

var LinearProgress = {
  name: 'mu-linear-progress',
  mixins: [color],
  props: {
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'indeterminate',
      validator: function validator(val) {
        return ['indeterminate', 'determinate'].indexOf(val) !== -1;
      }
    },
    value: {
      type: Number,
      default: 0
    },
    size: [Number, String]
  },
  computed: {
    percent: function percent() {
      return (this.value - this.min) / (this.max - this.min) * 100;
    },
    linearStyle: function linearStyle() {
      var color$$1 = this.color,
          mode = this.mode,
          percent = this.percent;

      return {
        'background-color': this.getColor(color$$1),
        width: mode === 'determinate' ? percent + '%' : ''
      };
    },
    linearClass: function linearClass() {
      return 'mu-linear-progress-' + this.mode;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-linear-progress ' + this.getColorClass(),
      style: {
        height: this.size + 'px'
      }
    }, [h('div', {
      staticClass: 'mu-linear-progress-background',
      style: {
        'background-color': this.getColor(this.color)
      }
    }), h('div', {
      style: this.linearStyle,
      class: this.linearClass
    })]);
  }
};

var Circular = {
  mixins: [color],
  props: {
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: ''
    },
    borderWidth: {
      type: Number,
      default: 3
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-circle-wrapper active',
      style: {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }, [h('div', {
      staticClass: 'mu-circle-spinner active ' + this.getColorClass(),
      style: {
        'border-color': this.getColor(this.color)
      }
    }, [h('div', { staticClass: 'mu-circle-clipper left' }, [h('div', { staticClass: 'mu-circle', style: { 'border-width': this.borderWidth + 'px' } })]), h('div', { staticClass: 'mu-circle-gap-patch' }, [h('div', { staticClass: 'mu-circle' })]), h('div', { staticClass: 'mu-circle-clipper right' }, [h('div', { staticClass: 'mu-circle', style: { 'border-width': this.borderWidth + 'px' } })])])]);
  }
};

var CircularProgress = {
  name: 'mu-circular-progress',
  mixins: [color],
  props: {
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'indeterminate',
      validator: function validator(val) {
        return ['indeterminate', 'determinate'].indexOf(val) !== -1;
      }
    },
    value: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 24
    },
    strokeWidth: {
      type: Number,
      default: 3
    }
  },
  computed: {
    radius: function radius() {
      return (this.size - this.strokeWidth) / 2;
    },
    circularSvgStyle: function circularSvgStyle() {
      return {
        width: this.size,
        height: this.size
      };
    },
    circularPathStyle: function circularPathStyle() {
      var relVal = this.getRelativeValue();
      return {
        stroke: this.getColor(this.color),
        'stroke-dasharray': this.getArcLength(relVal) + ', ' + this.getArcLength(1)
      };
    }
  },
  methods: {
    getArcLength: function getArcLength(fraction) {
      return fraction * Math.PI * (this.size - this.strokeWidth);
    },
    getRelativeValue: function getRelativeValue() {
      var value = this.value,
          min = this.min,
          max = this.max;

      var clampedValue = Math.min(Math.max(min, value), max);
      return clampedValue / (max - min);
    },
    createDeterminateCircular: function createDeterminateCircular(h) {
      if (this.mode !== 'determinate') return;
      return h('svg', {
        staticClass: 'mu-circular-progress-determinate',
        style: this.circularSvgStyle,
        attrs: {
          viewBox: '0 0 ' + this.size + ' ' + this.size
        }
      }, [h('circle', {
        staticClass: 'mu-circular-progress-determinate-path',
        style: this.circularPathStyle,
        attrs: {
          r: this.radius,
          cx: this.size / 2,
          cy: this.size / 2,
          fill: 'none',
          'stroke-miterlimit': '20',
          'stroke-width': this.strokeWidth
        }
      })]);
    }
  },
  render: function render(h) {
    var circular = this.mode === 'indeterminate' ? h(Circular, {
      props: {
        size: this.size,
        color: this.color,
        borderWidth: this.strokeWidth
      }
    }) : undefined;
    return h('div', {
      staticClass: 'mu-circular-progress ' + this.getColorClass(),
      style: {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }, [circular, this.createDeterminateCircular(h)]);
  }
};

theme.addCreateTheme(ProgressTheme);
var Progress = {
  install: function install(Vue$$1) {
    Vue$$1.component(LinearProgress.name, LinearProgress);
    Vue$$1.component(CircularProgress.name, CircularProgress);
  }
};

var progress = {
  mounted: function mounted() {},

  methods: {
    createProgress: function createProgress(h) {
      var headerHeight = this.$refs.header ? this.$refs.header.offsetHeight + 'px' : '';
      return h(FadeTransition, {}, [this.loading ? h(LinearProgress, {
        staticClass: 'mu-table-progress',
        style: {
          top: headerHeight
        }
      }) : undefined]);
    }
  }
};

/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule UserAgent_DEPRECATED
 */

/**
 *  Provides entirely client-side User Agent and OS detection. You should prefer
 *  the non-deprecated UserAgent module when possible, which exposes our
 *  authoritative server-side PHP-based detection to the client.
 *
 *  Usage is straightforward:
 *
 *    if (UserAgent_DEPRECATED.ie()) {
 *      //  IE
 *    }
 *
 *  You can also do version checks:
 *
 *    if (UserAgent_DEPRECATED.ie() >= 7) {
 *      //  IE7 or better
 *    }
 *
 *  The browser functions will return NaN if the browser does not match, so
 *  you can also do version compares the other way:
 *
 *    if (UserAgent_DEPRECATED.ie() < 7) {
 *      //  IE6 or worse
 *    }
 *
 *  Note that the version is a float and may include a minor version number,
 *  so you should always use range operators to perform comparisons, not
 *  strict equality.
 *
 *  **Note:** You should **strongly** prefer capability detection to browser
 *  version detection where it's reasonable:
 *
 *    http://www.quirksmode.org/js/support.html
 *
 *  Further, we have a large number of mature wrapper functions and classes
 *  which abstract away many browser irregularities. Check the documentation,
 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
 *  another copy of "event || window.event".
 *
 */

var _populated = false;

// Browsers
var _ie, _firefox, _opera, _webkit, _chrome;

// Actual IE browser for compatibility mode
var _ie_real_version;

// Platforms
var _osx, _windows, _linux, _android;

// Architectures
var _win64;

// Devices
var _iphone, _ipad, _native;

var _mobile;

function _populate() {
  if (_populated) {
    return;
  }

  _populated = true;

  // To work around buggy JS libraries that can't handle multi-digit
  // version numbers, Opera 10's user agent string claims it's Opera
  // 9, then later includes a Version/X.Y field:
  //
  // Opera/9.80 (foo) Presto/2.2.15 Version/10.10
  var uas = navigator.userAgent;
  var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
  var os    = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);

  _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
  _ipad = /\b(iP[ao]d)/.exec(uas);
  _android = /Android/i.exec(uas);
  _native = /FBAN\/\w+;/i.exec(uas);
  _mobile = /Mobile/i.exec(uas);

  // Note that the IE team blog would have you believe you should be checking
  // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
  // from either x64 or ia64;  so ultimately, you should just check for Win64
  // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
  // Windows will send 'WOW64' instead.
  _win64 = !!(/Win64/.exec(uas));

  if (agent) {
    _ie = agent[1] ? parseFloat(agent[1]) : (
          agent[5] ? parseFloat(agent[5]) : NaN);
    // IE compatibility mode
    if (_ie && document && document.documentMode) {
      _ie = document.documentMode;
    }
    // grab the "true" ie version from the trident token if available
    var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;

    _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
    _opera   = agent[3] ? parseFloat(agent[3]) : NaN;
    _webkit  = agent[4] ? parseFloat(agent[4]) : NaN;
    if (_webkit) {
      // We do not add the regexp to the above test, because it will always
      // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
      // the userAgent string.
      agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
    } else {
      _chrome = NaN;
    }
  } else {
    _ie = _firefox = _opera = _chrome = _webkit = NaN;
  }

  if (os) {
    if (os[1]) {
      // Detect OS X version.  If no version number matches, set _osx to true.
      // Version examples:  10, 10_6_1, 10.7
      // Parses version number as a float, taking only first two sets of
      // digits.  If only one set of digits is found, returns just the major
      // version number.
      var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);

      _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true;
    } else {
      _osx = false;
    }
    _windows = !!os[2];
    _linux   = !!os[3];
  } else {
    _osx = _windows = _linux = false;
  }
}

var UserAgent_DEPRECATED = {

  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function() {
    return _populate() || _ie;
  },

  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return _populate() || (_ie_real_version > _ie);
  },


  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return UserAgent_DEPRECATED.ie() && _win64;
  },

  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function() {
    return _populate() || _firefox;
  },


  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function() {
    return _populate() || _opera;
  },


  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function() {
    return _populate() || _webkit;
  },

  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function() {
    return UserAgent_DEPRECATED.webkit();
  },

  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome : function() {
    return _populate() || _chrome;
  },


  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function() {
    return _populate() || _windows;
  },


  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function() {
    return _populate() || _osx;
  },

  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function() {
    return _populate() || _linux;
  },

  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function() {
    return _populate() || _iphone;
  },

  mobile: function() {
    return _populate() || (_iphone || _ipad || _android || _mobile);
  },

  nativeApp: function() {
    // webviews inside of the native apps
    return _populate() || _native;
  },

  android: function() {
    return _populate() || _android;
  },

  ipad: function() {
    return _populate() || _ipad;
  }
};

var UserAgent_DEPRECATED_1 = UserAgent_DEPRECATED;

/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

var ExecutionEnvironment_1 = ExecutionEnvironment;

var useHasFeature;
if (ExecutionEnvironment_1.canUseDOM) {
  useHasFeature =
    document.implementation &&
    document.implementation.hasFeature &&
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    document.implementation.hasFeature('', '') !== true;
}

/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function isEventSupported(eventNameSuffix, capture) {
  if (!ExecutionEnvironment_1.canUseDOM ||
      capture && !('addEventListener' in document)) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = eventName in document;

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

var isEventSupported_1 = isEventSupported;

// Reasonable defaults
var PIXEL_STEP  = 10;
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;

/**
 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
 * complicated, thus this doc is long and (hopefully) detailed enough to answer
 * your questions.
 *
 * If you need to react to the mouse wheel in a predictable way, this code is
 * like your bestest friend. * hugs *
 *
 * As of today, there are 4 DOM event types you can listen to:
 *
 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
 *
 * So what to do?  The is the best:
 *
 *   normalizeWheel.getEventType();
 *
 * In your event callback, use this code to get sane interpretation of the
 * deltas.  This code will return an object with properties:
 *
 *   spinX   -- normalized spin speed (use for zoom) - x plane
 *   spinY   -- " - y plane
 *   pixelX  -- normalized distance (to pixels) - x plane
 *   pixelY  -- " - y plane
 *
 * Wheel values are provided by the browser assuming you are using the wheel to
 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
 * significantly on different platforms and browsers, forgetting that you can
 * scroll at different speeds.  Some devices (like trackpads) emit more events
 * at smaller increments with fine granularity, and some emit massive jumps with
 * linear speed or acceleration.
 *
 * This code does its best to normalize the deltas for you:
 *
 *   - spin is trying to normalize how far the wheel was spun (or trackpad
 *     dragged).  This is super useful for zoom support where you want to
 *     throw away the chunky scroll steps on the PC and make those equal to
 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
 *     resolve a single slow step on a wheel to 1.
 *
 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
 *     get the crazy differences between browsers, but at least it'll be in
 *     pixels!
 *
 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
 *     should translate to positive value zooming IN, negative zooming OUT.
 *     This matches the newer 'wheel' event.
 *
 * Why are there spinX, spinY (or pixels)?
 *
 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
 *     with a mouse.  It results in side-scrolling in the browser by default.
 *
 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
 *
 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
 *     probably is by browsers in conjunction with fancy 3D controllers .. but
 *     you know.
 *
 * Implementation info:
 *
 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
 * average mouse:
 *
 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
 *
 * On the trackpad:
 *
 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
 *
 * On other/older browsers.. it's more complicated as there can be multiple and
 * also missing delta values.
 *
 * The 'wheel' event is more standard:
 *
 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
 *
 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
 * backward compatibility with older events.  Those other values help us
 * better normalize spin speed.  Example of what the browsers provide:
 *
 *                          | event.wheelDelta | event.detail
 *        ------------------+------------------+--------------
 *          Safari v5/OS X  |       -120       |       0
 *          Safari v5/Win7  |       -120       |       0
 *         Chrome v17/OS X  |       -120       |       0
 *         Chrome v17/Win7  |       -120       |       0
 *                IE9/Win7  |       -120       |   undefined
 *         Firefox v4/OS X  |     undefined    |       1
 *         Firefox v4/Win7  |     undefined    |       3
 *
 */
function normalizeWheel(/*object*/ event) /*object*/ {
  var sX = 0, sY = 0,       // spinX, spinY
      pX = 0, pY = 0;       // pixelX, pixelY

  // Legacy
  if ('detail'      in event) { sY = event.detail; }
  if ('wheelDelta'  in event) { sY = -event.wheelDelta / 120; }
  if ('wheelDeltaY' in event) { sY = -event.wheelDeltaY / 120; }
  if ('wheelDeltaX' in event) { sX = -event.wheelDeltaX / 120; }

  // side scrolling on FF with DOMMouseScroll
  if ( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
    sX = sY;
    sY = 0;
  }

  pX = sX * PIXEL_STEP;
  pY = sY * PIXEL_STEP;

  if ('deltaY' in event) { pY = event.deltaY; }
  if ('deltaX' in event) { pX = event.deltaX; }

  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode == 1) {          // delta in LINE units
      pX *= LINE_HEIGHT;
      pY *= LINE_HEIGHT;
    } else {                             // delta in PAGE units
      pX *= PAGE_HEIGHT;
      pY *= PAGE_HEIGHT;
    }
  }

  // Fall-back if spin cannot be determined
  if (pX && !sX) { sX = (pX < 1) ? -1 : 1; }
  if (pY && !sY) { sY = (pY < 1) ? -1 : 1; }

  return { spinX  : sX,
           spinY  : sY,
           pixelX : pX,
           pixelY : pY };
}


/**
 * The best combination if you prefer spinX + spinY normalization.  It favors
 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
 * 'wheel' event, making spin speed determination impossible.
 */
normalizeWheel.getEventType = function() /*string*/ {
  return (UserAgent_DEPRECATED_1.firefox())
           ? 'DOMMouseScroll'
           : (isEventSupported_1('wheel'))
               ? 'wheel'
               : 'mousewheel';
};

var normalizeWheel_1 = normalizeWheel;

var normalizeWheel$1 = normalizeWheel_1;

var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

var mousewheel = function mousewheel(element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function (event) {
      var normalized = normalizeWheel$1(event);
      callback && callback.apply(this, [event, normalized]);
    });
  }
};

var mousewheel$1 = {
  bind: function bind(el, binding) {
    mousewheel(el, binding.value);
  }
};

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }

    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;

        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;

                return true;
            }

            return false;
        });

        return result;
    }

    return (function () {
        function anonymous() {
            this.__entries__ = [];
        }

        var prototypeAccessors = { size: { configurable: true } };

        /**
         * @returns {boolean}
         */
        prototypeAccessors.size.get = function () {
            return this.__entries__.length;
        };

        /**
         * @param {*} key
         * @returns {*}
         */
        anonymous.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];

            return entry && entry[1];
        };

        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        anonymous.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([key, value]);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);

            if (~index) {
                entries.splice(index, 1);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };

        /**
         * @returns {void}
         */
        anonymous.prototype.clear = function () {
            this.__entries__.splice(0);
        };

        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        anonymous.prototype.forEach = function (callback, ctx) {
            var this$1 = this;
            if ( ctx === void 0 ) ctx = null;

            for (var i = 0, list = this$1.__entries__; i < list.length; i += 1) {
                var entry = list[i];

                callback.call(ctx, entry[1], entry[0]);
            }
        };

        Object.defineProperties( anonymous.prototype, prototypeAccessors );

        return anonymous;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }

    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }

    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }

    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }

    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;

/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
var throttle = function (callback, delay) {
    var leadingCall = false,
        trailingCall = false,
        lastCallTime = 0;

    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;

            callback();
        }

        if (trailingCall) {
            proxy();
        }
    }

    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }

    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();

        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }

            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;

            setTimeout(timeoutCallback, delay);
        }

        lastCallTime = timeStamp;
    }

    return proxy;
};

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;

// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';

/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = function() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];

    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
};

/**
 * Adds observer to observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be added.
 * @returns {void}
 */


/**
 * Holds reference to the controller's instance.
 *
 * @private {ResizeObserverController}
 */


/**
 * Keeps reference to the instance of MutationObserver.
 *
 * @private {MutationObserver}
 */

/**
 * Indicates whether DOM listeners have been added.
 *
 * @private {boolean}
 */
ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
    }

    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
        this.connect_();
    }
};

/**
 * Removes observer from observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be removed.
 * @returns {void}
 */
ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);

    // Remove observer if it's present in registry.
    if (~index) {
        observers.splice(index, 1);
    }

    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
        this.disconnect_();
    }
};

/**
 * Invokes the update of observers. It will continue running updates insofar
 * it detects changes.
 *
 * @returns {void}
 */
ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();

    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
        this.refresh();
    }
};

/**
 * Updates every observer from observers list and notifies them of queued
 * entries.
 *
 * @private
 * @returns {boolean} Returns "true" if any observer has detected changes in
 *  dimensions of it's elements.
 */
ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
    });

    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) { return observer.broadcastActive(); });

    return activeObservers.length > 0;
};

/**
 * Initializes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
        return;
    }

    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener('transitionend', this.onTransitionEnd_);

    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);

        this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        });
    } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);

        this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
};

/**
 * Removes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
        return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
};

/**
 * "Transitionend" event handler.
 *
 * @private
 * @param {TransitionEvent} event
 * @returns {void}
 */
ResizeObserverController.prototype.onTransitionEnd_ = function (ref) {
        var propertyName = ref.propertyName; if ( propertyName === void 0 ) propertyName = '';

    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
        this.refresh();
    }
};

/**
 * Returns instance of the ResizeObserverController.
 *
 * @returns {ResizeObserverController}
 */
ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
};

ResizeObserverController.instance_ = null;

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var i = 0, list = Object.keys(props); i < list.length; i += 1) {
        var key = list[i];

        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }

    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;

    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);

/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}

/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [], len = arguments.length - 1;
    while ( len-- > 0 ) positions[ len ] = arguments[ len + 1 ];

    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];

        return size + toFloat(value);
    }, 0);
}

/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};

    for (var i = 0, list = positions; i < list.length; i += 1) {
        var position = list[i];

        var value = styles['padding-' + position];

        paddings[position] = toFloat(value);
    }

    return paddings;
}

/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();

    return createRectInit(0, 0, bbox.width, bbox.height);
}

/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth;
    var clientHeight = target.clientHeight;

    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }

    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;

    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width),
        height = toFloat(styles.height);

    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }

    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;

        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }

        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }

    return createRectInit(paddings.left, paddings.top, width, height);
}

/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }

    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function'; };
})();

/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}

/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }

    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }

    return getHTMLElementContentRect(target);
}

/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(ref) {
    var x = ref.x;
    var y = ref.y;
    var width = ref.width;
    var height = ref.height;

    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);

    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });

    return rect;
}

/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = function(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);

    this.target = target;
};

/**
 * Updates content rectangle and tells whether it's width or height properties
 * have changed since the last broadcast.
 *
 * @returns {boolean}
 */


/**
 * Reference to the last observed content rectangle.
 *
 * @private {DOMRectInit}
 */


/**
 * Broadcasted width of content rectangle.
 *
 * @type {number}
 */
ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);

    this.contentRect_ = rect;

    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
};

/**
 * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
 * from the corresponding properties of the last observed content rectangle.
 *
 * @returns {DOMRectInit} Last observed content rectangle.
 */
ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;

    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;

    return rect;
};

var ResizeObserverEntry = function(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);

    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, { target: target, contentRect: contentRect });
};

var ResizeObserverSPI = function(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();

    if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
};

/**
 * Starts observing provided element.
 *
 * @param {Element} target - Element to be observed.
 * @returns {void}
 */


/**
 * Registry of the ResizeObservation instances.
 *
 * @private {Map<Element, ResizeObservation>}
 */


/**
 * Public ResizeObserver instance which will be passed to the callback
 * function and used as a value of it's "this" binding.
 *
 * @private {ResizeObserver}
 */

/**
 * Collection of resize observations that have detected changes in dimensions
 * of elements.
 *
 * @private {Array<ResizeObservation>}
 */
ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is already being observed.
    if (observations.has(target)) {
        return;
    }

    observations.set(target, new ResizeObservation(target));

    this.controller_.addObserver(this);

    // Force the update of observations.
    this.controller_.refresh();
};

/**
 * Stops observing provided element.
 *
 * @param {Element} target - Element to stop observing.
 * @returns {void}
 */
ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
        return;
    }

    observations.delete(target);

    if (!observations.size) {
        this.controller_.removeObserver(this);
    }
};

/**
 * Stops observing all elements.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
};

/**
 * Collects observation instances the associated element of which has changed
 * it's content rectangle.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.gatherActive = function () {
        var this$1 = this;

    this.clearActive();

    this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
            this$1.activeObservations_.push(observation);
        }
    });
};

/**
 * Invokes initial callback function with a list of ResizeObserverEntry
 * instances collected from active resize observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
        return;
    }

    var ctx = this.callbackCtx_;

    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });

    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
};

/**
 * Clears the collection of active observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
};

/**
 * Tells whether observer has active observations.
 *
 * @returns {boolean}
 */
ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
};

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();

/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = function(callback) {
    if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.');
    }
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);

    observers.set(this, observer);
};

// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        return (ref = observers.get(this))[method].apply(ref, arguments);
        var ref;
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }

    return ResizeObserver;
})();

var isServer = typeof window === 'undefined';

var resizeHandler = function resizeHandler(entries) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var entry = _step.value;

      var listeners = entry.target.__resizeListeners__ || [];
      if (listeners.length) {
        listeners.forEach(function (fn) {
          fn();
        });
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var addResizeListener = function addResizeListener(element, fn) {
  if (isServer) return;
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new index(resizeHandler);
    element.__ro__.observe(element);
  }
  element.__resizeListeners__.push(fn);
};

var removeResizeListener = function removeResizeListener(element, fn) {
  if (!element || !element.__resizeListeners__) return;
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect();
  }
};

var DataTable = {
  name: 'mu-data-table',
  mixins: [header, body, footer, colgroup, progress],
  props: {
    data: Array,
    columns: Array,
    noDataText: {
      type: String,
      default: '暂无数据'
    },
    height: [String, Number],
    maxHeight: [String, Number],
    selectAll: Boolean,
    selectable: Boolean,
    selects: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    sort: {
      type: Object
    },
    checkbox: Boolean,
    stripe: Boolean,
    border: Boolean,
    loading: Boolean,
    hideHeader: Boolean,
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    rowKey: {
      type: String,
      default: 'id'
    },
    fit: {
      type: Boolean,
      default: true
    },
    hover: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleHeaderFooterMousewheel: function handleHeaderFooterMousewheel(event, data) {
      var pixelX = data.pixelX,
          pixelY = data.pixelY;

      if (Math.abs(pixelX) >= Math.abs(pixelY)) {
        event.preventDefault();
        if (!this.$refs.body) return;
        this.$refs.body.scrollLeft += data.pixelX / 5;
      }
    },
    resizeListener: function resizeListener() {
      this.setCols();
    }
  },
  mounted: function mounted() {
    if (this.fit) {
      addResizeListener(this.$el, this.resizeListener);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.resizeListener) removeResizeListener(this.$el, this.resizeListener);
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-table',
      class: {
        'mu-table-border': this.border,
        'mu-table-flex': this.maxHeight || this.height
      },
      style: {
        'max-height': getWidth(this.maxHeight),
        'height': getWidth(this.height)
      }
    }, [!this.hideHeader ? this.createHeader(h) : undefined, this.createProgress(h), this.createBody(h), this.createFooter(h)]);
  },

  directives: {
    mousewheel: mousewheel$1
  }
};

DataTable.install = function (Vue$$1) {
  Vue$$1.component(DataTable.name, DataTable);
};

theme.addCreateTheme(DataTableTheme);

var DividerTheme = (function (theme) {
  return "\n  .mu-divider {\n    background-color: " + theme.divider + ";\n  }\n  ";
});

var Divider = {
  name: 'mu-divider',
  functional: true,
  props: {
    inset: Boolean,
    shallowInset: Boolean
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props;

    data.staticClass = (data.staticClass || '') + ' mu-divider ' + (props.inset ? 'inset' : '') + ' ' + (props.shallowInset ? 'shallow-inset' : '');

    return h('hr', data);
  }
};

Divider.install = function (Vue$$1) {
  Vue$$1.component(Divider.name, Divider);
};

theme.addCreateTheme(DividerTheme);

var DrawerTheme = (function (theme) {
  return "\n  .mu-drawer {\n    background-color: " + theme.background.paper + ";\n  }\n  ";
});

var PaperTheme = (function (theme) {
  return "\n  .mu-paper {\n    color: " + theme.text.primary + ";\n    background-color: " + theme.background.paper + ";\n  }\n  ";
});

var Paper = {
  name: 'mu-paper',
  functional: true,
  props: {
    circle: Boolean,
    rounded: {
      type: Boolean,
      default: true
    },
    zDepth: {
      type: Number,
      default: 0,
      validator: function validator(val) {
        return val >= 0 && val < 25;
      }
    }
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    var classObj = defineProperty({
      'mu-paper-circle': props.circle,
      'mu-paper-round': props.rounded
    }, 'mu-elevation-' + props.zDepth, !!props.zDepth);
    data.staticClass = 'mu-paper ' + (data.staticClass || '') + ' ' + convertClass(classObj).join(' ');
    return h('div', data, children);
  }
};

Paper.install = function (Vue$$1) {
  Vue$$1.component(Paper.name, Paper);
};

theme.addCreateTheme(PaperTheme);

var transitionEvents = ['msTransitionEnd', 'mozTransitionEnd', 'oTransitionEnd', 'webkitTransitionEnd', 'transitionend'];
var Drawer = {
  name: 'mu-drawer',
  props: {
    right: Boolean,
    open: Boolean,
    docked: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    width: [Number, String],
    zDepth: {
      type: Number,
      default: 16
    }
  },
  data: function data() {
    return {
      overlayZIndex: getZIndex(),
      zIndex: getZIndex()
    };
  },

  computed: {
    drawerStyle: function drawerStyle() {
      return {
        width: getWidth(this.width),
        'z-index': this.docked ? '' : this.zIndex
      };
    },
    overlay: function overlay() {
      return !this.docked;
    }
  },
  mounted: function mounted() {
    if (this.open && !this.docked) PopupManager.open(this);
    this.bindTransition();
  },

  methods: {
    overlayClick: function overlayClick() {
      this.close('overlay');
    },
    escPress: function escPress(e) {
      if (this.docked) return;
      this.close('esc');
    },
    close: function close(reason) {
      this.$emit('update:open', false);
      this.$emit('close', reason);
    },
    bindTransition: function bindTransition() {
      var _this = this;

      this.handleTransition = function (e) {
        if (e.propertyName !== 'transform') return;
        _this.$emit(_this.open ? 'show' : 'hide');
      };
      transitionEvents.forEach(function (eventName) {
        _this.$el.addEventListener(eventName, _this.handleTransition);
      });
    },
    unBindTransition: function unBindTransition() {
      var _this2 = this;

      if (!this.handleTransition) return;
      transitionEvents.forEach(function (eventName) {
        _this2.$el.removeEventListener(eventName, _this2.handleTransition);
      });
    },
    resetZIndex: function resetZIndex() {
      this.overlayZIndex = getZIndex();
      this.zIndex = getZIndex();
    }
  },
  beforeDestroy: function beforeDestroy() {
    PopupManager.close(this);
    this.unBindTransition();
  },

  watch: {
    open: function open(val) {
      if (val && !this.docked) {
        PopupManager.open(this);
      } else {
        PopupManager.close(this);
      }
    },
    docked: function docked(val, oldVal) {
      if (val && !oldVal) {
        PopupManager.close(this);
      }
    }
  },
  render: function render(h) {
    return h(Paper, {
      class: {
        'mu-drawer': true,
        'is-open': this.open,
        'is-right': this.right
      },
      style: this.drawerStyle,
      props: {
        zDepth: this.zDepth
      }
    }, this.$slots.default);
  }
};

Drawer.install = function (Vue$$1) {
  Vue$$1.component(Drawer.name, Drawer);
};

theme.addCreateTheme(DrawerTheme);

var ExpansionPanelTheme = (function (theme) {
  return "\n  .mu-expansion-panel {\n    color: " + theme.text.primary + ";\n    border-top-color: " + theme.divider + ";\n  }\n  .mu-expansion-toggle-btn {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-expansion-panel-actions {\n    border-top-color: " + theme.divider + ";\n  }\n  ";
});

var ExpansionPanel = {
  name: 'mu-expansion-panel',
  props: {
    expand: Boolean,
    zDepth: {
      type: Number,
      default: 2
    }
  },
  data: function data() {
    return {
      show: this.expand
    };
  },

  methods: {
    createToggleIcon: function createToggleIcon(h) {
      return h('svg', {
        staticClass: '',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('g', {}, [h('path', {
        attrs: {
          d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'
        }
      })])]);
    },
    createHeader: function createHeader(h) {
      var _this = this;

      return h('div', {
        staticClass: 'mu-expansion-panel-header',
        on: {
          click: function click() {
            _this.show = !_this.show;
            _this.$emit('update:expand', _this.show);
            _this.$emit('change', _this.show);
          }
        }
      }, [this.$slots.header, h(Button, {
        staticClass: 'mu-expansion-toggle-btn',
        props: {
          icon: true
        },
        attrs: {
          tabindex: -1
        }
      }, [this.createToggleIcon(h)])]);
    },
    createContainer: function createContainer(h) {
      return h(ExpandTransition, {}, [h('div', {
        staticClass: 'mu-expansion-panel-container',
        directives: [{
          name: 'show',
          value: this.show
        }]
      }, [this.createContent(h), this.createActions(h)])]);
    },
    createContent: function createContent(h) {
      return h('div', {
        staticClass: 'mu-expansion-panel-content'
      }, this.$slots.default);
    },
    createActions: function createActions(h) {
      return this.$slots.action && this.$slots.action.length > 0 ? h('div', {
        staticClass: 'mu-expansion-panel-actions'
      }, this.$slots.action) : undefined;
    }
  },
  render: function render(h) {
    return h(Paper, {
      staticClass: 'mu-expansion-panel',
      class: {
        'mu-expansion-panel__expand': this.show
      },
      props: {
        zDepth: this.zDepth,
        rounded: false
      }
    }, [this.createHeader(h), this.createContainer(h)]);
  },

  watch: {
    expand: function expand(val) {
      this.show = val;
    }
  }
};

ExpansionPanel.install = function (Vue$$1) {
  Vue$$1.component(ExpansionPanel.name, ExpansionPanel);
};

theme.addCreateTheme(ExpansionPanelTheme);

var FormTheme = (function (theme) {
  return "\n  .mu-form-item {\n    color: " + theme.text.secondary + ";\n  }\n\n  .mu-form-item__focus {\n    color: " + theme.primary + ";\n  }\n\n  .mu-form-item__error {\n    color: " + theme.error + ";\n  }\n  .mu-form-item-help {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-form-item__error .mu-form-item-help {\n    color: " + theme.error + ";\n  }\n  ";
});

var Form = {
  name: 'mu-form',
  provide: function provide() {
    return {
      muForm: this
    };
  },

  props: {
    model: {
      type: Object,
      required: true
    },
    inline: Boolean,
    labelWidth: [String, Number],
    labelPosition: {
      type: String,
      default: 'top',
      validator: function validator(val) {
        return ['left', 'right', 'top'].indexOf(val) !== -1;
      }
    },
    autoValidate: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      items: []
    };
  },

  methods: {
    getValue: function getValue(prop) {
      return getObjAttr(this.model, prop);
    },
    addItem: function addItem(item) {
      this.items.push(item);
    },
    removeItem: function removeItem(item) {
      var index = this.items.indexOf(item);
      if (index === -1) return;
      this.items.splice(index, 1);
    },
    validate: function validate() {
      var valid = true;
      var promises = [];
      for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        var result = item.validate();
        if (isPromise(result)) {
          promises.push(result);
          continue;
        }
        if (!result) {
          valid = false;
        }
      }
      if (promises.length > 0 && typeof Promise !== 'undefined') {
        return Promise.all([valid ? Promise.resolve(valid) : Promise.reject(valid)].concat(promises)).then(function () {
          return true;
        }, function () {
          return false;
        });
      }
      return typeof Promise !== 'undefined' ? Promise.resolve(valid) : valid;
    },
    clear: function clear() {
      this.items.forEach(function (item) {
        return item.errorMessage = '';
      });
    }
  },
  render: function render(h) {
    return h('form', {
      staticClass: 'mu-form',
      class: {
        'mu-form__inline': this.inline
      },
      on: this.$listeners
    }, this.$slots.default);
  }
};

var FormItem = {
  name: 'mu-form-item',
  inject: ['muForm'],
  provide: function provide() {
    return {
      muFormItem: this
    };
  },

  props: {
    label: String,
    labelFloat: Boolean,
    icon: String,
    prop: String,
    labelWidth: Form.props.labelWidth,
    rules: Array,
    helpText: String,
    errorText: String,
    labelPosition: String
  },
  data: function data() {
    return {
      focus: false,
      errorMessage: this.errorText
    };
  },
  mounted: function mounted() {
    this.setHelpLeft();
    this.muForm.addItem(this);
  },
  updated: function updated() {
    var _this = this;

    setTimeout(function () {
      return _this.setHelpLeft();
    }, 0);
  },
  beforeDestroy: function beforeDestroy() {
    this.muForm.removeItem(this);
  },

  methods: {
    validate: function validate() {
      var _this2 = this;

      if (!this.rules || this.rules.length === 0) return true;
      var promises = [];
      var promiseMessages = [];
      for (var i = 0; i < this.rules.length; i++) {
        var rule = this.rules[i];
        var result = rule.validate(this.muForm.getValue(this.prop), this.muForm.model);
        if (isPromise(result)) {
          promises.push(result);
          promiseMessages.push(rule.message);
          continue;
        }
        if (!this.validateResult(result, rule.message)) return false;
      }

      // promise 处理
      if (promises.length > 0 && typeof Promise !== 'undefined') {
        return Promise.all(promises).then(function (results) {
          for (var _i = 0; _i < results.length; _i++) {
            var valid = _this2.validateResult(results[_i], promiseMessages[_i]);
            if (!valid) return Promise.reject(false);
          }
          _this2.errorMessage = '';
          return true;
        });
      }

      this.errorMessage = '';
      return true;
    },
    validateResult: function validateResult(result, message) {
      switch (true) {
        case isObject(result) && !result.valid:
          this.errorMessage = result.message || message;
          return false;
        case !result:
          this.errorMessage = message;
          return false;
      }
      return true;
    },
    onFocus: function onFocus() {
      this.focus = true;
    },
    onBlur: function onBlur() {
      this.focus = false;
      if (this.muForm.autoValidate) this.validate();
    },
    createIcon: function createIcon(h) {
      if (!this.icon) return;
      return h(Icon, {
        staticClass: 'mu-form-item-icon',
        props: {
          value: this.icon
        }
      });
    },
    createContent: function createContent(h) {
      return h('div', {
        staticClass: 'mu-form-item-content',
        ref: 'content'
      }, this.$slots.default);
    },
    createLabel: function createLabel(h) {
      var labelWidth = getWidth(this.labelWidth || this.muForm.labelWidth);
      var value = this.muForm.model && this.prop && this.muForm.model[this.prop];
      return h('div', {
        staticClass: 'mu-form-item-label',
        class: {
          'is-float': this.labelFloat && !this.focus && !value && value !== 0
        },
        style: {
          width: labelWidth
        }
      }, this.$slots.label || this.label);
    },
    createHelpText: function createHelpText(h) {
      if (!this.helpText && !this.errorMessage) return;
      return h('div', {
        staticClass: 'mu-form-item-help',
        ref: 'help'
      }, this.errorMessage || this.helpText);
    },
    setHelpLeft: function setHelpLeft() {
      if (!this.$refs.help || !this.$refs.content) return;
      this.$refs.help.style.left = this.$refs.content.offsetLeft + 'px';
    }
  },
  render: function render(h) {
    var labelPosition = this.labelPosition || this.muForm.labelPosition;
    return h('div', {
      staticClass: 'mu-form-item',
      class: {
        'mu-form-item__float-label': this.labelFloat,
        'mu-form-item__label-left': labelPosition === 'left',
        'mu-form-item__label-right': labelPosition === 'right',
        'mu-form-item__has-icon': !!this.icon && labelPosition === 'top',
        'mu-form-item__has-label': !!this.label || this.$slots.label && this.$slots.label.length > 0,
        'mu-form-item__focus': this.focus,
        'mu-form-item__error': !!this.errorMessage
      }
    }, [this.createLabel(h), labelPosition === 'top' ? this.createIcon(h) : undefined, h(SlideTopTransition, {}, [this.createHelpText(h)]), this.createContent(h)]);
  },

  watch: {
    errorText: function errorText(val) {
      this.errorMessage = val;
    },
    rules: function rules() {
      if (this.errorMessage) this.validate();
    }
  }
};

Form.install = function (Vue$$1) {
  Vue$$1.component(Form.name, Form);
  Vue$$1.component(FormItem.name, FormItem);
};

theme.addCreateTheme(FormTheme);

var Container$1 = {
  name: 'mu-container',
  functional: true,
  props: {
    fluid: Boolean
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = (data.staticClass || '') + ' ' + (props.fluid ? 'container-fluid' : 'container');
    return h('div', data, children);
  }
};

function createEnumProps(type, def, enums) {
  return {
    type: type,
    default: def,
    validator: function validator(val) {
      return enums.indexOf(val) !== -1;
    }
  };
}

var props$1 = {
  direction: createEnumProps(String, 'row', ['row', 'column', 'row-reverse', 'column-reverse']),
  wrap: createEnumProps(String, '', ['', 'wrap', 'nowrap', 'wrap-reverse']),
  fill: Boolean,
  justifyContent: createEnumProps(String, 'start', ['start', 'center', 'end', 'between', 'around']),
  alignItems: createEnumProps(String, 'start', ['start', 'center', 'end', 'baseline', 'stretch']),
  alignContent: createEnumProps(String, '', ['', 'start', 'center', 'end', 'between', 'around', 'stretch']),
  alignSelf: createEnumProps(String, '', ['', 'auto', 'start', 'center', 'end', 'baseline', 'stretch'])
};

function generatePropsClass(props) {
  var classNames = [];
  if (props.direction) classNames.push('flex-' + props.direction);
  if (props.wrap) classNames.push('flex-' + props.wrap);
  if (props.fill) classNames.push('flex-fill');
  if (props.justifyContent) classNames.push('justify-content-' + props.justifyContent);
  if (props.alignItems) classNames.push('align-items-' + props.alignItems);
  if (props.alignContent) classNames.push('align-content-' + props.alignContent);
  if (props.alignSelf) classNames.push('align-self-' + props.alignSelf);
  return classNames.join(' ');
}

var Row = {
  name: 'mu-row',
  functional: true,
  props: _extends({}, props$1, {
    tag: String,
    gutter: Boolean
  }),
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    var gutter = !props.gutter ? 'no-gutters' : '';
    var flex = generatePropsClass(props);

    data.staticClass = ['row', gutter, flex, data.staticClass || ''].join(' ');
    return h(props.tag || 'div', data, children);
  }
};

function createColClass(props) {
  var classNames = [];
  if (props.span) classNames.push('col-' + props.span);
  if (props.sm) classNames.push('col-sm-' + props.sm);
  if (props.md) classNames.push('col-md-' + props.md);
  if (props.lg) classNames.push('col-lg-' + props.lg);
  if (props.xl) classNames.push('col-xl-' + props.xl);
  if (props.order) classNames.push('order-' + props.order);
  if (props.offset) classNames.push('offset-' + props.offset);
  return classNames.join(' ');
}

var Col = {
  name: 'mu-col',
  functional: true,
  props: {
    tag: String,
    alignSelf: props$1.alignSelf,
    fill: Boolean,
    span: [String, Number], // auto 1-12
    sm: [String, Number], // auto 1-12
    md: [String, Number], // auto 1-12
    lg: [String, Number], // auto 1-12
    xl: [String, Number], // auto 1-12
    order: [String, Number], // first last 0-12
    offset: [String, Number] // 1-11
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    var flex = generatePropsClass(props);
    var col = createColClass(props);
    data.staticClass = ['col', col, flex, data.staticClass || ''].join(' ');
    return h(props.tag || 'div', data, children);
  }
};

var Flex = {
  name: 'mu-flex',
  functional: true,
  props: _extends({
    tag: String,
    inline: Boolean
  }, props$1),
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    var flexClass = generatePropsClass(props);
    data.staticClass = (props.inline ? 'd-inline-flex' : 'd-flex') + ' ' + flexClass + ' ' + (data.staticClass || '');
    return h(props.tag || 'div', data, children);
  }
};

var Grid = {
  install: function install(Vue$$1) {
    Vue$$1.component(Container$1.name, Container$1);
    Vue$$1.component(Row.name, Row);
    Vue$$1.component(Col.name, Col);
    Vue$$1.component(Flex.name, Flex);
  }
};

var GridListTheme = (function (theme) {
  return "";
});

var GridList = {
  name: 'mu-grid-list',
  provide: function provide() {
    return {
      getGridListCellHeight: this.getGridListCellHeight,
      getGridListCols: this.getGridListCols,
      getGridListPadding: this.getGridListPadding
    };
  },

  props: {
    cellHeight: {
      type: Number,
      default: 180
    },
    cols: {
      type: Number,
      default: 2
    },
    padding: {
      type: Number,
      default: 4
    }
  },
  methods: {
    getGridListCellHeight: function getGridListCellHeight() {
      return this.cellHeight;
    },
    getGridListCols: function getGridListCols() {
      return this.cols;
    },
    getGridListPadding: function getGridListPadding() {
      return this.padding;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-grid-list',
      style: {
        margin: -this.padding / this.cols + 'px'
      },
      on: this.$listeners
    }, this.$slots.default);
  }
};

var GridTile = {
  name: 'mu-grid-tile',
  inject: ['getGridListCellHeight', 'getGridListCols', 'getGridListPadding'],
  props: {
    actionPosition: {
      type: String,
      default: 'right',
      validator: function validator(val) {
        return ['left', 'right'].indexOf(val) !== -1;
      }
    },
    cols: {
      type: Number,
      default: 1
    },
    rows: {
      type: Number,
      default: 1
    },
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    titlePosition: {
      type: String,
      default: 'bottom',
      validator: function validator(val) {
        return ['top', 'bottom'].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    tileClass: function tileClass() {
      return {
        'is-top': this.titlePosition === 'top',
        'action-left': this.actionPosition === 'left',
        'multiline': this.$slots.title && this.$slots.subTitle && this.$slots.title.length > 0 && this.$slots.subTitle.length > 0
      };
    },
    style: function style() {
      return {
        width: this.cols / this.getGridListCols() * 100 + '%',
        padding: this.getGridListPadding() / 2 + 'px',
        height: this.getGridListCellHeight() * this.rows + 'px'
      };
    }
  },
  render: function render(h) {
    var title = h('div', {
      staticClass: 'mu-grid-tile-title'
    }, this.$slots.title && this.$slots.title.length > 0 ? this.$slots.title : this.title);

    var subTitle = h('div', {
      staticClass: 'mu-grid-tile-subtitle'
    }, this.$slots.subTitle && this.$slots.subTitle.length > 0 ? this.$slots.subTitle : this.subTitle);

    return h('div', {
      staticClass: 'mu-grid-tile-wrapper',
      style: this.style,
      on: this.$listeners
    }, [h('div', {
      staticClass: 'mu-grid-tile',
      class: this.tileClass
    }, [this.$slots.default, h('div', { staticClass: 'mu-grid-tile-titlebar' }, [h('div', { staticClass: 'mu-grid-tile-title-container' }, [title, subTitle]), h('div', { staticClass: 'mu-grid-tile-action' }, this.$slots.action)])])]);
  }
};

GridList.install = function (Vue$$1) {
  Vue$$1.component(GridList.name, GridList);
  Vue$$1.component(GridTile.name, GridTile);
};

theme.addCreateTheme(GridListTheme);

function getElevationClass(depth) {
  return 'mu-elevation-' + depth;
}
var elevation = {
  name: 'elevation',
  inserted: function inserted(el, _ref, vnode) {
    var value = _ref.value;

    addClass(el, getElevationClass(value));
  },
  update: function update(el, _ref2) {
    var value = _ref2.value,
        oldValue = _ref2.oldValue;

    if (value === oldValue && hasClass(el, getElevationClass(oldValue))) return;
    removeClass(el, getElevationClass(oldValue));
    addClass(el, getElevationClass(value));
  },
  unbind: function unbind(el, _ref3) {
    var value = _ref3.value;

    removeClass(el, getElevationClass(value));
  }
};

var Helpers = {
  install: function install(Vue$$1) {
    Vue$$1.component('mu-ripple', TouchRipple);
    [ExpandTransition, FadeTransition, SlideTopTransition, SlideBottomTransition, SlideLeftTransition, SlideRightTransition, ScaleTransition].forEach(function (transition) {
      return Vue$$1.component(transition.name, transition);
    });
    Vue$$1.directive(clickOutSide.name, clickOutSide);
    Vue$$1.directive(resize.name, resize);
    Vue$$1.directive(scroll.name, scroll);
    Vue$$1.directive(elevation.name, elevation);
  }
};

var LoadMoreTheme = (function (theme) {
  return "\n  .mu-refresh-control{\n    color: " + theme.primary + ";\n  }\n  ";
});

var InfiniteScroll = {
  name: 'mu-infinite-scroll',
  directives: {
    scroll: scroll
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: '正在加载...'
    }
  },
  data: function data() {
    return {
      target: null
    };
  },
  mounted: function mounted() {
    this.target = this.$el;
  },

  methods: {
    onScroll: function onScroll(scroller) {
      if (this.loading) return;
      var isWindow = scroller === window;
      var scrollTop = getScrollTop(scroller);
      var scrollHeight = isWindow ? document.documentElement.scrollHeight || document.body.scrollHeight : scroller.scrollHeight;
      var h = scrollHeight - scrollTop - 5;
      var sh = isWindow ? window.innerHeight : scroller.offsetHeight;
      if (h <= sh) {
        this.$emit('load');
      }
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-infinite-scroll',
      directives: [{
        name: 'scroll',
        value: {
          callback: this.onScroll,
          target: this.target
        }
      }]
    }, [h(Circular, {
      props: {
        size: 24
      },
      directives: [{
        name: 'show',
        value: this.loading
      }]
    }), h('span', {
      staticClass: 'mu-infinite-scroll-text',
      directives: [{
        name: 'show',
        value: this.loading
      }]
    }, this.loadingText)]);
  }
};

var LENGTH = 130; // 下拉最大长度
var INITY = -68; // 初始化Y轴位置

var RefreshControl = {
  name: 'mu-refresh-control',
  props: {
    refreshing: Boolean,
    trigger: {}
  },
  data: function data() {
    return {
      y: 0,
      draging: false,
      state: 'ready'
    };
  },

  computed: {
    refreshStyle: function refreshStyle() {
      var style = {};
      if (!this.refreshing && this.draging) {
        var translate3d = 'translate3d(0, ' + (this.y + INITY) + 'px, 0) ';
        style['-webkit-transform'] = style['transform'] = translate3d;
      }
      return style;
    },
    circularStyle: function circularStyle() {
      var style = {};
      if (!this.refreshing && this.draging) {
        var percentage = this.y / LENGTH;
        var rotate = 'rotate(' + 360 * percentage + 'deg)';
        var opacity = this.y / Math.abs(INITY);
        style['-webkit-transform'] = style['transform'] = rotate;
        style['opacity'] = opacity;
      }
      return style;
    },
    refreshClass: function refreshClass() {
      var classNames = [];
      switch (this.state) {
        case 'ready':
          classNames.push('mu-refresh-control-noshow');
          break;
        case 'dragStart':
          classNames.push('mu-refresh-control-hide');
          break;
        case 'dragAnimate':
          classNames.push('mu-refresh-control-animate');
          classNames.push('mu-refresh-control-hide');
          break;
        case 'refreshAnimate':
          classNames.push('mu-refresh-control-animate');
          classNames.push('mu-refresh-control-noshow');
          break;
      }
      if (this.refreshing) classNames.push('mu-refresh-control-refreshing');
      return classNames;
    }
  },
  mounted: function mounted() {
    this.bindDrag();
  },
  beforeDestory: function beforeDestory() {
    this.unbindDrag();
  },

  methods: {
    clearState: function clearState() {
      this.state = 'ready';
      this.draging = false;
      this.y = 0;
    },
    getScrollTop: function getScrollTop$$1() {
      var scroller = getScrollEventTarget(this.$el);
      if (scroller === window) {
        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
      } else {
        return scroller.scrollTop;
      }
    },
    bindDrag: function bindDrag() {
      var _this = this;

      if (!this.trigger) return;
      var drager = this.drager = new Drag(this.trigger);
      this.state = 'ready';
      drager.start(function () {
        if (_this.refreshing) return;
        _this.state = 'dragStart';
        var scrollTop = _this.getScrollTop();
        if (scrollTop === 0) _this.draging = true;
      }).drag(function (pos, event) {
        var scrollTop = _this.getScrollTop();
        if (pos.y < 5 || _this.refreshing || scrollTop !== 0) return; // 消除误差
        if (scrollTop === 0 && !_this.draging) {
          _this.draging = true;
          drager.reset(event);
        }
        _this.y = pos.y / 2;
        if (_this.y < 0) _this.y = 1;
        if (_this.y > LENGTH) _this.y = LENGTH;
      }).end(function (pos, event) {
        if (!pos.y || pos.y < 5) {
          _this.clearState();
          return; // 消除误差
        }
        var canRefresh = _this.y + INITY > 0 && _this.draging;
        _this.state = 'dragAnimate';
        if (canRefresh) {
          _this.draging = false;
          _this.$emit('refresh');
        } else {
          _this.y = 0;
          transitionEnd(_this.$el, _this.clearState.bind(_this));
        }
      });

      // fix ios
      this.handlePrevent = function (event) {
        if (_this.draging && _this.y > 0) event.preventDefault();
      };
      this.handleTouchEnd = function () {
        return true;
      };
      this.trigger.addEventListener('touchmove', this.handlePrevent, { passive: false });
      this.trigger.addEventListener('touchend', this.handleTouchEnd, { passive: false });
    },
    unbindDrag: function unbindDrag() {
      if (!this.drager) return;
      if (this.handlePrevent) {
        this.trigger.removeEventListener('touchmove', this.handlePrevent);
        this.trigger.removeEventListener('touchend', this.handleTouchEnd);
      }
      this.drager.destory();
      this.drager = null;
    },
    createRefreshIcon: function createRefreshIcon(h) {
      return this.refreshing ? h(Circular, {
        props: {
          size: 24,
          borderWidth: 2
        }
      }) : this.draging ? h('svg', {
        staticClass: 'mu-refresh-svg-icon',
        style: this.circularStyle,
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'
        }
      })]) : undefined;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-refresh-control',
      style: this.refreshStyle,
      class: this.refreshClass
    }, [this.createRefreshIcon(h)]);
  },

  watch: {
    refreshing: function refreshing(val) {
      if (!val) {
        transitionEnd(this.$el, this.clearState.bind(this));
      } else {
        this.state = 'refreshAnimate';
      }
    },
    trigger: function trigger(_trigger, oldTrigger) {
      if (_trigger === oldTrigger) return;
      this.unbindDrag();
      this.bindDrag();
    }
  }
};

var LoadMore = {
  name: 'mu-load-more',
  props: _extends({
    refreshing: Boolean
  }, InfiniteScroll.props, {
    loadedAll: Boolean
  }),
  data: function data() {
    return {
      trigger: null
    };
  },
  mounted: function mounted() {
    this.trigger = this.$el;
  },
  render: function render(h) {
    var _this = this;

    return h('div', {
      staticClass: 'mu-load-more'
    }, [isNotNull(this.$listeners.refresh) ? h(RefreshControl, {
      props: {
        refreshing: this.refreshing,
        trigger: this.trigger
      },
      on: {
        refresh: function refresh() {
          return _this.$emit('refresh');
        }
      }
    }) : undefined, this.$slots.default, isNotNull(this.$listeners.load) && !this.loadedAll ? h(InfiniteScroll, {
      props: {
        loading: this.loading,
        loadingText: this.loadingText
      },
      on: {
        load: function load() {
          return _this.$emit('load');
        }
      }
    }) : undefined]);
  }
};

LoadMore.install = function (Vue$$1) {
  Vue$$1.component(LoadMore.name, LoadMore);
  Vue$$1.component(RefreshControl.name, RefreshControl);
  Vue$$1.component(InfiniteScroll.name, InfiniteScroll);
};

theme.addCreateTheme(LoadMoreTheme);

var Menu = {
  name: 'mu-menu',
  props: {
    popoverClass: [String, Object, Array],
    cover: Popover.props.cover,
    placement: Popover.props.placement,
    space: Popover.props.space,
    open: Boolean,
    openOnHover: Boolean
  },
  data: function data() {
    return {
      active: this.open,
      trigger: null
    };
  },
  mounted: function mounted() {
    this.trigger = this.$el;
  },

  methods: {
    handleMouseEnter: function handleMouseEnter() {
      var _this = this;

      if (!this.openOnHover) return;
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        return _this.show();
      }, 100);
    },
    handleMouseLeave: function handleMouseLeave() {
      var _this2 = this;

      if (!this.openOnHover) return;
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        return _this2.hide();
      }, 100);
    },
    show: function show() {
      this.active = true;
      this.$emit('open');
    },
    hide: function hide() {
      this.active = false;
      this.$emit('close');
    },
    createPopover: function createPopover(h) {
      return h(Popover, {
        class: this.popoverClass,
        style: {
          'min-width': this.trigger ? this.trigger.offsetWidth + 'px' : ''
        },
        props: {
          cover: this.cover,
          placement: this.placement,
          open: this.active,
          space: this.space,
          trigger: this.trigger
        },
        on: {
          close: this.hide,
          mouseenter: this.handleMouseEnter,
          mouseleave: this.handleMouseLeave
        }
      }, this.$slots.content);
    }
  },
  render: function render(h) {
    var _this3 = this;

    return h('div', {
      staticClass: 'mu-menu',
      class: {
        'mu-menu__open': this.active
      }
    }, [h('div', {
      staticClass: 'mu-menu-activator',
      on: {
        click: function click() {
          return _this3.openOnHover ? null : _this3.active ? _this3.hide() : _this3.show();
        },
        mouseenter: this.handleMouseEnter,
        mouseleave: this.handleMouseLeave
      }
    }, this.$slots.default), this.createPopover(h)]);
  },
  beforeDestroy: function beforeDestroy() {
    this.hide();
  },

  watch: {
    active: function active(val) {
      this.$emit('update:open', val);
    },
    open: function open(val) {
      this.active = val;
    }
  }
};

Menu.install = function (Vue$$1) {
  Vue$$1.component(Menu.name, Menu);
};

var PaginationTheme = (function (theme) {
  return "\n  .mu-pagination {\n    color: " + theme.text.primary + ";\n    font-size: 14px;\n  }\n  .mu-pagination__raised .mu-pagination-item.mu-button,\n  .mu-pagination__raised .mu-pagination-btn.mu-button{\n    background-color: " + theme.text.alternate + ";\n  }\n  .mu-pagination-item.mu-button.is-current {\n    background-color: " + theme.primary + ";\n  }\n  ";
});

var Pagination = {
  name: 'mu-pagination',
  props: {
    total: {
      type: Number,
      default: 0,
      validator: function validator(val) {
        return val >= 0;
      }
    },
    current: {
      type: Number,
      default: 1,
      validator: function validator(val) {
        return val >= 1;
      }
    },
    pageCount: {
      type: Number,
      default: 7,
      validator: function validator(val) {
        return val >= 5 && val <= 21 && val % 2 !== 0;
      }
    },
    pageSize: {
      type: Number,
      default: 10
    },
    raised: Boolean,
    circle: Boolean
  },
  computed: {
    showPageCount: function showPageCount() {
      return this.pageCount - 2;
    },
    totalPage: function totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    items: function items() {
      if (this.total === 0) return [];
      var showPageCount = this.showPageCount;
      var arr = [];
      var start = 1;
      var end = this.totalPage;

      if (end <= showPageCount + 2) {
        for (var i = start; i <= end; i++) {
          arr.push({ text: i, value: i });
        }
        return arr;
      }
      arr.push({ text: start, value: start });
      if (this.current - start >= showPageCount - 1) {
        var go = this.current - showPageCount;
        arr.push({
          text: '...',
          value: go < 1 ? 1 : go
        });
      }

      var listStart = this.current - Math.floor(showPageCount / 2);
      if (listStart <= 1) listStart = 2;
      var listEnd = listStart + showPageCount - 1;
      if (listEnd >= end) listEnd = end - 1;
      listStart = listEnd - showPageCount + 1;

      for (var _i = listStart; _i <= listEnd; _i++) {
        arr.push({ text: _i, value: _i });
      }

      if (end - this.current >= showPageCount - 1) {
        var _go = this.current + showPageCount;
        arr.push({
          text: '...',
          value: _go > end ? end : _go
        });
      }
      arr.push({ text: end, value: end });
      return arr;
    }
  },
  methods: {
    changePage: function changePage(page) {
      this.$emit('update:current', page);
      this.$emit('change', page);
    },
    createPrevBtn: function createPrevBtn(h) {
      var _this = this;

      return h(Button, {
        staticClass: 'mu-pagination-btn',
        props: {
          flat: true,
          disabled: this.current <= 1
        },
        on: {
          click: function click() {
            return _this.changePage(_this.current - 1);
          }
        }
      }, [h('svg', {
        staticClass: 'mu-pagination-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
        }
      })])]);
    },
    creatNextBtn: function creatNextBtn(h) {
      var _this2 = this;

      return h(Button, {
        staticClass: 'mu-pagination-btn',
        props: {
          flat: true,
          disabled: this.current >= this.totalPage
        },
        on: {
          click: function click() {
            return _this2.changePage(_this2.current + 1);
          }
        }
      }, [h('svg', {
        staticClass: 'mu-pagination-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
        }
      })])]);
    },
    createPageList: function createPageList(h) {
      var _this3 = this;

      return h('ul', {}, this.items.map(function (item) {
        var btn = h(Button, {
          staticClass: 'mu-pagination-item',
          class: {
            'is-current': _this3.current === item.value
          },
          props: {
            flat: true
          },
          on: {
            click: function click() {
              return _this3.changePage(item.value);
            }
          }
        }, [item.text === '...' ? h('svg', {
          staticClass: 'mu-pagination-svg-icon',
          attrs: {
            viewBox: '0 0 24 24'
          }
        }, [h('path', {
          attrs: {
            d: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
          }
        })]) : item.text]);
        return h('li', {}, [btn]);
      }));
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-pagination',
      class: {
        'mu-pagination__raised': this.raised,
        'mu-pagination__circle': this.circle
      }
    }, [this.createPrevBtn(h), this.createPageList(h), this.creatNextBtn(h)]);
  }
};

Pagination.install = function (Vue$$1) {
  Vue$$1.component(Pagination.name, Pagination);
};

theme.addCreateTheme(PaginationTheme);

var RadioTheme = (function (theme) {
  return "\n  .mu-radio.disabled  {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-radio-checked {\n    color: " + theme.primary + ";\n  }\n  .mu-radio-label {\n    color: " + theme.text.primary + ";\n  }\n  .mu-radio.disabled .mu-radio-label {\n    color: " + theme.text.disabled + ";\n  }\n  ";
});

var Radio = {
  name: 'mu-radio',
  mixins: [select('radio')],
  props: {
    inputValue: {}
  },
  computed: {
    checked: function checked() {
      var inputValue = this.inputValue;
      var value = this.$attrs.value;
      if (isNull(inputValue)) return false;
      return inputValue === value;
    }
  },
  methods: {
    toggle: function toggle() {
      this.$emit('change', this.$attrs.value);
    }
  },
  render: function render(h) {
    var defaultSvgUnCheckIcon = h('svg', {
      staticClass: 'mu-radio-icon-uncheck mu-radio-svg-icon',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [h('path', {
      attrs: {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
      }
    })]);
    var defaultSvgCheckedIcon = h('svg', {
      staticClass: 'mu-radio-icon-checked mu-radio-svg-icon',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [h('path', {
      attrs: {
        d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
      }
    })]);
    var view = this.createRipple(h, 'mu-radio-icon', [this.uncheckIcon ? h(Icon, {
      staticClass: 'mu-radio-icon-uncheck',
      props: {
        value: this.uncheckIcon
      }
    }) : defaultSvgUnCheckIcon, this.checkedIcon ? h(Icon, {
      staticClass: 'mu-radio-icon-checked',
      props: {
        value: this.checkedIcon
      }
    }) : defaultSvgCheckedIcon]);
    return this.createSelect(h, view);
  }
};

Radio.install = function (Vue$$1) {
  Vue$$1.component(Radio.name, Radio);
};

theme.addCreateTheme(RadioTheme);

var SelectTheme = (function (theme) {
  return '\n  .mu-select-content {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-select-input {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-selection-text.is-active {\n    color: ' + theme.primary + ';\n  }\n  .mu-select-no-data {\n    color: ' + theme.text.disabled + ';\n  }\n  .mu-option.is-selected .mu-item {\n    color: ' + theme.secondary + ';\n  }\n  .mu-option.is-focused {\n    color: ' + theme.secondary + ';\n    background-color: ' + fade(theme.text.primary, 0.1) + ';\n  }\n  .mu-option.is-disabled .mu-item {\n    color: ' + theme.text.disabled + ';\n  }\n  ';
});

var menu = {
  provide: function provide() {
    return {
      optionClick: this.optionClick,
      addOption: this.addOption,
      removeOption: this.removeOption,
      isOptionSelected: this.isOptionSelected,
      isMultiple: this.isMultiple
    };
  },

  props: {
    textline: List.props.textline,
    space: Popover.props.space,
    placement: Popover.props.placement,
    dense: _extends({}, List.props.dense, {
      default: true
    }),
    noDataText: {
      type: String,
      default: '暂无数据显示'
    }
  },
  data: function data() {
    return {
      options: [],
      open: false
    };
  },

  computed: {
    selects: function selects() {
      if (!this.multiple) {
        var option = this.getOption(this.value);
        return option ? [{
          label: option.label,
          value: this.value,
          index: 0
        }] : [];
      }
      var selects = Array.isArray(this.value) ? this.value : [];
      var selectItems = [];
      for (var i = 0; i < selects.length; i++) {
        var value = selects[i];
        var _option = this.getOption(value);
        if (_option) {
          selectItems.push({
            label: _option.label,
            value: _option.value,
            index: selectItems.length
          });
          continue;
        }

        if (this.tags) {
          selectItems.push({
            label: value,
            value: value,
            index: selectItems.length
          });
        }
      }
      return selectItems;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.closeMenu();
  },

  methods: {
    activateInput: function activateInput() {
      this.isFocused = true;
    },
    deactivateInput: function deactivateInput() {
      this.isFocused = false;
      this.selectedIndex = -1;
      this.setSeachValue();
    },
    openMenu: function openMenu() {
      var _this = this;

      this.open = true;
      this.resetOptionVisable();
      var selectedIndex = this.getSelectedIndex();
      this.setFocusIndex(selectedIndex);
      setTimeout(function () {
        return _this.setScollPosition(selectedIndex);
      }, 0);
      if (this.autoComplete) {
        this.$nextTick(function () {
          _this.$refs.input.select();
        });
      }
    },
    closeMenu: function closeMenu() {
      this.open = false;
      this.resetFocusIndex();
    },
    toggleMenu: function toggleMenu() {
      if (this.open) return this.closeMenu();
      this.openMenu();
      this.focusInput();
    },
    resetOptionVisable: function resetOptionVisable() {
      this.options.forEach(function (option) {
        return option.visible = true;
      });
    },
    isMultiple: function isMultiple() {
      return this.multiple;
    },
    isOptionSelected: function isOptionSelected(value) {
      return value === this.value || this.multiple && this.value && this.value.indexOf(value) !== -1;
    },
    addOption: function addOption(option) {
      this.options.push(option);
    },
    removeOption: function removeOption(option) {
      var index = this.options.indexOf(option);
      if (index !== -1) this.options.splice(index, 1);
    },
    getOption: function getOption(value) {
      var option = this.options.filter(function (option) {
        return option.value === value;
      })[0];
      if (option) return option;
      return {
        label: value,
        value: value
      };
    },
    insertValue: function insertValue(selectedValue, value) {
      var index = 0;
      for (var i = 0; i < this.options.length; i++) {
        var item = this.options[i];
        if (item.selected) {
          index = selectedValue.indexOf(item.value) + 1;
          continue;
        }
        if (item.value === value) {
          return selectedValue.splice(index, 0, value);
        }
      }
      return selectedValue.push(value);
    },
    optionClick: function optionClick(value) {
      var _this2 = this;

      var notRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var selectedValue = this.multiple ? this.value ? [].concat(toConsumableArray(this.value)) : [] : this.value;
      if (this.multiple) {
        var index = selectedValue.indexOf(value);
        if (index === -1) {
          this.insertValue(selectedValue, value);
        } else {
          if (!notRemove) selectedValue.splice(index, 1);
        }
      } else {
        selectedValue = value;
      }
      this.$emit('input', selectedValue);
      this.$emit('change', selectedValue);
      if (this.multiple && this.autoComplete) this.searchValue = '';
      this.$nextTick(function () {
        _this2.focusInput();
        if (!_this2.multiple) _this2.closeMenu();
      });
    },
    createMenu: function createMenu(h) {
      var _this3 = this;

      var trigger = this.$refs.select;
      return h(Popover, {
        staticClass: 'mu-option-list',
        class: this.popoverClass,
        style: {
          'maxHeight': this.maxHeight + 'px',
          'visibility': this.tags && this.enableOptions.length === 0 ? 'hidden' : '',
          'min-width': trigger ? trigger.offsetWidth + 'px' : ''
        },
        ref: 'popover',
        props: {
          trigger: trigger,
          open: this.open,
          space: this.space,
          cover: !this.autoComplete,
          placement: this.placement
        },
        on: {
          close: function close() {
            return _this3.closeMenu();
          }
        }
      }, [h(List, {
        props: {
          textline: this.textline,
          dense: this.dense
        }
      }, [!this.tags && this.filterable && this.enableOptions.length === 0 ? h('div', { staticClass: 'mu-select-no-data' }, this.noDataText) : null, this.$slots.default])]);
    }
  }
};

var selection = {
  directives: {
    'click-outside': clickOutSide
  },
  data: function data() {
    return {
      searchValue: '',
      shouldBreak: false,
      selectedIndex: -1
    };
  },
  created: function created() {
    this.setSeachValue();
  },

  methods: {
    setSeachValue: function setSeachValue() {
      if (!this.multiple) this.searchValue = this.selects.map(function (item) {
        return item.label;
      }).join(',');
    },
    changeSelectedIndex: function changeSelectedIndex(keycode) {
      var maxIndex = this.selects.length - 1;
      if (keycode === 'left') {
        this.selectedIndex = this.selectedIndex === -1 ? maxIndex : this.selectedIndex - 1;
      } else if (keycode === 'right') {
        this.selectedIndex = this.selectedIndex >= maxIndex ? -1 : this.selectedIndex + 1;
      } else if (this.selectedIndex === -1) {
        this.selectedIndex = maxIndex;
        return;
      }

      if (['backspace', 'delete'].indexOf(keycode) !== -1) {
        var newIndex = this.selectedIndex === maxIndex ? this.selectedIndex - 1 : this.selects[this.selectedIndex + 1] ? this.selectedIndex : -1;
        if (this.selectedIndex !== -1) this.removeSelection(this.selectedIndex);
        this.selectedIndex = newIndex;
      }
    },
    resetSelectedIndex: function resetSelectedIndex() {
      this.selectedIndex = -1;
    },
    removeSelection: function removeSelection(index) {
      var value = [].concat(toConsumableArray(this.value));
      value.splice(index, 1);
      this.$emit('input', value);
      this.$emit('change', value);
    },
    createSlotSelection: function createSlotSelection(item) {
      return this.$scopedSlots.selection(_extends({}, item, {
        disabled: this.disabled || this.readonly
      }));
    },
    createChipSelection: function createChipSelection(h, _ref) {
      var _this = this;

      var selected = _ref.selected,
          index = _ref.index,
          label = _ref.label;

      return h(Chip, {
        attrs: {
          tabindex: -1
        },
        props: {
          delete: true,
          selected: selected
        },
        on: {
          delete: function _delete() {
            if (_this.disabled || _this.readonly) return;
            _this.removeSelection(index);
          }
        }
      }, label);
    },
    createTextSelection: function createTextSelection(h, _ref2, isLast) {
      var selected = _ref2.selected,
          label = _ref2.label;

      return h('span', {
        staticClass: 'mu-selection-text',
        class: {
          'is-active': selected
        }
      }, isLast ? label : label + this.separator);
    },
    createSelectedItems: function createSelectedItems(h) {
      var _this2 = this;

      return this.selects.map(function (item, index) {
        var selected = _this2.selectedIndex === index;

        switch (true) {
          case !!_this2.$scopedSlots.selection:
            return _this2.createSlotSelection(_extends({}, item, { selected: selected }));
          case _this2.chips:
            return _this2.createChipSelection(h, _extends({}, item, { selected: selected }));
          default:
            return _this2.createTextSelection(h, _extends({}, item, { selected: selected }), index === _this2.selects.length - 1);
        }
      });
    },
    createInputElement: function createInputElement(h) {
      var _this3 = this;

      var enable = this.autoComplete && !this.readonly;
      return [h('input', {
        staticClass: 'mu-select-input',
        ref: 'input',
        class: {
          'is-enable': enable,
          'is-break': this.shouldBreak
        },
        attrs: {
          tabindex: 0,
          readonly: !enable,
          disabled: this.disabled,
          placeholder: !this.value && this.value !== 0 ? this.placeholder : ''
        },
        domProps: {
          value: this.searchValue
        },
        on: _extends({}, this.createListeners(), {
          input: function input(e) {
            _this3.searchValue = e.target.value;
          }
        })
      }), h('input', {
        attrs: _extends({}, this.$attrs, {
          type: 'hidden'
        }),
        domProps: {
          value: this.value
        }
      })];
    },
    createSelection: function createSelection(h) {
      var _this4 = this;

      var content = h('div', {
        staticClass: 'mu-select-content'
      }, this.multiple ? [].concat(toConsumableArray(this.createSelectedItems(h)), toConsumableArray(this.createInputElement(h))) : this.createInputElement(h));
      return {
        data: {
          staticClass: 'mu-select',
          class: {
            'is-open': this.open,
            'is-multi': this.multiple,
            'is-filterable': this.autoComplete,
            'is-readonly': this.readonly,
            'is-disabled': this.disabled
          },
          on: {
            click: function click(e) {
              if (_this4.disabled || _this4.readonly || _this4.autoComplete && e.target === _this4.$refs.input) return;
              _this4.toggleMenu();
            }
          },
          directives: [{
            name: 'click-outside',
            value: function value(e) {
              if (_this4.open && _this4.$refs.popover.$el.contains(e.target)) return;
              _this4.blur();
            }
          }],
          ref: 'select'
        },
        children: [content],
        defaultActionIcon: h('div', {
          staticClass: 'mu-select-action'
        }, [h('svg', {
          staticClass: 'mu-select-icon',
          attrs: {
            viewBox: '0 0 24 24'
          }
        }, [h('path', {
          attrs: {
            d: 'M7 10l5 5 5-5z'
          }
        })])])
      };
    }
  },
  watch: {
    searchValue: function searchValue(val) {
      var _this5 = this;

      if (this.$refs.input) {
        if (this.$refs.input.scrollWidth > this.$refs.input.clientWidth) {
          this.shouldBreak = true;
        } else if (val === '') {
          this.shouldBreak = false;
        }
      }

      this.options.forEach(function (option) {
        var searchText = option.searchText || option.label;
        option.visible = !_this5.autoComplete || !val || searchText.toLowerCase().indexOf(val.toLowerCase()) !== -1;
      });
      this.resetFocusIndex();
      if (this.isFocused && !this.open) this.open = true;
    },
    selects: function selects() {
      this.setSeachValue();
    }
  }
};

var events = {
  methods: {
    blur: function blur() {
      this.deactivateInput();
      this.closeMenu();
      this.$emit('blur');
    },
    focus: function focus() {
      this.activateInput();
      this.openMenu();
      this.$emit('focus');
    },
    focusInput: function focusInput() {
      this.$refs.input.focus();
    },
    createListeners: function createListeners() {
      var _this = this;

      var listeners = Object.assign({}, this.$listeners);
      delete listeners.input;
      delete listeners.change;
      return _extends({}, listeners, {
        click: function click(e) {
          if (_this.disabled || _this.readonly || !_this.autoComplete) return;
          if (_this.isFocused && !_this.open) {
            _this.openMenu();
            return;
          }
          _this.focus();
        },
        focus: function focus(e) {
          if (_this.disabled || _this.readonly || _this.isFocused) {
            return;
          }

          _this.activateInput();
          _this.$nextTick(_this.focusInput);
        },
        keydown: this.onKeydown //  mixins/keyboard.js
      });
    }
  }
};

var keyboard = {
  data: function data() {
    return {
      focusIndex: -1
    };
  },

  computed: {
    enableOptions: function enableOptions() {
      return this.options.filter(function (option) {
        return option.visible && !option.disabled;
      });
    }
  },
  methods: {
    onKeydown: function onKeydown(e) {
      if (this.disabled || this.readonly) return;
      var code = keycode(e);
      if (!this.open && ['enter', 'space', 'up', 'down'].indexOf(code) !== -1) {
        e.preventDefault();
        return this.openMenu();
      }
      var options = this.enableOptions;
      switch (code) {
        case 'enter':
          var option = options[this.focusIndex];
          if (option) {
            this.optionClick(option.value);
          } else if (this.tags && this.multiple && this.searchValue) {
            this.optionClick(this.searchValue, true);
          }
          break;
        case 'up':
        case 'down':
          e.preventDefault();
          this.resetSelectedIndex();
          code === 'up' ? this.decrementFocusIndex() : this.incrementFocusIndex();
          break;
        case 'tab':
          this.blur();
          if (this.multiple) this.searchValue = '';
          break;
        case 'left':
        case 'right':
        case 'delete':
        case 'backspace':
          if (!this.searchValue && this.autoComplete && this.multiple) this.changeSelectedIndex(code);
          break;
        default:
          this.resetSelectedIndex();
          break;
      }
    },
    decrementFocusIndex: function decrementFocusIndex() {
      var index = this.focusIndex;
      var maxIndex = this.getOptionCount() - 1;
      index--;
      if (index < 0) index = maxIndex;
      this.setFocusIndex(index);
    },
    incrementFocusIndex: function incrementFocusIndex() {
      var index = this.focusIndex;
      var maxIndex = this.getOptionCount() - 1;
      index++;
      if (index > maxIndex) index = 0;
      this.setFocusIndex(index);
    },
    getOptionCount: function getOptionCount() {
      return this.enableOptions.length;
    },
    resetFocusIndex: function resetFocusIndex() {
      this.focusIndex = -1;
    },
    setFocusIndex: function setFocusIndex(index) {
      this.focusIndex = index;
    },
    getSelectedIndex: function getSelectedIndex() {
      for (var i = 0; i < this.enableOptions.length; i++) {
        if (this.enableOptions[i].selected) return i;
      }
      return -1;
    },
    setScollPosition: function setScollPosition(index) {
      var _this = this;

      if (index === -1 || !this.open) return;
      this.$nextTick(function () {
        var option = _this.enableOptions[index];
        if (!option) return;
        var optionEl = option.$el;
        var optionHeight = optionEl.offsetHeight;
        var scrollTop = optionEl.offsetTop - optionHeight;
        if (scrollTop < optionHeight) scrollTop = 0;
        _this.$refs.popover.$el.scrollTop = scrollTop;
      });
    }
  },
  watch: {
    focusIndex: function focusIndex(val) {
      this.enableOptions.forEach(function (option, index) {
        option.focused = index === val;
      });
      this.setScollPosition(val);
    }
  }
};

var Select = {
  name: 'mu-select',
  mixins: [input, menu, selection, events, keyboard],
  props: {
    popoverClass: [String, Object, Array],
    multiple: Boolean,
    maxHeight: {
      type: [String, Number],
      default: 300
    },
    readonly: Boolean,
    chips: Boolean,
    tags: Boolean, // 可创建条目
    placeholder: String,
    separator: {
      type: String,
      default: ','
    },
    filterable: Boolean // enable search option
  },
  computed: {
    autoComplete: function autoComplete() {
      return this.filterable || this.tags;
    }
  },
  render: function render(h) {
    var _createSelection = this.createSelection(h),
        data = _createSelection.data,
        children = _createSelection.children,
        defaultActionIcon = _createSelection.defaultActionIcon;

    return this.createInput(h, data, [].concat(toConsumableArray(children), [this.createMenu(h)]), defaultActionIcon);
  }
};

var Option = {
  name: 'mu-option',
  inject: ['addOption', 'removeOption', 'optionClick', 'isOptionSelected', 'isMultiple'],
  props: {
    label: {
      required: true,
      type: String
    },
    value: {
      required: true
    },
    disabled: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    searchText: String, // 用户搜索的文本，如果设置此值，会根据这个字段来搜搜，否则使用label属性
    avatar: Boolean
  },
  data: function data() {
    return {
      visible: true,
      focused: false
    };
  },

  computed: {
    selected: function selected() {
      return this.isOptionSelected(this.value);
    }
  },
  created: function created() {
    this.addOption(this);
  },
  destroyed: function destroyed() {
    this.removeOption(this);
  },
  render: function render(h) {
    var _this = this;

    var defaultItem = [this.isMultiple() ? h(ListAction, [h(Checkbox, {
      props: {
        inputValue: this.selected,
        color: 'secondary',
        disabled: this.disabled,
        tabIndex: -1
      }
    })]) : undefined, h(ListItemContent, [h(ListItemTitle, {}, this.label)])];
    return h(ListItem, {
      staticClass: 'mu-option',
      ref: 'listItem',
      class: {
        'is-selected': this.selected,
        'is-disabled': this.disabled,
        'is-focused': this.focused
      },
      props: {
        ripple: this.ripple,
        open: this.open,
        avatar: this.avatar,
        button: !this.disabled,
        tabIndex: -1
      },
      directives: [{
        name: 'show',
        value: this.visible
      }],
      on: {
        click: function click(e) {
          return _this.optionClick(_this.value);
        }
      }
    }, this.$slots.default && this.$slots.default.length > 0 ? this.$slots.default : defaultItem);
  }
};

Select.install = function (Vue$$1) {
  Vue$$1.component(Select.name, Select);
  Vue$$1.component(Option.name, Option);
};

theme.addCreateTheme(SelectTheme);

var PickerTheme$1 = (function (theme) {
  return "\n  .mu-slide-picker{\n    background: " + theme.background.paper + ";\n  }\n  .mu-slide-picker-center-highlight {\n    border-top-color: " + theme.divider + ";\n    border-bottom-color: " + theme.divider + ";\n  }\n  .mu-slide-picker-slot.mu-slide-picker-slot-divider{\n    color: " + theme.text.primary + ";\n  }\n  .mu-slide-picker-item{\n    color: " + theme.text.secondary + ";\n  }\n  .mu-slide-picker-item.selected {\n    color: " + theme.text.primary + ";\n  }\n  ";
});

var PickerSlot = {
  name: 'mu-slide-picker-slot',
  directives: {
    swipe: swipe
  },
  props: {
    divider: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    },
    values: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    itemHeight: {
      type: Number,
      default: 36
    },
    value: {},
    textAlign: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    visibleItemCount: {
      type: Number,
      default: 5
    }
  },
  data: function data() {
    return {
      animate: false,
      startTop: 0,
      velocityTranslate: 0,
      prevTranslate: 0
    };
  },

  computed: {
    contentHeight: function contentHeight() {
      return this.itemHeight * this.visibleItemCount;
    },
    valueIndex: function valueIndex() {
      return this.values.indexOf(this.value);
    },
    dragRange: function dragRange() {
      var values = this.values;
      var visibleItemCount = this.visibleItemCount;
      return [-this.itemHeight * (values.length - Math.ceil(visibleItemCount / 2)), this.itemHeight * Math.floor(visibleItemCount / 2)];
    }
  },
  mounted: function mounted() {
    if (!this.divider) {
      this.doOnValueChange();
    }
  },

  methods: {
    value2Translate: function value2Translate(value) {
      var values = this.values;
      var valueIndex = values.indexOf(value);
      var offset = Math.floor(this.visibleItemCount / 2);
      if (valueIndex !== -1) {
        return (valueIndex - offset) * -this.itemHeight;
      }
    },
    translate2Value: function translate2Value(translate) {
      translate = Math.round(translate / this.itemHeight) * this.itemHeight;
      var index = -(translate - Math.floor(this.visibleItemCount / 2) * this.itemHeight) / this.itemHeight;
      return this.values[index];
    },
    doOnValueChange: function doOnValueChange() {
      var value = this.value;
      var wrapper = this.$refs.wrapper;
      translateUtil.translateElement(wrapper, null, this.value2Translate(value));
    },
    doOnValuesChange: function doOnValuesChange() {
      var _this = this;

      var el = this.$el;
      var items = el.querySelectorAll('.mu-slide-picker-item');
      Array.prototype.forEach.call(items, function (item, index) {
        translateUtil.translateElement(item, null, _this.itemHeight * index);
      });
    },
    handleStart: function handleStart() {
      this.startTop = translateUtil.getElementTranslate(this.$refs.wrapper).top;
    },
    handleMove: function handleMove(pos, drag, event) {
      var el = this.$refs.wrapper;
      var translate = this.startTop + pos.y;
      translateUtil.translateElement(el, 0, translate);
      this.velocityTranslate = translate - this.prevTranslate || translate;
      this.prevTranslate = translate;
    },
    handleEnd: function handleEnd(pos, drag, event) {
      var _this2 = this;

      var el = this.$refs.wrapper;
      var momentumRatio = 7;
      var currentTranslate = translateUtil.getElementTranslate(el).top;
      var momentumTranslate = void 0;
      if (pos.time < 300) {
        momentumTranslate = currentTranslate + this.velocityTranslate * momentumRatio;
      }
      var dragRange = this.dragRange;
      this.animate = true;
      transitionEnd(el, function () {
        _this2.animate = false;
      });
      this.$nextTick(function () {
        var translate = void 0;
        if (momentumTranslate) {
          translate = Math.round(momentumTranslate / _this2.itemHeight) * _this2.itemHeight;
        } else {
          translate = Math.round(currentTranslate / _this2.itemHeight) * _this2.itemHeight;
        }
        translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0]);
        translateUtil.translateElement(el, null, translate);
        _this2.$emit('change', _this2.translate2Value(translate));
      });
    }
  },
  render: function render(h) {
    var _this3 = this;

    return h('div', {
      staticClass: 'mu-slide-picker-slot',
      class: {
        'mu-slide-picker-slot-divider': this.divider
      },
      style: {
        width: this.width
      },
      on: {
        touchmove: function touchmove(e) {
          e.preventDefault();
        }
      },
      directives: this.divider ? [] : [{
        name: 'swipe',
        value: {
          start: this.handleStart,
          move: this.handleMove,
          end: this.handleEnd
        }
      }]
    }, [this.divider ? h('div', {}, this.content) : h('div', {
      staticClass: 'mu-slide-picker-slot-wrapper',
      class: {
        animate: this.animate
      },
      style: {
        height: this.contentHeight + 'px'
      },
      ref: 'wrapper'
    }, this.values.map(function (item, index) {
      return h('div', {
        staticClass: 'mu-slide-picker-item',
        style: {
          'text-align': _this3.textAlign
        },
        class: {
          selected: item === _this3.value
        },
        key: 'pick-slot-' + index
      }, item.text || item);
    }))]);
  },

  watch: {
    values: function values(newVal) {
      if (this.valueIndex === -1) {
        this.value = (newVal || [])[0];
      }
    },
    value: function value() {
      this.doOnValueChange();
    }
  }
};

var Picker$1 = {
  name: 'mu-slide-picker',
  props: {
    visibleItemCount: {
      type: Number,
      default: 5
    },
    values: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    slots: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    change: function change(index, value) {
      this.$emit('change', value, index);
    }
  },
  render: function render(h) {
    var _this = this;

    return h('div', {
      staticClass: 'mu-slide-picker'
    }, [].concat(toConsumableArray(this.slots.map(function (slot, index) {
      return h(PickerSlot, {
        props: {
          divider: slot.divider,
          content: slot.content,
          textAlign: slot.textAlign,
          width: slot.width,
          value: _this.values[index],
          values: slot.values,
          visibleItemCount: _this.visibleItemCount
        },
        key: 'picker-slot-item-' + index,
        on: {
          change: function change(value) {
            _this.change(index, value);
          }
        }
      });
    })), [h('div', {
      staticClass: 'mu-slide-picker-center-highlight'
    })]));
  }
};

Picker$1.install = function (Vue$$1) {
  Vue$$1.component(Picker$1.name, Picker$1);
};

theme.addCreateTheme(PickerTheme$1);

var SliderTheme = (function (theme) {
  return "\n  .mu-slider {\n    color: " + theme.primary + ";\n  }\n  .mu-slider-track{\n    background-color: " + theme.track + ";\n  }\n  .mu-slider.disabled .mu-slider-fill{\n    background-color: " + theme.track + ";\n  }\n  .mu-slider.zero .mu-slider-thumb,\n  .mu-slider.disabled .mu-slider-thumb{\n    border-color: " + theme.track + ";\n    color: " + theme.track + ";\n    background-color: " + theme.text.alternate + ";\n  }\n  ";
});

var Slider = {
  name: 'mu-slider',
  mixins: [color],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 0.1
    },
    thumbColor: String,
    trackColor: String,
    disabled: Boolean,
    displayValue: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      active: false,
      hover: false,
      focused: false,
      dragging: false
    };
  },

  computed: {
    percent: function percent() {
      var percentNum = (this.value - this.min) / (this.max - this.min) * 100;
      return percentNum > 100 ? 100 : percentNum < 0 ? 0 : percentNum;
    }
  },
  created: function created() {
    this.handleDragMouseMove = this.handleDragMouseMove.bind(this);
    this.handleMouseEnd = this.handleMouseEnd.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  },

  methods: {
    handleKeydown: function handleKeydown(e) {
      var min = this.min,
          max = this.max,
          step = this.step;

      var action = void 0;
      switch (keycode(e)) {
        case 'page down':
        case 'down':
          action = 'decrease';
          break;
        case 'left':
          action = 'decrease';
          break;
        case 'page up':
        case 'up':
          action = 'increase';
          break;
        case 'right':
          action = 'increase';
          break;
        case 'home':
          action = 'min';
          break;
        case 'end':
          action = 'max';
          break;
      }
      var value = this.value;
      if (action) {
        e.preventDefault();
        switch (action) {
          case 'decrease':
            value -= step;
            break;
          case 'increase':
            value += step;
            break;
          case 'min':
            value = min;
            break;
          case 'max':
            value = max;
            break;
        }

        value = parseFloat(value.toFixed(5));

        if (value > max) {
          value = max;
        } else if (value < min) {
          value = min;
        }
      }
      this.$emit('change', value);
    },
    handleMouseDown: function handleMouseDown(e) {
      if (this.disabled) return;
      this.setValue(e);
      e.preventDefault();
      document.addEventListener('mousemove', this.handleDragMouseMove);
      document.addEventListener('mouseup', this.handleMouseEnd);
      this.$el.focus();
      this.onDragStart(e);
    },
    handleMouseUp: function handleMouseUp() {
      if (this.disabled) return;
      this.active = false;
    },
    handleTouchStart: function handleTouchStart(e) {
      if (this.disabled) return;
      this.setValue(e.touches[0]);

      document.addEventListener('touchmove', this.handleTouchMove);
      document.addEventListener('touchup', this.handleTouchEnd);
      document.addEventListener('touchend', this.handleTouchEnd);
      document.addEventListener('touchcancel', this.handleTouchEnd);

      e.preventDefault();
      this.onDragStart(e);
    },
    handleTouchEnd: function handleTouchEnd(e) {
      if (this.disabled) return;
      document.removeEventListener('touchmove', this.handleTouchMove);
      document.removeEventListener('touchup', this.handleTouchEnd);
      document.removeEventListener('touchend', this.handleTouchEnd);
      document.removeEventListener('touchcancel', this.handleTouchEnd);
      this.onDragStop(e);
    },
    handleFocus: function handleFocus() {
      if (this.disabled) return;
      this.focused = true;
    },
    handleBlur: function handleBlur() {
      if (this.disabled) return;
      this.focused = false;
    },
    handleMouseEnter: function handleMouseEnter() {
      if (this.disabled) return;
      this.hover = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      if (this.disabled) return;
      this.hover = false;
    },

    // 从点击位置更新 value
    setValue: function setValue(e) {
      var $el = this.$el,
          max = this.max,
          min = this.min,
          step = this.step;

      var value = (e.clientX - $el.getBoundingClientRect().left) / $el.offsetWidth * (max - min);
      value = Math.round(value / step) * step + min;
      value = parseFloat(value.toFixed(5));

      if (value > max) {
        value = max;
      } else if (value < min) {
        value = min;
      }
      this.$emit('change', value);
    },

    // 拖拽控制
    onDragStart: function onDragStart(e) {
      this.dragging = true;
      this.active = true;
      this.$emit('drag-start', e);
    },
    onDragUpdate: function onDragUpdate(e) {
      var _this = this;

      if (this.dragRunning) return;
      this.dragRunning = true;
      window.requestAnimationFrame(function () {
        _this.dragRunning = false;
        if (!_this.disabled) _this.setValue(e);
      });
    },
    onDragStop: function onDragStop(e) {
      this.dragging = false;
      this.active = false;
      this.$emit('drag-stop', e);
    },
    handleDragMouseMove: function handleDragMouseMove(e) {
      this.onDragUpdate(e);
    },
    handleTouchMove: function handleTouchMove(e) {
      this.onDragUpdate(e.touches[0]);
    },
    handleMouseEnd: function handleMouseEnd(e) {
      document.removeEventListener('mousemove', this.handleDragMouseMove);
      document.removeEventListener('mouseup', this.handleMouseEnd);
      this.onDragStop(e);
    }
  },
  render: function render(h) {
    var colorClass = this.getNormalColorClass(this.color, true);
    var color$$1 = this.getColor(this.color);
    var thumbColorClass = this.getNormalColorClass(this.thumbColor);
    var thumbColor = this.getColor(this.thumbColor);
    var thumbTextColorClass = this.getNormalColorClass(this.thumbColor, true);
    var trackColorClass = this.getNormalColorClass(this.trackColor);
    var trackColor = this.getColor(this.trackColor);

    var percent = this.percent + '%';

    var input = h('input', {
      attrs: _extends({}, this.$attrs, {
        type: 'hidden',
        value: this.value
      })
    });

    var displayValue = this.displayValue ? h('div', {
      staticClass: 'mu-slider-display-value ' + thumbColorClass,
      style: {
        left: percent,
        'background-color': thumbColor
      }
    }, [h('span', {
      staticClass: 'display-value-text'
    }, this.value)]) : undefined;

    var thumb = h('div', {
      staticClass: ['mu-slider-thumb', thumbColorClass, thumbTextColorClass].join(' '),
      style: {
        left: this.percent + '%',
        color: thumbColor,
        'background-color': thumbColor
      }
    }, [(this.focused || this.hover) && !this.active ? h(FocusRipple) : undefined]);

    return h('div', {
      staticClass: 'mu-slider ' + colorClass,
      class: {
        zero: this.value <= this.min,
        active: this.active,
        'display-value': this.displayValue && this.active,
        disabled: this.disabled
      },
      style: { color: color$$1 },
      attrs: {
        tabindex: this.disabled ? -1 : 0
      },
      on: _extends({}, this.$listeners, {
        focus: this.handleFocus,
        blur: this.handleBlur,
        keydown: this.handleKeydown,
        touchstart: this.handleTouchStart,
        touchend: this.handleTouchEnd,
        touchcancel: this.handleTouchEnd,
        mousedown: this.handleMouseDown,
        mouseup: this.handleMouseUp,
        mouseenter: this.handleMouseEnter,
        mouseleave: this.handleMouseLeave
      })
    }, [input, displayValue, h('div', {
      staticClass: 'mu-slider-track ' + trackColorClass,
      style: {
        'background-color': trackColor
      }
    }), h('div', { staticClass: 'mu-slider-fill', style: { width: percent } }), thumb]);
  }
};

Slider.install = function (Vue$$1) {
  Vue$$1.component(Slider.name, Slider);
};

theme.addCreateTheme(SliderTheme);

var SnackbarTheme = (function (theme) {
  return "\n  .mu-snackbar {\n    color: " + theme.text.alternate + ";\n    background-color: " + theme.text.primary + ";\n  }\n  ";
});

var Snackbar = {
  name: 'mu-snackbar',
  mixins: [popup, color],
  props: {
    overlay: {
      default: false
    },
    escPressClose: {
      default: false
    },
    textColor: String,
    message: String,
    position: {
      type: String,
      default: 'bottom',
      validator: function validator(val) {
        return ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end'].indexOf(val) !== -1;
      }
    }
  },
  render: function render(h) {
    var message = h('div', {
      staticClass: 'mu-snackbar-message'
    }, this.$slots.default && this.$slots.default.length > 0 ? this.$slots.default : this.message);
    var action = this.$slots.action ? h('div', {
      staticClass: 'mu-snackbar-action'
    }, this.$slots.action) : undefined;

    return h(this.position.indexOf('top') !== -1 ? SlideTopTransition : SlideBottomTransition, [this.open ? h('div', {
      staticClass: 'mu-snackbar ' + this.getColorClass() + ' ' + this.getTextColorClass(),
      style: {
        'z-index': this.zIndex,
        'background-color': this.getColor(this.color),
        'color': this.getColor(this.textColor)
      },
      class: defineProperty({}, 'mu-snackbar-' + this.position, !!this.position),
      on: this.$listeners
    }, [message, action]) : undefined]);
  }
};

Snackbar.install = function (Vue$$1) {
  Vue$$1.component(Snackbar.name, Snackbar);
};

theme.addCreateTheme(SnackbarTheme);

var StepperTheme = (function (theme) {
  return "\n  .mu-step-label {\n    color: " + theme.text.primary + ";\n  }\n  .mu-step-label.disabled {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-step-label.completed .mu-step-label-icon,\n  .mu-step-label.active .mu-step-label-icon {\n    color: " + theme.primary + ";\n  }\n  .mu-step-label-circle {\n    color: " + theme.text.alternate + ";\n  }\n  .mu-step-label.completed .mu-step-label-circle,\n  .mu-step-label.active .mu-step-label-circle {\n    background-color: " + theme.primary + ";\n  }\n  ";
});

var StepConnector = {
  name: 'mu-step-connector',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    data.staticClass = 'mu-step-connector ' + (data.staticClass || '');
    return h('div', data, [h('span', { staticClass: 'mu-step-connector-line' })]);
  }
};

var Stepper = {
  name: 'mu-stepper',
  props: {
    activeStep: {
      type: Number,
      default: 0
    },
    linear: {
      type: Boolean,
      default: true
    },
    orientation: {
      type: String,
      default: 'horizontal',
      validator: function validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }
    }
  },
  render: function render(h) {
    var activeStep = this.activeStep,
        linear = this.linear,
        orientation = this.orientation;

    var children = [];
    var slots = this.$slots;

    if (slots.default && slots.default.length > 0) {
      var index = 0;
      slots.default.forEach(function (vNode) {
        if (!vNode.componentOptions) return;
        if (index > 0) {
          children.push(h(StepConnector, {}));
        }
        var propsData = vNode.componentOptions.propsData;

        if (activeStep === index) {
          propsData.active = true;
        } else if (linear && activeStep > index) {
          propsData.completed = true;
        } else if (linear && activeStep < index) {
          propsData.disabled = true;
        }

        propsData.index = index++;
        children.push(vNode);
      });
      if (children.length > 0) children[children.length - 1].componentOptions.propsData.last = true;
    }

    return h('div', {
      staticClass: 'mu-stepper ' + (orientation === 'vertical' ? 'mu-stepper-vertical' : '')
    }, children);
  }
};

var Step = {
  name: 'mu-step',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    completed: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number
    },
    last: {
      type: Boolean,
      default: false
    }
  },
  render: function render(h) {
    var active = this.active,
        completed = this.completed,
        disabled = this.disabled,
        index = this.index,
        last = this.last;

    var children = [];
    var slots = this.$slots;

    if (slots.default && slots.default.length > 0) {
      slots.default.forEach(function (vNode) {
        if (!vNode.componentOptions || !vNode.componentOptions.propsData) return;
        var num = index + 1;
        vNode.componentOptions.propsData = _extends({ active: active, completed: completed, disabled: disabled, last: last, num: num }, vNode.componentOptions.propsData);
        children.push(vNode);
      });
    }

    return h('div', { staticClass: 'mu-step', on: this.$listeners }, children);
  }
};

var StepLabel = {
  name: 'mu-step-label',
  props: {
    active: Boolean,
    completed: Boolean,
    disabled: Boolean,
    num: [String, Number]
  },
  render: function render(h) {
    var slots = this.$slots;
    var isSlotsIcon = slots.icon && slots.icon.length > 0;
    var icon = this.completed ? h('svg', {
      staticClass: 'mu-step-label-icon',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [h('path', {
      attrs: {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
      }
    })]) : h('div', { staticClass: 'mu-step-label-circle' }, this.num);

    return h('span', {
      staticClass: 'mu-step-label',
      class: {
        active: this.active,
        completed: this.completed,
        disabled: this.disabled
      },
      on: this.$listeners
    }, [this.num || isSlotsIcon ? h('span', { staticClass: 'mu-step-label-icon-container' }, [isSlotsIcon ? slots.icon : icon]) : undefined, slots.default]);
  }
};

var StepButton = {
  name: 'mu-step-button',
  props: {
    active: Boolean,
    completed: Boolean,
    disabled: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    num: [String, Number],
    last: Boolean,
    childrenInLabel: {
      type: Boolean,
      default: true
    }
  },
  render: function render(h) {
    var slots = this.$slots;

    var stepLabel = h(StepLabel, {
      props: {
        active: this.active,
        completed: this.completed,
        num: this.num,
        disabled: this.disabled
      }
    }, [slots.default, slots.icon && slots.icon.map(function (vNode) {
      if (!vNode.tag) return vNode;
      vNode.data = vNode.data || {};
      vNode.data.slot = 'icon';
    })]);

    return h(AbstractButton, {
      staticClass: 'mu-step-button',
      props: {
        disabled: this.disabled,
        ripple: this.ripple
      },
      on: this.$listeners
    }, [this.childrenInLabel ? stepLabel : slots.default]);
  }
};

var StepContent = {
  name: 'mu-step-content',
  props: {
    active: Boolean,
    last: Boolean
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-step-content',
      class: {
        last: this.last
      },
      on: this.$listeners
    }, [h('div', {
      style: {
        position: 'relative',
        overflow: 'hidden',
        height: '100%'
      }
    }, [h(ExpandTransition, [this.active ? h('div', { staticClass: 'mu-step-content-inner', ref: 'inner' }, this.$slots.default) : undefined])])]);
  }
};

Stepper.install = function (Vue$$1) {
  Vue$$1.component(Stepper.name, Stepper);
  Vue$$1.component(Step.name, Step);
  Vue$$1.component(StepLabel.name, StepLabel);
  Vue$$1.component(StepButton.name, StepButton);
  Vue$$1.component(StepConnector.name, StepConnector);
  Vue$$1.component(StepContent.name, StepContent);
};

theme.addCreateTheme(StepperTheme);

var SubHeaderTheme = (function (theme) {
  return "\n  .mu-sub-header {\n    color: " + theme.text.secondary + ";\n  }\n  ";
});

var SubHeader = {
  name: 'mu-sub-header',
  functional: true,
  props: {
    inset: Boolean
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = (data.staticClass || '') + ' mu-sub-header ' + (props.inset ? 'inset' : '');
    return h('div', data, children);
  }
};

SubHeader.install = function (Vue$$1) {
  Vue$$1.component(SubHeader.name, SubHeader);
};

theme.addCreateTheme(SubHeaderTheme);

var SwitchTheme = (function (theme) {
  return "\n  .mu-switch.disabled input[type=\"checkbox\"]:checked+.mu-switch-wrapper .mu-switch-track{\n    background-color: " + theme.track + ";\n  }\n  .mu-switch-checked {\n    color: " + theme.primary + ";\n  }\n  .mu-switch.disabled .mu-switch-label {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-switch-label {\n    color: " + theme.text.primary + ";\n  }\n  .mu-switch.disabled .mu-switch-track {\n    background-color: " + theme.track + ";\n  }\n  .mu-switch-track {\n    background-color: " + theme.track + ";\n  }\n  .mu-switch-thumb {\n    background-color: " + theme.background.paper + ";\n  }\n  ";
});

var Switch = {
  name: 'mu-switch',
  mixins: [select('switch')],
  props: {
    inputValue: Boolean
  },
  computed: {
    checked: function checked() {
      return this.inputValue;
    }
  },
  methods: {
    toggle: function toggle() {
      this.$emit('change', !this.inputValue);
    }
  },
  render: function render(h) {
    var view = h('div', {
      staticClass: 'mu-switch-container'
    }, [h('div', { staticClass: 'mu-switch-track' }), this.createRipple(h, 'mu-switch-thumb')]);

    return this.createSelect(h, view);
  }
};

Switch.install = function (Vue$$1) {
  Vue$$1.component(Switch.name, Switch);
};

theme.addCreateTheme(SwitchTheme);

var TextFieldTheme = (function (theme) {
  return "\n  .mu-input {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-input__focus {\n    color: " + theme.primary + ";\n  }\n  .mu-input__error {\n    color: " + theme.error + ";\n  }\n  .mu-input.disabled .mu-input-content {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-input-help {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-input__error .mu-input-help {\n    color: " + theme.error + ";\n  }\n  .mu-input.has-label .mu-input-label.float {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-input-line {\n    background-color: " + theme.divider + ";\n  }\n  .mu-input-line.disabled{\n    border-bottom-color: " + theme.text.disabled + ";\n  }\n  .mu-input-suffix-text,\n  .mu-input-prefix-text {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-text-field-input {\n    color: " + theme.text.primary + ";\n  }\n  .mu-text-field-suffix {\n    color: " + theme.text.secondary + ";\n  }\n  ";
});

var Textarea = {
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    rows: {
      type: Number,
      default: 1
    },
    rowsMax: {
      type: Number
    },
    value: {
      type: String,
      default: ''
    }
  },
  mounted: function mounted() {
    this.resizeTextarea();
  },

  watch: {
    value: function value(val, oldVal) {
      var _this = this;

      this.$nextTick(function () {
        _this.resizeTextarea();
      });
    }
  },
  methods: {
    resizeTextarea: function resizeTextarea() {
      var element = this.$refs.textarea;
      if (!element) return;
      var hiddenEl = this.$refs.textareaHidden;
      var lineHeight = window.getComputedStyle(element, null).getPropertyValue('line-height');
      lineHeight = Number(lineHeight.substring(0, lineHeight.indexOf('px')));
      var pt = window.getComputedStyle(element, null).getPropertyValue('padding-top');
      pt = Number(pt.substring(0, pt.indexOf('px')));
      var pd = window.getComputedStyle(element, null).getPropertyValue('padding-bottom');
      pd = Number(pd.substring(0, pd.indexOf('px')));
      var minHeight = pd + pt + lineHeight * this.rows;
      var maxHeight = pd + pt + lineHeight * (this.rowsMax || this.rows);
      var height = hiddenEl.scrollHeight;
      element.style.height = (height < minHeight ? minHeight : height > maxHeight && maxHeight > 0 ? maxHeight : height) + 'px';
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-text-field-multiline'
    }, [h('textarea', {
      staticClass: 'mu-text-field-textarea-hide mu-text-field-input',
      ref: 'textareaHidden',
      attrs: {
        rows: 1
      },
      domProps: {
        value: this.value || ' '
      }
    }), h('textarea', {
      staticClass: 'mu-text-field-input mu-text-field-textarea',
      ref: 'textarea',
      attrs: _extends({
        tabindex: 0
      }, this.$attrs, {
        disabled: this.disabled
      }),
      domProps: {
        value: this.value || ''
      },
      on: this.$listeners
    })]);
  }
};

var TextField = {
  name: 'mu-text-field',
  mixins: [input],
  props: {
    rows: {
      type: Number,
      default: 1
    },
    rowsMax: {
      type: Number
    },
    multiLine: Boolean,
    maxLength: [String, Number]
  },
  methods: {
    handleFocus: function handleFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },
    handleBlur: function handleBlur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },
    focus: function focus() {
      if (this.disabled) return;
      if (this.$refs.input) {
        this.$refs.input.focus();
      } else if (this.$refs.textarea) {
        this.$refs.textarea.$refs.textarea.focus();
      }
    },
    createTextField: function createTextField(h) {
      var _this = this;

      var listeners = _extends({}, this.$listeners, {
        input: function input$$1(e) {
          return _this.$emit('input', e.target.value, e);
        },
        change: function change(e) {
          return _this.$emit('change', e.target.value, e);
        },
        focus: this.handleFocus,
        blur: this.handleBlur
      });
      var placeholder = !this.labelFloat ? this.$attrs.placeholder : '';
      return [this.multiLine ? h(Textarea, {
        attrs: _extends({}, this.$attrs, {
          maxlength: this.maxLength,
          placeholder: placeholder
        }),
        props: {
          disabled: this.disabled,
          rows: this.rows,
          rowsMax: this.rowsMax,
          value: String(this.value || '')
        },
        ref: 'textarea',
        on: listeners
      }) : h('input', {
        staticClass: 'mu-text-field-input',
        attrs: _extends({
          tabindex: 0
        }, this.$attrs, {
          maxlength: this.maxLength,
          disabled: this.disabled,
          placeholder: placeholder
        }),
        domProps: {
          value: this.value
        },
        ref: 'input',
        on: listeners
      })];
    }
  },
  render: function render(h) {
    return this.createInput(h, {
      staticClass: 'mu-text-field'
    }, [this.createTextField(h), this.$slots.default]);
  }
};

TextField.install = function (Vue$$1) {
  Vue$$1.component(TextField.name, TextField);
};

theme.addCreateTheme(TextFieldTheme);

var version = '3.0.2';
var components = {
  Alert: Alert, AppBar: AppBar, AutoComplete: AutoComplete, Avatar: Avatar,
  Badge: Badge, BottomNav: BottomNav, BottomSheet: BottomSheet, Breadcrumbs: Breadcrumbs, Button: Button,
  Card: Card, Carousel: Carousel, Checkbox: Checkbox, Chip: Chip,
  DataTable: DataTable, DateInput: DateInput, Dialog: Dialog, Divider: Divider, Drawer: Drawer,
  ExpansionPanel: ExpansionPanel, Form: Form, Grid: Grid, GridList: GridList, Helpers: Helpers, Icon: Icon,
  LoadMore: LoadMore, List: List, Menu: Menu,
  Pagination: Pagination, Paper: Paper, Picker: Picker, Popover: Popover, Progress: Progress, Radio: Radio,
  Select: Select, SlidePicker: Picker$1, Slider: Slider, Snackbar: Snackbar, Stepper: Stepper, SubHeader: SubHeader, Switch: Switch,
  Tabs: Tabs, TextField: TextField, Tooltip: Tooltip
};

function install(Vue$$1) {
  Object.keys(components).forEach(function (key) {
    Vue$$1.use(components[key]);
  });
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);
var index$1 = _extends({
  version: version,
  install: install,
  theme: theme,
  Colors: colorsObj
}, components);

/* harmony default export */ __webpack_exports__["default"] = (index$1);


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (process.env.NODE_ENV !== 'production' && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && process.env.NODE_ENV !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (process.env.NODE_ENV !== 'production') {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    process.env.NODE_ENV !== 'production' &&
    // skip validation for weex recycle-list child component props
    !(false)
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (process.env.NODE_ENV !== 'production') {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (process.env.NODE_ENV !== 'production') {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (process.env.NODE_ENV !== 'production' && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (process.env.NODE_ENV !== 'production') {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production' && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                process.env.NODE_ENV !== 'production'
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (process.env.NODE_ENV !== 'production' && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (process.env.NODE_ENV !== 'production') {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (process.env.NODE_ENV !== 'production') {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (process.env.NODE_ENV !== 'production') {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        process.env.NODE_ENV !== 'production' &&
        process.env.NODE_ENV !== 'test'
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (process.env.NODE_ENV !== 'production' &&
      process.env.NODE_ENV !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(7), __webpack_require__(5), __webpack_require__(62).setImmediate))

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(63);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(7)))

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ });