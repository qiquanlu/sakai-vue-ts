<script lang="ts" setup>
import LogoImage from '@/components/LogoImage.vue'
const emit = defineEmits(['menu-toggle', 'topbar-menu-toggle'])
const onMenuToggle = (event: any) => {
  emit('menu-toggle', event)
}
</script>
<template>
  <div class="layout-topbar">
    <router-link to="/" class="layout-topbar-logo">
      <LogoImage />
      <span>SAKAI</span>
    </router-link>
    <Button
      class="p-link layout-menu-button layout-topbar-button"
      @click.prevent="onMenuToggle"
    >
      <i class="pi pi-bars"></i>
    </Button>

    <Button
      class="p-link layout-topbar-menu-button layout-topbar-button"
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        enterActiveClass: 'scalein',
        leaveToClass: 'hidden',
        leaveActiveClass: 'fadeout',
        hideOnOutsideClick: true
      }"
    >
      <i class="pi pi-ellipsis-v"></i>
    </Button>
    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <Button class="p-link layout-topbar-button">
          <i class="pi pi-calendar"></i>
          <span>Events</span>
        </Button>
      </li>
      <li>
        <Button class="p-link layout-topbar-button">
          <i class="pi pi-cog"></i>
          <span>Settings</span>
        </Button>
      </li>
      <li>
        <Button class="p-link layout-topbar-button">
          <i class="pi pi-user"></i>
          <span>Profile</span>
        </Button>
      </li>
    </ul>
  </div>
</template>
