

import Search from './views/Search.vue'
import Landing from "./views/Landing.vue"
import SignUp  from "./views/SignUp.vue"
import MyRecipes from  "./views/MyRecipes.vue"
import Login from  "./views/Login.vue"
const routes = [
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/",
    name: "landing",
    component: Landing
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: "/myrecipes",
    name: "myrecipes",
    component: MyRecipes
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

export default routes;
