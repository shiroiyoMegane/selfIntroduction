'use strict'

/* eslint-disable */
import comSet from './_include/_pages/_p_common.js'
import * as phina from "phina.js";


// ・タイトル画面
// ・スタート画面
// ・フィールド画面
// ・menu画面

// const uaSet = require('./_include/_modules/ua.js');
window.option = {
	SP_WIDTH: 768,
	PC_WIDTH: 1200,
	PAGE_FLAG: "html",
	DEBUG_MODE: true,
	GAME_FLAG: {
		BUTTON_TOP: false,
		BUTTON_TOP_NAME: 'is-upKey',
		BUTTON_RIGHT: false,
		BUTTON_RIGHT_NAME: 'is-rightKey',
		BUTTON_BOTTOM: false,
		BUTTON_BOTTOM_NAME: 'is-downKey',
		BUTTON_LEFT: false,
		BUTTON_LEFT_NAME: 'is-leftKey',
		BUTTON_A: false,
		BUTTON_A_NAME: 'is-aBtn',
		BUTTON_B: false,
		BUTTON_B_NAME: 'is-bBtn',
		BUTTON_START: false,
		BUTTON_START_NAME: 'is-startBtn',
		BUTTON_SELECT: false,
		BUTTON_SELECT_NAME: 'is-selectBtn',

		HIT_FLAG: false,
		FIELD: 0,
		MAIN_MENU: false,
	},
}
const init = () => {
	comSet(window.option);
}
export default () => {
	init();
}