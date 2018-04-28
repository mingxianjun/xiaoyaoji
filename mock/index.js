import Mock from 'mockjs';

Mock.mock(
    '/api/user','get', () =>{
        let user;
        try {
            user = JSON.parse(localStorage.getItem('loginUser'))
        }catch (e){
            user = {};
        }
        return  {
            success:true,
            data:user
        }
    } );

Mock.mock(
    '/api/login','post', req =>{
        let isLoginOk = false,msg='';
        try {
            let cu_user = JSON.parse(req.body);
            let register_users = localStorage.getItem('registerUser');//{lemon@gmail.com:111111}
            if(register_users){
                let userList = JSON.parse(register_users);
                if(userList[cu_user.email]){
                    if(userList[cu_user.email] == cu_user.password)
                        isLoginOk = true;
                    else
                        msg = '邮箱/密码错误！';
                }else
                    msg = '此邮箱还未注册！';
            }else
                msg = '此邮箱还未注册！';
        }catch (e){
            msg = '邮箱/密码错误！';
        }

        return  {
            success:isLoginOk,
            msg:msg
        }
    } );

Mock.mock(
    '/api/logout','get', () =>{
        localStorage.removeItem('loginUser');
        return  {
            success:true
        }
    } );

export default { }