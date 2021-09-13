<template>
    <div>
        <input type="text" placeholder="First name" v-model="fName">
        <input type="text" placeholder="Last name" v-model="lName">
        <h2>Optional Full name :  {{  fullName }}</h2>
        
        <input type="text" placeholder="Ref First name" v-model="refFirstName">
        <input type="text" placeholder="Ref Last name" v-model="refLastName">
        <h2>Ref Full name :  {{  refFullName }}</h2>

        <input type="text" placeholder="Reactive First name" v-model="reactiveFirstName">
        <input type="text" placeholder="Reactive Last name" v-model="reactiveLastName">
        <h2>Reactive Full name :  {{  reactiveFullName }}</h2>
    </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from 'vue'
    export default {
        name: 'Computed',
        setup(){
            const refFirstName = ref('')
            const refLastName = ref('')
            const refFullName = computed(function(){
                return `${refFirstName.value} ${refLastName.value}`
            }) 

            const state = reactive({
                reactiveFirstName: '',
                reactiveLastName: ''
            })

            const reactiveFullName = computed(function(){
                return `${state.reactiveFirstName} ${state.reactiveLastName}`
            })

            return {
                refFirstName,
                refLastName,
                refFullName,
                ...toRefs(state),
                reactiveFullName
            }
        },
        data(){
            return{
                fName: '',
                lName: ''
            }
        },
        computed: {
            fullName(){
                return `${this.fName} ${this.lName}`
            }
        }
    }
</script>

<style scoped>
input{
    padding: 5px;
    margin: 10px;
}
/* h2{
    text-align: left;
    margin-left: 41%;
} */
</style>