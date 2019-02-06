<template>
  <div class="goodbye-wrap"> {{ text }}</div>
</template>

<script>
  export default {
    data() {
      return {
        text: "Goodbye Vue"
      }
    },
    mounted() {
      (() => console.log("Goodbye Vue!"))();
    }
  }
</script>

<style scoped>
  .goodbye-wrap {
    padding: 2em;
    background-color: #484848;
    color: #fff;
  }
</style>
