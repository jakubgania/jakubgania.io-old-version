<template>
  <v-layout v-if="displayFooter()" row wrap class="footer-container">
    <v-flex lg12>
      <v-layout row wrap>
        <v-flex lg2 offset-lg4 style="text-align:center;">
          <a href="https://github.com/jakubgania" target="_blank" class="link">
            Github
          </a>
        </v-flex>
        <v-flex lg2 style="text-align:center;">
          <a href="https://www.linkedin.com/in/jakubgania" target="_blank" class="link">
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
.footer-container
{
  background-color: #fafafa;
}
.link
{
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 16px;
  height: 100px;
  line-height: 100px;
}
</style>
