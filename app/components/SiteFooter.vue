<script setup lang="ts">
const links = [
  { to: '/', label: 'Home' },
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/profil', label: 'Dr. Beate Kummer' },
  { to: '/kontakt', label: 'Kontakt' }
]

const legal = [
  { to: '/impressum', label: 'Impressum' },
  { to: '/datenschutz', label: 'Datenschutzerklärung' }
]
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer-grid">
      <div>
        <h2>Kontakt</h2>
        <p>
          <strong>Kummer umwelt:kommunikation GmbH</strong>
        </p>
        <p>
          Dr. Beate Kummer<br>
          Gebrüder-Grimm-Str. 17<br>
          53619 Rheinbreitbach
        </p>
        <p class="footer-phones">
          <span>Telefon:</span>
          <a href="tel:+4922249011480">+49 2224 9011480</a>
          <span>Mobil:</span>
          <a href="tel:+491715598660">+49 171 5598660</a>
          <span>E-Mail:</span>
          <a href="mailto:buero@beate-kummer.de">buero@beate-kummer.de</a>
        </p>
      </div>

      <div>
        <h2>Links</h2>
        <ul>
          <li v-for="item in links" :key="item.to">
            <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h2>Rechtliches</h2>
        <ul>
          <li v-for="item in legal" :key="item.to">
            <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <NuxtLink class="site-footer-logo" to="/" aria-label="Zur Startseite">
        <SiteLogo light />
      </NuxtLink>
    </div>
  </footer>
</template>
