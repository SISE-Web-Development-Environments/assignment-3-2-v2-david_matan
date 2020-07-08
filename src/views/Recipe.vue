<template>
  <div>
    <Recipe :favorites="isInFavorites" :type="type" :recipe="recipe"/>
  </div>
</template>

<script>
import Recipe from '../components/Recipe/Recipe'
export default {
    name:'RecipePage',
    components:{Recipe},
    data() {
        return {
        recipe:{},
        type:"",
        isInFavorites:false
        }
    },
    mounted(){
        this.getRecipeInformation()
        this.ifFavoriteExists()
    },
    methods:{
        async getRecipeInformation(){
         try{
            this.type=this.$route.params.type
            const id=this.$route.params.id
            let url=""
            if(this.type==="spooncalur")
                url="https://david-matan-recipe-api-server.herokuapp.com/api/recipes/"
            else if(this.type==="user")
                    url="https://david-matan-recipe-api-server.herokuapp.com/api/recipes/userecipe/"
                    else
                         url="https://david-matan-recipe-api-server.herokuapp.com/api/recipes/familyrecipes/"
            const result = await this.axios.get(url+id)
            this.recipe=result.data
            this.lastWatchUpdate()
         }
          catch(err)
          {
            console.log(err)
            if(err.response.status===401){
            this.$root.store.username=undefined
            this.$router.push('/login')
             }
          }
        },

        lastWatchUpdate(){
          let historyWatch=localStorage.getItem("watch")
          let isWatched=false;
          if(historyWatch!==undefined && historyWatch.length!==null){
              historyWatch=JSON.parse(historyWatch)
              isWatched=historyWatch.some(recipe => {return this.$route.params.id.toString()===recipe.id.toString()})
          }
          else{
              historyWatch=[];
          }
          historyWatch.push({id:this.$route.params.id, type:this.$route.params.type})
          if(!isWatched)
          localStorage.setItem("watch",JSON.stringify(historyWatch))
    },
      ifFavoriteExists() {
        let favoritesArray=localStorage.getItem("favorites")
        favoritesArray=JSON.parse(favoritesArray)
        if(favoritesArray!==undefined&&favoritesArray.length!==0){
          this.isInFavorites=favoritesArray.some(favorRecipe => this.$route.params.id===favorRecipe.id)
        }
    },
    }
}
</script>

<style>

</style>