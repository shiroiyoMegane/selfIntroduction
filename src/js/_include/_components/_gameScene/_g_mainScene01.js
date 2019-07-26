/* eslint-disable */
export default (op) => {
	phina.define("mainScene01", {
		// 継承
		superClass: "DisplayScene",
		// コンストラクタ
		init: function () { // 更新
			this.superInit(); // 親クラスの初期化
			this.setInteractive(true); //タッチ判定有効化
			this.backgroundColor = "#CCC";	// 背景の色
			this.zLabel = Label({
				text: "ゲームのメインシーンが入る",
				fill: "white"
			}).addChildTo(this).setPosition(100, 100);
		},
		update: function (app) {
		},
		// onpointstart: function() {
		// 	this.exit();  
		// },
	});
}
