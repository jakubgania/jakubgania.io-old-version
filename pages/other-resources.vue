<template>
  <v-layout row wrap class="projects-layout">
    <v-flex lg8 offset-lg2>
      <div class="image-section" data-aos="zoom-in" data-aos-delay="440" data-aos-duration="800" data-aos-once="true">
        <div class="" style="font-size:42px;margin-top:140px;text-align:center;">
          Inne
        </div>
      </div>
    </v-flex>
    <v-flex lg8 offset-lg2 style="margin-bottom:80px;">
      <div class="image-section" data-aos="fade-up" data-aos-delay="440" data-aos-duration="1200" data-aos-once="true">
        <div class="" style="font-size:24px;margin-top:60px;text-align:center;">
          Na tej podstronie będą pojawiać się linki do różnych stron.
        </div>
      </div>
    </v-flex>
    <v-flex
      v-for="(link, index) in linksData"
      :key="link.id"
      xs12
      lg6
      offset-lg3
    >
      <div class="" style="font-size:22px;padding-top:20px;padding-bottom:20px;letter-spacing:2px;">
        {{ link.section_name }}
      </div>
      <v-layout row wrap>
        <v-flex
          v-for="(resource, index) in link.resource_addresses"
          :key="resource.id"
          xs12
          lg12
        >
          <div class="" style="font-size:18px;padding-bottom:10px;">
            <a :href="resource.url" target="_blank" style="text-decoration:none;">
              {{ resource.title ? resource.title : resource.url }}
            </a>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import linksData from '../json/links-data.json';

export default {
  data() {
    return {
      linksData: linksData.links_data,
    }
  },
  head() {
    return {
      title: 'Jakub Gania - Inne'
    }
  }
}
</script>

<style lang="scss" scoped>
.projects-layout
{
  padding-bottom: 80px;
}
</style>
