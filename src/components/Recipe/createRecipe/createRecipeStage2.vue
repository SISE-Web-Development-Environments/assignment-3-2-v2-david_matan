<template>
    <div class="c-2">
        <b-form-group
        id='input-product'
            label="Product"
        
        >
            <b-form-input
                 :state="validateState('name')"
             name="product-input"
            v-model="$v.productName.$model"
            label-for="product-input"
             aria-describedby="product-input-live-feedback"
                id="product-input"
                required
            ></b-form-input>
              <b-form-invalid-feedback
          id="product-input-live-feedback"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            label="Amount"
            label-for="Amount-input"
            invalid-feedback="Amount is required"
        >
            <b-form-input
                id="amount-input"
                type="number"
                v-model="amount"
                min="0"
                required
                positiveNumber
            ></b-form-input>
        </b-form-group>
        <b-form-group label="Unit" label-for="unit-input">
            <b-form-select
                id="unit-input"
                class="unit"
                label="unit"
                v-model="selectedMeasurement "
                :options="optionsMeasurement"
            ></b-form-select>
        </b-form-group>

        <b-button @click="addIngredient()">Add</b-button>

        <div class="mt-3">
            <h1>Ingredients</h1> 
            <ul class="mb-0 pl-3">
                <li v-for="ingredient in submittedIngredient" :key="ingredient.key">
                    {{ ingredient.key +', amount:'+ ingredient.amount }}
                    <font-awesome-icon @click="removeIngredient(ingredient.key)" icon="times" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required} from "vuelidate/lib/validators";
    export default {
        mixins: [validationMixin],
        name:"stage2",
        data(){
        return{
                amount:"",
                  productName:"",
             submittedIngredient: [],
                optionsMeasurement:[  { value: null, text: 'None' },
          { value: 'oz', text: 'oz' },
          { value: 'grams', text: 'grams' },],
        selectedMeasurement:'None',

            }
        },
          validations: {
               amount: {
        required
      },
      productName:{
          required
      }
      

  },
            methods: {
                 addIngredient(){
         this.submittedIngredient.push({key:this.productName ,amount:this.amount})
         this.productName='';
         this.amount='';
      },
      removeIngredient(key){
       
        this.submittedIngredient.pop(key);
        
      },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        name: null,
        time: null
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      alert("Form submitted!");
    }
  }
        
    }
</script>

<style >

</style>