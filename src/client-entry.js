/**
 * Created by Administrator on 2017/3/27.
 */
import {app, store} from './app'
//同步服务端发送过来的数据，然后把 vue 实例挂载到服务端渲染的 DOM 上。
//替换store的根状态
store.replaceState(window.__INITIAL_STATE__);
app.$mount('#app');