<template>
    <Footer>
        <router-link to="/home">首页</router-link>
        <span class="split-line">|</span>
        <router-link to="/help">github</router-link>
        <span class="split-line">|</span>
        <router-link to="/home">在线帮助</router-link>
        <br/>
        <span :style="{marginRight:'10px'}">小幺鸡&copy;2018-2020</span>
        <router-link to="/home">蜀ICP备16012366号</router-link>
    </Footer>
</template>

<script>
export default {

}
</script>

<style scoped>
    .ivu-layout-footer {
        text-align: center;
        font-size: 12px;
    }
    .split-line{
        margin: 0 5px;
        color: #5cadff;
    }

</style>