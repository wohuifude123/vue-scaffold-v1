/**
 * 作者：Abbott.liu
 * 时间：2017年11月
 * 功能：网站登陆页面
 */

import Vue from 'vue/dist/vue.common.js';
import hello from './modules/app.vue'

let data = {hello:hello}
new Vue({
  el: "#app",
  components:data
});
