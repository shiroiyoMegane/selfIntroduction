<template lang="pug">
.c-gameDewviceBlock01
	global-events(
		@keydown.w="keyDown(BTN.BUTTON_TOP_NAME)"
		@keyup.w="keyUp(BTN.BUTTON_TOP_NAME)"
		@keydown.s="keyDown(BTN.BUTTON_BOTTOM_NAME)"
		@keyup.s="keyUp(BTN.BUTTON_BOTTOM_NAME)"
		@keydown.d="keyDown(BTN.BUTTON_RIGHT_NAME)"
		@keyup.d="keyUp(BTN.BUTTON_RIGHT_NAME)"
		@keydown.a="keyDown(BTN.BUTTON_LEFT_NAME)"
		@keyup.a="keyUp(BTN.BUTTON_LEFT_NAME)"
		@keydown.p="keyDown(BTN.BUTTON_A_NAME)"
		@keyup.p="keyUp(BTN.BUTTON_A_NAME)"
		@keydown.l="keyDown(BTN.BUTTON_B_NAME)"
		@keyup.l="keyUp(BTN.BUTTON_B_NAME)"
		@keydown.v="keyDown(BTN.BUTTON_START_NAME)"
		@keyup.v="keyUp(BTN.BUTTON_START_NAME)"
		@keydown.b="keyDown(BTN.BUTTON_SELECT_NAME)"
		@keyup.b="keyUp(BTN.BUTTON_SELECT_NAME)"
	)
	.deviceBlock
		.deviceWrapper
			.controlBlock
				.leftBlock
					.plusBtn#is-plus
						.btn#is-upKey(@mousedown="keyDown(BTN.BUTTON_TOP_NAME)" @mouseup="keyUp(BTN.BUTTON_TOP_NAME)" @touchstart="keyDown(BTN.BUTTON_TOP_NAME)" @touchend="keyUp(BTN.BUTTON_TOP_NAME)")
						.btn#is-rightKey(@mousedown="keyDown(BTN.BUTTON_RIGHT_NAME)" @mouseup="keyUp(BTN.BUTTON_RIGHT_NAME)" @touchstart="keyDown(BTN.BUTTON_RIGHT_NAME)" @touchend="keyUp(BTN.BUTTON_RIGHT_NAME)")
						.btn#is-downKey(@mousedown="keyDown(BTN.BUTTON_BOTTOM_NAME)" @mouseup="keyUp(BTN.BUTTON_BOTTOM_NAME)" @touchstart="keyDown(BTN.BUTTON_BOTTOM_NAME)" @touchend="keyUp(BTN.BUTTON_BOTTOM_NAME)")
						.btn#is-leftKey(@mousedown="keyDown(BTN.BUTTON_LEFT_NAME)" @mouseup="keyUp(BTN.BUTTON_LEFT_NAME)" @touchstart="keyDown(BTN.BUTTON_LEFT_NAME)" @touchend="keyUp(BTN.BUTTON_LEFT_NAME)")
					.startbtn
						#is-startBtn(@mousedown="keyDown(BTN.BUTTON_START_NAME)" @mouseup="keyUp(BTN.BUTTON_START_NAME)" @touchstart="keyDown(BTN.BUTTON_START_NAME)" @touchend="keyUp(BTN.BUTTON_START_NAME)")
						#is-selectBtn(@mousedown="keyDown(BTN.BUTTON_SELECT_NAME)" @mouseup="keyUp(BTN.BUTTON_SELECT_NAME)" @touchstart="keyDown(BTN.BUTTON_SELECT_NAME)" @touchend="keyUp(BTN.BUTTON_SELECT_NAME)")
				.rightBlock
					.commandBtn
						#is-aBtn(@mousedown="keyDown(BTN.BUTTON_A_NAME)" @mouseup="keyUp(BTN.BUTTON_A_NAME)" @touchstart="keyDown(BTN.BUTTON_A_NAME)" @touchend="keyUp(BTN.BUTTON_A_NAME)")
						#is-bBtn(@mousedown="keyDown(BTN.BUTTON_B_NAME)" @mouseup="keyUp(BTN.BUTTON_B_NAME)" @touchstart="keyDown(BTN.BUTTON_B_NAME)" @touchend="keyUp(BTN.BUTTON_B_NAME)")
					.speakerBlock
						.speaker
						.speaker
						.speaker
						.speaker
						.speaker
			.gamePlayBlock
				.playLWrapper
					.playMWrapper
						canvas#mycanvas

</template>

<script>
import GlobalEvents from 'vue-global-events'

export default {
	name: 'c_gameDeviceBlock01',
	components: { GlobalEvents },
	data() {
		return {
			BTN: window.option.GAME_FLAG
		}
	},
	methods: {
		optionSetKeyFlag(tg, fl) {
			switch (tg){
				case this.BTN.BUTTON_TOP_NAME :
					window.option.GAME_FLAG.BUTTON_TOP = fl == 'down' ? true : false;
					break;
				case this.BTN.BUTTON_BOTTOM_NAME :
					window.option.GAME_FLAG.BUTTON_BOTTOM = fl == 'down' ? true : false;
					break;
				case this.BTN.BUTTON_RIGHT_NAME :
					window.option.GAME_FLAG.BUTTON_RIGHT = fl == 'down' ? true : false;
					break;
				case this.BTN.BUTTON_LEFT_NAME :
					window.option.GAME_FLAG.BUTTON_LEFT = fl == 'down' ? true : false;
					break;
				case this.BTN.BUTTON_A_NAME :
					window.option.GAME_FLAG.BUTTON_A = fl == 'down' ? true : false;
					break;
				case this.BTN.BUTTON_B_NAME :
					window.option.GAME_FLAG.BUTTON_B = fl == 'down' ? true : false;
					break;
				case this.BTN.BUTTON_START_NAME :
					window.option.GAME_FLAG.BUTTON_START = fl == 'down' ? true : false;
					break;
				case this.BTN.BUTTON_SELECT_NAME :
					window.option.GAME_FLAG.BUTTON_SELECT = fl == 'down' ? true : false;
					break;
			}
		},
		keyDown(tg) {
			document.getElementById(tg).classList.add('is-active');
			document.getElementById(tg).parentNode.classList.add(tg);
			this.optionSetKeyFlag(tg,'down');
		},
		keyUp(tg) {
			document.getElementById(tg).classList.remove('is-active');
			document.getElementById(tg).parentNode.classList.remove(tg);
			this.optionSetKeyFlag(tg,'up');
		},
	}
}
</script>