<template>
  <v-layout row wrap class="projects-layout">
    <v-flex xs12 sm6 offset-sm3 md8 offset-md2 lg8 offset-lg2>
      <div class="image-section" data-aos="zoom-in" data-aos-delay="440" data-aos-duration="800" data-aos-once="true">
        <div class="" style="font-size:42px;margin-top:140px;text-align:center;">
          Zdjęcia
        </div>
      </div>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 md8 offset-md2 lg8 offset-lg2>
      <div class="image-section" data-aos="fade-up" data-aos-delay="440" data-aos-duration="1200" data-aos-once="true">
        <div class="" style="font-size:24px;text-align:center;">
          Na tej podstronie będą pojawiać się zdjęcia.
        </div>
      </div>
    </v-flex>
    <v-flex xs12 sm10 offset-sm1 md10 offset-md1 lg10 offset-lg1>
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
            <!-- <v-card tile>
              <v-card-media
                :src="photoDetails[index].thumbnail"
                height="220px"
              >
              </v-card-media>
            </v-card> -->
            {{ thumbnail }}
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      photoDetails: [
        'img1',
        'img2',
        'img3',
        'img4'
      ]
    }
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
</style>
