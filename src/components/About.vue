<template lang="pug">
  .about.d-flex.flex-column.p-2.justify-content-center.container
    .row
      .col-sm-7.d-flex.flex-column.p-2.justify-content-center.animated.fadeInLeft
        h1 Sobre Mí
        p Me interesé por el desarrollo web siendo muy niña. Y desde entonces he estado trabajando y programando sin parar. Me encanta lo que hago y me encanta aprender tecnologías nuevas.
        p Soy experta en Javascript, especialmente en el framework de Angular, aunque también trabajo con otros lenguajes. Me gusta trabajar con la metodología SCRUM y desarrollar un código limpio. Tengo experiencia desarrollando sitios web adaptables a cualquier dispositivo (responsive) basándome en los estándares W3C. 
        p A la hora de desarrolla me gusta utilizar SASS o PostCSS, y Pug como Template Engine. 
        p En todo lo que hago doy lo mejor de mí, y ofrezco sitios web con código limpio y optimizado para el posicionamiento en buscadores (SEO).
      .col-sm-5.col-12.d-flex.flex-column.p-2.justify-content-center.animated.fadeInRight
        picture
          img(src="../assets/me-img.png")
    .row
      .col-sm-12
        h2 Habilidades
      .col-sm-6.col-md-4.col-12.animated.bounceInUp
        ul.skills
          li
            span.bar.html5-css 
              h3 HTML5 y CSS3
          li
            span.bar.javascript 
              h3 Javascript
          li
            span.bar.angularjs 
              h3 AngularJS
          li
            span.bar.vuejs 
              h3 Vuejs
          li
            span.bar.jquery 
              h3 JQuery
          li
            span.bar.ionic 
              h3 Ionic
      .col-sm-6.col-md-4.col-12.animated.bounceInUp
        ul.skills
          li
            span.bar.cordova 
              h3 Cordova
          li
            span.bar.handelbars 
              h3 Handelbars
          li
            span.bar.sass 
              h3 SASS
          li
            span.bar.pug 
              h3 Pug
          li
            span.bar.grunt-gulp 
              h3 Gulp & Grunt
          li
            span.bar.webpack 
              h3 Webpack
      .col-sm-6.col-md-4.col-12.animated.bounceInUp
        ul.skills
          li
            span.bar.polymer 
              h3 Polymer
          li
            span.bar.bootstrap 
              h3 Bootstrap
          li
            span.bar.foundation 
              h3 Foundation
          li
            span.bar.git 
              h3 Git
          li
            span.bar.responsive 
              h3 Responsive Design
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.about {
  p {
    font-size: 1.1rem;
    font-weight: 400
  }

  picture {
    text-align: center;
    img {
      max-width: 100%;
    }
  }

  .skills {
    list-style: none;
    padding: 0;
    li {
      background-color: rgba(255, 255, 255, 0.54);
      max-width: 300px;
      height: 10px;
      border-radius: 30px;
      margin-top: 30px;
      .bar {
        width: 95%;
        background-color: #d83d34;
        display: inherit;
        height: 100%;
        border-radius: 30px;
        h3 {
          position: relative;
          top: -23px;
          font-size: 1.1rem
        }
      }
      .javascript {
          width: 93%;
        }

        .angularjs {
          width: 85%;
        }

        .jquery {
          width: 90%;
        }

        .ionic {
          width: 68%;
        }

        .cordova {
          width: 73%;
        }

        .handelbars {
          width: 80%;
        }

        .sass {
          width: 90%;
        }

        .pug {
          width: 83%;
        }

        .grunt-gulp {
          width: 75%;
        }

        .webpack {
          width: 55%;
        }

        .polymer {
          width: 45%;
        }

        .bootstrap {
          width: 95%;
        }

        .foundation {
          width: 75%;
        }

        .git {
          width: 50%;
        }

        .responsive {
          width: 82%;
        }
    }
  }
}
</style>
