<template>
  <div class="layout-wrapper" :class="containerClass" @click="onWrapperClick">
    <AppTopbar @menu-toggle="onMenuToggle" />
    <div class="layout-sidebar" @click="onSidebarClick">
      <AppMenu :model="menu" @menuitem-click="onMenuItemClick" />
    </div>

    <div class="layout-main-container">
      <div class="layout-main">
        <router-view />
      </div>
      <AppFooter />
    </div>
    <AppConfig :layoutMode="store.layoutMode" @layout-change="onLayoutChange" />
    <transition name="layout-mask">
      <div
        class="layout-mask p-component-overlay"
        v-if="store.mobileMenuActive"
      ></div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import whiteLogo from '@/assets/img/logo-white.svg'
import darkLogo from '@/assets/img/logo-dark.svg'
import AppTopbar from '@/layout/AppTopbar.vue'
import { computed, getCurrentInstance } from 'vue'
import AppMenu from '@/layout/AppMenu.vue'
import AppConfig from '@/layout/AppConfig.vue'
import AppFooter from '@/layout/AppFooter.vue'
import { useThemeStore } from '@/store/theme'
const app = getCurrentInstance()

const store = useThemeStore()
store.menuClick = true

const menu = [
  {
    label: 'Home',
    items: [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        to: '/'
      }
    ]
  },
  {
    label: 'UI Components',
    icon: 'pi pi-fw pi-sitemap',
    items: [
      { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout' },
      { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input' },
      { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', to: '/floatlabel' },
      {
        label: 'Invalid State',
        icon: 'pi pi-fw pi-exclamation-circle',
        to: '/invalidstate'
      },
      { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button' },
      { label: 'Table', icon: 'pi pi-fw pi-table', to: '/table' },
      { label: 'List', icon: 'pi pi-fw pi-list', to: '/list' },
      { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree' },
      { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel' },
      { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay' },
      { label: 'Media', icon: 'pi pi-fw pi-image', to: '/media' },
      { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu' },
      { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages' },
      { label: 'File', icon: 'pi pi-fw pi-file', to: '/file' },
      { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart' },
      { label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc' }
    ]
  },
  {
    label: 'PrimeBlocks',
    items: [
      {
        label: 'Free Blocks',
        icon: 'pi pi-fw pi-eye',
        to: '/blocks',
        badge: 'NEW'
      },
      {
        label: 'All Blocks',
        icon: 'pi pi-fw pi-globe',
        url: 'https://www.primefaces.org/primeblocks-vue',
        target: '_blank'
      }
    ]
  },
  {
    label: 'Utilities',
    items: [
      { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', to: '/icons' },
      {
        label: 'PrimeFlex',
        icon: 'pi pi-fw pi-desktop',
        url: 'https://www.primefaces.org/primeflex/',
        target: '_blank'
      }
    ]
  },
  {
    label: 'Pages',
    icon: 'pi pi-fw pi-clone',
    items: [
      { label: 'Crud', icon: 'pi pi-fw pi-user-edit', to: '/crud' },
      { label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/timeline' },
      { label: 'Landing', icon: 'pi pi-fw pi-globe', to: '/landing' },
      { label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login' },
      { label: 'Error', icon: 'pi pi-fw pi-times-circle', to: '/error' },
      {
        label: 'Not Found',
        icon: 'pi pi-fw pi-exclamation-circle',
        to: '/notfound'
      },
      { label: 'Access Denied', icon: 'pi pi-fw pi-lock', to: '/access' },
      { label: 'Empty', icon: 'pi pi-fw pi-circle-off', to: '/empty' }
    ]
  },
  {
    label: 'Menu Hierarchy',
    icon: 'pi pi-fw pi-search',
    items: [
      {
        label: 'Submenu 1',
        icon: 'pi pi-fw pi-bookmark',
        items: [
          {
            label: 'Submenu 1.1',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
              { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
              { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
            ]
          },
          {
            label: 'Submenu 1.2',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
              { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark' }
            ]
          }
        ]
      },
      {
        label: 'Submenu 2',
        icon: 'pi pi-fw pi-bookmark',
        items: [
          {
            label: 'Submenu 2.1',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
              { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
              { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark' }
            ]
          },
          {
            label: 'Submenu 2.2',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
              { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark' }
            ]
          }
        ]
      }
    ]
  },
  {
    label: 'Get Started',
    items: [
      {
        label: 'Documentation',
        icon: 'pi pi-fw pi-question',
        command: () => {}
      },
      {
        label: 'View Source',
        icon: 'pi pi-fw pi-search',
        command: () => {}
      }
    ]
  }
]
const containerClass = computed(() => {
  return {
    'layout-overlay': store.layoutMode === 'overlay',
    'layout-static': store.layoutMode === 'static',
    'layout-static-sidebar-inactive':
      store.staticMenuInactive && store.layoutMode === 'static',
    'layout-overlay-sidebar-active':
      store.overlayMenuActive && store.layoutMode === 'overlay',
    'layout-mobile-sidebar-active': store.mobileMenuActive,
    'p-input-filled':
      app?.appContext.config.globalProperties.$primevue.config.inputStyle ===
      'filled',
    'p-ripple-disabled':
      app?.appContext.config.globalProperties.$primevue.config.ripple === false
  }
})
defineEmits(['change-theme'])
const onMenuToggle = () => {
  console.log('toggle', store.menuClick)

  store.menuClick = true

  if (isDesktop()) {
    if (store.layoutMode === 'overlay') {
      if (store.mobileMenuActive === true) {
        store.overlayMenuActive = true
      }

      store.overlayMenuActive = !store.overlayMenuActive
      store.mobileMenuActive = false
    } else if (store.layoutMode === 'static') {
      store.staticMenuInactive = !store.staticMenuInactive
    }
  } else {
    store.mobileMenuActive = !store.mobileMenuActive
  }

  // preventDefault()
}
const onWrapperClick = () => {
  if (!store.menuClick) {
    store.overlayMenuActive = false
    store.mobileMenuActive = false
  }

  store.menuClick = false
}
const isDesktop = () => {
  return window.innerWidth >= 992
}
const onSidebarClick = () => {
  store.menuClick = true
}
const logo = computed(() => {
  return store.darkTheme ? whiteLogo : darkLogo
})
const onMenuItemClick = (event: any) => {
  if (event.item && !event.item.items) {
    store.overlayMenuActive = false
    store.mobileMenuActive = false
  }
}
const onLayoutChange = (layoutMode: string) => {
  store.layoutMode = layoutMode
}
</script>

<style lang="scss">
.p-toast.p-toast-top-right {
  z-index: 1000;
  top: 7rem;
}
</style>
