<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <First msg="Ce zici frate?" />
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import First from './components/First.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    First
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
