<template>
  <v-layout row wrap class="projects-layout">
    <v-flex xs12 sm12 md12 lg8 offset-lg2>
      <div class="" data-aos="zoom-in" data-aos-delay="440" data-aos-duration="800" data-aos-once="true">
        <div class="" style="font-size:42px;margin-top:140px;text-align:center;">
          Kontakt
        </div>
      </div>
    </v-flex>
    <v-flex xs12 sm12 md12 lg8 offset-lg2 style="text-align:center;">
      <div data-aos="fade-up" data-aos-delay="440" data-aos-duration="1000" data-aos-once="true">
        <v-chip class="email-tag">
          <v-icon style="margin-right:14px;">alternate_email</v-icon>
          <a href="mailto:contact@jakubgania.io" class="email-link">contact@jakubgania.io</a>
        </v-chip>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  head() {
    return {
      title: 'Jakub Gania - Kontakt',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Jakub Gania - Kontakt'
        },
        {
          name: 'keywords',
          content: 'contact, contact form, message, email'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.email-tag
{
  padding: 6px;
  margin-top: 60px;
}
.email-link
{
  text-decoration: none;
  color: #000000;
  letter-spacing: 1px;
  font-weight: 700;
}
</style>
