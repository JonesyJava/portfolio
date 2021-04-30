<template>
  <div class="container-fluid bg-main">
    <div>This is the BIO page</div>
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
