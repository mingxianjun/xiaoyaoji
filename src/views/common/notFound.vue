<template>
    <div class="warp">
        <span class="title">404</span><br/>
        <span>页面失踪了！</span>
        <a href="#/home">返回首页</a>
    </div>
</template>

<script>
    export default {
        name: "not-found"
    }
</script>

<style scoped>
    .warp{
        height: 100%;
        padding-top: 20%;
        text-align: center;
        color: #fff;
        background: rgba(0, 188, 212, .55);
    }
    .warp .title{
        font-size: 100px;
    }
</style>