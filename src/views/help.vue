<template>
    <Layout id="help">
        <topNavBar/>

        <Content>
            <div class="info">
                <p>如何解决跨域访问？</p>
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