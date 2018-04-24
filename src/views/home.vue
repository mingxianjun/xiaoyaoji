<style scoped>
    .layout {
        min-height: 100%;
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <topNavBar/>
            <section class="ban"></section>
            <Content>
                <Card>
                    <div style="min-height: 200px;">
                        Content in here
                    </div>
                </Card>
            </Content>
            <bottomNavBar/>
        </Layout>
    </div>
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