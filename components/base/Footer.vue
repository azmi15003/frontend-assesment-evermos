<template>
  <div class="footer">
    <div class="container flex flex-direction-responsive">
      <div class="footer-item">
        <br>
        <img src="~assets/logo/jfk.svg" class="logo-footer" height="64" width="220" />
      </div>
      <div class="footer-item">
        <h3>Layanan Pelanggan</h3>
        <p>Lacak Pengiriman</p>
        <p>Cara Berbelanja</p>
        <p>Info Pengiriman</p>
        <p>Info Pembayaran</p>
        <p>Info Pembayaran</p>
      </div>
      <div class="footer-item">
        <h3>Information</h3>
        <p>About Us</p>
        <p>Store Location</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <div class="footer-item">
        <h3>Need Help? Contact Us</h3>
        <p>hello@logo.com</p>
        <p>1500-xxx</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  background: #f2f2f2;

  .footer-item {
    width: 100%;
  }
}
.logo-footer {
  display: none;
}

@media screen and (min-width: 1280px) {
  .footer {
    padding-top: 60px;
    padding-bottom: 80px;
    padding-left: 0px;

    .footer-item {
      width: 25%;
    }
  }
  .logo-footer {
    height: 64px;
    display: inline;
  }
}
</style>
