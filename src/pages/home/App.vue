
<template lang="pug">

#app
	c_debugBlock01
	c_gameDevice01

</template>

<script>
// eslint-disable-next-line
import style from '@/stylus/style.styl'
import entry from '@/js/entry.js'
entry();


// components
import c_gameDevice01 from '@/components/c_gameDeviceBlock01.vue'
import c_debugBlock01 from '@/components/c_debugBlock01.vue'


export default {
	name: 'app',
	components: {
		c_debugBlock01,
		c_gameDevice01,
	}
}
</script>