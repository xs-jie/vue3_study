<template>
  <h1>Vue3间父组通讯数据使用v-modal进行绑定</h1>
  <h2>父组件（父组件value）</h2>
  {{ message }}
  <children v-model="message" msg="msg"></children>

  <h2>vue3 插槽使用</h2>
  <slotComponent :data="data">
    <template #one="{ text, msg, record }"
      >{{ text }}----{{ msg }}----{{ record.name + record.msg }}</template
    >
    <template #two="{ text, msg, record }"
      >{{ text }}----{{ msg }}----{{ record.name + record.msg }}</template
    >
  </slotComponent>
  <!-- <h2>vue2 插槽使用</h2>
  <slotComponent :data="data2">
    <template slot="three" :slot-scope="{ text, record }">
      {{ text }}----{{ record.msg }}----{{ text + record.msg }}
    </template>
    <template slot="four" :slot-scope="{ text, record }">
      {{ text }}----{{ record.msg }}----{{ text + record.msg }}
    </template>
  </slotComponent> -->

  <a-button @click="request">使用全家API</a-button>
</template>

<script setup lang="ts">
import children from '@/views/components/content5_children.vue'
import slotComponent from '@/views/components/slotComponent.vue'
import { ref, Ref, reactive, getCurrentInstance } from 'vue'

const message: Ref<string> = ref('hello vue3 - v-modal')
const msg: Ref<string> = ref('aaaaaa')
const data = reactive([
  {
    name: 'one',
    msg: 'this is a new one',
  },
  {
    name: 'two',
    msg: 'this is a new two',
  },
])

// const data2 = reactive([
//   {
//     name: 'three',
//     msg: 'this is a new three',
//   },
//   {
//     name: 'four',
//     msg: 'this is a new four',
//   },
// ])
const { proxy } = getCurrentInstance()
const request = () => {
  proxy.$axios.get('http://192.168.138')
}
</script>

<style lang="less" scoped>
</style>