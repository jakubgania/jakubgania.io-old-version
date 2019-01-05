<template>
  <v-layout row wrap class="container-about">
    <v-flex xs12 sm10 offset-sm1 md10 offset-md1 lg8 offset-lg2>
      <v-layout row wrap class="information-container">
        <v-flex lg12>
          <div class="information-section">
            <v-layout row wrap>
              <v-flex xs12 md10 offset-md1 lg12>
                <v-layout row wrap>
                  <v-flex xs12 lg4>
                    <div class="image-section">
                      <v-avatar :size="photoSize">
                        <img :src="profileImage" alt="Jakub Gania - profile photo">
                      </v-avatar>
                    </div>
                  </v-flex>
                  <v-flex xs12 lg8 class="description-name-section">
                    <div class="description-name">
                      {{ descriptions.name }}
                    </div>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 sm8 offset-sm2 md8 offset-md2 lg8 offset-lg2 style="border-top:1px solid #888888;padding-top:20px;">
                <div class="description">
                  {{ descriptions.description1 }}
                </div>
              </v-flex>
              <v-flex xs12 sm8 offset-sm2 md8 offset-md2 lg8 offset-lg2 style="margin-top:20px;margin-bottom:20px;border-top:1px solid #888888;padding-top:20px;">
                <div class="description">
                  {{ descriptions.description2 }}
                </div>
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
        'description1' : 'Nazywam się Jakub Gania. Mieszkam we Wrocławiu. W 2018 roku uzyskałem tytuł inżyniera informatki z specjalizacją inżyniera systemów informatycznych. Specjalizuję sie w technologiach webowych. Cały czas się uczę i poszerzam swoją wiedzę w różnych obszarach powiązanych z programowaniem. Moje projekty udostępniam na platformie GitHub. Rozwijam się w kierunku Full Stack Web Developer.',
        'description2' : 'Prywatnie interesują mnie nowe technologie, startupy, rozwój osobisty i bardzo lubię fotografować.',
      },
    }
  },
  computed: {
    photoSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '120';
        case 'sm': return '120';
        case 'md': return '140';
        case 'lg': return '140';
        case 'xl': return '160';
        default: return '160';
      }
    }
  },
  head() {
    return {
      title: 'Jakub Gania - About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Trochę informacji o mnie.'
        },
        {
          name: 'keywords',
          content: 'about, me, information, description'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/about/lg.scss';
  @import '../assets/scss/about/md.scss';
  @import '../assets/scss/about/sm.scss';
  @import '../assets/scss/about/xs.scss';
</style>
