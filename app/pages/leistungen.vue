<script setup lang="ts">
import { offerings } from '~/data/site'

useSeoMeta({
  title: 'Unsere Leistungen',
  description: 'Leistungen von Kummer umwelt:kommunikation: Umweltkommunikation, Beauftragtenwesen, Gesetzesfolgenabschätzung, Berichte, Schulungen und Gutachten.'
})

const dialogs: HTMLDialogElement[] = []

function setDialog(element: Element | null, index: number) {
  if (element instanceof HTMLDialogElement) dialogs[index] = element
}

function openOffering(index: number) {
  const element = dialogs[index]
  if (!element || element.open) return
  element.showModal()
}

function closeOffering(index: number) {
  dialogs[index]?.close()
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
        v-for="(item, index) in offerings"
        :key="item.title"
        class="tile"
        type="button"
        @click="openOffering(index)"
      >
        <img :src="item.icon" alt="" width="65" height="65">
        {{ item.title }}
      </button>
    </section>

    <dialog
      v-for="(item, index) in offerings"
      :key="item.title"
      :ref="(element) => setDialog(element as Element | null, index)"
      class="service-dialog"
      :aria-labelledby="`service-dialog-title-${index}`"
    >
      <div class="service-dialog-body">
        <h2 :id="`service-dialog-title-${index}`">{{ item.title }}</h2>
        <button class="service-dialog-close" type="button" aria-label="Schließen" @click="closeOffering(index)">
          ×
        </button>
        <p v-if="item.body">{{ item.body }}</p>
        <blockquote v-if="item.quote">
          <p>
            <span class="quote-mark" aria-hidden="true">“</span>
            <span class="quote-text">{{ item.quote }}</span>
          </p>
          <footer v-if="item.quoteBy">({{ item.quoteBy }})</footer>
        </blockquote>
      </div>
    </dialog>
  </div>
</template>
