<template>
<div class='center'>
  <SignIn></SignIn>
  </div>
  
</template>

<script>
import SignIn from '../components/LandingPage/UserOut/UserOutRightColumn/UserOutRightColumnSignIn/UserOutRightColumnSignIn'
export default {
    name: 'Login',
    components:{
        SignIn
    },
    mounted: function () {
    this.$nextTick(function () {
      if(this.$root.store.username){
        this.$router.push("/");
      }
    })
}

}
</script>

<style>
.center{
   padding: 5%; 
   text-align: center;
   vertical-align: middle;
}

</style>