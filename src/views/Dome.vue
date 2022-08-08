<template>
  <div>本人{{ name }},今年{{ age }}岁,在{{ company }}从事{{ job }}</div>
  <button @click="changeAge">过生日了</button>
  <button @click="changeName">改名字了</button>
  <div>计算属性： {{ fullName }}</div>
  <div>父组件传入子组件的message值： {{ props.message }}</div>
  <div>父组件传入子组件的message2值： {{ props.message2 }}</div>

  <button @click="close">给父组件发送自定义事件</button>
</template>

<script setup>
import { ref, reactive, toRefs, computed } from 'vue'

// 定义响应式数据
const data = reactive({
  name: 'xsj',
  age: 23,
  job: '前端开发工程师'
})

const company = ref('深圳易伙科技有限责任公司')

const { name, age, job } = toRefs(data)

// methods配置在vue3中的写法
const changeAge = () => {
  console.log('我是changeAge')
  // age.value += 1
  data.age += 1
}
const changeName = () => {
  name.value += '-'
}

// 计算属性的写法，引入computed Api
const fullName = computed(() => {
  return name.value + 'NB'
})

// props父子传值的使用，引入defineProps Api
// 声明props
const props = defineProps({
  message: {
    type: String,
    default: '没有传message'
  },
  message2: {
    type: String,
    default: ''
  }
})

// const props2 = defineProps(['message2'])

// 子组件给父组件发送emit事件，使用defineEmits Api
const emit = defineEmits(['abc'])

const close = () => {
  emit('abc', '898')
}
</script>

<!-- setup语法糖要想给组件设置name配置，则可以在添加一个script标签 -->

<!-- <script lang="ts">
export default {
  name: 'Dome'
}
</script> -->

<style lang="less" scoped></style>
