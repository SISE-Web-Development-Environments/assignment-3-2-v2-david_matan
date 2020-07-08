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