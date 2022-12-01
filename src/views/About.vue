<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="changeMessage">更改message</button>
    <demo
      :message="message"
      :message2="message2"
      @abc="abc"
      ref="demoRef"
    ></demo>
    <button @click="doSome">使用ref调用子组件的数据或方法</button>
  </div>
</template>

<script setup lang="ts">
// 在Vue3中的setup语法糖中，子组件只需要引入就能使用，不需要注册
import Demo from '@/views/Dome.vue'
import { ref, Ref } from 'vue'

const message: Ref<string> = ref('你真是个叼毛！！')
const message2: Ref<string> = ref('你真是个扑街！！')

const demoRef = ref() /* 通过ref绑定子组件 */

const changeMessage = () => {
  message.value += 'haha'
}

/* 通过ref获取子组件的数据和方法 */
const doSome = () => {
  console.log(demoRef.value?.count)
  demoRef.value.changeName()
}

const abc = (value: string) => {
  console.log('子组件发送给父组件的自定义事件携带的参数是', value)
}
</script>

<style lang="less" scoped></style>
