<template>
  <v-layout row wrap class="projects-layout">
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg8 offset-lg2>
      <div class="" style="font-size:42px;margin-top:140px;text-align:center;">
        Inne
      </div>
    </v-flex>
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg8 offset-lg2 style="margin-bottom:80px;">
      <div class="" style="font-size:24px;margin-top:60px;text-align:center;">
        Ciekawe strony, portale, blogi, oprogramowanie oraz inne zasoby.
      </div>
    </v-flex>
    <v-flex
      v-for="(link, index) in linksData"
      :key="link.id"
      xs12
      sm8
      offset-sm2
      md6
      offset-md3
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
          sm12
          md12
          lg12
        >
          <div class="" style="font-size:18px;padding-bottom:10px;">
            <a :href="resource.url" target="_blank" class="link-resource">
              {{ resource.title ? index + 1 + ". " + resource.title : index + 1 + ". " + resource.url }}
            </a>
          </div>
          <div v-if="resource.description" class="">
            <div class="" style="padding-bottom:20px;font-size:16px;">
              {{ resource.description }}
            </div>
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
      title: 'Jakub Gania - Inne',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Ciekawe strony, portale, blogi, oprogramowanie oraz inne zasoby.'
        },
        {
          name: 'keywords',
          content: 'software, other, resources, pages, it, blogs, tutorials, programming'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.projects-layout
{
  padding-bottom: 80px;
}
.link-resource
{
  text-decoration: none;

  &:hover
  {
    color: #01aca7;
  }
}
@media only screen and (max-width: 600px)
{
  .projects-layout
  {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
