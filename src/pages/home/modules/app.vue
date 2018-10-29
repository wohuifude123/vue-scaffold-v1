<template>
  <div class="app_div">

    <v-header></v-header>
    <v-body></v-body>
    <div class='study'>
      <h1>学习</h1>
      <span>{{world}}</span>
    </div>
  </div>
</template>
<script>
  import header from './header';
  import body from './body';
  export default {
    data: function(){
      return {world: '亲爱的朋友，欢迎使用本脚手架'}
    },
    components: {
      'v-header': header,
      'v-body': body,
    },
    mounted: function() { }
  }
</script>

<style src="../assets/styles/index.scss"></style>



