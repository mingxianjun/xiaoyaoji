<style scoped>
    .ivu-layout {
        position: relative;
        min-height: 100%;
        overflow: hidden;
    }
    .banner{
        height: 480px;
        padding: 180px 0;
        background: url("../assets/image/home-banner.png") no-repeat center center;
        background-size:cover;
        text-align: center;
        color: #fff;
    }
    .banner h1{font-weight: normal;font-size: 2rem;}
    .bg-btn{padding: 8px 4rem;margin-top: 2rem;color: #fff;border-radius: 0;letter-spacing: 2px;transition: background 500ms linear;}
    .bg-btn:hover{color: #fff;background: #fff;color: #666;border: 1px solid #fff;}
</style>
<template>
    <Layout>
        <topNavBar/>

        <Content>
            <section class="banner">
                <h1>小幺鸡，简单好用的在线接口文档管理工具</h1>
                <Button type="ghost" class="bg-btn">立即使用</Button>
            </section>
        </Content>

        <bottomNavBar/>
    </Layout>
</template>
<script>
    import util from '@/components/utils';
    import topNavBar from './common/topNavBar.vue';
    import bottomNavBar from './common/bottomNavBar.vue';

    export default {
        name: 'home',
        components:{topNavBar,bottomNavBar},
        created(){
            this.$Loading.start();
            util.http('get', '/api/user', null, (res)=> {
                this.$Loading.finish();
                console.log(res);
            });
        }
    }
</script>