<template>
    <div>
        <h3>Hover Counter Component</h3>
        <button @mouseover="incCount"> Hovered {{count}} Times </button>
        <button @click="resetCount" v-bind:id="['reset-button']"> Reset Counter </button>
    </div>
</template>

<script>
import CounterMixin from '../mixins/counter'
    export default {
        name: 'HoverCounter',
        mixins: [CounterMixin]
    }
</script>

<style scoped>
button{
    color: black;
    font-weight: 900px;
    font-family: cursive;
    background: aquamarine;
    border: 3px solid aquamarine;
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
    background: mediumvioletred;
    border: 3px solid mediumvioletred;
    color: white;
}
</style>