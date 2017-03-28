/**
 * Created by Administrator on 2017/3/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let apiHost = 'http://localhost:3000';

const store = new Vuex.store({
    state:{
        alias:'',
        ztData:{},
        courseListItems:[],
        articleItems:[]
    },
    actions:{
        FETCH_ZT:({commit, dispatch, state}, {alias}) => {
            commit('SET_ALIAS',{alias} );
            return axios.get(`${apihost}/api/zt`)
                .then(res => {
                    let data = res.data || {};
                    commit('SET_ZT_DATA',data);
                })
        }

    },
    mutations:{
        SET_ZT_DATA: (state, {ztData}) => {
            state.ztData = ztData;
        },
        SET_ALIAS: (state, { alias }) => {
            state.alias = alias;
        }
    }
})

export default store
