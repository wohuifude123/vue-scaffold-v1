<template>
  <div class="body_div">
    <v-title></v-title>
  </div>
</template>

<script>
  import title from './components/title';
  export default {
    components: {
      'v-title': title,
    },
    mounted: function() { }
  }
</script>

<style src="./assets/styles/index.scss"></style>
