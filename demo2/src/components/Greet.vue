<template>
    <div :class="['first']">
        <h2>Hello {{name}} aka {{heroName}}</h2>
        <h7 :class="['h7-style']">From Greet.vue</h7>
    </div>
</template>

<script>
    export default {
       name: 'Greet',
       props: ['name', 'heroName'] 
    }
</script>

<style scoped>
.first{
    border: 1px solid red;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
}
.h7-style{
    font-size: 10px;
    color: red;
}
</style>