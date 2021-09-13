<template>
    <div>
        <h1 @mouseover="incrementCount"> Increment Count On Hover <span>{{count}}</span> </h1>
    </div>
</template>

// <script>
import UserCount from '../composables/UseCount.js'
// import CounterMixin from '../Mixins/count'
    export default {
        name: 'HoverCount',
        // mixins: [CounterMixin]
        setup(){
            const{count, incrementCount} = UserCount(32,8)
            return{
                count,
                incrementCount,
            }
        }
    }
</script>

<style scoped>
span{
    color: red
}
</style>