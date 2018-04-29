<template>
    <div class="login-box">
        <router-link to="/home" class="logo"></router-link>
        <Form ref="user" :model="user" :rules="ruleValidate">
            <FormItem prop="name">
                <Input type="text" size="large" v-model="user.name" placeholder="姓名(团队中方别识别)">
                <Icon size="18" type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="email">
                <Input type="text" size="large" v-model="user.email" placeholder="输入邮箱(忘记密码可用此找回)">
                <Icon size="18" type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input size="large" type="password" v-model="user.password" placeholder="密码">
                <Icon size="18" type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button long size="large" type="primary" @click="submit('user')">免费注册</Button>
            </FormItem>
            <FormItem>
                <router-link to="/login">返回登录</router-link>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import util from '@/components/utils';

    export default {
        data(){
            return {
                user:{},
                ruleValidate:{
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { type: 'string',min:4, message: '姓名不能少于4个字符', trigger: 'blur' }
                    ],
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
            submit(name){
                this.$refs[name].validate( valid => {
                    if (valid) {
                        let user = {name:this.user.name,email:this.user.email,password:this.user.password};
                        util.sendPost('/api/register',user,res => {
                            if(res.success){
                                this.$Message.success('注册成功！');
                                //将用户名保存 并调回首页
                                localStorage.setItem('loginUser',JSON.stringify(user));
                            }else {
                                this.$Message.error(res.msg);
                                this.reset(name);
                            }
                        });
                    }
                })
            },
            reset(name){
                this.$refs[name].resetFields();
            }
        }
    }
</script>