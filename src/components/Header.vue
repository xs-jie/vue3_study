<template>
  <div class="title">
    <div class="trigger">
      <menu-unfold-outlined
        v-if="propsData.collapsed"
        class="trigger"
        @click="openAndClose"
      />
      <menu-fold-outlined v-else class="trigger" @click="openAndClose" />
    </div>
  </div>
  <!-- tabs -->
  <div class="tab-page">
    <a-tabs v-model="activeKey" type="editable-card" hide-add>
      <a-tab-pane
        v-for="pane in MenuData"
        :key="pane.key"
        :tab="pane.name"
        
      >
        {{ pane.name }}
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { getMenuData, menuData } from '@/business/getMenuData'

const MenuData =  ref<menuData[]>(getMenuData())

const activeKey = ref(MenuData.value[0].key)

const propsData = defineProps({
  collapsed: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['switchOpen'])

const openAndClose = () => {
  emit('switchOpen', 'switch')
}
</script>

<style scoped>
.trigger {
  margin-left: 0;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  border-bottom: 1px solid #eaecef;
}

.tab-page {
  height: 40px;
}
</style>
