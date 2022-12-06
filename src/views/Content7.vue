<template>
  <h1>Vue3中操作dom的四种方式</h1>
  <h2>通过ref直接拿到dom引用</h2>
  <div class="demo-container">
    <div ref="sectionRef" class="ref">dom1</div>
    <a-button @click="changeHigh">变高</a-button>
  </div>
  <h2>通过父容器的ref遍历拿到dom引用</h2>
  <div ref="fatherRef">
    <div
      v-for="(item, index) in 5"
      :key="item"
      class="_ref2"
      @click="changeItem(index)"
    >
      {{ item }}点击变化
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
/* 通过ref直接拿到dom引用 */
const sectionRef = ref()
let height = 100
const changeHigh = () => {
  console.log(sectionRef.value, 'dom1')
  height += 50
  sectionRef.value.style = `height: ${height}px`
}
/* ----------------------------------------------- */
/* 通过父容器的ref遍历拿到dom引用 */
const fatherRef = ref()
const changeItem = (index: number) => {
  let _height2 = fatherRef.value.children[index].style.height
    ? fatherRef.value.children[index].style.height
    : '30px'
  _height2 = Number(_height2.replace('px', ''))
  fatherRef.value.children[index].style.height = `${_height2 + 20}px`
}
/* ----------------------------------------------- */
/*  */
</script>

<style lang="less" scoped>
.ref {
  width: 200px;
  height: 100px;
  background: pink;
  transition: all 0.5s ease-in-out;
}
._ref2 {
  width: 200px;
  height: 30px;
  background: lawngreen;
  transition: all 0.5s ease-in-out;
}
</style>