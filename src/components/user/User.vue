<template>
  <div class="user">
    <Body/>
  </div>
</template>

<script>
import Body from './body/Body.vue'

export default {
  name: 'User',
  components: {
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