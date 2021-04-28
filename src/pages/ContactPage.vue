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
        <img
          class="img-size img-fluid pt-3"
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />
      </div>
    </div>
    <div class="row justify-content-center">
      <div
        class="col-2 text-center mt-3"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img
          class="img-size img-fluid"
          src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png"
          alt=""
        />
      </div>
    </div>
    <div class="row justify-content-center pt-3">
      <div
        class="col-2 text-center mt-3"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img
          class="img-size img-fluid"
          src="https://pics.freeicons.io/uploads/icons/png/7969340901574338609-512.png"
          alt=""
        />
      </div>
    </div>
    <div
      class="row justify-content-center text-white mt-5"
      data-aos="fade-up"
      data-aos-delay="1100"
      data-aos-duration="1000"
    >
      <div class="col-1 text-center">
        <div>
          <router-link :to="{ name: 'Home' }">
            <i
              class="text-white fa fa-circle-o-notch fa-lg hover-nav"
              aria-hidden="true"
            >
              <h4 class="hover-button mt-5">Home Page</h4>
            </i>
          </router-link>
        </div>
      </div>
      <div class="col-1 text-center">
        <div>
          <router-link :to="{ name: 'BioPage' }">
            <i
              class="text-white fa fa-circle-o-notch fa-lg hover-nav"
              aria-hidden="true"
            >
              <h4 class="hover-button mt-5">Bio</h4>
            </i>
          </router-link>
        </div>
      </div>
      <div class="col-1 text-center">
        <div>
          <router-link :to="{ name: 'SkillsPage' }">
            <i
              class="text-white fa fa-circle-o-notch fa-lg hover-nav"
              aria-hidden="true"
            >
              <h4 class="hover-button mt-5">Skills</h4>
            </i>
          </router-link>
        </div>
      </div>
      <div class="col-1 text-center">
        <div>
          <router-link :to="{ name: 'AppsPage' }">
            <i
              class="text-white fa fa-circle-o-notch fa-lg hover-nav"
              aria-hidden="true"
            >
              <h4 class="hover-button mt-5">Apps</h4>
            </i>
          </router-link>
        </div>
      </div>
      <div class="col-1 text-center">
        <div>
          <router-link :to="{ name: 'HobbiesPage' }">
            <i
              class="text-white fa fa-circle-o-notch fa-lg hover-nav"
              aria-hidden="true"
            >
              <h4 class="hover-button mt-5">Hobbies</h4>
            </i>
          </router-link>
        </div>
      </div>
      <div class="col-1 text-center">
        <div>
          <router-link :to="{ name: 'ContactPage' }">
            <i
              class="text-white fa fa-circle-o-notch fa-lg hover-nav"
              aria-hidden="true"
            >
              <h4 class="hover-button mt-5">Contact</h4>
            </i>
          </router-link>
        </div>
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
