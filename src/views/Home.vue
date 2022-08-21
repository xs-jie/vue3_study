<template>
  <div class="home">
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo" v-if="!collapsed">Vue3学习</div>
        <div class="logo" v-else>Vue3</div>
        <!-- 侧边菜单栏 -->
        <Menu></Menu>
      </a-layout-sider>
      <a-layout>
        <!-- 头部 -->
        <a-layout-header style="background: #fff; padding: 0; height: 90px;" >
          <Header :collapsed="collapsed" @switchOpen="switchOpen"></Header>
        </a-layout-header>
        <!-- 内容 -->
        <a-layout-content
          :style="{
            margin: '15px',
            padding: '15px',
            background: '#fff',
            minHeight: '280px'
          }"
        >
          <router-view></router-view>
          <!-- <router-view name="about"></router-view> -->
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Menu from '@/components/Menu.vue'
import Header from '@/components/Header.vue'

export default defineComponent({
  components: {
    Menu,
    Header
  },
  setup() {
    const collapsed = ref<boolean>(false)

    const switchOpen = () => {
      console.log('aaaa')

      collapsed.value = !collapsed.value
    }

    return {
      switchOpen,
      collapsed
    }
  }
})
</script>
<style scoped lang="less">
.home {
  height: 100%;
  .ant-layout {
    height: 100%;
  }
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
  color: #ffffff;
  line-height: 32px;
  font-size: 18px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
