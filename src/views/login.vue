<template>
    <div class="login-box" id="loginBox">
        <router-link to="/home" class="logo"></router-link>
        <Form :model="user">
            <FormItem prop="user">
                <Input type="text" size="large" v-model="user.name" placeholder="邮箱">
                <Icon size="18" type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input size="large" type="password" v-model="user.password" placeholder="密码">
                <Icon size="18" type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button long size="large" type="primary" @click="submit('user')">登录</Button>
            </FormItem>
            <FormItem>
                <router-link to="/forget" style="margin-right: 10px">忘记密码</router-link>
                <router-link to="/register">免费注册</router-link>
                <CheckboxGroup v-model="user.remember" style="float:right">
                    <Checkbox label="记住我"></Checkbox>
                </CheckboxGroup>
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
        },
        methods:{
            submit:function (user) {
               console.log(user)
            }
        }
    }
</script>