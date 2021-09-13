<template>
    <div>
        <h2> {{ name }} </h2>
    </div>
</template>

<script>
import {ref} from 'vue'
    export default {
        name: 'Demo1',
        setup() {
            const name = ref('Imon')
            setTimeout(() => {
                name.value = 'Masud'
                console.log("After Two Second")
            }, 5000)
            return {
                name
            }
        }
    }
</script>

<style scoped>

</style>