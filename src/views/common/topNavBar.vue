<template>
    <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <MenuItem name="1">
                    <Icon type="home"></Icon>
                    <router-link to="/home">主页</router-link>
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="network"></Icon>
                    <router-link to="/home">在线预览</router-link>
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="help-buoy"></Icon>
                    <router-link to="/home">捐赠支持</router-link>
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="code-download"></Icon>
                    <router-link to="/home">下载源码</router-link>
                </MenuItem>
                <MenuItem name="5">
                    <Icon type="ios-help-outline"></Icon>
                    <router-link to="/home">帮助&说明</router-link>
                </MenuItem>
            </div>
        </Menu>
    </Header>
</template>

<script>
    export default {

    }
</script>
<style scoped>
    .layout-logo {
        width: 100px;
        height: 30px;
        background: url("../../assets/image/logo.png") no-repeat center center;
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
    .ivu-menu-item a{color: rgba(255,255,255,.6)}
    .ivu-menu-item:hover a{color: rgba(255,255,255,.8)}
    .ivu-menu-item-active a{color: rgba(255,255,255,1)!important;font-weight: bold;}
</style>