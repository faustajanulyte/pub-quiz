<template>
  <div class="home">
    <Logo/>
    <Body/>
    <Footer/>
  </div>
</template>

<script>
import Logo from './header/navbar/Logo.vue'
import Body from './body/Body.vue'
import Footer from './footer/Footer.vue'

export default {
  name: 'Home',
  components: {
    Logo,
    Body,
    Footer
  }
}
</script>

<style scoped>
.home {
  background-image: url('~@/assets/images/questionmark.jpeg');
  background-size: 100%;
  margin: 0px;
}

.logo {
  display: inline-block;
  max-width: 250px;
  text-align: center;
  padding-left: 0px;
}
</style>