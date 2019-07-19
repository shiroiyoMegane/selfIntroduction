const initFunc = require('../_modules/initFunc.js');

let phinaTest = () => {
	phina.globalize();

	const W_HALF = 320; // スクリーン横幅の半分
	const H_HALF = 480; // スクリーン高さの半分

	phina.define("MainScene", {
		// 継承
		superClass: "DisplayScene",
		// コンストラクタ
		init: function () {
			// 親クラスの初期化
			this.superInit();

			// 背景の色
			this.backgroundColor = "black";

			// 左クリック用
			this.left = PathShape({
				stroke: "white",
				paths: [
					Vector2(400, 600),
					Vector2(400, 700),
					Vector2(320, 700),
					Vector2(330, 620),
					Vector2(400, 600)
				]
			}).addChildTo(this);

			// 右クリック用
			this.right = PathShape({
				stroke: "white",
				paths: [
					Vector2(430, 600),
					Vector2(430, 700),
					Vector2(510, 700),
					Vector2(500, 620),
					Vector2(430, 600)
				]
			}).addChildTo(this);

			// ホイール用
			this.middle = RectangleShape({
				stroke: "white",
				strokeWidth: 4,
				fill: null,
				width: 20,
				height: 40
			}).addChildTo(this).setPosition(415, 680);

			// マウス下半分用
			PathShape({
				stroke: "white",
				paths: [
					Vector2(320, 705),
					Vector2(510, 705),
					Vector2(495, 825),
					Vector2(415, 875),
					Vector2(335, 825),
					Vector2(320, 705)
				]
			}).addChildTo(this);

			// マウスカーソルの位置用
			this.pointer = RectangleShape({
				stroke: "white",
				strokeWidth: 4,
				fill: null,
				width: 20,
				height: 20
			}).addChildTo(this);

			// 文字キー用
			this.zLabel = Label({
				text: "z",
				fill: "white"
			}).addChildTo(this).setPosition(100, 100);
			this.xLabel = Label({
				text: "x",
				fill: "white"
			}).addChildTo(this).setPosition(140, 100);

			// スペースキー用
			this.spaceLabel = Label({
				text: "space",
				fill: "white"
			}).addChildTo(this).setPosition(250, 100);

			// 各方向キー用
			this.leftLabel = Label({
				text: "←",
				fill: "white"
			}).addChildTo(this).setPosition(450, 100);
			this.upLabel = Label({
				text: "↑",
				fill: "white"
			}).addChildTo(this).setPosition(490, 60);
			this.rightLabel = Label({
				text: "→",
				fill: "white"
			}).addChildTo(this).setPosition(530, 100);
			this.downLabel = Label({
				text: "↓",
				fill: "white"
			}).addChildTo(this).setPosition(490, 140);
		},
		// 更新
		update: function (app) {
			// マウスカーソルかタッチの位置取得
			const p = app.pointer;
			this.pointer.setPosition(p.x, p.y);

			// 各クリックの取得
			const m = app.mouse;
			const right = m.getButton("right");
			const left = m.getButton("left");
			const middle = m.getButton("middle");

			// クリックされていたら対応するボタンを赤くする
			this.right.stroke = (right) ? "red" : "white";
			this.left.stroke = (left) ? "red" : "white";
			this.middle.stroke = (middle) ? "red" : "white";

			// クリックかタッチされていた場合、ポインターの色も赤くする
			this.pointer.stroke = (right || left || middle || p.getPointing()) ? "red" : "white";
			// 左クリックかタッチされていた場合、赤い波紋を作る
			if (p.getPointing()) {
				this.touchCircle(p.x, p.y);
			}

			// キー入力取得
			const key = app.keyboard;
			// 各キーを押したとき、文字の色を赤くする
			this.zLabel.fill = (key.getKey("z")) ? "red" : "white";
			this.xLabel.fill = (key.getKey("x")) ? "red" : "white";
			this.spaceLabel.fill = (key.getKey("space")) ? "red" : "white";

			this.leftLabel.fill = (key.getKey("left")) ? "red" : "white";
			this.upLabel.fill = (key.getKey("up")) ? "red" : "white";
			this.rightLabel.fill = (key.getKey("right")) ? "red" : "white";
			this.downLabel.fill = (key.getKey("down")) ? "red" : "white";
		},
		// 赤い波紋
		touchCircle: function (x, y) { 
			// 波紋の円を作る
			const circle = CircleShape({
				fill: null,
				stroke: "red",
				strokeWidth: 4
			}).addChildTo(this).setPosition(x, y);
			// 消滅させるまでのカウンタ
			circle.count = 0;

			// 波紋の更新
			circle.update = () => {
				circle.count++;
				// 徐々に透明にさせる
				circle.alpha -= 0.1;
				// 徐々に半径を広げる
				circle.radius += circle.count * 2;
				// カウントが10になったら自身を消す
				if (circle.count === 10) {
					circle.remove();
				}
			};
		}
	});

	/*
	* メイン処理
	*/
	phina.main(function () {
		// アプリケーションを生成
		const app = GameApp({
			// MainSceneから開始
			startLabel: "main"
		});
		// fps表示
		//app.enableStats();
		// 実行
		app.run();
	});
}

// init
class initSet {
	DOMReadBefore(op) {
	}
	DOMReadAfter(op) {
		phinaTest();
	}
	imageReadAfter(op) {
	}
	windowResize(op) {
	}
	windowScroll(op) {
	}
}

module.exports = (option) => {
	let init = new initSet();
	initFunc(init, option);
}