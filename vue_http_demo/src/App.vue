<template>
  <div>
      <!-- <PostList /> -->
      <!-- <CreatePost /> -->
      <!-- <Parent /> -->
      <!-- <TempRef /> -->
      <ClickCounter />
      <HoverCounter />
  </div>
</template>

<script>
// import PostList from './components/PostList';
// import CreatePost from './components/CreatePost.vue'
// import Parent from './components/Parent.vue'
// import TempRef from './components/TempRef'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

export default {
  name: 'App',
  components: {
    // PostList,
    // CreatePost,
    // Parent,
    // TempRef,
    ClickCounter,
    HoverCounter,
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
body{
  background: mediumspringgreen
}
</style>
