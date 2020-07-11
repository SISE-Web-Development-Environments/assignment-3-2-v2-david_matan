<template>
     <span v-if="favorites">
     <button :disabled="favorites" class="profbtn">Already In Favorties<router-link to="/register"></router-link></button>
     </span>
     <span v-else>
      <button  class="profbtn">{{type}}<router-link to="/register" @click="$emit('addtofavor')"></router-link></button>   
     </span>
</template>

<script>
export default {
    name:'GreenButton',
    props:{
        type:{
            type:String,
            required:true
        },
        favorites:{
            type:Boolean,
        }
    }
}
</script>

<style >
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
.profbtn:focus{
    outline: none;
}
</style>