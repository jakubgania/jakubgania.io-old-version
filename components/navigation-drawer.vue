<template>
  <v-navigation-drawer
    v-model="drawerFlag"
    fixed
    app
    right
    temporary
  >
    <v-list class="list-section">
      <div class="logo-section">

        <v-btn flat icon class="close-menu-icon">
          <v-icon @click="$emit('switchNavigationDrawer')">
            close
          </v-icon>
        </v-btn>

      </div>
      <v-divider/>
      <template v-for="menuItem in menuItems">
        <v-list-tile :key="menuItem.id" :to="menuItem.path">
          <v-list-tile-action class="selected-icon">
            <v-icon class="list-menu-icon">keyboard_arrow_right</v-icon>
          </v-list-tile-action>

          <v-list-tile-content class="selected-text">
            <v-list-tile-title
              class="list-menu-text"
              v-html="menuItem.title"
            />
          </v-list-tile-content>
        </v-list-tile>
      </template>
      <v-list-tile href="https://github.com/jakubgania">
        <v-list-tile-action class="selected-icon">
          <v-icon class="list-menu-icon">keyboard_arrow_right</v-icon>
        </v-list-tile-action>

        <v-list-tile-content class="selected-text">
          <v-list-tile-title class="list-menu-text">
            Github
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menuItems: [
        {
          title: "Strona główna",
          path: '/'
        },
        {
          title: "O mnie",
          path: '/about'
        },
        {
          title: "Projekty",
          path: '/projects'
        },
        {
          title: "Kontakt",
          path: '/contact'
        },
        {
          title: "Inne",
          path: '/other-resources'
        },
        {
          title: "Zdjęcia",
          path: '/photos'
        },
      ]
    }
  },
  computed: {
    drawerFlag: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.$emit('updateNavigationDrawerValue', value);
      },
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/navigation-drawer.scss';
</style>
