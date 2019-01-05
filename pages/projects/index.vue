<template>
  <v-layout row wrap class="projects-layout">
    <v-flex xs12 sm6 offset-sm3 md8 offset-md2 lg8 offset-lg2>
      <div class="title-text">
        Projekty
      </div>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 md8 offset-md2 lg8 offset-lg2>
      <div class="subtitle">
        Na tej podstronie będą pojawiać się linki do szczegółowych opisów moich projektów.
      </div>
    </v-flex>
    <v-flex
      xs12
      sm6
      offset-sm3
      md8
      offset-md2
      lg6
      offset-lg3
      style="text-align: left;margin-top:80px;margin-bottom:80px;"
    >
      <div v-for="link in links" :key="link.id">
        <nuxt-link :to="link.project_link" class="link">
          {{ link.project_name }}
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
          'project_link': '/projects/yourcity',
          'project_name': 'Platforma Yourcity'
        },
        {
          'project_link': '',
          'project_name': 'Portal społecznościowy'
        },
        {
          'project_link': '',
          'project_name': 'Portal do wynajmu mieszkań/pokoi'
        },
        {
          'project_link': '',
          'project_name': 'Strona firmowa z informacjami o prowadzonej działalności'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Jakub Gania - Projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Moje projekty.'
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
  @import '../assets/scss/projects/projects.scss';
</style>
