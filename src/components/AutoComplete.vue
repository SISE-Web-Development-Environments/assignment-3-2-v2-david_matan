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
                if(this.query.lenth()>2){
                try{
                    const respon = await this.axious.get('https://api.spoonacular.com/food/recipes/autocomplete',
                    {
                        params: {
                            query:this.query,
                            number:5,
                            apiKey:'d151691bb83e496d8faad3c6db0af653'
                        }
                    });
                    this.listOfSugg = respon.map(({ title }) => title).filter(item => {
                        return item.toLowerCase().startWith(this.query.toLowerCase());
                    });
                }
                catch(err){
                    console.log(err);
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