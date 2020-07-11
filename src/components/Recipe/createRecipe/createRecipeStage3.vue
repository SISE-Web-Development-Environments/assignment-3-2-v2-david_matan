<template>
    <div class="stage3">
        <itemsList bigTitle="Instrection" placeholder="Please enter the instrections"/>
    </div>
</template>

<script>
import itemsList from '../createRecipe/items-list';
    export default {
        name:"stage3",
        components:{itemsList},
        data(){
            return{
                nameState:null,
                instruction:"",
             submittedInstruction: [],
             step:1,
            }
        },
            methods: {
                 addStep(){
                     this.submittedInstruction.push({key:this.step ,instruction:this.instruction})
                     this.instruction='';
                        this.step++;
      },
      removeInstruction(key){
        this.submittedInstruction.pop(key); 
      },
      editInstruction(){

      }
            }
        
    }
</script>

<style >
</style>