<template>
    <div class="card">
        <!-- <slot><button>Default Content</button></slot> -->
        <div class="card-header">
            <slot name="header"></slot>
        </div>
        <div class="card-content">
            <slot name="content"></slot>
        </div>
        <div class="card-footer">
            <slot name="footer"></slot>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Card',
    }
</script>

<style scoped>
    .card{
        background: rgb(188, 208, 233);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        padding: 16px;
        margin-bottom: 20px;
        margin-left: 10px;
        width: 200px;
        display: inline-block;
        vertical-align: top;
    }
    .card:hover{
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
</style>