<template>
    <div class="login-box">
        <router-link to="/home" class="logo"></router-link>
        <Form ref="user" :model="user" :rules="ruleValidate">
            <FormItem prop="email">
                <Input type="text" size="large" v-model="user.email" placeholder="请输入注册邮箱">
                <Icon size="18" type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button long size="large" type="primary" @click="submit('user')">找回密码</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                user:{},
                ruleValidate:{
                    email:[
                        {required:true,message:'请输入邮箱',trigger:'blur'}
                    ]
                }
            }
        },
        methods:{
            submit(name){}
        }
    }
</script>