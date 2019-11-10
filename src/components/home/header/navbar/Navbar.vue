<template>
  <div class="navbar">
    <Logo/>
    <Navigation/>
  </div>
</template>

<script>
import Logo from './Logo'
import Navigation from './Navigation'

export default {
  name: 'Navbar',
  components: {
    Logo,
    Navigation
  }
}
</script>

<style> 
.navbar {
  width: 100%;
  height: 75px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>