<template>
  <v-app>
    <v-content style="background-color: #ffffff;">

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
          <!-- <v-toolbar-side-icon class=""></v-toolbar-side-icon> -->
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn to="/" flat>
              <div class="link-button">
                Strona główna
              </div>
            </v-btn>
            <v-btn to="/about" flat>
              <div class="link-button">
                O mnie
              </div>
            </v-btn>
            <v-btn to="/projects" flat>
              <div class="link-button">
                Projekty
              </div>
            </v-btn>
            <v-btn to="/other-resources" flat>
              <div class="link-button">
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

<style>
.container
{
  padding: 0;
}
.link-button
{
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}
</style>
