/* eslint-disable */
export default (op) => {
	phina.define("mainScene02", {
		// 継承
		superClass: "DisplayScene",
		// コンストラクタ
		init: function () { // 更新
			this.superInit(); // 親クラスの初期化
			this.setInteractive(true); //タッチ判定有効化
			this.backgroundColor = "#F0F";	// 背景の色
			this.zLabel = Label({ // 文字キー用
				text: "復活の呪文",
				fill: "white"
			}).addChildTo(this).setPosition(100, 100);
		},
		update: function (app) { // 各キーを押したとき、文字の色を赤くする
			// this.zLabel.fill = (window.option.GAME_FLAG.BUTTON_TOP) ? "red" : "white";
		}
	});
}
