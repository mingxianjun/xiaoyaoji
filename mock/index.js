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
    '/api/login','post', (res,req) =>{
        console.log(res);
        console.log(req);
        return  {
            success:true
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