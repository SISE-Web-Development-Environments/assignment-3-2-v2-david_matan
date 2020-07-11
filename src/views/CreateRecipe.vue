<template>
  <div>
    <b-button v-b-modal.modal-multi-1 @click="modalShow = !modalShow">Create Recipe</b-button>



    <b-modal id="modal-multi-1" v-model="modalShow" title="Create Recipe" hide-footer>
    <stage1 v-show="stage==1"/>
    <stage2 v-show='stage==2'/>
    <stage3 v-show='stage==3'/>
     <div>
        <b-button v-show="stage!=1" @click="backStage">Back</b-button>
       <b-button @click="nextStage" v-show="stage!=3" >Next</b-button>
      <b-button v-show="stage==3">Save</b-button>
      
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
        modalShow: false,
        isGluten: false,
        isVegetarian:false,
        amount:"",
      
        max:3 ,
        stage:1
      }
    },
      methods: {
        nextStage(){
          if(this.stage<3)
            this.stage=this.stage+1;
        }, 
         backStage(){
           if(this.stage>1)
            this.stage=this.stage-1;
        },
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      }, 
       resetModal2() {
        this.amount = ''
        this.ingredientName = ""
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
     
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
       
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
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