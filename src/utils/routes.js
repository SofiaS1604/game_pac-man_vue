import MyGame from '../pages/MyGame.vue';
import MyWebsite from '../pages/MyWebsite.vue';
import Game from '../pages/Game.vue';


const routes = [
  {
    path: '/game1',
    name: 'app-first-router',
    component: MyGame
   }, 
  {
    path: '/website',
    name: 'app-first-router',
    component: MyWebsite
  },
  {
    path: '/game2',
    name: 'app-first-router' , 
    component: Game
  }
];

export default {
  routes
};
