<template>
  <div>
    <Recipe :recipe="recipe"/>
  </div>
</template>

<script>
import Recipe from '../components/Recipe/Recipe'
export default {
    name:'RecipePage',
    components:{Recipe},
    data() {
        return {
        recipe:{}
        }
    },
    mounted(){
        this.getRecipeInformation()
    },
    methods:{
        async getRecipeInformation(){
         try{
            const type=this.$route.params.type
            const id=this.$route.params.id
            let url=""
            if(type==="spooncalur")
                url="https://david-matan-recipe-api-server.herokuapp.com/api/recipes/"
            else if(type==="user")
                    url="https://david-matan-recipe-api-server.herokuapp.com/api/recipes/userecipe/"
                    else
                         url="https://david-matan-recipe-api-server.herokuapp.com/api/recipes/familyrecipe/"
            const result = await this.axios.get(url+id)
            this.recipe=result.data
        
         }
          catch(err)
          {
            if(err.response.status===401){
            this.$root.store.username=undefined
            this.$router.push('/')
             }
          }

        }   
    }
}
</script>

<style>

</style>