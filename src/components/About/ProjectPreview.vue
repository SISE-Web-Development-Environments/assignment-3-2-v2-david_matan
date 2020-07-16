<template>
 <div @click="linkToProject" class="polaroid">
        <img :src="require('../../assets/'+img)" style="width:100%;" />
        <div class="container">
          <p>{{title}}</p>
        </div>
      </div>
</template>

<script>
    export default {
        name:'projectPreview',
        props:{
            img:String,
            title:String,
            url:String
        },
        
        methods:{
            linkToProject(){
                window.open(this.url,'mywindow');
            }
        }       
    }

</script>

<style>

</style>