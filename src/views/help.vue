<template>
    <Layout id="help">
        <topNavBar/>

        <Content>
            <div class="info">
                <p>如何解决跨域访问？</p>
                <p>1:服务器提供JSONP支持</p>
                <p>2:服务器提供CORS支持</p>
                <p>3:下载由小幺鸡提供的chrome插件</p>
            </div>
        </Content>

        <bottomNavBar/>
    </Layout>
</template>

<script>
    import topNavBar from '@/views/common/topNavBar';
    import bottomNavBar from '@/views/common/bottomNavBar';
    import '@/assets/styles/home.styl';

    export default {
        name:'donation',
        components:{topNavBar,bottomNavBar}
    }
</script>