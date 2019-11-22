<template>
  <div class="user">
    <Navigation/>
    <Body/>
    <Login/>
  </div>
</template>

<script>
import Navigation from './header/navbar/Navigation.vue'
import Body from './body/Body.vue'
import Login from '@/components/login/Login'

export default {
  name: 'User',
  components: {
    Navigation,
    Body,
    Login
  }
}
</script>

<style scoped>
.user {
  background-image: url('~@/assets/images/questionmark.jpeg');
  background-size: 100%;
  margin: 0px;
}

</style>