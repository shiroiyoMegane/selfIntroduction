/* eslint-disable */
export default (op) => {
	phina.define("titleScene02", {
		superClass: "DisplayScene",
		init: function () { // 更新
			this.superInit();

			this.backgroundColor = "#000";

			this.arrow = 0;

			this.title01 = Label({
				text: "タイトル",
				x: 20,
				y: 30,
				fill: "white",
				fontSize: 44,
				align:"left",
			}).addChildTo(this);

			this.arrow01 = Label({
				text: "▶",
				x: 0,
				y: 250,
				fill: "white",
				fontSize: 24,
				align:"left",
			}).addChildTo(this);

			this.btn01 = Label({ // 文字キー用
				text: "1.冒険をする",
				x: 25,
				y: 250,
				fill: "white",
				fontSize: 24,
				align:"left",
			}).addChildTo(this);

			this.btn02 = Label({ // 文字キー用
				text: "2.復活の呪文",
				x: 25,
				y: 300,
				fill: "white",
				fontSize: 24,
				align:"left",
			}).addChildTo(this);

		},
		update: function (app) {
			if(window.option.GAME_FLAG.BUTTON_BOTTOM) {
				this.arrow += 1;
			}
			if(window.option.GAME_FLAG.BUTTON_TOP) {
				this.arrow -= 1;
			}
			if(this.arrow > 1) {
				this.arrow = 0
			} else if(this.arrow < 0) {
				this.arrow = 1
			}
			if(this.arrow == 0) {
				this.arrow01.y = 250;
				if(window.option.GAME_FLAG.BUTTON_A) {
					app.replaceScene(mainScene01());
				}
			} else if(this.arrow == 1) {
				this.arrow01.y = 300;
				if(window.option.GAME_FLAG.BUTTON_A) {
					app.replaceScene(mainScene02());
				}
			}
		},
	});
}
