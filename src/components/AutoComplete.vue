<template>
    <div class="auto-complete">
        <input type="text" autocomplete="off" v-model="query" @input="filterInput" />
        <div v-if='listOfSugg && false'>
            <ul>
                <li v-for="item in listOfSugg" :key="item" @click='setInput(item)'> {{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:'autoComplte',
        data() {
            return {
                query:'',
                listOfSugg:[],
                modal:false,
            }
        },
        methods:{
           async filterInput(){
                if(this.query.length>2){
                   console.log("work");
                this.modal=true;
                try{
                    const respon = await this.axios.get('https://api.spoonacular.com/food/recipes/autocomplete',
                    {
                        params: {
                            query:this.query,
                            number:5,
                            apiKey:'d151691bb83e496d8faad3c6db0af653'
                        }
                    });
                    console.log("respon:"+ respon);
                    this.listOfSugg = respon.map((x) => x.title).filter((x) => {
                        return x.toLowerCase().startWith(this.query.toLowerCase());
                    });
                }
                catch(e){
                    console.log(e.name + ': ' + e.message);
                }
                }
            },
            setInput(item){
                this.query=item;
                this.modal=false;

            }
        }
    }
     
</script>

<style>
</style>