<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const missing = computed(() => props.error.statusCode === 404)

const heading = computed(() =>
  missing.value ? 'Seite nicht gefunden' : 'Die Seite ist vorübergehend nicht erreichbar'
)

const message = computed(() =>
  missing.value
    ? 'Die aufgerufene Seite gibt es nicht oder sie wurde verschoben.'
    : 'Bitte versuchen Sie es in einem Moment erneut.'
)

useSeoMeta({
  title: computed(() =>
    missing.value
      ? 'Seite nicht gefunden - Kummer umwelt:kommunikation'
      : 'Fehler - Kummer umwelt:kommunikation'
  ),
  robots: 'noindex, nofollow'
})

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <NuxtLayout>
    <div class="page-banner" aria-hidden="true" />

    <section class="page-intro is-single">
      <div>
        <h1>{{ heading }}</h1>
        <p class="lede">{{ message }}</p>
        <p>
          <a class="text-link text-link-underline" href="/" @click.prevent="goHome">Zur Startseite</a>
        </p>
      </div>
    </section>
  </NuxtLayout>
</template>
