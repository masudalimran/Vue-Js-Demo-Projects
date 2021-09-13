<template>
    <div>
        <h3>Click Counter Component</h3>
        <button @click="incCount"> Clicked {{count}} Times </button>
        <button @click="resetCount" v-bind:id="['reset-button']"> Reset Counter </button>
    </div>
</template>

<script>
import CounterMixin from '../mixins/counter'
    export default {
        name: 'ClickCounter',
        mixins: [CounterMixin]
    }
</script>

<style scoped>
button{
    color: white;
    font-weight: 900px;
    font-family: cursive;
    background: blue;
    border: 3px solid blue;
    padding: 10px;
    margin: 5px;
}
button:hover{
    border: 3px solid black;
}
#reset-button:hover{
    border: 3px solid black;
}

#reset-button{
    background: crimson;
    border: 3px solid crimson;

}
</style>