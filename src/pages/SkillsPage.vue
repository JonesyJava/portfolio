<template>
  <div class="container-fluid bg-main">
    <div class="row justify-content-center text-center">
      <div class="col-6 mt-5" data-aos="fade-down" data-aos-duration="1000">
        <h1 class="text-a">Preferred Development Tools</h1>
        <br />
        <h3 class="text-b">
          This site was made with my favorite languages and tools.
        </h3>
      </div>
    </div>
    <div class="row justify-content-around mt-5">
      <div class="col-1" data-aos="fade-right" data-aos-duration="1000">
        <div class="text-center">
          <i class="vue-color fab fa-vuejs fa-6x"></i>
        </div>
        <span><h5 class="text-center vue-color">Vue.js 3</h5></span>
      </div>
      <div class="col-1" data-aos="fade-up" data-aos-duration="1000">
        <div class="text-center">
          <i class="js-color fab fa-js-square fa-6x"></i>
        </div>
        <span><h5 class="text-center js-color">JavaScript</h5></span>
      </div>
      <div class="col-1" data-aos="fade-left" data-aos-duration="1000">
        <div class="text-center">
          <div class="text-center">
            <i class="html-color fab fa-html5 fa-6x"></i>
          </div>
          <span><h5 class="text-center html-color">HTML 5</h5></span>
        </div>
      </div>
    </div>
    <div class="row justify-content-around mt-5">
      <div class="col-1" data-aos="fade-right" data-aos-duration="1000">
        <div class="text-center">
          <i class="css-color fab fa-css3-alt fa-6x"></i>
        </div>
        <span><h5 class="text-center css-color">CSS 3</h5></span>
      </div>
      <div class="col-1" data-aos="fade-up" data-aos-duration="1000">
        <div class="text-center">
          <i class="bs-color fab fa-bootstrap fa-6x"></i>
        </div>
        <span><h5 class="text-center bs-color">Bootstrap</h5></span>
      </div>
      <div class="col-1" data-aos="fade-left" data-aos-duration="1000">
        <div class="text-center">
          <img
            class="cs-size"
            src="https://www.techbaz.org/Course/img/csharp-logo.png"
            alt=""
          />
        </div>
        <span><h5 class="text-center cs-color">C Sharp</h5></span>
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
  name: 'HobbiesPage',
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
// .hover-nav:hover .hover-button {
//   display: block;
//   transition: 1s;
// }
// .hover-button {
//   display: none;
// }
// .hover-nav:hover {
//   cursor: pointer;
// }
// .hover-nav {
//   transition: all 1s;
// }
// Background Color
.bg-main {
  background-color: #000000;
}
.text-a {
  color: #02af17;
}
.text-b {
  color: aliceblue;
}
.vue-color {
  color: #58c079;
}
.js-color {
  color: #fcdc00;
}
.html-color {
  color: #e96228;
}
.css-color {
  color: #1e90ff;
}
.bs-color {
  color: #7952b3;
}
.cs-size {
  max-block-size: 100px;
}
.cs-color {
  color: #68217a;
}
</style>
