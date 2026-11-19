<script setup lang="ts">
import { expertise } from '~/data/site'

useSeoMeta({
  title: 'Dr. Beate Kummer',
  description: 'Profil von Dr. Beate Kummer, Dipl.-Chemikerin, Fachtoxikologin und Umweltauditorin.'
})
</script>

<template>
  <div>
    <div class="page-banner" aria-hidden="true" />

    <section class="page-intro profile-intro">
      <h1>Dr. Beate Kummer</h1>
      <img
        class="contact-photo profile-photo"
        src="/images/beatekummer.jpg"
        alt="Porträt von Dr. Beate Kummer"
        width="800"
        height="1108"
      >
      <div class="profile-copy">
        <p class="lede">Dipl.-Chemikerin / Fachtoxikologin und Umweltauditorin</p>
        <p>
          Nach dem Studium der Chemie und Toxikologie in Freiburg und Leipzig sowie ihrer Promotion in Biochemie war sie in der Forschung an der University of California, Los Angeles (UCLA), tätig.
        </p>
        <p>
          Ihre berufliche Laufbahn führte sie anschließend in leitende Positionen der Umweltwirtschaft und Umweltberatung – unter anderem als Geschäftsführerin des Bundesverbands Sekundärrohstoffe und Entsorgung (bvse) sowie als Niederlassungsleiterin und Prokuristin der Haase &amp; Naundorf Umweltconsulting GmbH.
        </p>
        <p>
          Als geschäftsführende Gesellschafterin der Kummer:Umweltkommunikation und und nun auch als Senior Adviser bei Christ &Company sowie Rud Pedersen, Berlin, verbindet sie wissenschaftliche Expertise mit strategischer Umweltberatung und Kommunikation. Darüber hinaus engagiert sie sich als Lehrbeauftragte an Universitäten und Hochschulen sowie als Aufsichtsrätin eines Stadtwerks.
        </p>
      </div>
    </section>

    <section class="expertise">
      <h2>Fachkompetenzen</h2>
      <article v-for="item in expertise" :key="item.title">
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </article>
    </section>
  </div>
</template>
