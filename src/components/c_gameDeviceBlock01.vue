<template lang="pug">
.c-gameDewviceBlock01
	.deviceBlock
		.deviceWrapper
			.gamePlayBlock
				.playLWrapper
					.playMWrapper
						canvas#mycanvas
			.controlBlock
				.leftBlock
					.plusBtn#is-plus
						.btn#is-upKey
						.btn#is-rightKey
						.btn#is-downKey
						.btn#is-leftKey
					.startbtn
						#is-startBtn
						#is-selectBtn
				.rightBlock
					.commandBtn
						#is-aBtn
						#is-bBtn
					.speakerBlock
						.speaker
						.speaker
						.speaker
						.speaker
						.speaker

</template>

<script>

export default {
	name: 'c_gameDeviceBlock01'
}
</script>