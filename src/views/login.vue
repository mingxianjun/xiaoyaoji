<template>
    <div class="login-box" id="loginBox">
        <router-link to="/home" class="logo"></router-link>
        <Form ref="user" :model="user" :rules="ruleValidate">
            <FormItem prop="email">
                <Input type="text" size="large" v-model="user.email" placeholder="邮箱">
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
            <FormItem style="text-align: center;margin-left: -1rem">
                <Tooltip content="使用qq登录" placement="top">
                    <div class="other-type qq" @click="thirdparty()"></div>
                </Tooltip>
                <Tooltip content="使用新浪微博登录" placement="top">
                    <div class="other-type blog" @click="thirdparty()"></div>
                </Tooltip>
                <Tooltip content="使用github登录" placement="top">
                    <div class="other-type github" @click="thirdparty()"></div>
                </Tooltip>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import '@/assets/styles/login.styl';
    import util from '@/components/utils';

    export default {
        name: "login",
        data(){
            return {
                user:{email:'',password:''},
                ruleValidate:{
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        { type: 'email', message: '邮箱的格式不正确', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码至少为6位字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            submit(name) {
                this.$refs[name].validate( valid => {
                    if (valid) {
                        let user = {email:this.user.email,password:this.user.password};
                        util.sendPost('/api/login',user,res => {
                            if(res.success){
                                localStorage.setItem('loginUser',JSON.stringify(user));
                                this.$router.push('/home');
                            }else {
                                this.$Message.error(res.msg);
                                this.reset(name)
                            }
                        });
                    }
                })
            },
            reset(name){
                this.$refs[name].resetFields();
            },
            thirdparty(pluginId,openURL){
                window.open(openURL, pluginId, 'height=550, width=900, top=0, left=0, toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no');
                if (window.initialized) return true;
                window.initialized = true;
                window.addEventListener('message', function (e) {
                    var data = e.data;
                    data = JSON.parse(data);
                    // util.http('post','/login/plugin?pluginId=' + pluginId, data);
                });
            }
        }
    }
</script>