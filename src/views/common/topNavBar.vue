<template>
    <Header>
        <Menu theme="dark" mode="horizontal" active-name="/home" @on-select="jumpTo">
            <div class="layout-logo" @click="jumpTo('/home')"><img src="@/assets/images/icon/logo-icon.png" width="36"/></div>
            <div class="layout-nav">
                <MenuItem name="/home">
                    <Icon type="home"></Icon>主页
                </MenuItem>
                <MenuItem name="/dashboard">
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
                <Submenu name="user" v-if="loginUser.email">
                    <template slot="title">
                        <Icon type="person"></Icon><span>{{loginUser.email.length>10?(loginUser.email.substring(0,10)+'..'):loginUser.email}}</span>
                    </template>
                    <MenuGroup :title="loginUser.email">
                        <MenuItem name="/profile"><Icon type="person"></Icon>个人中心</MenuItem>
                        <MenuItem name="/dashboard"><Icon type="ios-speedometer"></Icon>控制台</MenuItem>
                        <MenuItem name="/logout"><Icon type="log-out"></Icon>退出登录</MenuItem>
                    </MenuGroup>
                </Submenu>
                <MenuItem name="/login" v-if="!loginUser.email">
                    <Icon type="log-in"></Icon>登录
                </MenuItem>
                <MenuItem name="/register" v-if="!loginUser.email">
                    <Icon type="ios-compose-outline"></Icon>注册
                </MenuItem>
            </div>
        </Menu>
    </Header>
</template>

<script>
    import util from '@/components/utils';

    export default {
        data(){
            return {
                loginUser:{}
            }
        },
        created(){
            util.sendGet('/api/user', null, res => {
                this.loginUser = res.data || {};
            });
        },
        methods:{
            jumpTo(path){
                if(path == '/logout'){
                    util.sendGet('/api/logout',null,res=>{
                        if(res.success){
                            this.$router.push('/home');
                            location.reload();
                        }
                    });
                }else if(path == '/download'){
                    window.open('https://github.com/zhoujingjie/xiaoyaoji');
                }else
                    this.$router.push(path);
            }
        }
    }
</script>