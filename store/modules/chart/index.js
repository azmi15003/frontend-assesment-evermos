const state = {
  chartList: []
}

const mutations = {
  UPDATE_CART_ITEMS (state, payload) {
    state.chartList.push(payload);
  },
}

const actions = {
  setCart({ commit }, product) {
    commit('UPDATE_CART_ITEMS', product);
  }
}
const getters = {
  chartList: state => state.chartList,
}

const cartModule = {
  state,
  mutations,
  actions,
  getters
}

export default cartModule
