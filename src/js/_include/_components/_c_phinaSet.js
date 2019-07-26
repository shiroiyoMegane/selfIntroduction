
import titleScene01 from './_gameScene/_g_titleScene01.js'
import titleScene02 from './_gameScene/_g_titleScene02.js'
import mainScene01 from './_gameScene/_g_mainScene01.js'
import mainScene02 from './_gameScene/_g_mainScene02.js'

/* eslint-disable */
export default (op) => {

	var myscenes =  [
		{
			label: "titleScene01",
			className: "titleScene01",
		},
		{
			label: "titleScene02",
			className: "titleScene02",
		},
		{
			label: "mainScene01",
			className: "mainScene01",
		},
		{
			label: "mainScene02",
			className: "mainScene02"
		},
	];

	phina.globalize();
	titleScene01();
	titleScene02();
	mainScene01();
	mainScene02();

	phina.main(function() {
		var app = GameApp({
			query: '#mycanvas', // 表示先のcanvasを指定
			startLabel: 'titleScene01',
			scenes: myscenes,
			width:500,
			height:380,
		});
		// 実行
		app.run();
	});
}
