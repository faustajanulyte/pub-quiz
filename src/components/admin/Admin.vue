<template>
  <div class="admin">
    <AdminNavigation/>
    <AdminBody/>
  </div>
</template>

<script>
import AdminNavigation from './adminheader/adminnavbar/AdminNavigation.vue'
import AdminBody from './adminbody/AdminBody.vue'

export default {
  name: 'Admin',
  components: {
    AdminNavigation,
    AdminBody
  }
}
</script>

<style scoped>
.admin {
  background-image: url('~@/assets/images/questionmark.jpeg');
  background-size: 100%;
  margin: 0px;
}

</style>