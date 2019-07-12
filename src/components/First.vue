<template>
    <div class="demo">
        <h1>{{msg}}</h1>

        <el-container>
            <el-main>
                <el-table
                :data="articole"
                style="width: 100%">                
                    <el-table-column                                
                        prop="Titlu"
                        label="Titlu Articol"
                        width="180">
                    </el-table-column>
                    <el-table-column                                
                        prop="DataInregistrare"
                        label="Data Articolului"
                        width="180">
                    </el-table-column>
                    <el-table-column                                
                        prop="Continut"
                        label="Continut"
                        width="180">
                    </el-table-column>       
                </el-table>
            </el-main>            
        </el-container>                          
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
            this.$http
            .post('api/hei/getServerInfo',{})
            .then(
                function(response){
                    //var body = response.body
                    this.articole = response.body.Articole
                }
            )
        }
    },
    mounted(){
        //console.log('da')
        this.interogareServer();
    }
}
</script>

<style>
    .demo {
        color: brown;        
    }
</style>

