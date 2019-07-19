

module.exports = (tg, op, flag) => {
	const uaSet = require('./ua.js');

	let timeoutId = 1, pageFlag;
	let currentWidth = window.innerWidth;


	tg.DOMReadBefore(op);

	document.addEventListener("DOMContentLoaded", () => {
		pageFlag = document.querySelector(op.PAGE_FLAG).className
		if(pageFlag == flag || flag === void 0) {
			tg.DOMReadAfter(op);

			window.addEventListener('load', () => {
				tg.imageReadAfter(op);
			},false);
		}

		window.addEventListener("resize", () => {

			if (timeoutId) return;
	
			timeoutId = setTimeout( () => {
				timeoutId = 0;
	
				// ios resize制御
				if(op.UA != 'pc'){
					if (currentWidth == window.innerWidth) return;
					currentWidth = window.innerWidth;
					tg.windowResize(op);
				} else {
					tg.windowResize(op);
				}
				
			}, 500 ) ;
	
		});
	
		window.addEventListener("scroll", () => {
			if (timeoutId) return ;
			timeoutId = setTimeout( () => {
				timeoutId = 0 ;
				tg.windowScroll(op);
			}, 300 ) ;
		});

		// scroll、resize制御
		timeoutId = setTimeout( () => {
			timeoutId = 0;
		}, 100 ) ;
	},false);

	
}
