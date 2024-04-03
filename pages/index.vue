<template>
  <div>
    <section class="container">
      <br>
      <Slider :images="slides" />
      <br>
      <div class="flex flex-direction-responsive">
        <div class="float-left category-grid">
          <div>
            <h2>Category</h2>
            <div class="pointer">
              <p @click="filterCategory('All')">All</p>
              <p @click="filterCategory('Men')">Men</p>
              <p @click="filterCategory('Women')">Women</p>
              <p @click="filterCategory('Kids')">Kids</p>
            </div>
          </div>
          <br>
          <br>
          <div class="pointer">
            <h2>Brand</h2>
            <div>
              <p @click="filterBrand('All')">All</p>
              <p @click="filterBrand('New Balance')">New Balance</p>
              <p @click="filterBrand('Adidas')">Adidas</p>
              <p @click="filterBrand('Nike')">Nike</p>
            </div>
          </div>
        </div>
        <div class="float-left product-grid">
          <br>
          <span class="float-right">{{ listProduct.length }} Items</span>
          <div>
            <br>
            <div class="product-grid__container">
              <div v-for="(item, idx) in listProduct" :key="idx" class="product-grid__item">
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
  name: 'indexPage',
  data() {
    return {
      listProduct: [],
      slides: [
        'https://static.id.gtech.asia/prod/100003/20220922/5700F8C277A9329471891F4AED1AACAA.jpeg?x-oss-process=image/resize,w_2200/format,webp',
        'https://static.id.gtech.asia/prod/100003/20210319/5D85211A437148C9CDC279244A24C49F.jpeg?x-oss-process=image/resize,w_2200/format,webp',
        'https://static.id.gtech.asia/prod/100003/20210319/59850BC55972A8274BBB6D922A083C6C.jpeg?x-oss-process=image/resize,w_2200/format,webp',
      ]
    }
  },
  computed: {
    ...mapGetters([
      'wishList'
    ])
  },
  mounted() {
    this.getListProduct()
  },
  methods: {
    async getListProduct() {
      const result = await this.$axios.get('https://my-json-server.typicode.com/azmi15003/api-assessment/products');

      const dataWishlist = new Map(this.wishList.map(item => [item.id, item]));

      const combineData = result.data.map(item1 => {
        if (dataWishlist.has(item1.id)) {
          const item2 = dataWishlist.get(item1.id)
          return { ...item1, isWishList: item2.isWishList }
        } else {
          return item1
        }
      })

      this.listProduct = combineData
    },
    async filterCategory(category) {
      await this.getListProduct()

      if (category !== 'All') {
        this.listProduct = this.listProduct.filter(product => product.type === category)
      }
    },
    async filterBrand(brand) {
      await this.getListProduct()

      if (brand !== 'All') {
        this.listProduct = this.listProduct.filter(product => product.title === brand)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.category-grid {
  width: 100%;
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

@media screen and (min-width: 1280px) {
  .category-grid {
    width: 25%;
  }
  .product-grid {
    width: 75%;
  }
  .product-grid__item {
    width: calc(25% - 24px) !important;
  }
}
</style>
