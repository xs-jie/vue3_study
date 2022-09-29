<template>
  <ul class="list">
    <li
      @dragenter="dragenter($event, index)"
      @dragover="dragover($event, index)"
      @dragstart="dragstart(index)"
      draggable
      v-for="(item, index) in list"
      :key="item.label"
      class="list-item"
    >
      {{ item.label }}
    </li>
  </ul>
  <!-- fhdwkjehf -->
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const dragIndex = ref('')
const enterIndex = ref('')
let list = reactive([
  {
    label: '列表1'
  },
  {
    label: '列表2'
  },
  {
    label: '列表3'
  }
])


const dragstart = (index) => {
  dragIndex.value = index
}

const dragenter = (e, index) => {
  e.preventDefault()
  if (dragIndex !== index) {
    const source = list[dragIndex]
    list.splice(dragIndex, 1)
    list.splice(index, 0, source)
  }
}

const dragover = (e, index) => {
  e.preventDefault()
}
</script>

<style lang="less" scoped>
.dray {
  width: 200px;
  height: 800px;
  div {
    width: 100%;
  }
  .box-a {
    background-color: #d7d7;
    color: #d7d767;
  }
  .box-b {
    background-color: #d7d7d9;
  }
  .box-c {
    background-color: #d7d767;
  }
}

.list {
  list-style: none;
  .list-item {
    cursor: move;
    width: 300px;
    background: #ea6e59;
    border-radius: 4px;
    color: #fff;
    margin-bottom: 6px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
</style>
