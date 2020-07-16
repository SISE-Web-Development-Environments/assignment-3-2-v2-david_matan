<template>
    <div class="Instruction-step">
        <div class="cont_title_preparation">
            <CheckBox/>
            <p> {{step.number}}</p>
        </div>
        <div class="cont_info_preparation">
                <div class="step-equipment-div" v-if="step.equipment.length!=0">
                <p>Equipment:   </p>
                <Equipment v-for="(eq,index) in step.equipment" :key="index" :equipment="eq" />
            </div>
            <p>{{step.step}}</p>
        
        </div>
    </div>
</template>

<script>
import Equipment from './Equipment';
import CheckBox from '../CheckBox/CheckBox'
    export default {
        name:'Step',
        components:{Equipment,CheckBox},
        props:{
            step:{
                type:Object,
                required:true
            }

        }
        
    }
</script>

<style >
.Instruction-step{
    grid-area: Instruction-step;
	color: #999;
	overflow-y: auto;
	overflow-x: hidden;
	margin: 5px;
	max-height: 100%;
	padding: 50px 60px;
	display: grid;
	grid-gap: 20px;
	grid-template-columns: 30px auto;
	grid-template-rows: repeat(4, max-content);
	line-height: 1.6;
    border-radius: 15px;
    background: rgba(0,0,0,0.6);
    width: 75%;
    

}
.cont_title_preparation >p{
   font-size: 25px;
   text-align:left;
   margin-top: -5px;
}
.cont_info_preparation p{
    text-align: left;
    font-size: 20px;
}
/* .step-equipment-div {
   display: inline;
   text-align: left;
} */





</style>