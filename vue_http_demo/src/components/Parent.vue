<template>
    <div>
        <h3>Parent Component</h3>
        <button @click="showChild = !showChild">Toggle Child</button>
        <Child v-if="showChild" />
    </div>
</template>

<script>
import Child from './Child.vue'
export default {
        components: {
            Child,
        },
        name: 'Parent',
        data(){
            return{
                showChild: true,
            }
        },
        beforeCreate() {
            console.log("Parent beforeCreate()")
        },
        created() {
            console.log("Parent created()")
        },
        beforeMount() {
            console.log("Parent beforeMount()")
        },
        mounted() {
            console.log("Parent mounted()")
        },
        beforeUpdate() {
            console.log("Parent beforeUpdate()")  
        },
        updated() {
            console.log("Parent updated()")
        }
    }
</script>

<style scoped>

</style>