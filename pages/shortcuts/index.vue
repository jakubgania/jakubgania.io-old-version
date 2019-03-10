<template>
  <v-layout row wrap>
    <v-flex xs12 lg6 offset-lg3>
      <div class="title-text">
        Shortcuts
      </div>
    </v-flex>
    <v-flex xs12 lg6 offset-lg3 class="links-section">
      <div v-for="link in links" :key="link.id" style="margin-bottom:10px;">
        <nuxt-link :to="link.path" class="link">
          {{ link.title }}
        </nuxt-link>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {
            title: 'Windows',
            path: '/shortcuts/windows'
          },
          {
            title: 'PhpStorm',
            path: '/shortcuts/phpstorm'
          }
        ]
      }
    },
    head() {
      return {
        title: 'Jakub Gania - Shortcuts',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Shortcuts'
          },
          {
            name: 'keywords',
            content: 'projects'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.title-text
{
  font-size: 42px;
  margin-top: 140px;
  text-align: center;
}
.links-section
{
  margin-top: 80px;
  margin-bottom: 80px;
}
.link
{
  letter-spacing: 1px;
  font-size: 22px;
  text-decoration: none;

  &:hover
  {
    color: #4200db;
  }
}
</style>
