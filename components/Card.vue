<!-- Please remove this file from your project -->
<template>
  <div class="card">
    <NuxtLink :to="`/${product.title}/${product.id}`">
      <img :src="product.listImage[0]" style="height: 300px;" width="100%" />
      <p class="title">{{ product.title }}</p>
      <p class="description">{{ product.varian }}</p>
      <div class="flex items-center" style="margin-bottom: 10px;">
        <img @click="updateWishlists" :class="{ 'image-red': product.isWishList }" src="~assets/icon/love.svg" height="24" width="24" />
      </div>
      <div>
        <span style="color: #d43232;">Rp.{{ product.price }}</span>
      </div>
      <div class="flex">
        <del v-if="product.salePrice" class="margin-0">
          <span style="font-size: 12px; color: grey;">Rp.{{ product.salePrice }}</span>
        </del>
        <div v-if="product.discountLabel" class="label-discount">
          {{ product.discountLabel }}
          <br>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>


<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
<script>
export default {
  props: {
    product: {
      type: Object,
      default: null
    },
  },
  data() {
    return {}
  },
  methods: {
    async updateWishlists(e) {
      e.preventDefault()
      this.product.isWishList = !this.product.isWishList

      this.$emit('update:product', this.product)

      this.$store.dispatch('setWishlist', this.product)
    },
    addToWishlist() {
      this.$store.dispatch('setCart', this.product)
    },
  }
}
</script>

<style lang="scss">
.card {
  padding-bottom: 16px;
  width: 100%;
}
.card img {
  transition: transform 0.3s ease; /* Menambahkan transisi untuk animasi */
}

.card:hover img {
  transform: scale(1.1); /* Mengubah skala gambar saat dihover */
}
.title {
  font-size: 14px;
  color: #99a499;
  margin: 0px;
}
.label-discount {
  margin-left: 8px;
  padding: 2px 4px;
  font-size: 14px;
  color: #fff;
  background: #d43232;
}
.description {
  font-size: 14px;
  line-height: 140%;
  font-weight: 500;
  color: 000;
  margin: 0px;
}
</style>
