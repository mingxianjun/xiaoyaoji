<style scoped>
    .ivu-layout {
        position: relative;
        min-height: 100%;
        overflow: hidden;
    }
    .banner{
        height: 450px;
        padding: 160px 0;
        background: url("../assets/image/home-banner2.jpg") no-repeat center center;
        background-size:cover;
        text-align: center;
        color: #fff;
    }
    .banner h1{margin-top: 1rem;font-weight: normal;font-size: 2rem;}
    .btn{padding: 8px 6rem;margin-top: 2rem;font-size: 1rem;border-radius: 0;letter-spacing: 2px;transition: all 1s linear;}
    .bg-btn{color: #fff;}
    .bg-btn:hover{color: #fff;background: #fff;color: #666;border: 1px solid #fff;}
    .ivu-card-head p{font-size: 1.2rem;font-weight: normal;}
    .ivu-card-body p{line-height: 18px;margin-top: 5px;}
    .ivu-card-body p i{line-height: 18px;}

    .spe-card{background: transparent;text-align: center;}
    .spe-card .ivu-card-body p{margin-top: 1.5rem;}
    .spe-card .ivu-card-body p i{margin-right: 10px;}
    .spe-card .ivu-card-body .btn{
        margin-top: 4rem;

    }
</style>
<template>
    <Layout id="home">
        <topNavBar/>

        <Content>
            <section class="banner">
                <h1>小幺鸡，简单好用的在线接口文档管理工具</h1>
                <Button type="ghost" class="btn bg-btn">立即使用</Button>
            </section>
            <section class="white" style="padding: 2rem 0">
                <div class="wrapper">
                    <Row :gutter="16">
                        <Col span="6">
                            <Card dis-hover :bordered="false">
                                <p slot="title">在线接口测试</p>
                                <p>在线测试，方便前后端开发，降低错误率。</p>
                                <p>支持：xml、json、txt、binary、websocket</p>
                            </Card>
                        </Col>
                        <Col span="6">
                            <Card dis-hover :bordered="false">
                                <p slot="title">可视化编辑与分享</p>
                                <p>可视化编辑器，完善的分享机制，多功能导出。让接口撰写变得十分简单。</p>
                            </Card>
                        </Col>
                        <Col span="6">
                            <Card dis-hover :bordered="false">
                                <p slot="title">安全保障</p>
                                <p>基于阿里云服务器，提供安全备份系统。多家公司使用，安全证明。</p>
                            </Card>
                        </Col>
                        <Col span="6">
                            <Card dis-hover :bordered="false">
                                <p slot="title">代码开源</p>
                                <p>可离线安装到内网服务器仅供公司内部使用。</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>

            <section style="padding: 2rem;">
                <div class="wrapper">
                    <Card dis-hover :bordered="false" class="spe-card">
                        <p slot="title">如果你喜欢下面这些，那你一定会喜欢上“小幺鸡”</p>
                        <p><Icon type="checkmark"></Icon>接口在线测试，降低接口错误率</p>
                        <p><Icon type="checkmark"></Icon>>开放源码，支持任意修改</p>
                        <p><Icon type="checkmark"></Icon>简洁明了的API</p>
                        <p><Icon type="checkmark"></Icon>简单的维护更新</p>
                        <p><Icon type="checkmark"></Icon>多种导出满足不同需求</p>
                        <Button type="ghost" class="btn">立即使用</Button>
                    </Card>
                </div>
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