<template>
    <div>
        <input type="text" placeholder="First Name" v-model="firstName"><br><br>
        <input type="text" placeholder="Last Name" v-model="lastName"><br><br>

        <input type="text" placeholder="Hero Name" v-model="heroName"><br><br>
        <input type="text" placeholder="F Name" v-model="fName"><br><br>
        <input type="text" placeholder="L Name" v-model="lName">
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
    export default {
        name: 'Vmodel',
        setup(){
            const heroName = ref('')
            const state = reactive({
                fName: '',
                lName: ''
            })
            return{
                heroName,
                ...toRefs(state)

            }
        },
        data(){
            return {
                firstName: '',
                lastName: '',
            }
        }        
    }
</script>

<style scoped>

</style>