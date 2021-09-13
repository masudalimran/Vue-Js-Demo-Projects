<template>
    <div>
        <h1>Methods Component</h1>
        <h2> {{name}} </h2>
        <button @click="setName">Change Name</button>
        <h2> {{count}} </h2>
        <button @click="incrementCount">Count ++</button>
        <h2> {{first}} {{last}}</h2>
        <button @click="changeHero">Change Hero</button>
    </div>
</template>

<script>
import {ref,  reactive, toRefs} from 'vue'
    export default {
        name: 'Methods',
        setup(){
            const count = ref(0)
            const state = reactive({
                first: 'Bruce',
                last: 'Wayne'
            })

            function incrementCount(){
                count.value++
            }

            function changeHero(){
                state.first = 'Clark'
                state.last = 'Kent'                
            }

            return {
               count,
               incrementCount,
               ...toRefs(state),
               changeHero
            }
        },
        data(){
            return{
                name: 'Imon',
            }
        },
        methods: {
            setName(){
                console.log('Function triggered')
                this.name = 'Masud'
            } 
        }
    }
</script>

<style scoped>

</style>