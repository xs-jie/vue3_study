<template>
  <header><h1>vue3中store的使用</h1></header>
  <div>Store中全局的state全局状态name: {{ store.state.name }}</div>
  <div>Store中other模块中的state状态name: {{ store.state.other.name }}</div>
  <div>{{ globalName }}</div>
  <div>{{ otherName }}</div>
  <a-button @click="useMutation">使用vuex中的mutation</a-button>
</template>

<script setup>
import { useStore, mapState } from 'vuex'
const store = useStore()
// const globalName = computed(() => mapState(['name']))
// const otherName = computed(() => mapState('other', ['name']))
const globalName = mapState(['name'])
const otherName = mapState('other', ['name'])
const useMutation = () => {
  store.commit('other/otherAction', '12')
}
</script>

<style lang="less" scoped>
</style>