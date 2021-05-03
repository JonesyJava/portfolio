<template>
  <div class="container-fluid bg-main"></div>
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
</style>
