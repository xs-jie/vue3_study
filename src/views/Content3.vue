<template>
  <div>
    <h1>Content3</h1>
    <h2>遮罩层</h2>
    <div class="box" v-if="isShow">
      <div class="box-1">
        <button @click="showModal">modal</button>
        <button @click="show">sss</button>
      </div>
      <a-modal
        :visible="isShowModal"
        @cancel="isShowModal = false"
        :footer="null"
      >
        <img src="~@/assets/icon/more.png" alt="" />
      </a-modal>
      <img src="~@/assets/icon/more.png" alt="" />
    </div>
    <div class="box" v-else>dhjf</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isShow = ref(true)
const isShowModal = ref(false)

const show = () => {
  console.log('aaa')
  isShow.value = false
}

const showModal = () => {
  isShowModal.value = true
}
</script>

<style scoped>
.box {
  position: relative;
  width: 100px;
  height: 100px;
}

img {
  width: 100%;
}
.box-1 {
  position: absolute;
  /* background-color: #000; */
  background: rgb(0, 0, 0, 0.3);
  z-index: 9;
  display: none;
  width: 100px;
  height: 100px;
}

.box:hover .box-1 {
  display: block;
}
</style>
