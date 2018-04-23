import Mock from 'mockjs';
const user = Mock.mock(
    '/api/user','get', (req, res) =>{
        return  {
            code:200,
            data:{
                id:1,
                sex:1,
                age:25,
                createTime:'2017-04-01'
            },
            message:'查询成功'
        }
    } );

export default { user }