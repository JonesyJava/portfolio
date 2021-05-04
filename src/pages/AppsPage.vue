<template>
  <div class="container-fluid bg-main">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="text-a">Noteworthy Applications</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6 text-center">
        <h3 class="text-b">
          Check Out My <a href="https://github.com/JonesyJava"> GitHub </a> For
          More
        </h3>
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
  name: 'AppsPage',
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
a {
  text-decoration: none;
  color: #02af17;
  position: relative;
}
a:hover::after {
  top: 0%;
}
a::after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 60%;
  left: -0.1em;
  right: -0.1em;
  bottom: 0;
  transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
  background-color: rgb(0 207 79 / 50%);
}
</style>
