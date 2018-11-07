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
      <v-card v-if="src">
        <v-toolbar style="box-shadow:none;background-color:white;">
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
export default {
  data () {
    return {
      fullScreenPhoto: false,
      src: null,
      baseURL: 'https://jakubgania.io',
      pathFullSize: '/images/full-size/',
      pathSmallSize: '/images/small-size/',
      photoDetails: [
        {
          src: 'k31.png'
        },
        {
          src: 'k32.jpg'
        },
        {
          src: 'k0.JPG'
        },
        {
          src: 'k1.jpg'
        },
        {
          src: 'k2.png'
        },
        {
          src: 'k3.jpg'
        },
        {
          src: 'k5.jpeg'
        },
        {
          src: 'k6.jpg'
        },
        {
          src: 'k7.jpg'
        },
        {
          src: 'k8.jpg'
        },
        {
          src: 'k9.jpg'
        },
        {
          src: 'k10.jpg'
        },
        {
          src: 'k11.jpg'
        },
        {
          src: 'k12.jpg'
        },
        {
          src: 'k13.jpg'
        },
        {
          src: 'k14.jpg'
        },
        {
          src: 'k15.jpg'
        },
        {
          src: 'k16.jpeg'
        },
        {
          src: 'k17.jpeg'
        },
        {
          src: 'k18.jpeg'
        },
        {
          src: 'k20.jpg'
        },
        {
          src: 'k21.png'
        },
        {
          src: 'k22.png'
        },
        {
          src: 'k23.png'
        },
        {
          src: 'k24.jpeg'
        },
        {
          src: 'k25.jpeg'
        },
        {
          src: 'k26.jpeg'
        },
        {
          src: 'k27.jpeg'
        },
        {
          src: 'k28.jpeg'
        },
        {
          src: 'k29.jpg'
        },
        {
          src: 'k30.jpg'
        }
      ]
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
