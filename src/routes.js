


import Search from './views/Search.vue'
import Landing from "./views/Landing.vue"
import SignUp  from "./views/SignUp.vue"
import MyRecipes from  "./views/MyRecipes.vue"
import Login from  "./views/Login.vue"
import MyFamilyRecipe from  "./views/MyFamilyRecipe.vue"
import MyFavoriteRecipe from './views/MyFavoriteRecipe.vue'
import Recipe from "./views/Recipe.vue"

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
  },
  {
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
  }
  
];

export default routes;
