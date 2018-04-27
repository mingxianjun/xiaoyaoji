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
                <Submenu name="user" v-if="loginUser.name">
                    <template slot="title">
                        <Icon type="person"></Icon><span>{{loginUser.name.length>10?(loginUser.name.substring(0,10)+'..'):loginUser.name}}</span>
                    </template>
                    <MenuGroup :title="loginUser.name">
                        <MenuItem name="/profile"><Icon type="person"></Icon>个人中心</MenuItem>
                        <MenuItem name="/dashboard"><Icon type="ios-speedometer"></Icon>控制台</MenuItem>
                        <MenuItem name="/logout"><Icon type="log-out"></Icon>退出登录</MenuItem>
                    </MenuGroup>
                </Submenu>
                <MenuItem name="/login" v-if="!loginUser.name">
                    <Icon type="log-in"></Icon>登录
                </MenuItem>
                <MenuItem name="/register" v-if="!loginUser.name">
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
            this.$Loading.start();
            util.http('get', '/api/user', null, res=> {
                this.$Loading.finish();
                this.loginUser = res.data || {};
            });
        },
        methods:{
            jumpTo(path){
                if(path == '/logout'){
                    util.http('get', '/api/logout',null,res=>{
                        if(res.success){
                            this.$router.push('/home');
                            location.reload();
                        }
                    });
                }else
                    this.$router.push(path);
            }
        }
    }
</script>