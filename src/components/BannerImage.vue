<script lang="ts" setup>
import whiteBanner from '@/assets/img/banner-primeblocks-white.png'
import darkBanner from '@/assets/img/banner-primeblocks-dark.png'
import { computed } from 'vue'
import { useThemeStore } from '@/store/theme'
const store = useThemeStore()
const banner = computed(() => {
  return store.darkTheme ? whiteBanner : darkBanner
})
</script>

<template>
  <img :src="banner" alt="Banner Image" class="w-full" />
</template>

<style></style>
