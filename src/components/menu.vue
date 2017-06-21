<template lang="pug">
#menuPrincipal.menu-principal
  header.d-flex.flex-column
    picture.logo.p-2
      img(src="../assets/logo-menu.png")
    nav.menu-principal
      ul
        li
          b-tooltip(content="Inicio" placement="right")
            router-link(to="/") 
              icon(name="home" scale="1.6")
        li
          b-tooltip(content="Sobre Mí" placement="right")
            router-link(to="/sobre-mi") 
              icon(name="user" scale="1.6")
        //li
          b-tooltip(content="Habilidades" placement="right")
            router-link(to="/habilidades") 
              icon(name="cogs" scale="1.6")
        li
          b-tooltip(content="Mi Lab" placement="right")
            router-link(to="/portfolio")
              icon(name="flask" scale="1.6")
        li
          b-tooltip(content="Sobre esta web" placement="right")
            router-link(to="/acerca-sitio") 
              icon(name="code" scale="1.6")
        li
          b-tooltip(content="Contacto" placement="right")
            router-link(to="/contacto") 
              icon(name="envelope" scale="1.6")
    nav.redes-sociales.p-2
      ul
        li
          a(href="")
            icon(name="linkedin" scale="1.3")
        li
          a(href="")
            icon(name="github" scale="1.3")
        li
          a(href="")
            icon(name="twitter" scale="1.3")
</template>

<script>
  export default {
  
    name: 'menuPrincipal',
  
    data() {
  
      return {}
  
    }
  
  }
</script>

<style lang="scss">
.menu-principal {
  width: 60px;
  background: #000;
  z-index: 99;
  header {
    justify-content: space-between;
    height: 100%;
  }
  .logo img{
    max-width: 100%;
  }

  li {
    list-style: none;
    text-align: center;
    a {
      color: #505050;
      padding: 15px;
      &:hover {
        color: #ce0000
      }
    }
  }

  ul {
    padding: 0
  }
}
</style>
