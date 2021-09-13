export default{
    data(){
        return{
            count: 0 
        }
    },
    methods: {
        incCount(){
            console.log('increase counter')
            this.count++
        },
        resetCount(){
            console.warn("Count Resetted")
            this.count = 0
        }
    }  
}