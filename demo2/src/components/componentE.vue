<template>
    <div>
        <h2>Component E</h2>
        <componentF/>
    </div>
</template>

<script>
import componentF from './componentF.vue'
    export default {
        name: 'componentE',
        components: {
            componentF,
        }
    }
</script>

<style scoped>

</style>