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
                        <p><Icon type="checkmark"></Icon>开放源码，支持任意修改</p>
                        <p><Icon type="checkmark"></Icon>简洁明了的API</p>
                        <p><Icon type="checkmark"></Icon>简单的维护更新</p>
                        <p><Icon type="checkmark"></Icon>多种导出满足不同需求</p>
                        <Button type="ghost" class="btn">立即使用</Button>
                    </Card>
                </div>
            </section>

            <section style="padding: 3rem;background: #0f6ecd;">
                <div class="contact-box">
                    <Row :gutter="16">
                        <Col span="8">
                            <Card dis-hover :bordered="false" style="background: transparent;">
                                <img src="@/assets/images/icon/qq.png" width="80" height="60"/>
                                <p><span>qq群：</span><a href="//shang.qq.com/wpa/qunwpa?idkey=3ef7d12c9bd722026c6a61318335246216421cd6a6851b0e8e3916dac297b3e7">336075459</a></p>
                            </Card>
                        </Col>
                        <Col span="8">
                            <Card dis-hover :bordered="false" style="background: transparent;">
                                <img src="@/assets/images/icon/sina-blog.png" width="80" height="60"/>
                                <p><a href="http://weibo.com/2727734575" target="_blank">iAm凉粉</a></p>
                            </Card>
                        </Col>
                        <Col span="8">
                            <Card dis-hover :bordered="false" style="background: transparent;">
                                <img src="@/assets/images/icon/email.png" width="80" height="60"/>
                                <p><a href="mailto:xiaoyaoji@zhoujingjie.cn">xiaoyaoji@zhoujingjie.cn</a></p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
        </Content>

        <bottomNavBar/>
    </Layout>
</template>
<script>
    import topNavBar from '@/views/common/topNavBar.vue';
    import bottomNavBar from '@/views/common/bottomNavBar.vue';
    import '@/assets/styles/home.styl'

    export default {
        name: 'home',
        components:{topNavBar,bottomNavBar}
    }
</script>