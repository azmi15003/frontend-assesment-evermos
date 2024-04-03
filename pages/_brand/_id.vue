<template>
  <div>
    <br>
    <section class="container">
      <div class="flex">
        <NuxtLink :to="`/`">
          <span>Home&nbsp;</span>
        </NuxtLink>
        <span>/ {{ brand }}</span>
      </div>
      <div class="flex flex-direction-responsive" style="margin-top: 20px;">
        <div class="product-image">
          <img :src="imageDetail" class="product-image__main" height="420"/>
          <div class="flex">
            <div v-for="(img, idx) in product.listImage" :key="idx" @click="imageVarian(img)">
              <img :src="img" style="margin-right: 10px;" width="64" height="85"/>
            </div>
          </div>
        </div>
        <Skeleton v-if="loading" />
        <div class="product-information relative" v-else>
          <p class="title">{{ product.title }}</p>
          <!-- <img
            class="absolute wishlist pointer"
            :class="{ 'image-red': product.isWishList }"
            src="~assets/icon/love.svg"
            height="24"
            width="24"
            @click="updateWishlist"
          /> -->
          <p class="description">{{ product.varian }}</p>
          <div class="flex items-center">
            <p style="color: #d43232;">Rp.{{ product.price }}</p>
            <del v-if="product.salePrice">
              <p class="amount">Rp.{{ product.salePrice }}</p>
            </del>
            <div v-if="product.discountLabel" class="discount-label">
              {{ product.discountLabel }}
            </div>
          </div>
          <p class="margin-0">Terjual: {{ product.sold }}</p>
          <div>
            <p>Quantity: {{ quantity }}</p>
            <select class="quantity-product" v-model="quantity">
              <option v-for="(qty, idx) in 8" :key="idx">{{ qty }}</option>
            </select>
          </div>
          <p style="color: #333;">Size: {{ size }}</p>
          <div class="product-detail">
            <div class="product-detial__container">
              <div v-for="(size, idx) in sizeList" :key="idx" class="product-detail__item pointer" style="border: 1px solid;" @click="sizeButton(size)">
                {{ size }}
              </div>
            </div>
          </div>
          <div>
          <br>
          <button class="button-add-cart pointer" @click="addToCart">TAMBAHKAN KE KERANJANG</button>
          <button class="button-buy-product pointer">BELI SEKARANG</button>
          </div>
        </div>
      </div>
      <div class="product-description">
        <p>Product Description</p>
        <p>
          New Balance 100 Boy's Preschool And Gradeschool Sandals - Black New Balance 100 untuk anak-anak harus dimiliki untuk perjalanan mudah ke pantai atau kolam renang dan pendamping ruang ganti. Plus, one-piece fixed top yang mewah terbuat dari busa EVA super lembut dengan desain slip-on untuk kenyamanan tiada tara. Sandal slip-on yang ringan dan nyaman ini siap untuk hari yang santai dan jalan-jalan.
        </p>
      </div>
      <br>
      <br>
      <div class="product-grid">
        <div class="align-center" style="margin-bottom: 20px;">
          <span class="align-center" style="font-size: 20px; font-weight: 500; ">Rekomendasi Untukmu</span>
        </div>
        <div class="flex product-grid__container">
          <div v-for="(item, idx) in listProduct" :key="idx" class="product-grid__item">
            <Card :product="item" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

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
  async mounted() {
    await this.getDetailProduct()
    await this.getListProduct()
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
