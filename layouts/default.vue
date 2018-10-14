<template>
  <v-app>
    <v-content style="background-color: #ffffff;">

      <!-- navigation drawer component -->

      <toolbar-header-component/>

      <v-container fluid class="container">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ToolbarHeader from '../components/toolbar-header.vue';

export default {
  components: {
    'toolbar-header-component': ToolbarHeader
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">
.container
{
  padding: 0;
}
</style>
