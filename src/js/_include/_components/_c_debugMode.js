/* eslint-disable */
export default (op) => {
	// アニメーションループに使うメソッドを決める
	let animationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.setTimeout;
	let draw = () => {
		debugSet();
		// console.log(window.option.GAME_FLAG.BUTTON_RIGHT)
	}
	let debugSet = () => {
		document.getElementById('debugBtnTop').childNodes[1].innerHTML = window.option.GAME_FLAG.BUTTON_TOP;
		document.getElementById('debugBtnRight').childNodes[1].innerHTML = window.option.GAME_FLAG.BUTTON_RIGHT;
		document.getElementById('debugBtnBottom').childNodes[1].innerHTML = window.option.GAME_FLAG.BUTTON_BOTTOM;
		document.getElementById('debugBtnLeft').childNodes[1].innerHTML = window.option.GAME_FLAG.BUTTON_LEFT;
		document.getElementById('debugBtnA').childNodes[1].innerHTML = window.option.GAME_FLAG.BUTTON_A;
		document.getElementById('debugBtnB').childNodes[1].innerHTML = window.option.GAME_FLAG.BUTTON_B;
		document.getElementById('debugBtnStart').childNodes[1].innerHTML = window.option.GAME_FLAG.BUTTON_START;
		document.getElementById('debugBtnSelect').childNodes[1].innerHTML = window.option.GAME_FLAG.BUTTON_SELECT;

		//当たり判定
		document.getElementById('debugHit').childNodes[1].innerHTML = window.option.GAME_FLAG.HIT_FLAG;

		//フィールド
		document.getElementById('debugField').childNodes[1].innerHTML = window.option.GAME_FLAG.FIELD;
		
		//フィールド
		document.getElementById('debugMainMenu').childNodes[1].innerHTML = window.option.GAME_FLAG.MAIN_MENU;
	}
	// アニメーションを行うメソッドを定義する。
	let animation = () => {
		// 描画する
		draw();
		// 第2引数は、setTimeoutの場合のみ使われる
		animationFrame(animation, 1000 / 24);
	};
	if(window.option.DEBUG_MODE == true) {
		document.getElementById('debugMode').style.display="block";
		animation();
	}
}
