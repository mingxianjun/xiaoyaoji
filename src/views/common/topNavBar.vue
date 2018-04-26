<template>
    <Header>
        <Menu theme="dark" mode="horizontal" active-name="/home" @on-select="jumpTo">
            <div class="layout-logo" @click="jumpTo('/home')"><img src="../../assets/image/icon/logo-icon.png" width="36"/></div>
            <div class="layout-nav">
                <MenuItem name="/home">
                    <Icon type="home"></Icon>主页
                </MenuItem>
                <MenuItem name="/demo">
                    <Icon type="network"></Icon>在线预览
                </MenuItem>
                <MenuItem name="/donation">
                    <Icon type="help-buoy"></Icon>捐赠支持
                </MenuItem>
                <MenuItem name="/download">
                    <Icon type="code-download"></Icon>下载源码
                </MenuItem>
                <MenuItem name="/help">
                    <Icon type="ios-help-outline"></Icon>帮助&说明
                </MenuItem>
            </div>
        </Menu>
    </Header>
</template>

<script>
    export default {
        methods:{
            jumpTo(path){
                this.$router.push(path);
            }
        }
    }
</script>
<style scoped>
    .ivu-layout-header{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 60px;
        background: rgba(0,0,0,.2);
        background-size: 100% 200px;
        box-shadow: 0 0 5px rgba(0,0,0,.6);
    }
    .ivu-layout-header ul{
        width: 1200px;
        margin: 0 auto;
        background: transparent;
    }
    .layout-logo {
        float: left;
        position: relative;
        padding-left: 70px;
        margin-top: 15px;
        width: 100px;
        height: 30px;
        line-height: 30px;
        background: url("../../assets/image/icon/logo-white.png") no-repeat 0 center;
        background-size: 60px;
        cursor: pointer;
    }
    .layout-nav {
        float: right;
    }
    .ivu-menu-item{font-size: 1rem;}
</style>