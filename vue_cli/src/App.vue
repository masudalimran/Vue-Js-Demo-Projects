<template>
    <!-- <Data /> -->
    <div>
      <!-- <Demo1 /> -->
      <!-- <Demo2 /> -->
      <!-- <Methods /> -->
      <!-- <Vmodel /> -->
      <!-- <Computed /> -->
      <!-- <Watcher /> -->
      <!-- <ProvideInject /> -->
      <!-- <TemplateRef /> -->
      <!-- <Person /> -->
      <ClickCounter />
      <HoverCounter />
    </div>
</template>

<script>
// import Data from './components/Data.vue'
// import Demo1 from './components/Demo1.vue'
// import Demo2 from './components/Demo2.vue'
// import Methods from './components/Methods.vue'
// import Vmodel from './components/Vmodel.vue'
// import Computed from './components/Computed.vue'
// import Watcher from './components/Watch.vue'
// import ProvideInject from './components/ProvideInject.vue'
// import TemplateRef from './components/TemplateRef.vue'
// import Person from './components/Person.vue'\
import ClickCounter from './components/ClickCounter.vue'
import HoverCounter from './components/HoverCounter.vue'
export default {
  name: 'App',
  components: {
    // Data,
    // Demo1,
    // Demo2,
    // Methods
    // Vmodel
    // Computed
    // Watcher
    // ProvideInject
    // TemplateRef,
    // Person
    ClickCounter,
    HoverCounter
  }
}
</script>

<style>
#app {
  font-family: Perpetua, fantasy, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background: mediumspringgreen;
}
</style>
