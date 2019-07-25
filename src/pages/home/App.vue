
<template lang="pug">

#app
	c_debugBlock01
	c_controlKeyBlock01
	c_gameDevice01

</template>

<script>
// eslint-disable-next-line
let test = "aaa";
// eslint-disable-next-line
import style from '@/stylus/style.styl'
import entry from '@/js/entry.js'
entry(test);


// components
import c_gameDevice01 from '@/components/c_gameDeviceBlock01.vue'
import c_controlKeyBlock01 from '@/components/c_controlKeyBlock01.vue'
import c_debugBlock01 from '@/components/c_debugBlock01.vue'


export default {
	name: 'app',
	components: {
		c_debugBlock01,
		c_gameDevice01,
		c_controlKeyBlock01
	}
}
</script>