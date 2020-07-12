<template>
  <div>
    <b-button v-b-modal.modal-multi-1 @click="modalShow = !modalShow">Create Recipe</b-button>



    <b-modal id="modal-multi-1" v-model="modalShow" title="Create Recipe" hide-footer>
    <stage1 @nextStage='endStage1' v-show="stage==1"/>
    <stage2 @nextStage='endStage2' @backStage='stage=1' v-show='stage==2'/>
    <stage3 @fetch='endStage3' @backStage='stage=2'  v-show='stage==3'/>
     <div>
      
            <b-progress :value="stage" :max="max" show-progress animated></b-progress>
        </div>
    </b-modal>

   
  </div>
</template>

<script>
import stage1 from '../components/Recipe/createRecipe/createRecipeStage1';
import stage2 from '../components/Recipe/createRecipe/createRecipeStage2';
import stage3 from '../components/Recipe/createRecipe/createRecipeStage3';

  export default {
    components: {stage1,stage2,stage3},
    data() {
      return {
        modalShow:false,
        max:3 ,
        stage:1,
        recipe:{
          name:'',
          time:'',
          image: "http://www.googl.com/img34.jpg",
          isGluten:false,  
          isVegaterian: false,
          ingredients:[],
          instructions:[]
        }
      }
    },
      methods: {
        nextStage(value){
          if(value<3)
            this.stage=value+1;
        }, 
         backStage(){
           if(this.stage>1)
            this.stage=this.stage-1;
        },

        saveRecipe(){
          console.log(this.recipe);
          this.modalShow=false;
        },
        
      endStage1(data){
        console.log(data);
          this.stage=2;
          this.recipe.name=data.name;
          this.recipe.time=data.time;
          this.recipe.isGluten=data.selected.some(e => e === 'isGluten');
          this.recipe.isVegaterian=data.selected.some(e => e === 'isVegaterian');
          console.log(this.recipe);
      },
        endStage2(data){
          this.stage=3;
          this.recipe.ingredients=data;
      },
      endStage3(data){
        console.log("endStage3");
        this.recipe.instructions=data;
        this.saveRecipe();
      },
      

  }
  }
</script>
<style >
.unit {
  width: 120px;
}
.countiner-amount {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: "center";
}

</style>