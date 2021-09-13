<template>
    <div>
        <!-- <h4>Child Stlyes Component Text</h4> -->
        <slot name="shtyle"></slot>
    </div>
</template>

<script>
    export default {
        name: 'childStyles'
    }
</script>

<style scoped>
    h4{
        color:olivedrab
    }
</style>