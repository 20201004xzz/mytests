
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import {$http} from '@escook/request-miniprogram'
$http.baseUrl='https://api-hmugo-web.itheima.net/api/public/v1'
import store from './store/index'
$http.beforeRequest=function(){
	uni.showLoading({
		title:"加载中"
	})
}
$http.afterRequest=function(){
	uni.hideLoading()
}
uni.$http=$http
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif