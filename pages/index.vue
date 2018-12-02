<template>
  <div class="flex-center position-ref full-height" style="background-color:#000000;">
    <div class="content">
      <div class="main-title" data-aos="zoom-in" data-aos-delay="440" data-aos-duration="1000" data-aos-once="true">
        Web Developer
      </div>

      <div class="my-name" data-aos="zoom-in" data-aos-delay="440" data-aos-duration="1200" data-aos-once="true">
        Jakub Gania
      </div>

      <div data-aos="zoom-in" data-aos-delay="440" data-aos-duration="1400" data-aos-once="true">
        <v-layout row wrap class="links">
          <v-flex xs6 lg2 style="padding-bottom:20px;">
            <nuxt-link to="/about" class="link about">O mnie</nuxt-link>
          </v-flex>
          <v-flex xs6 lg2 style="padding-bottom:20px;">
            <a href="/projects" class="link projects">Projekty</a>
          </v-flex>
          <v-flex xs6 lg2 style="padding-bottom:20px;">
            <a href="/contact" class="link projects">Kontakt</a>
          </v-flex>
          <v-flex xs6 lg2 style="padding-bottom:20px;">
            <a href="/other-resources" class="link other-resources">Inne</a>
          </v-flex>
          <v-flex xs6 lg2 style="padding-bottom:20px;">
            <a href="https://github.com/jakubgania" target="_blank" class="link github">GitHub</a>
          </v-flex>
          <v-flex xs6 lg2 style="padding-bottom:20px;">
            <a href="https://www.linkedin.com/in/jakubgania" target="_blank" class="link linkedin">LinkedIn</a>
          </v-flex>
        </v-layout>
      </div>

    </div>

    <div class="copyright">
      Copyright &copy 2018 Jakub Gania
    </div>

  </div>
</template>

<script>

export default {
  head() {
    return {
      title : 'Jakub Gania - Web Developer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Jakub Gania - Web Developer. Vue.js, Vuex, Vuetify, NUXT, HTML, CSS, Node.js, PHP, Laravel, Nginx, Docker.'
        },
        {
          name: 'keywords',
          content: 'software, developer, it, programmer, coder, www, web, website, frontend, backend, full stack, software engineer'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/home/lg.scss';
@import '../assets/scss/home/xs.scss';
</style>
