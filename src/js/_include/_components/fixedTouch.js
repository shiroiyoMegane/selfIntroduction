/* eslint-disable */
export default (op) => {
	/* "passive" が使えるかどうかを検出 */
	let passiveSupported = false;
	try {
		document.addEventListener("test", null, Object.defineProperty({}, "passive", {
			get: function() {
				passiveSupported = true;
			}
		}));
	} catch(err) {}
	/* リスナーを登録 */
	document.addEventListener('touchend', function listener(e) {
		/* do something */
		e.preventDefault();
	}, passiveSupported ? { passive: false } : false);
	document.addEventListener('touchmove', function listener(e) {
		/* do something */
		e.preventDefault();
	}, passiveSupported ? { passive: false } : false);
}
