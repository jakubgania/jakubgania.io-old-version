<template>
  <v-layout row wrap class="projects-layout">
    <v-flex xs12 sm6 offset-sm3 md8 offset-md2 lg8 offset-lg2>
      <div
        class="image-section"
        data-aos="zoom-in"
        data-aos-delay="440"
        data-aos-duration="800"
        data-aos-once="true"
      >
        <div class="title-text">
          Projekty
        </div>
      </div>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 md8 offset-md2 lg8 offset-lg2>
      <div
        class="image-section"
        data-aos="zoom-in"
        data-aos-delay="440"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <div class="subtitle">
          Na tej podstronie będą pojawiać się linki do szczegółowych opisów moich projektów.
        </div>
      </div>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 md8 offset-md2 lg8 offset-lg2>
      <div
        class="image-section"
        data-aos="zoom-in"
        data-aos-delay="440"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <div class="subtitle">
          <nuxt-link to="/projects/yourcity" class="link">Yourcity</nuxt-link>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
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
  min-height: calc(100vh - 164px);
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
}
</style>
