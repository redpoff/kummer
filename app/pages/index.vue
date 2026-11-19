<script setup lang="ts">
import { claims, clients, competencies, serviceStrip } from '~/data/site'

useSeoMeta({
  title: 'Dr. Beate Kummer · Umweltberatung & Umweltkommunikation',
  description: 'Umweltanforderungen meistern. Nachhaltigkeit gestalten. Verantwortung kommunizieren. Beratung von Dr. Beate Kummer in Rheinbreitbach.'
})
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">Gutachten, Umweltkommunikation, Fortbildung</p>
          <h1>Dr. Beate Kummer</h1>
          <ul class="claims">
            <li v-for="claim in claims" :key="claim">
              <svg class="claim-arrow" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ claim }}
            </li>
          </ul>
          <div class="hero-actions">
            <NuxtLink class="button" to="/leistungen">Unsere Leistungen</NuxtLink>
            <NuxtLink class="button button-outline" to="/kontakt">Gesprächstermin vereinbaren</NuxtLink>
          </div>
        </div>
        <img
          class="hero-badge"
          src="/images/prevent.jpg"
          alt="Member of PREVENT Waste Alliance"
          width="136"
          height="164"
        >
      </div>
      <section class="service-strip" aria-label="Leistungsfelder">
        <ul>
          <li v-for="item in serviceStrip" :key="item.label">
            <img :src="item.icon" alt="" width="24" height="24">
            {{ item.label }}
          </li>
        </ul>
      </section>
    </section>

    <section class="split">
      <figure class="portrait">
        <img
          src="/images/portrait.jpg"
          alt="Dr. Beate Kummer bei einem Vortrag"
          width="1254"
          height="1132"
        >
        <figcaption>Dr. Beate Kummer – Dipl.-Chemikerin, Fachtoxikologin und Umweltauditorin</figcaption>
      </figure>
      <div>
        <h2>Immer einen Schritt voraus&nbsp;sein&nbsp;…</h2>
        <p>
          Wir beraten Sie kompetent in allen Fragen rund um Themen wie nationales und europäisches Umwelt- und Stoffrecht, Gesetzesfolgenabschätzungen, Entsorgungsmanagement, Kreislaufwirtschaft, Wasser-/Abwasserfragen, Genehmigungsvorbereitung u. v. m.
        </p>
        <div class="text-links">
          <NuxtLink class="text-link text-link-underline" to="/profil">
            Zum Profil von Dr. Beate Kummer
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </NuxtLink>
          <NuxtLink class="text-link text-link-underline" to="/leistungen">
            Unsere Leistungen im Detail
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="competencies">
      <div class="competencies-intro">
        <h2>Unsere Kompetenzen im Einsatz</h2>
        <p>So unterstützen wir Unternehmen praktisch bei komplexen Umwelt- und Nachhaltigkeitsthemen.</p>
      </div>
      <div class="card-grid">
        <article v-for="item in competencies" :key="item.label" class="competence-card">
          <img :src="item.icon" alt="" width="64" height="64">
          <p>{{ item.label }}</p>
        </article>
      </div>
    </section>

    <section class="references" aria-labelledby="references-title">
      <h2 id="references-title">Zufriedene Kunden sind unsere Referenz</h2>
      <ul class="client-logos">
        <li v-for="client in clients" :key="client.src">
          <img :src="client.src" :alt="client.name" width="180" height="100">
        </li>
      </ul>
    </section>
  </div>
</template>
