<template>
  <v-layout v-if="displayFooter()" row wrap class="footer-container">
    <v-flex xs12 sm10 offset-sm1 md10 offset-md1 lg10 offset-lg1 class="footer-section">
      <v-layout row wrap>
        <v-flex xs12 order-xs1 sm6 order-sm1 lg6 order-lg1 class="flex-section">
          <a :href="links.github" target="_blank" rel="noreferrer" class="link">
            Github
          </a>
          <a :href="links.linkedin" target="_blank" rel="noreferrer" class="link" style="padding-left:10px;">
            LinkedIn
          </a>
        </v-flex>
        <v-flex xs12 order-xs2 sm6 order-sm2 lg6 order-lg2 class="text">
          <div class="link" v-html="copyrightText"/>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      links: {
        github: 'https://github.com/jakubgania',
        linkedin: 'https://www.linkedin.com/in/jakubgania'
      },
      copyrightText: 'Jakub Gania &copy 2018 - 2019'
    }
  },
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
