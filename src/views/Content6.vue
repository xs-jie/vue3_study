<!--
 * @Author: xushaojie 13592841305@163.com
 * @Date: 2022-12-02 14:02:56
 * @LastEditors: xushaojie 13592841305@163.com
 * @LastEditTime: 2023-06-27 14:14:04
 * @FilePath: \vue3_study\src\views\Content6.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <header><h1>vue3中store的使用</h1></header>
  <div>Store中全局的state全局状态name: {{ store.state.name }}</div>
  <div>Store中other模块中的state状态name: {{ store.state.other.name }}</div>
  <!-- <div>{{ globalName }}</div>
  <div>{{ otherName }}</div> -->
  <a-button @click="useMutation">使用vuex中的mutation</a-button>
</template>

<script setup>
import { useStore, mapState, computed } from 'vuex'
const store = useStore()
// const globalName = computed(() => mapState(['name']))
// const otherName = computed(() => mapState('other', ['name']))
// const globalName = mapState(['name'])
// const otherName = mapState('other', ['name'])
const useMutation = () => {
  store.commit('other/otherAction', '12')
}
</script>

<style lang="less" scoped></style>
