<template lang="pug">
.contact.d-flex.flex-column.p-2.justify-content-center.container
  .row
    .col-sm-12
      h1 Contacto
  .row
    .col-sm-12
      p 
        icon(name="envelope" scale="1.6")
        |  Contacta conmigo a través de mi correo marcelagotta@gmail.com
      p Si así lo deseas, puedes descargar mi CV
        icon(name="download" scale="1.6")
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.contact {
  p {
    font-size: 1.5rem
  }

  .fa-icon {
    margin: 0 5px;
    vertical-align: text-top
  }
}
</style>
