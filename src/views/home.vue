<style scoped>
    .layout{
        min-height: 100%;
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: url("../assets/image/logo.png") no-repeat center center;
        background-size: 100%;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="home"></Icon>
                            <router-link to="/home">主页</router-link>
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="min-height: 200px;">
                        Content
                    </div>
                </Card>
            </Content>
            <Footer class="layout-footer-center">
                <router-link to="/home">首页</router-link>|
                <router-link to="/help">github</router-link>|
                <router-link to="/home">在线帮助</router-link>|
                <span>小幺鸡©2016</span>
                <router-link to="/home">蜀ICP备16012366号</router-link>
            </Footer>
        </Layout>
    </div>
</template>
<script>
    import util from '@/components/utils';

    export default {
        name:'home',
        created(){
            this.$Loading.start();
            util.http('get','/api/user',null,(res)=>{
                this.$Loading.finish();
                console.log(res);
            });
        }
    }
</script>