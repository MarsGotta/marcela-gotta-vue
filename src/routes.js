import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Website from './components/Website.vue'
import Habilidades from './components/Habilidades.vue'

export const routes = [
    {path: '/', component: Home},
    {path: '/contacto', component: Contact},
    {path: '/sobre-mi', component: About},
    {path: '/portfolio', component: Portfolio},
    {path: '/acerca-sitio', component: Website},
    {path: '/habilidades', component: Habilidades},
];