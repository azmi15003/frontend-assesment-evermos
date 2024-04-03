const state = {
  productItems: []
}

const mutations = {
  UPDATE_PRODUCT_ITEMS (state, payload) {
    state.productItems = payload;
  },
  UPDATE_WISHLIST_STATUS(state, { productId, isWishlist }) {
    const product = state.productItems.find(product => product.id === productId);
    if (product) {
      product.is_wishlist = isWishlist;
    }
  }

}

const actions = {
  getProductItems ({ commit }) {
    this.$axios.get('https://my-json-server.typicode.com/azmi15003/api-assessment/products').then((response) => {
      commit('UPDATE_PRODUCT_ITEMS', response.data)
    });
  },
  toggleWishlistStatus({ commit }, { productId, isWishlist }) {
    commit('UPDATE_WISHLIST_STATUS', { productId, isWishlist });
  }
}
const getters = {
  productItems: state => state.productItems,
  productItemById: (state) => (id) => {
    return state.productItems.find(productItem => productItem.id === id)
  }
}

const productModule = {
  state,
  mutations,
  actions,
  getters
}

export default productModule
