/**
 * Created by Administrator on 2017/3/27.
 */
import {app, router, store} from './app'

export default context => {
    const s = Date.now();
    //编程式导航相当于点击<router-link :to="..."></router-link>,切换到相应的路由
    router.push(context.url);
    //返回目标位置或者当前路由匹配的组件数组（注意是数组）预加载
    const matchedComponents = router.getMatchedComponents();
    if(!matchedComponents){
        return Promise.reject({code: '404'});
    }

    return Promise.all(matchedComponents.map(component => {
        //调用组件中暴露出来的方法
        if(component.fetchServerData){
            return component.fetchServerData(store);
        }
    })).then(() => {
        //下面这行代码将服务端获取到的数据挂载到 context 对象上，后面会把这些数据直接发送到浏览器端与客户端的vue 实例进行数据(状态)同步。
        context.initialState = store.state;
        return app;
    })
}