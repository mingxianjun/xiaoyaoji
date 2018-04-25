import Mock from 'mockjs';

Mock.mock(
    '/api/user','get', () =>{
        return  {
            code:200,
            data:{
                id:201801,
                sex:1,
                age:25,
                name:'lemon',
                role:'manage',
                createTime:'2017-04-01'
            },
            message:'查询成功'
        }
    } );

export default { }