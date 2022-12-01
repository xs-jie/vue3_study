<template>
  <div>我是子组件(子组件value)</div>
  <div @click="emit('update:modelValue', modelValue + '!')">
    {{ modelValue }}
  </div>
  <div>{{ msg }}</div>
</template>

<script setup>
defineProps(['modelValue', 'msg'])
const emit = defineEmits(['update:modelValue'])
</script>

<style lang="less" scoped>
</style>