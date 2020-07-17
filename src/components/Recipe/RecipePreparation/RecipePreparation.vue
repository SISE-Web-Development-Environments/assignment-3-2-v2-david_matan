<template>
    <div>
        <Instruction v-for="(item,index) in recipe" :key="index" :instruction="item" />
    </div>
</template>

<script>

    import Instruction from "./Instruction";
    export default {
        props:{
            id:String,
        },
        name:"recipePreparation",
        components:{Instruction,
        },
        data() {
            return {
                recipe:null
            }
        },
        methods:{
            async getRecipeInformation(){
                 try{  
                        const result = await this.axios.get(`https://api.spoonacular.com/recipes/${this.id}/analyzedInstructions?apiKey=d151691bb83e496d8faad3c6db0af653`,
                        {withCredentials:false})
                        this.recipe=result.data
                        console.log("sucess");
                      }
                        catch(err){
                            console.log(err.message)
                        }       
          }
        },
        created() {
       this.getRecipeInformation()
    },
        
    }
</script>

<style >
.title-instructions{
    margin-top: 50px;
    color: black;
}
</style>