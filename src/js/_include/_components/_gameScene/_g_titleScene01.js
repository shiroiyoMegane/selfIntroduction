/* eslint-disable */
export default (t) => {
	phina.define("titleScene01", {
		superClass: "DisplayScene",
		init: function () {
			this.superInit();
			this.time = 0;

			this.backgroundColor = "#000";

			this.label01 = Label({
				text: "ゲームのopみたいな",
				x: 10,
				y: 20,
				fill: "white",
				fontSize: 24,
				align:"left",
			}).addChildTo(this);

			this.label02 = Label({
				text: "画面を表示するよ",
				x: 10,
				y: 60,
				fill: "white",
				fontSize: 24,
				align:"left",
			}).addChildTo(this);

			this.timeLabel = Label({
				text: '0',
				x: 10,
				y: 350,
				fill: "white",
				fontSize: 20,
				align:"left",
			}).addChildTo(this);
			
		},
		update: function (app) {
			this.time += app.deltaTime;
			this.mathTime = Math.floor(this.time / 1000);
			this.timeLabel.text = '経過秒数：' + this.mathTime;
			if(this.mathTime > 1) {
				app.replaceScene(titleScene02());
			}
		},
	});
}
