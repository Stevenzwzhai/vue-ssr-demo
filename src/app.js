/**
 * Created by Administrator on 2017/3/27.
 */
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './components/app'

let app = new Vue({
    template:'<app></app>',
    base:'/c/',
    components:{
        App
    },
    router,
    store
});

export {
    app,
    router,
    store
}
