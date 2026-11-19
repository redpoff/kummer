<script setup lang="ts">
import { offerings } from '~/data/site'
import type { Offering } from '~/data/site'

useSeoMeta({
  title: 'Unsere Leistungen',
  description: 'Leistungen von Kummer umwelt:kommunikation: Umweltkommunikation, Beauftragtenwesen, Gesetzesfolgenabschätzung, Berichte, Schulungen und Gutachten.'
})

const dialog = ref<HTMLDialogElement | null>(null)
const title = ref<HTMLHeadingElement | null>(null)
const active = ref<Offering | null>(null)

async function openOffering(item: Offering) {
  active.value = item
  await nextTick()
  const element = dialog.value
  if (!element) return
  if (!element.open) element.showModal()
  title.value?.focus()
}

function onTitleKeydown(event: KeyboardEvent) {
  if (event.key !== 'Tab') return
  event.preventDefault()
  dialog.value?.querySelector<HTMLButtonElement>('.service-dialog-close')?.focus()
}

function closeOffering() {
  dialog.value?.close()
}
</script>

<template>
  <div>
    <div class="page-banner" aria-hidden="true" />

    <section class="page-intro">
      <div>
        <h1>Unsere Leistungen</h1>

        <p>
          Wir beraten und unterstützen Sie  bei unternehmensspezifischer Umweltkommunikation sowie lobbyistischer Tätigkeiten, Umsetzung von Umwelt- und Chemikalienrecht, Weiterbildung von Führungskräften in Umweltfragen sowie Erarbeitung journalistischer Fachbeiträge. </p>
        <p>
          Wir stellen externe Umweltbeauftragte und können Sie auf Umwelt-Audits und zur Entsorgungsfachbetriebezertifizierung vorbereiten, zudem stehen wir bei Fragen der immissionsschutzrechtlichen Genehmigung zur Verfügung.
        </p>
        <div class="text-links">
          <NuxtLink class="text-link text-link-underline" to="/profil">
            Zum Profil von Dr. Beate Kummer
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </NuxtLink>
        </div>
      </div>
      <img
        class="contact-photo"
        src="/images/160502EU-Aluminium-Kummer-web-NP-2.jpg"
        alt="Dr. Beate Kummer am Rednerpult"
        width="681"
        height="1024"
      >
    </section>

    <section class="tile-grid" aria-label="Leistungen im Detail">
      <button
        v-for="item in offerings"
        :key="item.title"
        class="tile"
        type="button"
        @click="openOffering(item)"
      >
        <img :src="item.icon" alt="" width="65" height="65">
        {{ item.title }}
      </button>
    </section>

    <dialog ref="dialog" class="service-dialog" aria-labelledby="service-dialog-title" @close="active = null">
      <div v-if="active" class="service-dialog-body">
        <h2 id="service-dialog-title" ref="title" tabindex="-1" @keydown="onTitleKeydown">{{ active.title }}</h2>
        <button class="service-dialog-close" type="button" aria-label="Schließen" @click="closeOffering">
          ×
        </button>
        <p v-if="active.body">{{ active.body }}</p>
        <blockquote v-if="active.quote">
          <p>
            <span class="quote-mark" aria-hidden="true">“</span>
            <span class="quote-text">{{ active.quote }}</span>
          </p>
          <footer v-if="active.quoteBy">({{ active.quoteBy }})</footer>
        </blockquote>
      </div>
    </dialog>
  </div>
</template>
