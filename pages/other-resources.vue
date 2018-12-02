<template>
  <v-layout row wrap class="projects-layout">
    <v-flex
      xs12
      sm8
      offset-sm2
      md8
      offset-md2
      lg8
      offset-lg2
    >
      <div class="page-title">
        Inne
      </div>
    </v-flex>
    <v-flex
      xs12
      sm8
      offset-sm2
      md8
      offset-md2
      lg8
      offset-lg2
    >
      <div class="page-description">
        Ciekawe strony, portale, blogi, oprogramowanie oraz inne zasoby.
      </div>
    </v-flex>
    <v-flex
      xs12
      sm8
      offset-sm2
      md8
      offset-md2
      lg6
      offset-lg3
      style="font-size:22px;padding-bottom:24px;letter-spacing: 2px;"
    >
      Kategorie
    </v-flex>
    <v-flex
      v-for="(link, index) in linksData"
      :key="link.id"
      xs12
      sm8
      offset-sm2
      md8
      offset-md2
      lg6
      offset-lg3
    >
      <a :href="'#' + link.section_id" style="text-decoration: none;">
        <div class="listing-link">
          {{ link.section_name }}
        </div>
      </a>
    </v-flex>
    <v-flex
      xs12
      sm8
      offset-sm2
      md8
      offset-md2
      lg6
      offset-lg3
      style="margin-bottom:80px;"
    ></v-flex>
    <v-flex
      v-for="(link, index) in linksData"
      :key="link.id"
      xs12
      sm8
      offset-sm2
      md8
      offset-md2
      lg6
      offset-lg3
      class="links-section"
    >
      <div class="link-section-title" :id="link.section_id">
        {{ link.section_name }}
      </div>
      <v-layout row wrap>
        <v-flex
          v-for="(resource, index) in link.resource_addresses"
          :key="resource.id"
          xs12
          sm12
          md12
          lg12
        >
          <div class="link-resource-section">
            <a :href="resource.url" target="_blank" class="link-resource">
              {{ resource.title ? index + 1 + ". " + resource.title :
                 index + 1 + ". " + resource.url }}
            </a>
          </div>
          <div v-if="resource.description">
            <div class="resource-description">
              {{ resource.description }}
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import linksData from '../links-data.json';

export default {
  data() {
    return {
      linksData: linksData.links_data,
    }
  },
  head() {
    return {
      title: 'Jakub Gania - Other resources',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Ciekawe strony, portale, blogi, oprogramowanie oraz inne zasoby.'
        },
        {
          name: 'keywords',
          content: 'software, other, resources, pages, it, blogs, tutorials, programming, commands, github, docker'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/other-resources/lg.scss';
// @import '../assets/scss/other-resources/md.scss';
// @import '../assets/scss/other-resources/sm.scss';
@import '../assets/scss/other-resources/xs.scss';
</style>
