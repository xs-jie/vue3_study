<template>
  <div>
    <h1>content2</h1>
    <about />
  </div>
</template>

<script setup lang="ts">
import About from '@/views/About.vue'
import { ref, provide } from 'vue'

const son = ref('我是son（about）组件')

/* 使用provide和inject */
provide('provideData', {
  name: son,
  sonFunction: () => {
    son.value += '-'
  }
})
</script>

<style scoped></style>
