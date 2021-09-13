<template>
  <template v-if="primary-start"> 
    <!-- //!Binding Text -->
    <div v-bind:class="['text']">{{greet}} {{name}}</div><!-- mustache syntax -->
    <div v-text="age" v-bind:class="['text']"></div><!-- v-text syntax -->
    <br>
    <!-- //!Binding HTML -->
    <div v-bind:class="['text']">{{greet}} {{name}}</div>
    <div v-bind:class="['text']" v-html="address"></div>
    <br>
    <!-- //!Binding Attributes -->
    <h2 v-bind:class="['text']" v-bind:id="headingId">Heading ID</h2>
    <h2 class="underline" v-bind:class="isPromoted && 'status' && 'text'">Underline Class</h2>
    <button v-bind:disabled="isDisabled" v-bind:class="['text']">Bind Button</button> 
    <h2 v-bind:class="isPromoted && 'promoted' && 'text'">Promoted Movies</h2>
    <h2 v-bind:class="isSoldOut ? 'text' : 'new'">Sold Out ? Movie </h2> <!-- condition & class -->
    <h2 :class="['new', 'promoted', 'text']">Newly Promoted Movies</h2> <!-- Multiple class -->
    <h2 :class="[isPromoted && 'promoted' && 'text', isSoldOut ? 'sold-out' : 'new']">Array Conditional Movie</h2> <!-- Multiple class Array Approach -->
    <h2 :class="{
      'promoted': isPromoted,
      'text': !isSoldOut || isSoldOut, 
      'new': !isSoldOut, 
      'sold-out': isSoldOut
    }
    ">Object Conditional Movie</h2><!-- Multiple Class Object Approach -->
    <!-- //!Inline Style -->
    <h2 v-bind:class="'text'" :style="[headerStyleObject, divColor]">Inline Style</h2>
  </template>
  <template v-if="conditionals" >
    <h2 v-if="num === 0" :class="'conditionals'">This number is Zero</h2>
    <h2 v-else-if="num < 0" :class="'neg'">This number {{num}} is Negetive</h2>
    <h2 v-else-if="num > 0" :class="'pos'">This number {{num}} is Positive</h2>
    <h2 v-else: class="'conditionals'">This is not a {{number}}</h2>
    <h2 v-show="show_if">V-SHOW</h2>
    <h2 v-if="show_if">V-IF</h2>
  </template>
  <template v-if="list">
    <template v-for="name in names" :key="name">
      <h2 v-if="name === 'Imon'">{{name}}</h2>
    </template>    
  </template>
  <!-- //!Methods -->
  <template v-if="methods">
    <h2>Add Method (2 + 8) = {{(2, 8)}}</h2>
    <h2>Add Method (2 + 8 + 12) = {{add(2, 8, 12)}}</h2>
    <h2>Multiply Method = {{multiply(10, 2)}}</h2>
  </template>
  <!-- //!Event Handling -->
  <template v-if="event">
      <h2>{{name1}}</h2>
      <div>
        <button :id="['change-name-button']" v-on:click="toggleName, alertMode()">Change Name ({{counter}})</button>
        <button :id="['reset-button']" @dblclick="resetButton">Reset</button>
      </div>
  </template>
  <!-- //!FORM HANDLING -->
  <template v-if="form"> 
    <form @submit.prevent="submitForm">
      <div>
        <pre>
          {{ JSON.stringify(formValues, null, 0)}}
        </pre>
      </div>
      <div>
        <label for="name">Name</label>
        <br>
        <input type="text" id="name" v-model.trim.lazy="formValues.name">
      </div>
      <div>
        <label for="age">Age</label>
        <br>
        <input @keyup.enter="submitForm" type="number" id="age" v-model.number="formValues.age">
      </div>
      <div>
        <label for="profile">Profile</label>
        <br>
        <textarea type="text" id="profile" v-model="formValues.profile"/>
      </div>
      <div>
        <label for="country">Country</label>
        <br>
        <select id="country" v-model="formValues.country">
          <option value="">Select A Country</option>
          <option value="bangladesh">Bangladesh</option>
          <option value="china">China</option>
          <option value="japan">Japan</option>
        </select>
      </div>
      <div>
        <label for="jobLocation">Job Location</label>
        <br>
        <select id="jobLocation" multiple v-model="formValues.jobLocation">
          <option value="bangladesh">Bangladesh</option>
          <option value="china">China</option>
          <option value="japan">Japan</option>
        </select>
      </div>
      <div>
        <input type="checkbox" id="remoteWork" v-model="formValues.remoteWork" true-value="Yes" false-value="No">
        <label for="remoteWork">Open to remote work?</label>
      </div>
      <br>
      <div>
        <label >Skill Set: </label><br>
        <input type="checkbox" id="html" value="html" v-model="formValues.skillList">
        <label for="html">HTML</label>
        <input type="checkbox" id="css" value="css" v-model="formValues.skillList">
        <label for="css">CSS</label>
        <input type="checkbox" id="js" value="js" v-model="formValues.skillList">
        <label for="js">JavaScript</label>
        <input type="checkbox" id="vue" value="vue" v-model="formValues.skillList">
        <label for="vue">Vue</label>
      </div>
      <br>
      <div>
        <label>Years Of Experience: </label><br>
        <input type="radio" id="0-2" value="0-2" v-model="formValues.yearsOfExperience">
        <label for="html">0-2</label>
        <input type="radio" id="3-4" value="3-4" v-model="formValues.yearsOfExperience">
        <label for="html">3-4</label>
        <input type="radio" id="5-6" value="5-6" v-model="formValues.yearsOfExperience">
        <label for="html">5-6</label>
        <input type="radio" id="7-8" value="7-8" v-model="formValues.yearsOfExperience">
        <label for="html">7-8</label>
      </div>
      <div>
        <button v-bind:id="['submit-button']">Submit</button>
      </div>
    </form>
  </template>
  <template v-if="compute"> 
    <div>
      <h1>FullName - {{firstName}} {{lastName}}</h1>
      <h2>Computed FullName - {{ fullName }}</h2>
      <button @click="changeFullName" :class="['add-item-button']">Change Full Name</button>
      <!-- <h1>{{items}}</h1> -->
      <button @click="items.push({id: items.id.length + 1, title: 'Watch', price: 74})" :class="['add-item-button']">Add Item</button>
      <h2>Computed Total - {{total}}</h2>
      <h2 v-for="item in expensiveItems" :key ="item.id">
        Product: {{item.title}}, Price: {{item.price}}
      </h2>
    </div>
  </template>
  <template v-if="watcher">
    <div>
      <h2>Volume Tracker (0 -20)</h2>  
      <h2>Current Volume  - {{volume}}</h2>  
    </div>
    <div>
      <button @click="incVol" v-bind:id="['change-name-button']">Increase</button>
      <button @click="decVol" v-bind:id="['reset-button']">Decrease</button>
    </div>
  </template>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      greet: 'Hello',
      name: "Masud Al Imran",
      age: '25',
      address: '<b>Bangladesh</b>',
      headingId: 'heading',
      isDisabled: true,
      status: 'danger',
      isPromoted: true,
      isSoldOut: true,
      highlightColor: 'blue',
      headerSize: 50,
      headerStyleObject: {
        color: 'green',
        'font-size': '50px',
        padding: '20px',
      },
      divColor:{
        background: 'pink',
        border: '1px solid black',
        margin: 'auto',
        width: '50%',
        padding: '5px'
      },
      'primary-start': true,
      num: Math.ceil(Math.random()* 10) - 5,
      conditionals: false,
      show_if: false,
      list: false,
      names: ['Imon', 'Saif', 'Said', 'Nadim'],
      methods: false,
      // !Event Handling
      event: false,
      name1: 'Imon',
      counter: 0,
      //!FORM HANDLING
      form: false,
      formValues: {
        name: '',
        age: null,
        profile: '',
        country: '',
        jobLocation: [],
        remoteWork: "No",
        skillList: [],
        yearsOfExperience: ''
      },
      //!Compute
      compute: false,
      firstName: 'Bruce',
      lastName: 'Wayne',
      items: [
        {
          id: 1,
          title: 'TV',
          price: 100
        },
        {
          id: 2,
          title: 'Freeze',
          price: 50
        },
        {
          id: 3,
          title: 'Mobile',
          price: 70
        }
      ],
      //!Watcher 
      watcher: true,   
      volume: 0  
    } 
  },
  methods: {
    add(n1, n2, n3){
      return n1 + n2 + n3
    },
    multiply(n1, n2){
      return n1 * n2
    },
    toggleName(){
      if(this.name1 === "Imon"){
        this.counter++
        this.name1 = "Super Imon"
      }else{
        this.counter++
        this.name1 = "Imon"
      }
    },
    resetButton(event) {
        this.counter = 0
        this.name1 = "Imon - Reset"
        console.log('Event', event.altKey )
    },
    alertMode(){
      alert(`You Sure You Want to Change name to "${this.name1}`)
    },
    submitForm(){
      console.log('Form Values', this.formValues)
    },
    changeFullName(){
      this.fullName = 'Ashraful Haque'
    },
    incVol(){
      // console.log("Increasing")
      if(this.volume <20){
        return this.volume += 1 
      } else{
        alert("Sorry 20 is the maximum number allowed") 
      }
    },
    decVol(){
      // console.log("Decresing")
      if(this.volume > 0){
        return this.volume -= 1 
      } else{
        alert("Sorry 0 is the minimum number allowed") 
      }
    },
  },
  computed:{
    fullName: {
      get(){
        return  `${this.firstName} ${this.lastName}`  
      },
      set(value){
        const name_split = value.split(' ')
        this.firstName = name_split[0];
        this.lastName = name_split[1];
      }
    },
    total(){
      return this.items.reduce((total, current) => (total += current.price),0)
    },
    expensiveItems(){
      return this.items.filter( item => item.price > 0 );
    }
  },
  watch:{
    // volume(newValue){
    //   if(newValue >= 20){
    //     confirm('20 is the Maximum Number Allowed')
    //   }
    // }
    }
  
}
</script>

<style>
#app {
  font-family:  Monospace, Cursive, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background: yellowgreen;
  /* background: lime; */
}
.underline{
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.new {
  color: green;
}
.sold-out{
  color: red;
}
.text{
  display: none;
}
.conditionals, .neg, .pos{
  background: cyan;
  margin: auto;
  width: 20%;
}
.neg{
  background: red;
  color: black
}
.pos{
  background: green;
  color: white;
}
#change-name-button, #submit-button, .add-item-button{
  background: hotpink;
  border: hotpink;
  padding: 10px;
  border-radius: 2.5%;
  font-size: 20px;
  margin: 10px
}
#change-name-button:hover, #submit-button:hover, .add-item-button{
  background: pink;
  border: 1px solid black;  
}
#reset-button{
  background: yellow;
  border: yellow;
  padding: 10px;
  border-radius: 2.5%;
  font-size: 20px
}
#reset-button:hover{
  background: #8B8000;
  border: 1px solid black;  
}
textarea{
  resize: none;
  width: 80%;
  height: 80px;
}
input, select{
  width: 80%
}
input[type='checkbox'], input[type='radio']{
  width: 2%;
  background: black;
}

</style>
