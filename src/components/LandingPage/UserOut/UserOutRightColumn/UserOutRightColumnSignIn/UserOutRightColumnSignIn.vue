<template>
  <SignIn/>
</template>

<script>
import SignIn from '../../../../Login/Login'
export default {
  name: 'SignInRightColumn',
  components:{
        SignIn
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