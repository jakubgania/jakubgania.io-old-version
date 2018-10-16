<template>
  <v-layout row wrap class="projects-layout">
    <v-flex lg8 offset-lg2>
      <div class="image-section" data-aos="zoom-in" data-aos-delay="440" data-aos-duration="800" data-aos-once="true">
        <div class="" style="font-size:42px;margin-top:140px;text-align:center;">
          Projekty
        </div>
      </div>
    </v-flex>
    <v-flex lg8 offset-lg2>
      <div class="image-section" data-aos="fade-up" data-aos-delay="440" data-aos-duration="1200" data-aos-once="true">
        <div class="" style="font-size:24px;margin-top:60px;text-align:center;">
          Na tej podstronie będą pojawiać się szczegółowe opisy moich projektów.
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  head() {
    return {
      title: 'Jakub Gania - Projekty',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Jakub Gania - Projekty'
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
</style>
