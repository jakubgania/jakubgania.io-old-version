<template>
  <v-layout row wrap class="template-layout">
    <v-flex sm10 offset-sm1 md10 offset-md1 lg8 offset-lg2>
      <v-layout row wrap class="information-container">
        <!-- <v-flex lg4>
          <div class="image-section">
            <v-avatar  size="260" color="grey lighten-4" >
              <img :src="profileImage" alt="" style="">
            </v-avatar>
          </div>
        </v-flex> -->
        <v-flex lg8 offset-lg2>
          <div class="information-section">
            <v-layout row wrap>
              <v-flex xs12 lg12>
                <v-layout row wrap>
                  <v-flex lg4>
                    <div class="image-section">
                      <v-avatar  size="200" color="grey lighten-4" >
                        <img :src="profileImage" alt="" style="">
                      </v-avatar>
                    </div>
                  </v-flex>
                  <v-flex lg8 style="height:200px;line-height:200px;padding-left:40px;">
                    <div class="description-name">
                      {{ descriptions.name }}
                    </div>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 lg12 style="margin-bottom:20px;">
                <div class="description">
                  {{ descriptions.description1 }}
                </div>
              </v-flex>
              <!-- <v-flex xs12 lg12 style="margin-top:20px;margin-bottom:20px;">
                <div class="description">
                  {{ descriptions.description2 }}
                </div>
              </v-flex> -->
              <v-flex xs12 lg12 style="border-top: 1px solid #d7d7d7;">
                <v-layout row wrap class="contact-section">
                  <v-flex lg3>
                    <div class="description-name-2">
                      Kontakt
                    </div>
                  </v-flex>
                  <v-flex lg9>
                    <v-chip class="email-tag">
                      <v-icon style="margin-right:14px;">alternate_email</v-icon>
                      <a href="mailto:contact@jakubgania.io" class="email-link">contact@jakubgania.io</a>
                    </v-chip>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex lg12 class="link-section">
                <v-layout row wrap>
                  <v-flex lg4>
                    <nuxt-link to="/" class="link">Strona główna</nuxt-link>
                  </v-flex>
                  <v-flex lg4 style="text-align:center;">
                    <nuxt-link to="/" class="link">Projekty</nuxt-link>
                  </v-flex>
                  <v-flex lg4 style="text-align:right;">
                    <a href="https://github.com/jakubgania" target="_blank" class="link">Github</a>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import profileImage from '../assets/images/profile_img.jpg';

export default {
  data() {
    return {
      profileImage,
      descriptions : {
        'name' : 'Jakub Gania',
        'description1' : 'Nazywam się Jakub Gania. W 2018 roku uzyskałem tytuł inżyniera informatki z specjalizacją inżyniera systemów informatycznych. Specjalizuję sie w technologiach webowych. Mieszkam we Wrocławiu.',
        'description2' : 'Prywatnie interesują mnie nowe technologie, startupy i bardzo lubię fotografować. Czytam książki o   . . .  oraz przeglądam portale technologiczne.',
      },
    }
  },
  head() {
    return {
      title: 'Jakub Gania - O mnie'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/about/lg.scss';
  @import '../assets/scss/about/xs.scss';
</style>
