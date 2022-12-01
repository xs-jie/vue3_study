
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
    <!-- master分支最近代码！！！！！ -->
  </ul>
</template>

<script setup lang="ts">
import { ref, reactive, Ref } from 'vue'
const dragIndex: Ref<number> = ref(0)
const enterIndex: Ref<number> = ref(0)
let list = reactive([
  {
    label: '列表1',
  },
  {
    label: '列表2',
  },
  {
    label: '列表3',
  },
])

const dragstart = (index: number) => {
  dragIndex.value = index
}

const dragenter = (e: Event, index: number) => {
  e.preventDefault()
  if (dragIndex.value !== index) {
    const source = list[dragIndex.value]
    list.splice(dragIndex.value, 1)
    list.splice(index, 0, source)
  }
}

const dragover = (e: Event, index: number) => {
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
