<template>
    <Layout id="donation">
        <topNavBar/>

        <Content>
            <div class="info">
                <p>你的支持,是我的荣幸。</p>
                <p>如果你觉得小幺鸡还不错,可以小小的鼓励一下。</p>
                <p>捐赠的资金基本上用于带宽升级与服务器的维持。</p>
                <p>谢谢！</p>
            </div>
            <div class="donation-img"></div>
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