<template>
    <div>
        <h3>Template Ref</h3>
        <input type="text" ref="inputRef" /> 
    </div>
</template>

<script>
    export default {
        name: 'TempRef',        
        mounted(){
            this.$refs.inputRef.focus()
        }
    }
</script>

<style scoped>

</style>