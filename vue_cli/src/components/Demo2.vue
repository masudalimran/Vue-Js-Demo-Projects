<template>
    <div>
        <h2> {{ firstname }}  {{ lastname }} </h2>
        <h2> {{ fname }}  {{ lname }} </h2>

    </div>
</template>

<script>
import { reactive, toRefs} from 'vue'
    export default {
        name: 'Demo2',
        setup() {
            const state = reactive({
                firstname: 'Imon ',
                lastname: 'Talukdar'
            })
            setTimeout(() => {
                state.firstname = 'Clark'
                state.lastname  = 'Kent'
                console.log(state)
            }, 3000)

            return toRefs(state)
        },
        data() {
            return {
                fname: 'Bruce',
                lname: 'Wayne'
            }
        }
    }
</script>

<style scoped>

</style>