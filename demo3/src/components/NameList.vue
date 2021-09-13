<template>
    <div>
        <h3 v-for="name in names" :key="name.firstname">
            <slot name="fullname" :firstname="name.firstname" :lastname="name.lastname"></slot>
        </h3>
    </div>
</template>

<script>
    export default {
        name: 'NameList',
        data(){
            return {
                names: [
                    {
                        firstname: 'Bruce',
                        lastname: 'Wayne'
                    },
                    {
                        firstname: 'Clark',
                        lastname: 'Kent'
                    },
                    {
                        firstname: 'Diana',
                        lastname: 'Princess'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>