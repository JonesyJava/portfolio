<template>
  <div class="container-fluid bg-main">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4"></div>
      <div class="col-4"></div>
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
</style>
