<template>
  <v-navigation-drawer
    v-model="drawerFlag"
    fixed
    app
    right
    temporary
    class=""
  >
    <v-list class="list-section">
      <div class="logo-section">
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
}
</script>

<style lang="scss"scoped>
.list-section
{
  padding: 0;
}
.logo-section
{
  height: 56px;
  line-height: 56px;
}
.close-menu-icon
{
  float: right;
  margin-right: 20px;
  line-height: 56px;
  font-size: 30px;
  color: #000000;
  cursor: default;
}
.selected-icon
{
  color: #252bfc !important;
}
.selected-text
{
  color: #000000 !important;
}
.list-menu-icon
{
  margin-left: 3px;
}
.list-menu-text
{
  letter-spacing: 2px;
  font-size: 12px;
  font-weight: 700;
  color: #585858;
}
</style>
