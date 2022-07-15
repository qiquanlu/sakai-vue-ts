<script lang="ts" setup>
import whiteLogo from '@/assets/img/logo-white.svg'
import darkLogo from '@/assets/img/logo-dark.svg'
import { computed } from 'vue'
import { useThemeStore } from '@/store/theme'
const store = useThemeStore()
const logo = computed(() => {
  return store.darkTheme ? whiteLogo : darkLogo
})
</script>

<template>
  <Image :src="logo" alt="Logo Image" />
</template>

<style></style>
