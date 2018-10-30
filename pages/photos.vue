<template>
  <v-layout row wrap class="projects-layout">
    <v-flex xs12 sm6 offset-sm3 md8 offset-md2 lg8 offset-lg2>
      <div class="" style="font-size:42px;margin-top:140px;text-align:center;">
        Zdjęcia
      </div>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 md8 offset-md2 lg8 offset-lg2>
      <div class="" style="font-size:24px;text-align:center;">
        Na tej podstronie będą pojawiać się zdjęcia.
      </div>
    </v-flex>
    <v-flex xs12 sm10 offset-sm1 md10 offset-md1 lg10 offset-lg1 class="images-section">
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

    <!-- <transition name="fade">
      <div v-if="fullScreenPhoto" @keydown.esc="closePhotoDetails()" tabindex="0" class="desktop-full-screen-photo">
        <v-icon right @click="closePhotoDetails()" class="card-button">
          close
        </v-icon>
        <img :src="src" alt="" class="full-size-photo">
      </div>
    </transition> -->

    <v-dialog v-model="fullScreenPhoto" fullscreen hide-overlay transition="">
      <v-card>
        <v-toolbar color="" style="box-shadow:none;background-color:white;">
          <v-btn icon @click.native="fullScreenPhoto = false">
            <v-icon color="black">close</v-icon>
          </v-btn>
        </v-toolbar>
        <img :src="src" alt="" class="full-size-photo">
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
      // this.updateURL(this.basicClientAddress + '/' + this.$i18n.locale + this.resourcePath + details.id);
      this.src = details.src;
      // this.$store.dispatch('photos/getPhotoDeatils', details.id);
      // this.titleHeaderPage = 'Yourcity - ' + details.id;
      this.fullScreenPhoto = true;
    },
    closePhotoDetails() {
      this.fullScreenPhoto = false;
      // this.titleHeaderPage = 'Yourcity - Galeria';
      // this.updateURL(this.basicClientAddress + '/' + this.$i18n.locale + this.resourcePath);
    },
    // updateURL(newUrl) {
    //   var stateObject = {foo: 'bar'};
    //   history.pushState(stateObject, 'page', newUrl);
    // }
  },
  head() {
    return {
      title: 'Jakub Gania - Zdjęcia',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Jakub Gania - Zdjęcia'
        },
        {
          name: 'keywords',
          content: 'photos'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.projects-layout
{
  min-height: calc(100vh - 164px);
}

.fade-enter-active, .fade-leave-active
{
    transition: opacity .3s;
}
.fade-enter, .fade-leave-to
{
    opacity: 0;
}

.paging-button
{
    font-weight: bold;

    margin-top: 60px;
    background-color: #000000 !important;
    color: #ffffff;
    letter-spacing: 3px;
}
.desktop-full-screen-photo
{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
    z-index: 999;
    top: 0%;
    right: 0%;
    left: 0%;
    bottom: 0%;

    html, body
    {
        overflow: hidden !important;
    }
}
.full-size-photo
{
    position: absolute;
    top: 0%;
    right: 0%;
    left: 0%;
    bottom: 0%;

    // width: 80%;
    // max-width: 1000px;
    height: auto;
    max-height: 86%;
    display: block;
    margin: auto;
}
.card-button
{
    position: absolute;
    right: 0px;
    margin-top: 16px;
    margin-right: 16px;
    font-size: 40px;
    color: #000000;
}
@media only screen and (max-width: 600px)
{
  .images-section
  {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 80px;
    margin-bottom: 80px;
  }
  .full-size-photo
  {
    max-width: 100%;
    height: auto;
    max-height: 82vh;
  }
}
</style>
