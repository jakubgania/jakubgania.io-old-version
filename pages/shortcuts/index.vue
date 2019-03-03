<template>
  <v-layout row wrap>
    <v-flex lg6 offset-lg3>
      <div class="title-text">
        Shortcuts
      </div>
    </v-flex>
    <v-flex lg6 offset-lg3>
      <div v-for="link in links" :key="link.id">
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
          }
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
</style>
