<template>
    <div>
        <h1>ChildC Component</h1>
        <h2>ChildC Component Inject {{ username }}</h2>
        <h2>ChildC Component Inject Composition username {{ childUsername }}</h2>
        <h2>ChildC Component Inject Composition count {{ childCount }}</h2>
        <h2>ChildC Component Inject Composition hero {{ firstName }} {{ lastName }}</h2>
        <button @click="incrementCount">Increment Child Button</button>        
        <button @click="changeNameChild">Change Name Child Button</button>        
    </div>
</template>

<script>
import {inject, toRefs} from 'vue'
    export default {
        name: 'ChildC',
        setup(){
            const childUsername = inject('c_username','Default username')
            const childCount = inject('c_count', 0)
            const childHero = inject('hero', {})
            const incrementCount = inject('incrementCount')
            const changeNameChild = inject('changeName')
            return {
                childUsername,
                childCount,
                ...toRefs(childHero),
                incrementCount,
                changeNameChild
            }
        },
        inject: ['username']
    }
</script>

<style scoped>

</style>