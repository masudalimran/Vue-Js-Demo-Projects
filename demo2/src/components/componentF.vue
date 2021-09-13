<template>
    <div>
        <h2>Component F</h2>
        <h3>Component F UserName : {{username}}</h3>
    </div>
</template>

<script>
    export default {
        name: 'componentF',
        inject: ['username']
    }
</script>

<style scoped>

</style>