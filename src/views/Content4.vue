<template>
  <h1>ref</h1>
  <div>
    {{ va }}
  </div>
  <a-button @click="changeVa">点击</a-button>
  <h1>toRefs</h1>
  <div>{{ name }}</div>
  <div>{{ method }}</div>
  <div>{{ headers }}</div>
  <a-button @click="changeApp">点击</a-button>
  <h1>toRef</h1>
  <div>{{ _a }}</div>
  <a-button @click="change_a">点击</a-button>
  <h1>v-model:(父组件传入子组件的变量名)="值"</h1>
  <a-button @click="visible = true">弹窗</a-button>
  <modal1 v-model:visible="visible"></modal1>
</template>

<script setup>
import { ref, reactive, toRefs, toRef } from 'vue'
import modal1 from '@/views/modal/modal1.vue'

const visible = ref(false)

const va = ref('啊啊啊！')
const app = reactive({
  name: 'app',
  method: 'get',
  headers: ['Content-Type', 'Content-Length'],
})

const obj = reactive({
  a: 'a',
  b: 'b',
})

const _a = toRef(obj, 'a')

const { name, method, headers } = toRefs(app)

const changeVa = () => {
  va.value += '!'
}

const change_a = () => {
  obj.a += 'a'
}

const changeApp = () => {
  app.name += 'app'
  app.method += 't'
  app.headers.push('newValue')
}
</script>

<style lang="less" scoped>
</style>