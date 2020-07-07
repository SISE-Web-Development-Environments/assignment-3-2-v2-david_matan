

<<<<<<< HEAD
import Search from './views/Search.vue'
import Landing from "./views/Landing.vue"
import SignUp  from "./views/SignUp.vue"
import MyRecipes from  "./views/MyRecipes.vue"
import Login from  "./views/Login.vue"
=======
import Search from "../src/views/Search.vue"
import Landing from "../src/views/Landing.vue"
import MyRecipes from  "../src/views/MyRecipes.vue"
import MyFamilyRecipe from  "../src/views/MyFamilyRecipe.vue"
import MyFavoriteRecipe from '../src/views/MyFavoriteRecipe.vue'
import Recipe from "../src/views/Recipe.vue"
>>>>>>> 152cfe58155063d277f2e3044cd1d64aa2d0cb96
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
<<<<<<< HEAD
    path: "/login",
    name: "login",
    component: Login
=======
    path: "/myfamily",
    name: "myfamily",
    component: MyFamilyRecipe
  },
  {
    path: "/myfavorite",
    name: "myfavorite",
    component: MyFavoriteRecipe
  },
  {
    path: "/recipe/:type/:id",
    name: "recipe",
    component: Recipe
>>>>>>> 152cfe58155063d277f2e3044cd1d64aa2d0cb96
  }
  
];

export default routes;
