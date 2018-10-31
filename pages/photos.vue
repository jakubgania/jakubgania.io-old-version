<template>
  <v-layout row wrap class="projects-layout">
    <v-flex
      xs12
      sm6
      offset-sm3
      md8
      offset-md2
      lg8
      offset-lg2
    >
      <div class="title-page">
        Zdjęcia
      </div>
    </v-flex>
    <v-flex
      xs12
      sm6
      offset-sm3
      md8
      offset-md2
      lg8
      offset-lg2
    >
      <div class="subtitle">
        Na tej stronie będą pojawiać się wykonane przeze mnie zdjęcia.
      </div>
    </v-flex>
    <v-flex
      xs12
      sm10
      offset-sm1
      md10
      offset-md1
      lg10
      offset-lg1
      class="images-section"
    >
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex
            xs12
            sm6
            md4
            lg3
            v-for="(thumbnail, index) in photoDetails"
            :key="thumbnail.id"
            class=""
          >
            <v-img
              :src="photoDetails[index].thumbnail"
              @click="setDetailsPhoto(index)"
              aspect-ratio="1.8"
            >
              <v-layout
                slot="placeholder"
                fill-height
                align-center
                justify-center
                ma-0
              >
                <v-progress-circular indeterminate color="blue"></v-progress-circular>
              </v-layout>
            </v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>

    <v-dialog
      v-model="fullScreenPhoto"
      fullscreen
      hide-overlay
      transition=""
      @keydown.esc="fullScreenPhoto = false"
    >
      <v-card>
        <v-toolbar style="box-shadow:none;background-color:white;">
          <v-btn icon @click.native="fullScreenPhoto = false">
            <v-icon color="black">close</v-icon>
          </v-btn>
        </v-toolbar>
        <img :src="src" class="full-size-photo">
      </v-card>
    </v-dialog>

  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      fullScreenPhoto: false,
      src: null,
      photoDetails: [
        {
          thumbnail: 'https://jakubgania.io/images/full-size/p6.png',
          src: 'https://jakubgania.io/images/full-size/p6.png'
        },
        {
          thumbnail: 'https://jakubgania.io/images/full-size/w2e.jpg',
          src: 'https://jakubgania.io/images/full-size/w2e.jpg'
        },
        {
          thumbnail: 'https://jakubgania.io/images/full-size/w3e.jpg',
          src: 'https://jakubgania.io/images/full-size/w3e.jpg'
        },
        {
          thumbnail: 'https://jakubgania.io/images/full-size/q2.png',
          src: 'https://jakubgania.io/images/full-size/q2.png'
        },
        {
          thumbnail: 'https://jakubgania.io/images/full-size/1q.png',
          src: 'https://jakubgania.io/images/full-size/1q.png'
        },
        {
          thumbnail: 'https://jakubgania.io/images/full-size/kuba.JPG',
          src: 'https://jakubgania.io/images/full-size/kuba.JPG'
        }
      ]
    }
  },
  methods: {
    setDetailsPhoto(index) {
      var details = this.photoDetails[index];
      this.src = details.src;
      this.fullScreenPhoto = true;
    },
  },
  head() {
    return {
      title: 'Jakub Gania - Photos',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Galeria zdjęć.'
        },
        {
          name: 'keywords',
          content: 'photos, gallery, images'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/photos/lg.scss';
@import '../assets/scss/photos/xs.scss';
</style>
