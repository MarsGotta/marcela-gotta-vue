<template lang="pug">
  .about.d-flex.flex-column.p-2.justify-content-center.container
    .row    
        .col-sm-12.d-flex.flex-column.align-items-center
            h1 Mis Habilidades
    .row
      .col-sm-7.d-flex.flex-column.p-2.justify-content-center.animated.fadeInLeft
        ul.skills
            li
                span.bar.html-css 
                    h3 HTML - CSS
      .col-sm-5.d-flex.flex-column.p-2.justify-content-center.animated.fadeInRight
</template>

<script>
export default {
  name: 'skills',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

</style>
