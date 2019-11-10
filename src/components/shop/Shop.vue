<template>
  <div class="shop">
    <Navbar/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/home/header/navbar/Navbar.vue'
import Footer from '@/components/home/footer/Footer.vue'

export default {
  name: 'Shop',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
.shop {
  background-image: url('~@/assets/images/background.png');
  background-size: 100%;
  margin: 0px;
}
</style>