<template>
  <a-modal
    :visible="visible"
    title="vue3中使用vue2中(.sync)的方法"
    @ok="handleOk"
    @cancel="handleCancel"
  ></a-modal>
</template>

<script setup>
const pros = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})

/* 使用（'update: 父组件传入变量'）当作自定义事件名称 */
const emits = defineEmits(['update:visible'])

const handleCancel = () => {
  emits('update:visible', false)
}
const handleOk = () => {
  console.log('ok')
}
</script>

<style lang="less" scoped>
</style>