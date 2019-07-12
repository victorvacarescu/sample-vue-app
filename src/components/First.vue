<template>
    <div class="demo">
        <h1>{{msg}}</h1>
        <!-- <button @click='interogareServer()'>Arata Utilizatori</button> -->
        <ul>
            <li v-for="articol in articole" :key="articol.Id">
                {{articol.Titlu}}
                {{articol.DataInregistrare}}
            </li>
        </ul>
        <div class="element">
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column                
                    prop="date"
                    label="Date"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="Name"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="Address">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>


<script>
export default {
    name: 'First',
    data() {
        return {
            articole: [],
            tableData: [{
                date: '12.07.2019',
                name: 'Victor',
                address: 'aici'
            }]
        }
    },
    props: {
        msg: String
    },
    methods: {
        interogareServer(){            
            this.$http.post('api/hei/getServerInfo',{}).then(
                function(response){
                    var body = response.body
                    this.articole = body.Articole
                }
            )
        }
    },
    mounted(){
        console.log('da')
        this.interogareServer();
    }
}
</script>

<style>
    .demo {
        color: brown;        
    }
</style>

