<template>
  <div>
    <!-- <Greet name="Bruce" hero-name="Batman" /> -->
    <!-- <Greet name="Diana" hero-name="Wonder woman"/> -->
    <!-- <Greet name="Clark" hero-name="Superman"/> -->
    <!-- <Greet :name="name" :hero-name="occ"/> -->
    <!-- <Bye id="my-article" title='Article Title' :likes='50' :isPublished="true"/> -->
    <!-- <h3>Appcomponent Username : {{name}}</h3> -->
    <!-- <componentC/> -->
    <!-- <h1>{{name}} {{counter}}</h1> -->
    <!-- <button v-show="showButton" @click="popupOpen"> Show Popup </button> -->
    <!-- <Popup v-show="showPopup" @close="popupClose" /> -->
    <!-- <Input v-model="name"/> -->
    <!-- <Card></Card> -->
    <!-- <Card>Card Content</Card> -->
    <!-- <Card>
      <h2>Random: {{random}}</h2>
    </Card>
    <Card>
      <img src="https://picsum.photos/200" alt="Random Image">
    </Card> -->
    <Card>
      <template v-slot:header>
          <h3>Header</h3>
      </template>
      <template v-slot:content>
        <img src="https://picsum.photos/200" alt="Random Image 200">
      </template>
      <template v-slot:footer>
          <p>View Details.........</p>
      </template>
    </Card>
    <Card>
      <template v-slot:header>
          <h3>Header</h3>
      </template>
      <template v-slot:content>
        <img src="https://picsum.photos/201" alt="Random Image 201">
      </template>
      <template v-slot:footer>
          <p>View Details.........</p>
      </template>
    </Card>
    <Card>
      <template v-slot:header>
          <h3>Header</h3>
      </template>
      <template v-slot:content>
        <img src="https://picsum.photos/202" alt="Random Image 202">
      </template>
      <template v-slot:footer>
          <p>View Details.........</p>
      </template>
    </Card>
    <Card>
      <template v-slot:header>
          <h3>Header</h3>
      </template>
      <template v-slot:content>
        <img src="https://picsum.photos/203" alt="Random Image 203">
      </template>
      <template v-slot:footer>
          <p>View Details.........</p>
      </template>
    </Card>
  </div>
</template>

<script>
// import Greet from './components/Greet.vue'
// import Bye from './components/Bye.vue'
// import componentC from './components/componentC.vue'
// import Popup from './components/Popup.vue'
// import Input from './components/input.vue'
import Card from './components/Card.vue'
export default {
  name: 'App',
  components: {
    // Greet,
    // Bye,
    // componentC,
    // Popup,
    // Input,
    Card
  },
  data(){
    return{
      // name: 'Yo Imon',
      // occ: 'Web Dev', 
      // name: 'Imon',
      // showPopup: false,
      // showButton: true,
      // name: 'Before Imon',
      // counter: 0
      // name: ''
      random: Math.random().toString(36).substring(2,12),
    }
  },
  provide() {
    return{
      // username: this.name,
    }
  },
  methods: {
    // popupOpen(){
      //   this.showPopup = true
    //   this.showButton = false
    //   this.counter++
    // },
    // popupClose(name){
      //   this.showPopup = false
    //   this.showButton = true
    //   this.name = name
    // }
  },
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
body{
  background: mediumspringgreen
}
</style>
