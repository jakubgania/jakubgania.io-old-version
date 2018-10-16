<template>
  <div v-if="displayToolbar()" class="">
    <v-toolbar color="white" style="box-shadow: 0px 1px #f2f2f2 !important;">
      <v-toolbar-title>
        <div class="" style="color:#000000;font-size:24px;">
          <nuxt-link to="/" style="text-decoration:none;">
            Jakub Gania
          </nuxt-link>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.native="$emit('switchNavigationDrawer')" class="hidden-xl-only hidden-lg-only hidden-md-only"/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat class="link-button-section">
          <div class="link-text">
            Home
          </div>
        </v-btn>
        <v-btn to="/about" flat class="link-button-section">
          <div class="link-text">
            O mnie
          </div>
        </v-btn>
        <v-btn to="/projects" flat class="link-button-section">
          <div class="link-text">
            Projekty
          </div>
        </v-btn>
        <v-btn to="/contact" flat class="link-button-section">
          <div class="link-text">
            Kontakt
          </div>
        </v-btn>
        <v-btn to="/other-resources" flat class="link-button-section">
          <div class="link-text">
            Inne
          </div>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    displayToolbar() {
      return this.$route.name !== 'index';
    },
  },
}
</script>

<style lang="scss">
.link-button-section
{
  border-radius: 0px;

  &:hover
  {
    background-color: #000000;

    .link-text
    {
      color: #ffffff;
    }
  }
}
.link-text
{
  font-size: 12px;
  // font-weight: 700;
  letter-spacing: 2px;
  color: #000000;
}
</style>
