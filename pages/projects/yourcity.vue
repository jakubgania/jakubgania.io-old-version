<template>
  <v-layout align-center justify-center row class="projects-layout">
    <div class="post">
      <div class="post-title">
        <a href="https://yourcity.io" target="_blank" style="text-decoration:none;">yourcity.io</a>
      </div>
      <div class="">
        image home page top
      </div>
      <div class="description">
        Yourcity to platforma umożliwiająca wyszukiwanie miejsc takich jak różnego
        rodzaju lokale, miejsca usługowe, restauracje, bary, obiekty sportowe,
        sklepy, galerie handlowe itp. Wyszukiwanie jest możliwe w różnych
        lokalizacjach oraz w różnych krajach. Pomysł stworzenia projektu Yourcity powstał
        pod koniec 2016 roku. W zamyśle miała być to aplikacja mobilna lecz projekt
        był od samego początku tworzony w postaci aplikacji internetowej tzn. jako
        strona internetowa. Projekt był wielokrotnie przepisywany od zera.
        Wielokrotne przepisywanie projektu od zera było uwarunkowane zdobywaniem
        nowej wiedzy z zakresu tworzenia aplikacji internetowych, i za każdym razem
        były stosowane wszelkie poznane techniki dotyczące poprawnego kodowania,
        optymalizacji, nazewnicta, podziału na komponenty itp.
      </div>
      <div class="description">
         Ze względu na charakter wykorzystanych technologii projekt składa się z dwóch części :
      </div>
      <div class="description">
        Frontend
      </div>
      <div class="description">
        Część frontendowa jest wykonana w technologii SPA
       <a href="https://en.wikipedia.org/wiki/Single-page_application" target="_blank">(Single Page Application)</a>
       z wykorzystaniem frameworka Vue.js, który jest zaprojektowany do takich zastosowań.
       Za warstwę wizualną odpowiada framework Vuetify zaprojektowany do współpracy z Vue. Wspiera SSR i PWA.
      </div>
      <div class="description">
        Stos technologiczny :
        <ul style="padding-top:20;">
          <li>Vue.js 2.5.17</li>
          <li>Vuex 3.0.1</li>
          <li>Vuetify 1.2.4</li>
          <li>NUXT 2.0.0</li>
          <li>node-sass 4.9.3</li>
          <li>AOS 3.0.0-beta.5</li>
          <li>Vue i18n 8.1.0</li>
          <li>axios 0.18.0</li>
          <li>nuxtjs/axios 5.0.0</li>
          <li>nuxtjs/sitemap 0.1.1</li>
          <li>Node.js 8.11.3</li>
        </ul>
      </div>
      <div class="description">
        Backend
      </div>
      <div class="description">
        opis
      </div>
      <div>
        <a href="https://github.com/jakubgania/yourcity-frontend" target="_blank" class="link">
          Github - Yourcity frontend
        </a>
      </div>
      <div>
        <a href="https://github.com/jakubgania/yourcity-backend-laravel" target="_blank" class="link">
          Github - Yourcity backend
        </a>
      </div>
      <div>
        <a href="https://github.com/jakubgania/yourcity-docker-setup" target="_blank" class="link">
          Github - Yourcity - Docker setup
        </a>
      </div>
      <div class="description">
        Ostatnia aktualizacja opisu projektu: 30/11/2018 19:19
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
  margin-bottom: 40px;
  line-height: 1.7;
}
.link
{
  text-decoration: none;
  font-size: 18px;

  &:hover
  {
    color: #0066ff;
  }
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
