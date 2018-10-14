<template>
  <v-navigation-drawer
    v-model="drawerFlag"
    fixed
    app
    right
    temporary
    class=""
  >
    <v-list class="">
      <div class="">
        <v-icon
          class="close-menu-icon"
          @click="$emit('switchNavigationDrawer')"
        >
          close
        </v-icon>

        <!-- logo component -->

      </div>
      <v-divider/>
      <template
        v-for="menuItem in menuItems"
      >
        <v-list-tile
          :key="menuItem.id"
          :to="menuItem.path"
        >
          <v-list-tile-action class="">
            <v-icon class="">keyboard_arrow_right</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="">
            <v-list-tile-title
              class=""
              v-html="menuItem.title"
            />
          </v-list-tile-content>
        </v-list-tile>
      </template>
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
          title: "Projekty",
          path: '/projects'
        },
        {
          title: "Inne",
          path: '/other-resources'
        }
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
  methods: {
    //
  },
}
</script>

<style lang="scss"scoped>
</style>
