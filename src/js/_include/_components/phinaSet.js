/* eslint-disable */
export default (op) => {
	phina.globalize();

	phina.define("MainScene", {
		// 継承
		superClass: "DisplayScene",
		// コンストラクタ
		init: function () { // 更新
			this.superInit(); // 親クラスの初期化
			this.backgroundColor = "#CCC";	// 背景の色
			this.zLabel = Label({ // 文字キー用
				text: "w",
				fill: "white"
			}).addChildTo(this).setPosition(100, 100);
		},
		update: function (app) { // 各キーを押したとき、文字の色を赤くする
			this.zLabel.fill = (window.option.GAME_FLAG.BUTTON_TOP) ? "red" : "white";
		},
	});

	phina.main(function () {
		const app = GameApp({ // アプリケーションを生成
			query: '#mycanvas', // 表示先のcanvasを指定
			startLabel: "splash", // MainSceneから開始
			fit: false, // 画面にフィットさせない
			width:500,
			height:380,
		});
		// fps表示
		//app.enableStats();
		// 実行
		app.run();
	});
}
