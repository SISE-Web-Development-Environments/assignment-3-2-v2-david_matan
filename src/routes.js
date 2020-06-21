

import Search from "../src/views/Search.vue"
import Landing from "../src/views/Landing.vue"
import MyRecipes from  "../src/views/MyRecipes.vue"
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
    path: "/myrecipes",
    name: "myrecipes",
    component: MyRecipes
  }
];

export default routes;
