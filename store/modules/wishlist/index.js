const state = {
  wishList: []
}

const mutations = {
  UPDATE_WISH_LIST(state, payload) {
    const findIndex = state.wishList.findIndex(item => item.id === payload.id)
    if (findIndex !== -1) {
      const updatedWishList = state.wishList.filter((_, index) => index !== findIndex)
      state.wishList = updatedWishList
    }
    state.wishList.push(payload)
  }
}

const actions = {
  setWishlist({ commit }, product) {
    commit('UPDATE_WISH_LIST', product)
  }
}
const getters = {
  wishList: state => state.wishList,
}

const wishListModule = {
  state,
  mutations,
  actions,
  getters
}

export default wishListModule
