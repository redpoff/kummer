<script setup lang="ts">
import { navItems } from '~/data/site'

const route = useRoute()
const open = ref(false)

watch(() => route.path, () => {
  open.value = false
})

function isCurrent(path: string) {
  return route.path === path
}
</script>

<template>
  <header class="site-header">
    <div class="site-header-bar">
      <div class="site-header-tools">
        <NuxtLink class="site-header-logo" to="/" aria-label="Zur Startseite">
          <SiteLogo />
        </NuxtLink>

        <button
          class="nav-toggle"
          type="button"
          :aria-expanded="open"
          aria-controls="site-nav"
          @click="open = !open"
        >
          <span class="nav-toggle-label">Menü</span>
          <span class="nav-toggle-bars" aria-hidden="true" />
        </button>
      </div>

      <nav id="site-nav" class="site-nav" :class="{ 'is-open': open }" aria-label="Hauptnavigation">
        <div class="site-nav-list">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            :aria-current="isCurrent(item.to) ? 'page' : undefined"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>
