<template>
  <div class="container-fluid bg-main">
    <div class="row justify-content-center mt-5">
      <div
        class="col-6 text-white text-center pl-3"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h1>CONTACT ME</h1>
        <br />
        <h5>
          If you'd like to make an enquiry, please feel free to get in touch,
          and I will respond as soon as possible.
        </h5>
        <br />
        <h6 class="text-color mb-2">{ HIT AN ICON }</h6>
      </div>
    </div>
    <div class="row justify-content-center pt-3">
      <div
        class="col-2 text-center li-border"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <a href="https://www.linkedin.com/in/jonesyjava/">
          <img
            class="img-size img-fluid pt-3"
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt=""
          />
        </a>
      </div>
    </div>
    <div class="row justify-content-center pt-3">
      <div
        class="col-2 text-center mt-3"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <a href="https://github.com/JonesyJava">
          <img
            class="img-size img-fluid"
            src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png"
            alt=""
          />
        </a>
      </div>
    </div>
    <div class="row justify-content-center pt-3">
      <div
        class="col-2 text-center mt-1"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <a href="mailto:jonesyjava@gmail.com?subject=Message from your Website">
          <img
            class="img-size img-fluid"
            src="https://pics.freeicons.io/uploads/icons/png/7969340901574338609-512.png"
            alt=""
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
export default {
  name: 'ContactPage',
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
.bg-green {
  background-color: #07cc73;
}
// Image Size
.img-size {
  max-height: 5rem;
  max-width: 5rem;
}
.text-color {
  color: #07cc73;
}
</style>
