<template>
    <div :class="['popupStyle']">
        <h2>This is Popup</h2>
        <button @click="$emit('close', 'YO IMON')">Close Popup</button>
    </div>
</template>
<script>
    export default {
        // name: 'Popup',
        // emits: ['close'],
    }
</script>
<style scoped>
h2{
    text-decoration: underline;
}
.popupStyle{
    border: 1px solid red;
    margin: auto;
    width: 50%;
    padding: 10px;
}

</style>