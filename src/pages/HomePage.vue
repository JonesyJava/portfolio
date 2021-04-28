<template>
  <div class="container-fluid bg-main">
    <div class="row align-items-end justify-content-center margin-top pt-5">
      <div
        class="col-6"
        data-aos="fade-left"
        data-aos-offset="500"
        data-aos-duration="1000"
      >
        <h1 class="text-right font-large font-jj text-white name-margin">
          JONESY
        </h1>
        <br />
        <h1 class="text-right font-large font-jj text-white">JAVA</h1>
      </div>
      <div class="col-6">
        <div class="row mt-5">
          <div class="square one-bg blocksRowOne"></div>
        </div>
        <div class="row mt-3">
          <div class="square two-bg blocksRowOne"></div>
          <div class="square two-bg blocksRowTwo position-a"></div>
        </div>
        <div class="row mt-3">
          <div class="square three-bg blocksRowOne"></div>
          <div class="square three-bg blocksRowTwo position-a"></div>
          <div class="square three-bg blocksRowThree position-a"></div>
        </div>
        <div class="row mt-3">
          <div class="square four-bg blocksRowOne"></div>
          <div class="square four-bg blocksRowTwo position-a"></div>
          <div class="square four-bg blocksRowThree position-a"></div>
          <div class="square four-bg blocksRowFour position-a"></div>
        </div>
      </div>
    </div>
    <div
      class="row justify-content-center bg-main text-white pt-5"
      data-aos="fade-up"
      data-aos-delay="2400"
      data-aos-duration="1000"
    >
      <div class="col-1 text-center pt-3">
        <div>
          <router-link :to="{ name: 'Home' }">
            <i
              class="text-white fa fa-circle-o-notch fa-lg hover-nav"
              aria-hidden="true"
            >
              <h4 class="hover-button pt-3">Home Page</h4>
            </i>
          </router-link>
        </div>
      </div>
      <div class="col-1 text-center pt-3">
        <div>
          <router-link :to="{ name: 'BioPage' }">
            <i
              class="text-white fa fa-circle-o-notch fa-lg hover-nav"
              aria-hidden="true"
            >
              <h4 class="hover-button pt-3">Bio</h4>
            </i>
          </router-link>
        </div>
      </div>
      <div class="col-1 text-center pt-3">
        <div>
          <router-link :to="{ name: 'SkillsPage' }">
            <i
              class="text-white fa fa-circle-o-notch fa-lg hover-nav"
              aria-hidden="true"
            >
              <h4 class="hover-button pt-3">Skills</h4>
            </i>
          </router-link>
        </div>
      </div>
      <div class="col-1 text-center pt-3">
        <div>
          <router-link :to="{ name: 'AppsPage' }">
            <i
              class="text-white fa fa-circle-o-notch fa-lg hover-nav"
              aria-hidden="true"
            >
              <h4 class="hover-button pt-3">Apps</h4>
            </i>
          </router-link>
        </div>
      </div>
      <div class="col-1 text-center pt-3">
        <div>
          <router-link :to="{ name: 'HobbiesPage' }">
            <i
              class="text-white fa fa-circle-o-notch fa-lg hover-nav"
              aria-hidden="true"
            >
              <h4 class="hover-button pt-3">Hobbies</h4>
            </i>
          </router-link>
        </div>
      </div>
      <div class="col-1 text-center pt-3">
        <div>
          <router-link :to="{ name: 'ContactPage' }">
            <i
              class="text-white fa fa-circle-o-notch fa-lg hover-nav"
              aria-hidden="true"
            >
              <h4 class="hover-button pt-3">Contact</h4>
            </i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import anime from 'animejs/lib/anime.min.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useRoute } from 'vue-router'

AOS.init()
export default {
  name: 'Home',
  setup() {
    const route = useRoute()
    onMounted(() => {
      anime({
        targets: '.blocksRowOne',
        translateX: 0,
        delay: anime.stagger(100, { start: 1000 })
      })
      anime({
        targets: '.blocksRowTwo',
        translateX: 125,
        delay: anime.stagger(500, { start: 1000 })
      })
      anime({
        targets: '.blocksRowThree',
        translateX: 250,
        delay: anime.stagger(500, { start: 1000 })
      })
      anime({
        targets: '.blocksRowFour',
        translateX: 375,
        delay: anime.stagger(1000, { start: 1000 })
      })
    })
    return {
      route
    }
  }
}
</script>

<style scoped lang="scss">
// Hover Effects
.hover-nav:hover .hover-button {
  display: block;
  transition: 1s;
}
.hover-button {
  display: none;
}
.hover-nav:hover {
  cursor: pointer;
}
.hover-nav {
  transition: all 1s;
}
// Name Location
.name-margin {
  position: unset;
  margin-bottom: -5rem;
}
.position-a {
  position: absolute;
}
// Background Color
.bg-main {
  background-color: #000000;
}
// Squares
.square {
  border-radius: 15%;
  height: 90px;
  width: 110px;
}
.one-bg {
  background-color: #006336;
}
.two-bg {
  background-color: #02854a;
}
.three-bg {
  background-color: #029653;
}
.four-bg {
  background-color: #01c76e;
}
// Font Size
.font-large {
  font-size: 175px;
}
// Font Style
.font-jj {
  font-family: "Bebas Neue" !important;
}
</style>
