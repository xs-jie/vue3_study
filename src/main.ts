// 程序的主入口文件

// 引入createApp函数，创建对应的应用，产生应用的实例对象
import { createApp } from 'vue'
// 引入App组件（所有组件的父组件）
import App from './App.vue'
// 引入路由
import router from './router'
// 引入vuex
import store from './store'


// 创建App应用返回实例对象，注册vuex实例和路由实例对象，调用mount方法进行挂载
createApp(App).use(store).use(router).mount('#app')
