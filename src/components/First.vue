<template>
    <div class="demo">        
        <b-jumbotron>
            <h1>{{msg}}</h1>
        </b-jumbotron>
        <el-row>
            <el-col 
            :span="22" 
            :offset="1">
                <el-card>
                    <el-row>
                    </el-row>                                            
                    <el-col 
                    :span="6" 
                    :offset="0" 
                    v-for="articol in articole" :key="articol.Id">
                        <el-card :body-style="{ padding: '0px' }" shadow="hover">
                            <el-image                            
                            :src='"http://www.blog.menut.ro/assets/img/" + articol.Imagine' 
                            :fit="contain" 
                            alt="" 
                            class="image">
                            </el-image>
                            <div style="padding: 14px;">
                                <title>{{articol.Titlu}}</title>
                                <div class="bottom clearfix">
                                    <h6>un text de test. un text de test</h6>                                
                                    <el-button type="primary" icon="el-icon-view">Citeste</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>                                                
                </el-card>  
            </el-col>
        </el-row>                              
    </div>
</template>

<script>
export default {
    name: 'First',
    data() {
        return {
            articole: [],                  
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
        this.interogareServer();
        //console.log(response);
    }
}
</script>

<style>
    .image {
    width: 100%;
    height:200px; 
    display: block;
    }
    .bottom {
    margin-top: 13px;
    line-height: 12px;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }    
    .clearfix:after {
        clear: both
    }
</style>

