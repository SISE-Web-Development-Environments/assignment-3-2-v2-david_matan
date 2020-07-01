<template>
  <div>
    <div class="left">
    <div class="myrecipetitle"><h1>Your Favorite Recipes</h1></div>
    <img class="img" src="../assets/profile.jpg" alt="Avatar">
    <div class="wrap">
    <div >
           <GreenButton type="My Private Recipe"/>
    </div>
    <div>
           <GreenButton type="My Family Recipe"/>
    </div>
    </div>
    </div>
   <div class="right">
       <div class="results">
        <div class="results" v-if="this.myFavoriteRecipes.length!==0">
        <span v-for="recipe in this.myFavoriteRecipes" :key="recipe.id" class="recipes">
              <router-link :to="{ name: 'recipe', params: {type:recipe.type,id: recipe.id}}"><Result class="hover" :recipe="recipe" :class="{userecipesummery:true}" /></router-link>
        </span>
        </div>
        <div v-else>
            <NoResults :message="'No Recipes found.'" :class="{norecipesexists:true, addBton:true}"/> 
            <button style="margin-top:2%" class="profbtn">Share your secrets</button>
        </div>
       </div>
   </div>  
  </div>
</template>

<script>
import Result from '../components/Search/SearchResult/SearchResult'
import NoResults from '../components/NoResults/NoResults'
import GreenButton from '../components/GreenButton/GreenButton'
export default {
    name: 'MyFavorite',
    data() {
        return {
            myFavoriteRecipes:[]
        }
    },
    components:{
        Result,
        NoResults,
        GreenButton
    },
    mounted() {
    this.getFavoriteRecipes();
    },
    methods: {
        
       async getFavoriteRecipes(){
           try{
            const response = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/profiles/myprofile")
            let myFavoritedIds=response.data.favoriteRecipe;
            this.myFavoriteRecipes= await Promise.all(myFavoritedIds.map(async (recipeInfo) =>{
                if(recipeInfo.type==="spooncalur"){
                    let result = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/recipes/"+recipeInfo.id)
                    result.data.type="spooncalur"
                    return result.data
                }
                else if(recipeInfo.type==="user"){
                        let result = (await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/recipes/userecipe/"+recipeInfo.id))
                        result.data.type="user"
                        return result.data
                    }
                else if(recipeInfo.type==="family"){
                        let result = (await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/recipes/userecipe/"+recipeInfo.id))
                        result.data.type="family"
                        return result.data
                        }       
             }
            ))
           }
           catch(err)
           {
             if(err.response.status===401){
                 this.$root.store.username=undefined
                 console.log('asd')
                 this.$router.push('/')
             }
              console.log(err.response)
           }
        }
    }
    
}
</script>

<style>
    .left{
    width: 25%;
    float: left;
    background: url('../assets/black-background.jpg') ;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    border-top-right-radius: 10%;
    border-bottom-right-radius: 10%;
    height: 90vh;
    border-right: 0.5px solid white;
    box-shadow: 1px 0px 43px white;
}
    .right{
    width:75%;
    float:left;

    }
    .img {
    margin-left:10%;
    margin-top:10%;
    border-radius: 50%;
    width: 200px;
    height: 250px;
    border:2px solid white;
    }

    .wrap{
    margin-top:2rem;
    margin-left:2rem
    }

    .myrecipetitle{
    margin-top:2rem;
    opacity: 0.7;
    font-family: 'Fjalla One', sans-serif;
    color:White;
    }

    .hover:hover{
    -moz-box-shadow: 0 0 10px white;
    -webkit-box-shadow: 0 0 10px white;
    box-shadow: 0 0 10px white;
    cursor: pointer;
    }
</style>