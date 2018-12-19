import MyGame from '../pages/MyGame.vue';
import MyWebsite from '../pages/MyWebsite.vue';



const routes = [
  {
    path: '/game',
    name: 'app-first-router',
    component: MyGame
   }, 
   {
    path: '/website',
    name: 'app-first-router',
    component: MyWebsite
   }
];

export default {
  routes
};
