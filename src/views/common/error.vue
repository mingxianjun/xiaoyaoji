<template>
    <div class="warp">
        <span class="title">500</span><br/>
        <span>请求出错啦！</span>
        <a href="#/home">返回首页</a>
    </div>
</template>

<script>
    export default {
        name: "error"
    }
</script>

<style scoped>
    .warp{
        height: 100%;
        padding-top: 20%;
        text-align: center;
        color: #fff;
        background: rgba(0, 188, 212, .5);
    }
    .warp .title{
        font-size: 100px;
    }
</style>