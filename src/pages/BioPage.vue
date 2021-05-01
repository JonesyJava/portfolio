<template>
  <div class="container-fluid bg-main">
    <div>
      <div class="row mt-5">
        <div class="col-4 text-white text-left">
          <h5>Hi, my name is</h5>
          <br />
          <h1>Michael Jones</h1>
          <br />
          <h2>I build websites and applications.</h2>
          <br />
          <h6>
            I'm a Boise-based full stack software developer who specializes in
            building (and sometimes designing) exceptional digital experiences.
          </h6>
        </div>
        <div class="col-8 text-center">
          <img src="../assets/img/Me2.jpg" alt="" />
        </div>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-6 text-white">
          <h6>
            My interest in technology started back in the 1995 when my family
            first brought home our very own computer. Fast-forward to 2017, I
            landed my first IT industry position as a IT Technical Recruiter.
            Turns out living vicariously through software engineers ignited an
            internal flame, so I became a software developer myself!
            <br />
            <br />
            My main focus these days is building accessible, business-minded web
            applications that provide a creative solutions and digital
            experiences for end-users.
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useRoute } from 'vue-router'

AOS.init()
export default {
  name: 'BioPage',
  setup() {
    const route = useRoute()
    return {
      route
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>
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
// Background Color
.bg-main {
  background-color: #000000;
}
</style>
