<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>

export default {
  name: 'App',
  setup() {
    return {

    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
