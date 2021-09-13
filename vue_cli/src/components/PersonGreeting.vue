<template>
    <div>
        <h1>Person Greeting Component</h1>
        <h2>Hello {{ fullname }}</h2>
        <button @click="sendEvent">Call Heros</button>
    </div>
</template>

<script>
import {computed} from 'vue'
    export default {
        name: 'PersonGreeting',
        setup(props, context){
            console.log(context);
            const fullname = computed(()=>{
                return `${props.firstName} ${props.lastName}`
            })
            function sendEvent(){
                context.emit('callHeros', fullname.value)
            }
            return{
                fullname,
                sendEvent
            }

        },
        props: ['firstName', 'lastName'],
        emits:['callHeros'],
        // computed: {
            //     fullname() {
        //         return `${this.firstName} ${this.lastName}`
        //     }
        // }
    }
</script>

<style scoped>

</style>