<template>
  <div id="menu">
    <a-menu
      theme="dark"
      mode="inline"
      @select="toSelect"
      default-selectedKeys="['1']"
      default-openKeys="['1']"
    >
      <!-- 遍历菜单数据 -->
      <div v-for="item in menuData" :key="item.key">
        <!-- 判断菜单是否有子菜单 ，只考虑二级菜单的情况-->
        <div v-if="item.children">
          <a-sub-menu :key="item.key" :title="item.name">
            <a-menu-item
              v-for="itemChildren in item.children"
              :key="itemChildren.key"
              >{{ itemChildren.name }}</a-menu-item
            >
          </a-sub-menu>
        </div>
        <div v-else>
          <a-menu-item :key="item.key">{{ item.name }}</a-menu-item>
        </div>
      </div>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onBeforeMount, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getMenuData } from '@/business/getMenuData'

/* 获取菜单数据 */

let menuData = getMenuData()
let selectedKeys1 = reactive(['1'])
let number = ref(1)
const router = useRouter()
const route = useRoute()

/* 点击菜单跳转 */
const toSelect = ({
  item,
  key,
  selectedKeys,
}: {
  item: any
  key: string
  selectedKeys: string[]
}) => {
  // console.log(item)
  // console.log(key)
  // console.log(selectedKeys)
  // selectedKeys1 += 1
  number.value += 1
  router.push({
    path: `content${key}`,
  })
}

/* 监听路由变化 */
/* watch(WatcherSource, Callback, [WatchOptions]) */
/* WatcherSource：监听数据 */ /* Callback:监听回调 */ /* [WatchOptions]：配置项，例如打开深度监听或首次页面加载就执行一遍 */
watch(
  () => route,
  (newVal, oldVal) => {
    // console.log(newVal, oldVal)
    console.log(newVal.path, '当前路由')
  },
  {
    deep: true,
    immediate: true,
  }
)
</script>

<style scoped>
#menu {
  background-color: #fff;
}
</style>
