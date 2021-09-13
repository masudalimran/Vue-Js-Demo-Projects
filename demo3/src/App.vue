<template>
  <div>
    <div>

          <!-- <h2>First Name + Last Name</h2>
    <NameList>
      <template v-slot:fullname="slotProps">
          {{slotProps.firstname}} {{slotProps.lastname}}  
      </template>
    </NameList>
    <hr>
          <h2>Last Name + First Name</h2>
    <NameList>
      <template v-slot:fullname="slotProps">
          {{slotProps.lastname}} {{slotProps.firstname}}  
      </template>
    </NameList>
    <hr>
          <h2>First Name</h2>
    <NameList>
      <template v-slot:fullname="slotProps">
          {{slotProps.firstname}}  
      </template>
    </NameList> -->
    <!-- <h4>App Component Text</h4>
    <childStyles>
      <template v-slot:shtyle>
        <h4>Has Child Componenet Text</h4>
      </template>
    </childStyles> -->
    </div>
    <div>
      <teleport to='#portal-root' >
        <Portal/>
      </teleport>
    </div>
  </div>
</template>

<script>
// import NameList from './components/NameList.vue'
// import childStyles from'./components/childStyles.vue'
import Portal from './components/Portal.vue'
export default {
  name: 'App',
  components: {
    // NameList,
    // childStyles,
    Portal,
  }
  
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background: mediumspringgreen;
}
/* h2{
  color: red
} */
h4{
  color: orange;
}
</style>
