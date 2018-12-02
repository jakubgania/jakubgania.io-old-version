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
      <div
        class=""
        v-for="link in links"
        :key="link.id"
      >
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
.projects-layout
{
  // min-height: calc(100vh - 164px);
}
.title-text
{
  font-size: 42px;
  margin-top: 140px;
  text-align: center;
}
.subtitle
{
  font-size: 24px;
  margin-top: 40px;
  text-align: center;
}
.link
{
  text-decoration: none;
  margin-top: 20px;
  font-size: 20px;

  &:hover
  {
    color: #0094ff;
  }
}
</style>
