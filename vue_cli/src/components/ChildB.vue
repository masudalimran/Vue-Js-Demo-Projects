<template>
    <div>
        <h1>ChildB Component</h1>
        <ChildC />
    </div>
</template>

<script>
import ChildC from './ChildC.vue'
    export default {
        components: {
            ChildC
        },
        name: 'ChildB'
    }
</script>

<style scoped>

</style>