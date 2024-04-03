import Vuex from 'vuex'
import Vue from 'vue'
import product from './modules/product'
import chart from './modules/chart'
import wishlist from  './modules/wishlist'

Vue.use(Vuex)

export default () => new Vuex.Store({
  state: () => ({

  }),
  mutations: {},
  actions: {},
  modules: {
    product: product,
    chart: chart,
    wishlist: wishlist
  }
})
