<template>
  <v-app>
    <v-layout row wrap style="background-color:#ffffff;">
      <p id="demo" class="counter"></p>
      <v-flex lg8 offset-lg2 class="counter-section">
        <v-layout row wrap>
          <v-flex xs12 sm12 md3 lg3 style="text-align:center;">
            <div class="counter-text color-top" id="days"></div>
          </v-flex>
          <v-flex xs12 sm12 md3 lg3 style="text-align:center;">
            <div class="counter-text color-top" id="hours"></div>
          </v-flex>
          <v-flex xs12 sm12 md3 lg3 style="text-align:center;">
            <div class="counter-text color-top" id="minutes"></div>
          </v-flex>
          <v-flex xs12 sm12 md3 lg3 style="text-align:center;">
            <div class="counter-text color-top" id="seconds"></div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex lg8 offset-lg2 style="margin-top:0px;">
        <v-layout row wrap>
          <v-flex xs12 sm12 md4 lg4 style="text-align:center;">
            <div class="counter-text color-bottom" id="hours_counter"></div>
          </v-flex>
          <v-flex xs12 sm12 md4 lg4 style="text-align:center;">
            <div class="counter-text color-bottom" id="minuts_counter"></div>
          </v-flex>
          <v-flex xs12 sm12 md4 lg4 style="text-align:center;">
            <div class="counter-text color-bottom" id="seconds_counter"></div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>

export default {
  mounted() {
    var countDownDate = new Date("Dec 18, 2018 11:25:00").getTime();

    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      var hours_counter = Math.floor(distance / (1000 * 60 * 60));
      var minuts_counter = Math.floor((distance / (1000 * 60 * 60)) * 60);
      var seconds_counter = Math.floor(distance / 1000);

      document.getElementById("days").innerHTML = days + " dni";
      document.getElementById("hours").innerHTML = hours + " godzin";
      document.getElementById("minutes").innerHTML = minutes + " minut";
      document.getElementById("seconds").innerHTML = seconds + " sekund";
      document.getElementById("hours_counter").innerHTML = hours_counter + " godzin";
      document.getElementById("minuts_counter").innerHTML = minuts_counter + " minut";
      document.getElementById("seconds_counter").innerHTML = seconds_counter + " sekund";

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Start";
      }
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
.counter-section
{
  margin-top: 140px;
}
.counter-text
{
  font-size: 42px;
  color: #26beff;
}
.color-top
{
  color: #f06292;
}
.color-bottom
{
  color: #9575cd;
}
@media only screen and (max-width: 1264px)
{

}
@media only screen and (max-width: 960px)
{
  .counter-text
  {
    font-size: 40px;
  }
  .counter-section
  {
    margin-top: 100px;
  }
}
@media only screen and (max-width: 600px)
{
  .counter-text
  {
    font-size: 40px;
  }
  .counter-section
  {
    margin-top: 100px;
  }
}
</style>
