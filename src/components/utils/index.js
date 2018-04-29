import Vue from 'vue';
import iView from 'iview';


const utils = {
    sendPost(url,param,call){
        iView.LoadingBar.start();
        Vue.http.post(url,param).then(
           res => {
               iView.LoadingBar.finish();
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
        iView.LoadingBar.start();
        Vue.http.get(url,{params:param}).then(
            res => {
                iView.LoadingBar.finish();
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