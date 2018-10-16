<template>
  <v-layout row wrap class="projects-layout">
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg8 offset-lg2>
      <div class="page-title">
        Inne
      </div>
    </v-flex>
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg8 offset-lg2>
      <div class="page-description">
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
      class="links-section"
    >
      <div class="link-section-title">
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
              {{ resource.title ? index + 1 + ". " + resource.title : index + 1 + ". " + resource.url }}
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
.page-title
{
  font-size: 42px;
  margin-top: 140px;
  text-align: center;
}
.page-description
{
  font-size: 24px;
  margin-top: 60px;
  text-align: center;
  margin-bottom: 80px;
}
.links-section
{
  border-bottom: 1px solid #dedede;
  padding-bottom: 10px;
}
.link-section-title
{
  font-size: 22px;
  padding-top: 20px;
  padding-bottom: 20px;
  letter-spacing: 2px;
}
.link-resource-section
{
  font-size: 18px;
  padding-bottom: 10px;
}
.link-resource
{
  text-decoration: none;

  &:hover
  {
    color: #01aca7;
  }
}
.resource-description
{
  padding-bottom: 20px;
  font-size: 16px;
}
@media only screen and (max-width: 600px)
{
  .projects-layout
  {
    padding-left: 10px;
    padding-right: 10px;
  }
  .page-title
  {
    margin-top: 60px;
  }
  .page-description
  {
    margin-top: 40px;
    margin-bottom: 40px;
  }
}
</style>
