<template>
  <v-layout row wrap class="template-layout">
    <v-flex xs12 sm10 offset-sm1 md10 offset-md1 lg8 offset-lg2>
      <v-layout row wrap class="information-container">
        <v-flex lg12>
          <div class="information-section">
            <v-layout row wrap>
              <v-flex xs12 md10 offset-md1 lg12>
                <v-layout row wrap>
                  <v-flex xs12 lg4>
                    <div
                      class="image-section"
                      data-aos="zoom-in"
                      data-aos-delay="440"
                      data-aos-duration="1000"
                      data-aos-once="true"
                    >
                      <v-avatar :size="photoSize" color="grey lighten-4">
                        <img :src="profileImage" alt="" style="">
                      </v-avatar>
                    </div>
                  </v-flex>
                  <v-flex xs12 lg8 class="description-name-section">
                    <div
                      class="description-name"
                      data-aos="zoom-in"
                      data-aos-delay="440"
                      data-aos-duration="1000"
                      data-aos-once="true"
                    >
                      {{ descriptions.name }}
                    </div>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 sm8 offset-sm2 md8 offset-md2 lg8 offset-lg2 style="margin-bottom:20px;">
                <div
                  class="description"
                  data-aos="fade-left"
                  data-aos-delay="440"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  {{ descriptions.description1 }}
                </div>
              </v-flex>
              <v-flex xs12 sm8 offset-sm2 md8 offset-md2 lg8 offset-lg2 style="margin-top:20px;margin-bottom:20px;">
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
        'description1' : 'Nazywam się Jakub Gania. Mieszkam we Wrocławiu. W 2018 roku uzyskałem tytuł inżyniera informatki z specjalizacją inżyniera systemów informatycznych. Specjalizuję sie w technologiach webowych. Cały czas się uczę i poszerzam swoją wiedzę w różnych obszarach powiązanych z programowaniem. Moje projekty udostępniam na platformie GitHub.',
        'description2' : 'Prywatnie interesują mnie nowe technologie, startupy, rozwój osobisty i bardzo lubię fotografować.',
        // 'description2' : 'Prywatnie interesują mnie nowe technologie, startupy i bardzo lubię fotografować. Czytam książki o   . . .  oraz przeglądam portale technologiczne.',
      },
    }
  },
  computed: {
    photoSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '180';
        case 'sm': return '180';
        case 'md': return '180';
        case 'lg': return '200';
        case 'xl': return '200';
        default: return '200';
      }
    }
  },
  head() {
    return {
      title: 'Jakub Gania - O mnie',
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
