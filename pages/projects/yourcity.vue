<template>
  <v-layout align-center justify-center row class="projects-layout">
    <div class="post">
      <div class="post-title">
        Yourcity
      </div>
      <div class="description">
        Projekt Yourcity ...
      </div>
    </div>
  </v-layout>
</template>

<script>
export default {
  head() {
    return {
      title: 'Jakub Gania - Projekt Yourcity',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Opis projektu Yourcity'
        },
        {
          name: 'keywords',
          content: 'projects, yourcity, description, aplication, app, web app,'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.projects-layout
{
  margin-top: 80px;
  margin-bottom: 80px;
}
.post
{
  width: 100%;
  max-width: 660px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 60px;
  padding-right: 60px;
}
.post-title
{
  font-size: 42px;
}
@media only screen and (max-width: 600px)
{
  .post
  {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
