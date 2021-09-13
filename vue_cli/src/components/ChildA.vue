<template>
    <div>
        <h1>ChildA Component</h1>
        <ChildB />
    </div>
</template>

<script>
import ChildB from './ChildB.vue'
    export default {
        components: {
            ChildB
        },
        name: 'ChildA'
    }
</script>

<style scoped>

</style>