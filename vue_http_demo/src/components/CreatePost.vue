<template>
    <div>
        <form @submit.prevent="createPost">
            <div>
                <label for="userId">Post User ID</label><br>
                <input type="text" id="userId" v-model="formData.userId"> 
            </div>
            <div>
                <label for="title">Post Title</label><br>
                <input type="text" id="title" v-model="formData.title"> 
            </div>
            <div>
                <label for="body">Post Body</label><br>
                <input type="text" id="body" v-model="formData.body"> 
            </div>
            <button>Create Post</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'CreatePost',
        data() {
            return {
                formData: {
                    userId: '',
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost(){
                axios.post('https://jsonplaceholder.typicode.com/posts', this.formData)
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error))
            }
        }
    }
</script>

<style scoped>
button{
    color: white;
    font-weight: 900px;
    font-family: cursive;
    background: blue;
    border: none;
    padding: 10px;
    margin: 5px;
}

button:hover{
    border: 3px solid black;
}
form{
    text-align: center;
}

</style>