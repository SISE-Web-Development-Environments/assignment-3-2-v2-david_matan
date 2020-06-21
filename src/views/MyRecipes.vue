<template>
  <div>
    <div class="left">
    <img class="img" src="../assets/profile.jpg" alt="Avatar">
    <div class="wrap">
    <div >
            <button class="profbtn">My Favorite Recipe<router-link to="/register"></router-link></button>
    </div>
    <div>
            <button class="profbtn">My Family  Recipe<router-link to="/register"></router-link></button>
    </div>
    </div>
    </div>
   <div class="right">
       <div class="results">
        
       </div>
   </div>  
  </div>
</template>

<script>
export default {
    name: 'MyPrivate',
    components:{
    },
    mounted() {
    this.getProfileRecipe();
    },
    methods: {
        
       async getProfileRecipe(){
           try{
            console.log('asdsa')
            const response = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/recipes",{withCredentials: true})
            console.log(response)
           }
           catch(err)
           {
              console.log(err.response.status='401')
               this.$router.push('/search')
           }
        }
    }
    
}
</script>

<style>
    .left{
        width: 25%;
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
    }
    .img {
    margin-left:10%;
    margin-top:10%;
    border-radius: 50%;
    width: 200px;
    height: 250px;
    border:2px solid white;
    }

    .profbtn{
        margin-bottom: 1rem;
        width: 150px;
        height: 45px;
        border:1px solid white;
        color:white;
        background:rgb(59, 189, 59);
        border-radius: 5px;
        font-family: 'Fjalla One', sans-serif;
        outline: none;
    }
    .wrap{
        margin-top:2rem;
        margin-left:2rem
    }
</style>