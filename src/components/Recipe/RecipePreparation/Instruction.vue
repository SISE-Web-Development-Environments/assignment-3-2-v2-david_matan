<template>
    <div class="instruction-div">
        <p>{{instruction.name}}</p>
        <Step  v-for="(step,index) in instruction.steps" :key="index" :step='step'/>
    </div>
</template>

<script>
import Step from './Step';
    export default {
        name:"Instruction",
        components:{Step},
        props:{
            instruction:{
                type:Object,
                required:true,
            }
        }
        
    }
</script>

<style >
.instruction-div{
    display: flex;
    flex-direction: column;
      align-items: center;
  justify-content: center;
}

</style>