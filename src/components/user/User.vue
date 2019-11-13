<template>
  <div class="user">
    <Navigation/>
    <Body/>
  </div>
</template>

<script>
import Navigation from './header/navbar/Navigation.vue'
import Body from './body/Body.vue'

export default {
  name: 'User',
  components: {
    Navigation,
    Body
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