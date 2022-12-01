<template>
  <div>children-slot</div>
  <slot
    v-for="item in data"
    :name="item.name"
    :msg="item.msg"
    :text="item.name"
    :record="item"
  ></slot>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core'

defineProps(['data'])
</script>

<style lang="less" scoped>
</style>