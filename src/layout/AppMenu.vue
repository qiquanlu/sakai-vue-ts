<template>
  <div class="layout-menu-container">
    <AppSubmenu
      :items="model"
      class="layout-menu"
      :root="true"
      @menuitem-click="onMenuItemClick"
      @keydown="onKeyDown"
    />
    <a href="https://www.primefaces.org/primeblocks-vue" class="block mt-3">
      <BannerImage />
    </a>
  </div>
</template>

<script lang="ts" setup>
import AppSubmenu from '@/layout/AppSubmenu.vue'
import BannerImage from '@/components/BannerImage.vue'
defineProps({ model: Array })
const emit = defineEmits(['menuitem-click'])
const onMenuItemClick = (event: any) => {
  emit('menuitem-click', event)
}
const onKeyDown = (event: any) => {
  const nodeElement = event.target
  if (event.code === 'Enter' || event.code === 'Space') {
    nodeElement.click()
    event.preventDefault()
  }
}
</script>
