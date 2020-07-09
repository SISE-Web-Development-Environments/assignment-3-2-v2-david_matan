<template>
<div class='center'>
  <SignIn/>
  </div>
  
</template>

<script>
import SignIn from '../components/Login/Login'

export default {
    name: 'Login',
    components:{
        SignIn
    },
    mounted: function () {
    this.$nextTick(function () {
      if(this.$root.store.username){
        const query = this.$route.query;
        console.log("my query"+query);
        this.$router.push(this.$route.query.redirect || '/')
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