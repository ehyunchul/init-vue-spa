<template>
	<div class="hello-wrap"> {{ text }} </div>
</template>

<script>
	export default {
		data () {
			return {
				text: "Hello Vue"
			}
		},
		mounted () {
			(() => console.log("Hello Vue!"))();
		}
	}
</script>

<style scoped>
	.hello-wrap {
		padding: 2em;
		background-color: #e2e2e2;
	}
</style>
