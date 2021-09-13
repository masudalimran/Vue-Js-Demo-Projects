import {ref} from 'vue'
export default function UseCount(initialCount = 0, stepSize = 1){
    const count = ref(initialCount)
    function incrementCount(){
        count.value += stepSize
    }
    return {
        count, 
        incrementCount
    }
}