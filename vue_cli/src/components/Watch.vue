<template>
    <div>
        <h2>This is Watcher Component</h2>
        <input type="text" placeholder="Name" v-model="name">
        <br>
        <input type="text" placeholder="Ref Name First" v-model="refFirstName">
        <input type="text" placeholder="Ref Name Last" v-model="refLastName">
        <br>
        <input type="text" placeholder="Reactive Name First" v-model="fname">
        <input type="text" placeholder="Reactive Name Last" v-model="lname">
        <input type="text" placeholder="Reactive Options Hero name" v-model="options.heroName">
    </div>
</template>

<script>
import {ref, watch, reactive, toRefs} from 'vue'
import _ from 'lodash'
    export default {
        name: 'Watcher',
        setup(){
            const state = reactive({
                fname: '',
                lname: '',
                options: {
                    heroName: ''
                }
            })

            watch(() => _.cloneDeep(state.options),
            function(newValue, oldValue){
                console.log('Old Value: ', oldValue)
                console.log('New Value: ', newValue)
            },
            {
                deep: true   
            })
            const refFirstName = ref('')
            const refLastName = ref('')
            watch(([refFirstName, refLastName]), (newValue, oldValue) => {
                console.log('Old Value: ', oldValue[0])
                console.log('Old Value: ', oldValue[1])
                console.log('New Value: ', newValue[0])
                console.log('New Value: ', newValue[1])
                
            },
            {
               immediate: true,
            }
            )
            return {
                refFirstName,
                refLastName,
                ...toRefs(state)
            }
        },
        data(){
            return{
                name: '',
            }
        },
        watch:{
            name(newValue, oldValue){
                console.log('New Value: ', newValue)
                console.log('Old Value: ', oldValue)
            }
        }
    }
</script>

<style scoped>
input{
    margin: 5px;
}
</style>