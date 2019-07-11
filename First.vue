<template>
    <div class="demo">
        <h1>{{msg}}</h1>
        <button @click='interogareServer()'>Arata Utilizatori</button>
        <ul>
            <li v-for="utilizator in utilizatoriVue" :key="utilizator.Id">
                {{utilizator.Email}}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'First',
    data() {
        return {
            utilizatoriVue: []
        }
    },
    props: {
        msg: String
    },
    methods: {
        interogareServer(){
            console.log('da')
            this.$http.post('api/hei/getServerInfo',{IdUser:20}).then(
                function(response){
                    var body = response.body
                    this.utilizatoriVue = body.Utilizatori
                }
            )
        }
    }
}
</script>

<style>
    .demo {
        color: brown;
        background-color: azure;
    }
</style>

