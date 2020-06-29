<template>
  <div class="gallery">
      <div class="title">{{this.recipe.title}}</div>
      <img v-bind:src="recipe.image" alt="Cinque Terre" width="200" height="400">
    <div class="desc">
    <div class="upper">
    <span><font-awesome-icon class="icons" icon="clock"/> {{this.recipe.readyInMinutes}}</span>
    <span><font-awesome-icon class="icons" style="color:red" icon="heart"/> {{this.recipe.aggregateLikes}}</span>
    <div>
    <span><font-awesome-icon class="icons" icon="leaf"/></span>
    <span v-if="recipe.vegetarian"><span><img style="width:20px; margin-bottom:3px; margin-left:13px" src="../../assets/V.png"/></span></span>
    <span v-else><img style="width:20px; margin-bottom:3px; margin-left:13px" src="../../assets/x.png"/></span>
    </div>
    </div> 
    <div class="bottom">
      <div v-if="this.$root.store.username">
      <span><font-awesome-icon class="icons" icon="eye" alt="eye"/></span>
      <span v-if="watch">
      <span><img style="width:20px; margin-bottom:3px; margin-left:13px" src="../../assets/V.png"/></span>
      </span>
      <span v-else>
      <img style="width:20px; margin-bottom:3px; margin-left:13px" src="../../assets/x.png"/>
      </span>
      </div>

      <div v-if="this.$root.store.username">
      <span><font-awesome-icon class="icons" style="color:yellow;" icon="star" alt="star"/></span>
      <span v-if="isInFavorites">
      <span><img style="width:20px; margin-bottom:3px; margin-left:13px;" src="../../assets/V.png"/></span>
      </span>
      <span v-else>
      <img style="width:20px; margin-bottom:3px; margin-left:4px" src="../../assets/x.png"/>
      </span>
      </div>
       <span><img style="width:20px; margin-left:17px" src="../../assets/bread.png" alt="bread"/>
      <span v-if="recipe.glutenFree"><img style="width:20px; margin-bottom:3px; margin-left:13px" src="../../assets/V.png"/></span>
      <span v-else><img style="width:20px; margin-bottom:3px; margin-left:13px" src="../../assets/x.png"/></span>
      </span>
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'PreviewRecipe',
  data(){
    return {
    isInFavorites:false,
    watch:false
  }
    },
  props: {
    recipe: {
        type: Object,
        required: true 
      }
  },
  mounted(){
    if(this.$root.username)
      this.ifExists()
  },
  methods:{
    async ifExists(){
      try{
        let favorites=localStorage.getItem("favorites")
        favorites=JSON.parse(favorites)
        if(favorites!==undefined&&favorites.toString()!==""){
        this.isInFavorites=favorites.some(favorRecipe => this.recipe.id===favorRecipe.id)
        }

        let historyWatch=localStorage.getItem("watch")
        if(historyWatch!==undefined && historyWatch!==""){
        historyWatch=JSON.parse(historyWatch)
        this.watch=historyWatch.some(watchRecipe => this.recipe.id===watchRecipe.id)
        }
      

    }
    catch(err)
    {
      console.log(err)
    }
    }
}
}

</script>

<style>
.gallery {
  align-items: center;
  margin: 20px;
  border: 1px solid white;
  float: left;
  width: 250px;
  border-radius: 15px ;
}

.upper{
 display: flex;
  justify-content: space-between;
}

.bottom{
  display: flex;
  justify-content: space-between;
}
.bb{
  align-items: center;
  margin: 20px;
  border:none;
  float: left;
  width: 230px;
}

.bb > .desc{
  background: transparent;
  border:none;
}

.bb > .title{
  background: transparent;
  border:none;
  height: 100px;
}


div.gallery:hover {
  border: 1px solid green;
  cursor: pointer;
}

div.gallery img {
  width: 100%;
  height: auto;
   border-radius: 5px;
}

div.desc {
  color:white;
  padding: 10px;
  background: rgba(0,0,0,0.7);
  display: block;
  border-bottom-right-radius: 15px ;
  border-bottom-left-radius: 15px ;
}
div.title{
  height:69px;
  text-align: center;
  color:white;
  background: rgba(0,0,0,0.7);
  border-top-right-radius: 15px ;
  border-top-left-radius: 15px ;
}

.icons{
  color:white;
  margin-left:15px;
}

p{
    color:white;
}

.text{
    margin-top:4rem;
    color:black;
    font-size: 1.5rem;
   font-family: 'Merienda', cursive;
}
</style>