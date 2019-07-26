/* eslint-disable */
import initFunc from '../_modules/_m_initFunc.js'

import resizeDevice from '../_components/_c_resizeDevice.js'
import fixedTouch from '../_components/_c_fixedTouch.js'
import phinaSet from '../_components/_c_phinaSet.js'
import debugMode from '../_components/_c_debugMode.js'

// init
class initSet {
	DOMReadBefore(op) {
		phinaSet(op); // phina.js 設定
		
	}
	DOMReadAfter(op) {
		resizeDevice(op); // リサイズしたときのデバイスのサイズ
		fixedTouch(op); // spでピンチ切
		debugMode(op);
	}
	imageReadAfter(op) {
	}
	windowResize(op) {
		resizeDevice(op);
	}
	windowScroll(op) {
		e.preventDefault();
	}
}

export default (option) => {
	let init = new initSet();
	initFunc(init, option);
}