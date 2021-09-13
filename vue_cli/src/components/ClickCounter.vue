<template>
    <div>
        <button @click="incrementCount"> Increment Count On Click <span>{{ count }}</span></button>
    </div>
</template>

<script>
// import CounterMixin from '../Mixins/count'
import UserCount from '../composables/UseCount'
    export default {
        name: 'ClickCounter',
        // mixins: [CounterMixin]
        setup(){
            const{count, incrementCount} = UserCount(50, 2)
            return{
                count,
                incrementCount,
            }
        }
    }
</script>

<style scoped>
span{
    color: red;
}
button{
    padding: 10px;
    margin: 10px;
    background: pink;
    border: 2px solid pink;
    font-weight: 800px;
    font-size: 18px;
    font-family: fantasy;
}

button:hover{
    border: 2px solid black;
}
</style>