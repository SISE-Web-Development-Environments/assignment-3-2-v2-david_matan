<template>
<div class='center'>
  <SignIn></SignIn>
  </div>
  
</template>

<script>
import SignIn from '../components/SingUpComp'
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