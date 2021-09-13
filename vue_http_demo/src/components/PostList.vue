<template>
    <div>
        <button @click="getPosts" >Load Posts</button>
        <button @click="closePosts" :class="['close_button']">Close Posts</button>
        <h3 v-if="errorMessage">{{errorMessage}}</h3>
        <div v-for="post in posts" :key="post.id" :class="['result']">
            <h3>{{post.id}} : {{post.title}}</h3>
            <p>{{post.body}}</p>
            <hr>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'PostLists',
        // created() {
        //     this.getPosts()
        // },
        data(){
            return{
                posts: [],
                errorMessage: '',
            }
        },
        methods: {
            getPosts(){
                axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then((response) => {
                        console.log(response.data[0].body)
                        this.posts = response.data
                    })
                    .catch((error) => {
                        console.log(error)
                        this.errorMessage = 'Error Retrieving Data'
                    })
            },
            closePosts(){
                this.posts = [];
                console.clear();
            }
        }
    }
</script>

<style scoped>
button{
    color: white;
    font-weight: 900px;
    font-family: cursive;
    background: crimson;
    border: 3px solid crimson;
    padding: 10px;
    margin: 5px;
}

button:hover{
    border: 3px solid black;
}

.result{
    margin: auto;
    width: 60%;
    text-align: left;
}
.close_button{
    background: chocolate;
    border: 3px solid chocolate;
}

</style>