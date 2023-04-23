<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <myComponent @onEvent="getDataHandle" :title="appTitle" :age="appAge"/>  -->
  <myAxios/> 
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import myComponent from './components/myComponent.vue';
import myAxios from "./components/myAxios.vue"
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // myComponent,
    myAxios
  },
  methods:{
    getDataHandle(data){
      console.log(data);
    }
  },
  data(){
    return{
      appTitle:"这是app的标题",
      appAge:100
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
