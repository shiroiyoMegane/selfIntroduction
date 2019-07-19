'use strict'
require("@babel/polyfill");
import * as phina from "phina.js";
const comSet = require('./_include/_pages/_p_common.js');
const uaSet = require('./_include/_modules/ua.js');

let option = {
	SP_WIDTH: 768,
	PC_WIDTH: 1200,
	UA: new uaSet().dvType(),
	PAGE_FLAG: "html",
	GAME_FLAG: {
		BUTTON_TOP: false,
		BUTTON_RIGHT: false,
		BUTTON_BOTTOM: false,
		BUTTON_LEFT: false,
		BUTTON_A: false,
		BUTTON_B: false,
		BUTTON_START: false,
		BUTTON_SELECT: false,
	},
}
const init = () => {
	comSet(option);
}
init();