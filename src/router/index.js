/**
 * Created by Administrator on 2017/3/27.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexView from '../views/indexView'
import ArticleItems from '../views/articleItems'

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    base:'/c/',
    routes:[
        {
            path:'/:alias',
            component:IndexView
        },
        {
            path:'/:alias/list',
            component:ArticleItems
        }
    ]
})