<template>
    <div class="login-box" id="loginBox">
        <router-link to="/home" class="logo"></router-link>
        <Form :model="user">
            <FormItem prop="user">
                <Input type="text" v-model="user.name" placeholder="邮箱">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="user.password" placeholder="密码">
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('user')">登录</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import '@/assets/styles/login.styl';

    export default {
        name: "login",
        data(){
            return {
                user:{}
            }
        }
    }
</script>