<template>
  <div>
      <div class="pattern">
          <div class="upperPattern">
              <div class="title1">{{recipe.title}}</div>
              <div class="wrapimage">
                <div class="image">
                    <img class="profileimage" :src="recipe.image">
                </div>
                <div class="wrapdetails">
                <RecipeDetails :recipe="recipe"/>
                </div>
                <div class="wrapbuttons">
                <GreenButton  type="Add To Favorites"/>
                </div>
              </div>
          </div>
          <hr class="new1">
          <RecipeIngredients :ingredients="this.recipe.ingredients"/>
           <hr class="new1">
           <RecipeInstructions :instructions="this.recipe.instructions"/>
      </div>
  </div>
</template>

<script>
import RecipeDetails from './RecipeDetails/RecipeDetails'
import RecipeInstructions from './RecipeInstructions/RecipeInstructions'
import RecipeIngredients from './RecipeIngredients/RecipeIngredients'
import GreenButton from '../GreenButton/GreenButton'
export default {
    name:'Recipe',
    components:{
        RecipeDetails,
        RecipeInstructions,
        RecipeIngredients,
        GreenButton
    },
    props:{
        recipe:{
            type:Object,
            required:true
        }
    },
}
</script>

<style>

.title1{
    font-family: 'Rubik', sans-serif;
    color:white;
    margin-top:4rem;
    font-size: 55px;
    float: left;
    margin-left:1rem;
}

.image{
    width:40%;
}
.pattern{
    height:100%;
    width:70%;
    border-radius: 15px;
    background: rgba(0,0,0,0.6);
    margin:auto;
}
.profileimage{
    border-radius: 6px;
    border:solid 0.5px white;
    -webkit-box-shadow: 0px 2px 19px 4px #FFFFFF; 
    box-shadow: 0px 2px 19px 1px #FFFFFF;
    height: 250px;
    width:300px;
    margin-left:2rem;
    margin-top:2rem;
}

.upperPattern{
    display: flex;
	flex-direction: column;
    text-align: left;
}

.wrapimage{
    display: flex;
    flex-wrap: wrap;
}

.wrapdetails{
    width:30%;
}

.wrapbuttons{
    margin-top:2rem;
}
hr.new1 {   
  margin-top: 2rem;
  border-top: 1px solid white;
  width:95%;
}


</style>