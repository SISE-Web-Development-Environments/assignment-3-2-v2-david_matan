<template>
  <div>
    <div class="left">
    <div class="myrecipetitle"><h1>Your Personally Recipes</h1></div>
    <img class="img" :src=$root.store.profilePicture alt="Avatar">
    <div class="wrap">
    <div >
        <GreenButton type="My Favorite Recipe"/>
    </div>
    <div>
       <GreenButton type="My Family Recipe"/>
    </div>
    </div>
    </div>
   <div class="right">
       <div class="results">
        <div class="results" v-if="this.myRecipes.length!==0">
        <span v-for="recipe in this.myRecipes" :key="recipe.id" class="recipes">
              <Result :recipe="recipe" :class="{userecipesummery:true}" />
        </span>
        </div>
        <div v-else>
            <NoResults :message="'No Recipes found. Create your first Recipe'" :class="{norecipesexists:true, addBton:true}"/> 
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
    name: 'MyPrivate',
    data() {
        return {
            myRecipes:[]
        }
    },
    components:{
        Result,
        NoResults,
        GreenButton
    },
    mounted() {
    this.getProfileRecipe();
    },
    methods: {

       async getProfileRecipe(){
           try{
            this.myRecipes=[]
            const response = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/recipes",{withCredentials: true})
            this.myRecipes=response.data.preview;
           }
           catch(err)
           {
             if(err.response.status===401){
                 this.$root.store.username=undefined
               this.$router.push('/login')
             }
           }
        }
    }
    
}
</script>

<style >
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
</style>