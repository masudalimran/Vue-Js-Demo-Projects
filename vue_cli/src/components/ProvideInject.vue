<template>
    <div>
        <h2>Provide Component {{name}}</h2>
        <h2>Provide Component count {{count}}</h2>
        <h2>Provide Component Hero {{firstName}} {{lastName}}</h2>

        <button @click="incCount">Increment Count</button>
        <button @click="changeName">Change Name</button>
        <ChildA />
    </div>
</template>

<script>
import {provide, ref, reactive, toRefs} from 'vue'
import ChildA from './ChildA.vue'
    export default {
        components:{
            ChildA
        },
        name: 'ProvideInject',
        setup(){
            provide('c_username','Masud')
            const count = ref(0)
            function incCount(){
                count.value ++
            }
            const state = reactive({
                firstName: 'Bruce',
                lastName: 'Wayne'
            })
            function changeName(){
                if(state.firstName == 'Bruce'){
                    state.firstName = 'Clark'
                    state.lastName = 'kent'
                }else{
                    state.firstName = 'Bruce'
                    state.lastName = 'Wayne'
                }
            }


            provide('c_count', count)
            provide('hero',state)
            provide('incrementCount', incCount)
            provide('changeName', changeName)

            return {
                count,
                ...toRefs(state),
                incCount,
                changeName
            }
        },
        data(){
            return{
                name: 'Imon'
            }
        },
        provide(){
            return{
                username: this.name
            }
        }
    }
</script>

<style scoped>

</style>