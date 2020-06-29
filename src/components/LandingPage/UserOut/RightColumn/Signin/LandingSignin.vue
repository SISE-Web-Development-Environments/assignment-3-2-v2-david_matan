<template>
  <span>
      <div class="sign-in-form"> 
        <h1>Sign In Now</h1>
        <form>
            <input
            class="form-control"
            type="text"
            v-model.trim="$v.username.$model"
            :class="{'is-invalid': $v.username.$error,  'is-valid': !$v.username.$invalid }"
            placeholder="Enter User Name"
          />
        <input
            class="form-control"
            type="password"
            placeholder="Enter Password"
            v-model.trim="$v.password.$model"
            :class="{'is-invalid': $v.password.$error,  'is-valid': !$v.password.$invalid }"
          />
           <div class="invalid-feedback">
            <span v-if="incorrectAuth">
              Worng password or username
              <br />
            </span>
           </div>
        <input  type="submit" class='signin-btn' value="Sign in" v-on:click="login" :disabled="clickable"  >
        <p id="errorAlert" role="alert" v-if="error.length>0">Sorry, your password was incorrect. Please double-check your password. </p>
        <hr>
        <p>Do you not have an account?<router-link to="/signup"> Sign up</router-link></p>
        </form>
    </div>
  </span>
</template>

<script>
import {
  required,
} from "vuelidate/lib/validators";

export default {
  
  name: 'SignIn',
  data() {
    return {
        username: "",
        password: "",
        error: [],
        incorrectAuth:false
   }
 },
 validations:{
   username:{
    required
   },
  password:{
    required
  } 
 },

 
  computed: {
              clickable(){
                    if(this.password.length>4 && this.username.length>2){
                      return false; }
                    else{ return true }   
              }  
  },
 methods:{
  async login(e){
      try {
        e.preventDefault()
        const response = await this.axios.post(
          "https://david-matan-recipe-api-server.herokuapp.com/api/auth",
          {
            username: this.username,
            password: this.password
          },
        );
        if(response.status==200){
          this.$root.store.login(this.username);
          this.getFavoritd()
          window.location.reload()
          this.incorrectAuth=false;
          // this.$router.push("/");
        }
        else if(response.status==400){
          this.incorrectAuth=true;
          console.log(response.body)
        }
        console.log(response.body);
      } catch (err) {
        this.error.push(err.response);
        console.log(err.response);
      }
      
  },
  async getFavoritd(){
      try{
        const response = await this.axios.get("https://david-matan-recipe-api-server.herokuapp.com/api/profiles/myprofile")
        const userData = response.data
        localStorage.setItem('favorite',JSON.stringify(userData.favoriteRecipe))
        localStorage.setItem('watch',JSON.stringify(userData.watchedRecipe))
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
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Indie+Flower&family=Marck+Script&family=Merienda&family=Oleo+Script&display=swap');






.sign-in-form{
    width: 300px;
    margin-top:50%;
    margin-left:5%;
    margin:5vh auto;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.6);
    background: rgba(160, 160, 160, 0.5);
    padding: 20px;
    border-radius: 30px;
}

.sign-in-form h1{
    color: white;
    margin-bottom: 20px;
}
/* Clear floats after the columns */

.input-box
{
   text-align: center;
    border-radius: 20px;
    padding: 7px;
    margin: 10px 0;
    width: 100%;
    border: 1px solid #999;
    outline: none;
}


.signin-btn{
    color:#fff;
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    font-size:15px;
    margin:10px 0;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: rgb(59, 189, 59);
     opacity: 1;
}
.signin-btn:disabled{
   opacity: 0.4;
}



hr{
    width:80%;

}


p{
    color:white;
    font-size: 15px;
}



.icons{
  color:white;
  margin-left:15px;
}
#errorAlert{
  color: red;
}

</style>