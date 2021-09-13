<template>
    <div :class="['article']">
        <h2>Article Component</h2>
        <h2>{{title}}</h2>
        <h2 v-bind="$attrs">Likes - {{likes}}</h2>
        <h2>Is Published - {{isPublished ? 'Yes': 'No'}}</h2>
        <h7 :class="['h7-style']">From Bye.vue</h7>
    </div>
</template>

<script>
    export default {
        name: 'Bye',
        props: {
            title: {
                type: String,
                required: true,
                default: "Article Default Title"
            },
            likes: Number,
            isPublished: Boolean
        },
        inheritAttrs: false,        
    }
</script>

<style scoped>
.article{
    border: 1px solid blue;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
}
.h7-style{
    font-size: 10px;
    color: blue;
}
</style>