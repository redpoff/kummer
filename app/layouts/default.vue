<template>
  <div class="site">
    <a class="skip-link" href="#inhalt">Zum Inhalt springen</a>
    <SiteHeader />
    <main id="inhalt" tabindex="-1">
      <slot />
    </main>
    <SiteCta />
    <SiteFooter />
  </div>
</template>
