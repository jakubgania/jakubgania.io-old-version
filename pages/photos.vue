<template>
  <v-layout row wrap class="projects-layout">
    <v-flex xs12 sm6 offset-sm3 md8 offset-md2 lg8 offset-lg2>
      <div class="title-page">
        {{ 'Zdjęcia - ' + photoDetails.length }}
      </div>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 md8 offset-md2 lg8 offset-lg2>
      <div class="subtitle">
        Na tej stronie będą pojawiać się wykonane przeze mnie zdjęcia.
      </div>
    </v-flex>
    <v-flex xs12 sm10 offset-sm1 md10 offset-md1 lg10 offset-lg1 class="images-section">
      <v-container fluid grid-list-xs>
        <v-layout row wrap>
          <v-flex
            xs12
            sm6
            md4
            lg3
            v-for="(thumbnail, index) in photoDetails"
            :key="thumbnail.id"
          >
            <v-img
              :src="baseURL + pathSmallSize + photoDetails[index].src"
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
                <v-progress-circular indeterminate color="blue"/>
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
      <v-card v-if="src">
        <v-toolbar style="box-shadow:none;background-color:#ffffff;">
          <v-btn icon @click.native="fullScreenPhoto = false">
            <v-icon color="black">close</v-icon>
          </v-btn>
        </v-toolbar>
        <img :src="baseURL + pathFullSize + src" class="full-size-photo">
      </v-card>
    </v-dialog>

  </v-layout>
</template>

<script>
import imagesPaths from '../images-paths.json';

export default {
  data() {
    return {
      fullScreenPhoto: false,
      src: null,
      baseURL: 'https://jakubgania.io',
      pathFullSize: '/images/full-size/',
      pathSmallSize: '/images/small-size/',
      photoDetails: imagesPaths['images-paths'],
    }
  },
  methods: {
    setDetailsPhoto(index) {
      let details = this.photoDetails[index];
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
