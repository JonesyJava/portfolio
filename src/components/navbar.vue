<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-main">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" src="../assets/img/navbar-logo.png" height="45" />
      </div>
    </router-link>
    <button
      class="navbar-toggler bg-dark"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'BioPage' }" class="nav-link">
            0.1 ABOUT
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'AppsPage' }" class="nav-link">
            0.2 APPS
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'HobbiesPage' }" class="nav-link">
            0.3 HOBBIES
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'ContactPage' }" class="nav-link">
            0.4 CONTACT
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

import { reactive } from 'vue'
export default {
  name: 'Navbar',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state

    }
  }
}
</script>

<style scoped>
.bg-main {
  background-color: #000000;
}
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.nav-item .nav-link {
  color: azure;
}
.nav-item .nav-link.router-link-exact-active {
  color: #01c76e;
}
</style>
