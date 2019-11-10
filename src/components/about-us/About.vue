<template>
  <div class="about">
    <Navbar/>
    <About_us/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/home/header/navbar/Navbar.vue'
import Footer from '@/components/home/footer/Footer.vue'
import About_us from './About_us'

export default {
  name: 'About',
  components: {
    Navbar,
    About_us,
    Footer
  }
}
</script>

<style>
.about {
  background-image: url('~@/assets/images/background.png');
  background-size: 100%;
  margin: 0px;
}
</style>
