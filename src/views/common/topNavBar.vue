<template>
    <Header>
        <Menu mode="horizontal" theme="primary" active-name="/home" @on-select="jumpTo">
            <div class="layout-logo"></div>
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
        height: 60px;
        background: #2d8cf0;
    }
    .layout-logo {
        width: 100px;
        height: 30px;
        background: url("../../assets/image/icon/logo.png") no-repeat center center;
        background-size: 100%;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav {
        float: right;
    }
    .ivu-menu-item{font-size: 1rem;}
</style>