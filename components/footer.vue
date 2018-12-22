<template>
  <v-layout v-if="displayFooter()" row wrap class="footer-container">
    <v-flex xs12 sm10 offset-sm1 md10 offset-md1 lg10 offset-lg1 class="footer-section">
      <v-layout row wrap>
        <v-flex xs12 sm4 order-sm1 order-xs3 lg8 order-lg1>
          <div class="link">
            &copy 2018 Jakub Gania
          </div>
        </v-flex>
        <v-flex xs6 sm4 order-sm2 order-xs1 lg2 order-lg2 class="text">
          <a href="https://github.com/jakubgania" target="_blank" rel="noreferrer" class="link">
            Github
          </a>
        </v-flex>
        <v-flex xs6 sm4 order-sm3 order-xs2 lg2 order-lg3 class="text">
          <a href="https://www.linkedin.com/in/jakubgania" target="_blank" rel="noreferrer" class="link">
            LinkedIn
          </a>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  methods: {
    displayFooter() {
      return this.$route.name !== 'index';
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/footer/lg.scss';
@import '../assets/scss/footer/xs.scss';
</style>
