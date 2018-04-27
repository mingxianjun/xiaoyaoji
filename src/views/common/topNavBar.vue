<template>
    <Header>
        <Menu theme="dark" mode="horizontal" active-name="/home" @on-select="jumpTo">
            <div class="layout-logo" @click="jumpTo('/home')"><img src="@/assets/image/icon/logo-icon.png" width="36"/></div>
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