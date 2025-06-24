import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Portfolio from '../views/Portfolio.vue';
import Skills from '../views/Skills.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;