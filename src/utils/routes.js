import MyGame from '../pages/MyGame.vue';
import MyHome from '../pages/MyHome.vue';


const routes = [
  {
    path: '/game',
    name: 'app-first-game',
    component: MyGame
   },
  {
    path: '/home',
    name: 'app-first-page',
    component: MyHome
   }
];

export default {
  routes
};
