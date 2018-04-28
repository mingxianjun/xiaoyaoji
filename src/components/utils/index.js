import Vue from 'vue';

const utils = {
    sendPost(url,param,call){
       Vue.http.post(url,param).then(
           res => {
               call && typeof call == 'function' && call(res.data);
           },
           res => {
               if(res.status == '404')
                   location.href = '#/404';
               else
                   location.href = '#/error';
           },
       )
    },
    sendGet(url,param,call){
        Vue.http.get(url,{params:param}).then(
            res => {
                call && typeof call == 'function' && call(res.data);
            },
            res => {
                if(res.status == '404')
                    location.href = '#/404';
                else
                    location.href = '#/error';
            },
        )
    }
};

export default utils;