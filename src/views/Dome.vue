<template>
  <div>本人{{ name }},今年{{ age }}岁,在{{ company }}从事{{ job }}</div>
  <button @click="changeAge">过生日了</button>
  <button @click="changeName">改名字了</button>
  <div>计算属性： {{ fullName }}</div>
  <div>父组件传入子组件的message值： {{ props.message }}</div>
  <div>父组件传入子组件的message2值： {{ props.message2 }}</div>
  <button @click="close">给父组件发送自定义事件</button>

  <div>count:{{ count }}</div>
  <button @click="addOne">count+1</button>

  <div>:{{ arr }}</div>
  <button @click="addArr">arr+1</button>

  <div>使用provide的数据： {{ injectData.name }}</div>
  <button @click="injectData.sonFunction()">调用provide注入的方法</button>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, computed, watch, inject } from 'vue'
/* setup语法糖中可以直接使用defineProps和defineEmits,不用在额外引入 */
/* setup语法糖中能够直接写await语法，不需要写async */

/* 定义响应式数据 */
const data = reactive({
  name: 'xsj',
  age: 23,
  job: '前端开发工程师',
})

let count = ref(1)

const arr = reactive(['1', '2', '3'])

const company = ref('深圳易伙科技有限责任公司')

const { name, age, job } = toRefs(data)

/* methods配置中的方法在vue3中的写法 */
const changeAge = () => {
  console.log('我是changeAge')
  // age.value += 1
  data.age += 1
}
const changeName = () => {
  name.value += '-'
}

const addOne = () => {
  count.value += 1
}

const addArr = () => {
  arr.push(`${arr.length + 1}`)
}

/* 计算属性的写法，引入computed Api */
const fullName = computed(() => {
  return name.value + 'NB'
})

/* props父子传值的使用，引入defineProps Api */
// 声明props
const props = defineProps({
  message: {
    type: String,
    default: '没有传message',
  },
  message2: {
    type: String,
    default: '',
  },
})

// const props2 = defineProps(['message2'])

/* 子组件给父组件发送emit事件，使用defineEmits Api */
const emit = defineEmits(['abc']) /* 数组中放自定义事件名 */
/* 调用自定义事件 */
const close = () => {
  emit('abc', '898')
}

/* 使用watch监听响应式数据的变化 */
/* 情况一：监听基本数据类型 */
const watchCount = watch(count, (newVal, oldVal) => {
  console.log('新值-旧值', newVal, oldVal)
})
/* 情况二： 监听对象变化 */
const watchData = watch(
  () => data.name,
  (newVal, oldVal) => {
    console.log('新旧值', newVal, oldVal)
  }
)
/* 情况三： 监听数组变化 */
const watchArr = watch(
  () => [...arr],
  (newVal, oldVal) => {
    console.log('新旧值', newVal, oldVal)
  }
)
/* 总结整个复杂数据监听时，若想获得旧值，源对象必须使用函数返回深拷贝后的对象 */

/* 使用provide和inject */
const injectData = inject('provideData')

/* 使用defineExpose暴露数据 */
defineExpose({
  ...toRefs(data),
  count,
  changeName,
})
</script>

<style lang="less" scoped></style>
