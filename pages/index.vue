<template>
  <div class="flex-center position-ref full-height" style="background-color:#000000;">
          <div class="content">
              <div class="main-title" data-aos="zoom-in" data-aos-delay="440" data-aos-duration="1000" data-aos-once="true">
                  Software Developer
              </div>

              <div class="my-name" data-aos="zoom-in" data-aos-delay="440" data-aos-duration="1200" data-aos-once="true">
                Jakub Gania
              </div>

              <div class="links" data-aos="zoom-in" data-aos-delay="440" data-aos-duration="1400" data-aos-once="true">
                  <nuxt-link to="/about" class="about">O mnie</nuxt-link>
                  <a href="/" class="projects">Projekty</a>
                  <a href="https://github.com/jakubgania" target="_blank" class="github">GitHub</a>
              </div>

          </div>

          <div class="copyright">
            Copyright &copy 2018 Jakub Gania
          </div>

      </div>
</template>

<script>

export default {
  head() {
    return {
      title : 'Jakub Gania'
    }
  }
}
</script>

<style lang="scss">
body, html {
  overflow-y: hidden !important;
  min-height: 500px;
}
.full-height {
  height: 100vh;
}

.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}

.position-ref {
  position: relative;
}

.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.content {
  text-align: center;
}

.main-title {
  font-size: 84px;
  color: #636b6f;
  font-weight: 300;
  letter-spacing: .4rem;
  margin-bottom: 15px;
}

.my-name {
  font-size: 32px;
  color: #636b6f;
  margin-bottom: 30px;
}

.links > a {
  color: #636b6f;
  padding: 0 25px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .1rem;
  text-decoration: none;
  text-transform: uppercase;

  &.about:hover {
    color: #2962FF;
  }

  &.projects:hover {
    color: #304FFE;
  }

  &.github:hover {
    color: #6200EA;
  }
}

.copyright {
  width: 100%;
  height: 40px;
  line-height: 40px;
  position: fixed;
  top: calc(100vh - 40px);
  color: #636b6f;
  background-color: #000000;
  z-index: 10;
  text-align: center;
  letter-spacing: .2rem;
}

@media only screen and (max-width: 600px) {
  .main-title {
    font-size: 60px;
  }
}

</style>
