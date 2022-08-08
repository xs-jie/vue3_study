<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="changeMessage">更改message</button>
    <demo :message="message" :message2="message2" @abc="abc"></demo>
  </div>
</template>

<script setup lang="ts">
// 在Vue3中的setup语法糖中，子组件只需要引入就能使用，不需要注册
import Demo from '@/views/Dome.vue'
import { ref } from 'vue'

const message = ref('你真是个叼毛！！')
const message2 = ref('你真是个扑街！！')

const changeMessage = () => {
  message.value += 'haha'
}

const abc = (value: string) => {
  console.log('被输出值{  }的输出结果是：', value)
}
</script>

<style lang="less" scoped></style>
