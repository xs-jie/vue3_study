<template>
  <div>
    <h1>content1</h1>
    <h1>按钮的聚焦</h1>
    <div class="more-box">
      <button @focus="isShow = true" @blur="isShow = false" class="more">
        <img src="~@/assets/icon/more.png" alt="" />
      </button>
      <div v-if="isShow" class="more-select">
        <div>设备信息</div>
        <div>编辑设备</div>
        <div>删除设备</div>
      </div>
    </div>
  </div>
  <!-- 微信登录组件 -->
  <wechat-oauth></wechat-oauth>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WechatOauth from '@/components/WechatOauth.vue'
let isShow = ref(false)
</script>

<style lang="less" scoped>
.more-box {
  position: relative;
}

.more {
  width: 40px;
  height: 40px;
  background-color: #3c404a;
  border: 1px solid #3c404a;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  img {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
  }
}

.more :hover {
  background-color: #3c404a;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.more-select {
  width: 200px;
  // height: 300px;
  background-color: #f0f2f5;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(20px);
  div {
    // border-bottom: 2px solid #fff;
    cursor: pointer;
    margin: 5px 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    &:hover {
      background-color: #fff;
    }
  }
}
</style>
