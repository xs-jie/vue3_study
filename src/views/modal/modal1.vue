<template>
  <a-modal
    :visible="visible"
    title="vue3中使用vue2中(.sync)的方法"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <div>
      {{ computedName('再见') }}
    </div></a-modal
  >
</template>

<script setup>
import { computed, ref } from 'vue'
const pros = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})

const name = ref('Vue')
/* ----------------------------------------------------------- */
/* vue3计算属性传参 */
const computedName = computed(() => (value) => {
  return name.value + value
})

/* 使用（'update: 父组件传入变量'）当作自定义事件名称 */
const emits = defineEmits(['update:visible'])

const handleCancel = () => {
  emits('update:visible', false)
}

const handleOk = () => {
  console.log('ok')
  emits('update:visible', false)
}
</script>

<style lang="less" scoped>
</style>