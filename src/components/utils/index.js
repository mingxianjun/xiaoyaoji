import Vue from 'vue';

const utils = {
    http(method,url,param,call){
        Vue.http({
            method:method,
            url:url,
            data:param,
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            emulateJSON: true
        }).then(
            (res)=>{
                call && typeof call == 'function' && call(res.data);
            },
            (res)=>{
                if(res.status == '404')
                    location.href = '#/404';
                else
                    location.href = '#/error';
            });
    }
};

export default utils;