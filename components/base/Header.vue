<template>
  <div class="header">
    <div class="container header-wrapper flex items-center">
      <div class="logo">
        <NuxtLink :to="`/`">
          <img src="~assets/logo/jfk.svg" height="32" />
        </NuxtLink>
      </div>
      <div>
        <input type="text" placeholder="Search.." name="search" class="header-search">
      </div>
      <div class="header-action" style="margin-left: auto">
        <NuxtLink :to="`/wishlist`">Wishlist</NuxtLink>
        <div class="dropdown">
          <a href="#">Chart({{ chartList.length }})</a>
          <div class="dropdown-content">
            <div v-for="(chart, idx) in chartList" :key="idx">
              <a href="#" style="display: flex; justify-content: space-between; align-items: center;">
                <p style="font-size: 12px;">{{ chart.varian }}</p>
                <img :src="chart.listImage[0]" style="height: 65px;" width="65px" />
              </a>
            </div>
          </div>
        </div>
        <a href="#">Akun</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'chartList'
    ])
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: none;
}
.header {
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
}

.header-wrapper {
  padding-top: 20px;
  padding-bottom: 20px;
}
.input-responsive {
  border: 1px solid rgba(0,0,0,0.4)
}
.header-search {
  display: none;
}

.header-action {
  a {
    padding: 8px;
  }
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 360px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
@media screen and (min-width: 1280px) {
  .header {
    background: #fff;
    position: sticky;
    top: 0;
    box-shadow: 0 1px 6px 0 rgb(0 0 0 / 20%);
  }
  .logo {
    width: 25%;
    display: inherit;
  }
  .header-search {
    min-width: 240px;
    border-radius: 6px;
    border: 1px solid #888;
    display: inline;
  }
  .product-grid {
    width: 75%;
  }
  .product-grid__item {
    width: calc(25% - 24px) !important;
  }
}
</style>
