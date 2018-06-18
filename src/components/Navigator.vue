<template>
<div class="navbar primary-background-color">
  <md-tabs md-sync-route class="md-accent" md-alignment="right">
    <md-tab id="tab-home" md-label="Hem" to="/"></md-tab>
    <md-tab id="tab-searching" md-label="Vad vi söker" to="/vi-soker"></md-tab>
    <md-tab id="tab-about" md-label="Lär känna oss" to="/om-oss"></md-tab>
    <md-tab id="tab-contact" md-label="Kontakt" to="/kontakta-oss"></md-tab>
  </md-tabs>
</div>
</template>

<script>
export default {
}
</script>

<style>
.md-tabs-navigation {
  background-color: #82D4BB!important;
}
@media only screen and (max-width: 375px) {
  .md-button {
    font-size: 0.75em!important;
  }
}
</style>
