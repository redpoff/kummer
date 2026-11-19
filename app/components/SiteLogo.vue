<script setup lang="ts">
withDefaults(defineProps<{
  light?: boolean
}>(), {
  light: false
})
</script>

<template>
  <img
    class="site-logo"
    :src="light ? '/logo_kummer_2-light.svg' : '/logo_kummer_2.svg'"
    alt="kummer umwelt:kommunikation"
    width="842"
    height="212"
  >
</template>
