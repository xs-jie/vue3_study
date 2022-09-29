// 程序的主入口文件

// 引入createApp函数，创建对应的应用，产生应用的实例对象
import { createApp } from 'vue'
// 引入App组件（所有组件的父组件）
import App from './App.vue'
// 引入路由
import router from './router'
// 引入vuex
import store from './store'
// 引入并使用ant-design-vue,全局引入
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
/* vue3版本的ant-design-vue需要引入图标才能使用 */
import * as Icons from '@ant-design/icons-vue'
/* 引入字体图标样式 */
import './assets/fonts/iconfont.css'

// 创建App应用返回实例对象，注册vuex实例和路由实例对象，调用mount方法进行挂载
const app = createApp(App)
app.use(store).use(router).use(antd).mount('#app')

/* 想要全局使用图标，不用一个个导入 */
const icons: any = Icons
for (const i in icons) {
  app.component(i, icons[i])
}

/* 999999 */
