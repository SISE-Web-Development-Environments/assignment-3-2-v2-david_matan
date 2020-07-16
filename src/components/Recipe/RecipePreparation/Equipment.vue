<template>
    <div class="Instructions-equipment">
        <p>{{equipment.name}}</p>

    </div>
</template>

<script>
    export default {
        name:'Equipment',
        props:{
            equipment: {
                type: Object,
                required: true 
            }
        }
        
    }
</script>

<style >

</style>