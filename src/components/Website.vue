<template lang="pug">
  .website.d-flex.flex-column.p-2.justify-content-center.container
    .row
      .col-sm-12
        h1 Sobre este Sitio Web
    .row
      .col-sm-12
        p Las tecnologías implementadas para el desarrollo de este sitio web han sido:
      .col-sm-6.d-flex.flex-column.p-2.justify-content-center.animated.rotateInDownLeft
        ul.herramientas
          li
            img(src="../assets/html5-logo.png") 
            h3 HTML5
          li
            img(src="../assets/css3.png") 
            h3 CSS3
          li
            img(src="../assets/bootstrap-logo.png") 
            h3 Bootstrap
          li
            img(src="../assets/js-logo.png") 
            h3 Javascript
      .col-sm-6.d-flex.flex-column.p-2.justify-content-center.animated.rotateInDownRight
        ul.herramientas
          li
            img(src="../assets/vuejs-logo.png") 
            h3 VueJS
          li
            img(src="../assets/webpack-logo.svg") 
            h3 Webpack
          li
            img(src="../assets/pug-logo.svg") 
            h3 Pug
          li
            img(src="../assets/sass.png") 
            h3 Sass
      .col-sm-6.col-12.d-flex.flex-column.p-2.justify-content-center.animated.fadeInRight
</template>

<script>
export default {
  name: 'website',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.website {
  p {
    font-size: 1.3rem
  }
}
.herramientas {
  list-style: none;
  padding: 0;
  img {
    display: inline-block;
    max-width: 90px;
  }
  li {
    margin-bottom: 20px;
  }
  h3 {
    display: inline-block;
    vertical-align: text-top;
  }
}
</style>
