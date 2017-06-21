<template lang="pug">
  .d-flex.flex-column.p-2.justify-content-center.container
    .box-writer.row
      .col-sm-7.d-flex.flex-column.p-2.justify-content-center
        h1(class="animated bounceInDown") Hola, 
          br
          | soy Marcela Gotta, 
          br 
          | Senior Front-End Developer 
          br
          | con 9+ años de experiencia.
      .col-sm-5.d-flex.flex-column.p-2.justify-content-center.animated.bounceInUp
        .font-typer
          | {
          vue-typer(:text='["AngularJs", "Node", "VueJs", "Polymer", "EcmaScript6", "Firebase", "Ionic", "Webpack", "Cordova"]' :erase-delay='70' erase-style='backspace')
          | }
    .buttons-more.row.animated.bounceIn
      .col-sm-12
        router-link.btn.btn-primary(to="/sobre-mi") Más Sobre Mí
        router-link.btn.btn-secondary(to="/contacto") Contacto
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
  name: 'home',
  data () {
    return {
      animated: false
    }
  },
  components: {
    VueTyper
  }
}
</script>

<style lang="scss">
h1 {
  font-size: 3rem
}

.font-typer {
  text-align: center
}

.vue-typer, .font-typer {
  font-family: 'Roboto Slab', serif;
  font-size: 60px;
}

.vue-typer .custom.char {
  color: #D4D4BD;
  background-color: #9e211d;
}
.vue-typer .custom.char.selected {
  background-color: #264F78;
}

.vue-typer .custom.caret {
  width: 10px;
  background-color: #ff322b;
}

.buttons-more{
  text-align: center;
  .btn:first-child {
    margin-right: 20px;
    background: #9e211d;
    border-color: #9e211d
  }
}
</style>
