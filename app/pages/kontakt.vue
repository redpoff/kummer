<script setup lang="ts">
import { team } from '~/data/site'

useSeoMeta({
  title: 'Kontakt',
  description: 'Kummer umwelt:kommunikation GmbH, Gebrüder-Grimm-Str. 17, 53619 Rheinbreitbach. Telefon +49 2224 9011480.'
})
</script>

<template>
  <div>
    <div class="page-banner" aria-hidden="true" />

    <section class="page-intro">
      <img
        class="contact-photo"
        src="/images/kontakt.jpg"
        alt="Bürohaus der Kummer umwelt:kommunikation in Rheinbreitbach"
        width="626"
        height="675"
      >
      <div>
        <h1>Kommen wir ins Gespräch!</h1>
        <p>
          Sie erreichen uns werktags von 8:00–18:00 Uhr in unseren Büroräumen in Rheinbreitbach           telefonisch unter
          <a class="text-link text-link-underline" href="tel:+4922249011480">+49 2224 9011480</a>
          oder per E-Mail an
          <a class="text-link text-link-underline" href="mailto:buero@beate-kummer.de">buero@beate-kummer.de</a>.
        </p>
        <p>
          Sollte unser Büro einmal nicht besetzt sein, können Sie uns zusätzlich           mobil unter
          <a class="text-link text-link-underline" href="tel:+491715598660">+49 171 5598660</a>
          erreichen.
        </p>
        <p>
          <strong>Büroadresse</strong><br>
          Kummer umwelt:kommunikation<br>
          Dr. Beate Kummer<br>
          Gebrüder-Grimm-Str. 17<br>
          53619 Rheinbreitbach
        </p>
      </div>
    </section>

    <section class="expertise">
      <h2>Unser Büroteam</h2>
    </section>
    <div class="team-grid">
      <article v-for="person in team" :key="person.email + person.name" class="team-card">
        <img
          class="team-photo"
          :src="person.image"
          :alt="`Porträt von ${person.name}`"
          width="453"
          height="453"
        >
        <h3>{{ person.name }}</h3>
        <p class="team-role">{{ person.role }}</p>
        <p class="team-email">
          <a class="text-link text-link-underline" :href="`mailto:${person.email}`">{{ person.email }}</a>
        </p>
      </article>
    </div>
  </div>
</template>
