<template>
  <v-app>
    <v-content style="background-color: #ffffff;">

      <!-- navigation drawer component -->

      <!-- toolbar header component -->

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
          <v-toolbar-side-icon class="hidden-xl-only hidden-lg-only hidden-md-only"></v-toolbar-side-icon>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn to="/" flat class="link-button-section">
              <div class="link-text">
                Strona główna
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
            <v-btn to="/other-resources" flat class="link-button-section">
              <div class="link-text">
                Inne
              </div>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </div>

      <v-container fluid class="container">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
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
.container
{
  padding: 0;
}
.link-button-section
{
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
  font-weight: 700;
  letter-spacing: 2px;
  color: #000000;
}
</style>
