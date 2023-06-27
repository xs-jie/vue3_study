<!--
 * @Author: xushaojie 13592841305@163.com
 * @Date: 2022-12-01 15:24:56
 * @LastEditors: xushaojie 13592841305@163.com
 * @LastEditTime: 2023-06-27 14:06:23
 * @FilePath: \vue3_study\src\views\components\slotComponent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>children-slot</div>
  <div v-for="item in data" :key="item.name">
    <!-- 判断有没有传入对应的具名插槽，有则使用传入的插槽，没有则使用默认的dom -->
    <div v-if="$slots[item.name]">
      <slot
        :name="item.name"
        :msg="item.msg"
        :text="item.name"
        :record="item"
      ></slot>
    </div>
    <div v-else>
      没有使用插槽替换默认的dom
      {{ item.name }}----{{ item.msg }}++++ooooo
    </div>
  </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core'

defineProps(['data'])

onMounted(() => {
  // console.log(slots)
})
</script>

<style lang="less" scoped></style>
