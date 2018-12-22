<template>
  <v-app>
    <v-content style="background-color: #ffffff;">

      <navigation-drawer-component
        :drawer="drawer"
        @switchNavigationDrawer="switchNavigationDrawer"
        @updateNavigationDrawerValue="updateNavigationDrawerValue"
      />

      <toolbar-header-component
        @switchNavigationDrawer="switchNavigationDrawer"
      />

      <v-container fluid class="container">
        <nuxt />
      </v-container>

      <footer-component/>

    </v-content>
  </v-app>
</template>

<script>
import ToolbarHeader from '../components/toolbar-header.vue';
import NavigationDrawer from '../components/navigation-drawer.vue';
import Footer from '../components/footer.vue';

export default {
  components: {
    'toolbar-header-component': ToolbarHeader,
    'navigation-drawer-component': NavigationDrawer,
    'footer-component': Footer,
  },
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    switchNavigationDrawer() {
      this.drawer = !this.drawer;
    },
    updateNavigationDrawerValue(value) {
      this.drawer = value;
    }
  },
}
</script>

<style lang="scss">
@import '../assets/scss/scrollbar.scss';

.container
{
  padding: 0;
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto Regular'), local('Roboto-Regular'),
  url(../assets/fonts/Roboto-Regular.ttf) format('truetype');
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: local('Roboto Bold'), local('Roboto-Bold'),
  url(../assets/fonts/Roboto-Bold.ttf) format('truetype');
}

@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: local('Nunito Light'), local('Nunito-Light'),
  url(../assets/fonts/Nunito-Light.ttf) format('truetype');
}
</style>
