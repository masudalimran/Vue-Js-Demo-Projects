<template>
    <div>
        <h1>Person Component</h1>
        <input type="text" placeholder="First Name" v-model="firstName_p">
        <input type="text" placeholder="Last Name" v-model="lastName_p">
        <PersonGreeting :firstName="firstName_p" :lastName="lastName_p" @callHeros="callHeros" />
    </div>

</template>

<script>
import PersonGreeting from './PersonGreeting.vue'
import {ref} from 'vue'
    export default {
        components: {
            PersonGreeting
        },
        setup(){
            const firstName_p = ref('')
            const lastName_p = ref('')

            function callHeros(hero){
                alert(`Calling ${hero}`)
            }

            return{
                firstName_p,
                lastName_p,
                callHeros
            }
        },
        name: 'Person'
    }
</script>

<style scoped>

</style>