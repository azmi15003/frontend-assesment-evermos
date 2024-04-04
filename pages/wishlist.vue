<template>
  <div>
    <br>
    <section class="container">
      <div class="flex flex-direction-responsive">
        <div class="float-left product-grid">
          <br>
          <span class="float-right">{{ wishList.filter(e => e.isWishList).length }} Items</span>
          <div>
            <br>
            <div class="product-grid__container">
              <div v-for="(item, idx) in wishList.filter(e => e.isWishList)" :key="idx" class="product-grid__item">
                <Card :product="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      brand: this.$route.params.brand,
      productId: this.$route.params.id,
      listProduct: [],
      product: {},
      loading: false,
      imageDetail: null,
      sizeList: [36, 37, 38, 39, 40, 41, 42 , 43, 44],
      size: 36,
      quantity: 1
    }
  },
  computed: {
    ...mapGetters([
      'wishList'
    ])
  },
  methods: {
    async getDetailProduct() {
      this.loading = true
      const result = await this.$axios.get(`https://my-json-server.typicode.com/azmi15003/api-assessment/products/${this.productId}`);

      this.product = result.data
      this.imageDetail = result.data.listImage[0]
      this.loading = false
    },
    addToCart() {
      this.$store.dispatch('setCart', this.product)
    },
    async getListProduct() {
      const result = await this.$axios.get(`https://my-json-server.typicode.com/azmi15003/api-assessment/products`);
      this.listProduct = result.data.filter(p => p.title === this.product.title)
    },
    sizeButton(size) {
      this.size = size
    },
    imageVarian(img) {
      this.imageDetail = img
    },
    updateWishlist() {
      this.product.isWishList = !this.product.isWishList

      this.$store.commit('updateWishlist', {
        productId: this.product.id,
        isWishList: this.product.isWishList
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.product-image {
  width: 100%;
}
.quantity-product {
  padding: 6px 12px;
  border: 1px solid lightgray;
  border-radius: 8px;
}
.discount-label {
  margin-left: 8px;
  padding: 0 4px;
  color: #fff;
  background: #d43232;
}
.product-image__main {
  width: 100%;
}
.product-information {
  width: 100%;
}
.wishlist {
  top: 10;
  right: 0px;
}
.product-description {
  margin-top: 30px;
  padding: 20px;
  justify-content: center;
}
.button-add-cart {
  font-size: 14px;
  color: #333;
  background: white;
  padding: 12px 36px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #333;
}
.button-buy-product {
  font-size: 14px;
  color: white;
  background: black;
  padding: 12px 36px;
  width: 100%;
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid #333;
}
.product-grid {
  width: 100%;

  .product-grid__container {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;

    .product-grid__item {
      width: calc(50% - 16px);
    }
  }
}
.product-detail {
  display: flex;
  width: 75%;

  .product-detial__container {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    .product-detail__item {
      padding: 8px;
    }
    .product-detail__item:active {
      background-color:red;
    }
  }
}
.amount {
  color: #999;
  margin-left: 10px;
  text-decoration: line-through;
}
@media screen and (min-width: 1280px) {
  .product-image {
    width: 40%;
    gap: 12px;
  }
  .product-image__main {
    width: calc(100% - 100px);
  }
  .product-information {
    width: 60%;
  }
  .product-description {
     padding: 0px;
    justify-content: none;
  }
  .button-add-cart {
    font-size: 14px;
    color: #333;
    background: white;
    padding: 12px 36px;
    width: 320px;
    border-radius: 8px;
    border: 1px solid #333;
  }
  .wishlist {
    top: 0;
    right: 30px;
  }
  .button-buy-product {
    font-size: 14px;
    color: white;
    background: black;
    padding: 12px 36px;
    width: 320px;
    border-radius: 8px;
    border: 1px solid #333;
  }
  .product-grid__item {
    width: calc(25% - 24px) !important;
  }
}
</style>
