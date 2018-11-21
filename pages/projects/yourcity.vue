<template>
  <v-layout align-center justify-center row class="projects-layout">
    <div class="post">
      <div class="post-title">
        <a href="https://yourcity.io" target="_blank" style="text-decoration:none;">yourcity.io</a>
      </div>
      <div class="">
        <a href="https://github.com/jakubgania/yourcity-frontend" target="_blank" style="text-decoration:none;font-size:18px;">
          Github - Yourcity frontend
        </a>
      </div>
      <div class="">
        <a href="https://github.com/jakubgania/yourcity-backend-laravel" target="_blank" style="text-decoration:none;font-size:18px;">
          Github - Yourcity backend
        </a>
      </div>
      <div class="" style="padding-bottom:20px;">
        <a href="https://github.com/jakubgania/yourcity-docker-setup" target="_blank" style="text-decoration:none;font-size:18px;">
          Github - Yourcity - Docker setup
        </a>
      </div>
      <div class="description">
        Yourcity to platforma umożliwiająca wyszukiwanie miejsc takich jak różnego
        rodzaju lokale, miejsca usługowe, restauracje, bary, obiekty sportowe,
        sklepy, galerie handlowe itp. Pomysł stworzenia projektu Yourcity powstał
        pod koniec 2016 roku. W zamyśle miała być to aplikacja mobilna lecz projekt
        był od samego początku tworzony w postaci aplikacji internetowej tzn. jako
        strona internetowa. Projekt był wielokrotnie przepisywany od zera.
        Wielokrotne przepisywanie projektu od zera było uwarunkowane zdobywaniem
        nowej wiedzy z zakresu tworzenia aplikacji internetowych, i za każdym razem
        były stosowane wszelkie poznane techniki dotyczące poprawnego kodowania,
        optymalizacji, nazewnicta, podziału na komponenty itp.
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
  max-width: 740px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 60px;
  padding-right: 60px;
}
.post-title
{
  font-size: 42px;
  margin-bottom: 60px;
}
.description
{
  font-size: 18px;
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
