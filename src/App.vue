<template lang="pug">
  #app.app-init.d-flex.flex-row
    menu-principal
    router-view
    footer-pag
</template>

<script>
import menuPrincipal from './components/menu.vue'
import footerPag from './components/footer.vue'
export default {
  components: {
    menuPrincipal,
    footerPag
  },
  name: 'app',
  data () {
    return { 
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:700|Roboto:300,700');
.app-init {
  min-height: 100vh;
  background: #1b1b1b;
  color: #fff;
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-weight: 700
}
</style>
