<template>
    <div>
        <h2>Data Component</h2>
        <h2>Options - {{ o_firstname }}</h2>
        <h2>Options - {{ o_firstname }} {{ o_lastname }} a.k.a {{ o_heroname }}</h2>
        <h2>Composition - {{ c_firstname }}</h2>
        <h2>Options - {{ c_firstname }} {{ c_lastname }} a.k.a {{ c_heroname }}</h2>
        <h2>Composition - {{ greet }}</h2>
        <h2>Composition - {{ greetHero }}</h2>
        <h2>Composition - {{ reactiveGreetHero }}</h2>
    </div>
</template>

<script>
import {ref, reactive} from 'vue'
    export default {
        name: 'Data',
        setup(){
            const c_firstname = ref('Clark')
            const c_lastname = ref('Kent')
            const c_heroname = ref('Superman')
            // c_firstname.value  = 'Diana'
            const greet  =`Hello ${c_firstname.value}`
            const greetHero  =`Hello ${c_firstname.value} ${c_lastname.value} a.k.a ${c_heroname.value}`
            console.log('c_firstname: ', c_firstname)
            const state = reactive({
                firstname: 'Princess',
                lastname: 'Diana',
                heroname: 'Wonder Women'
            })            

            const reactiveGreetHero = `Hello ${state.firstname} ${state.lastname} a.k.a ${state.heroname}`

            return {
                // c_firstname: c_firstname
                c_firstname,
                c_lastname,
                c_heroname,
                greet,
                greetHero,
                state,
                reactiveGreetHero,
            }
        },
        data() {
            return {
                o_firstname: 'Bruce',
                o_lastname: 'Wayne',
                o_heroname: 'Batman',
            }
        },
    }
</script>

<style scoped>

</style>