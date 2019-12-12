<template>
  <div class="services">
    <nav>
    <router-link class="router-link" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}
    </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'services',
  data() {
    return {
      links: [
        {
          id: 3,
          text: 'Quizes',
          page:'/quizes'
        },
        {
          id: 4,
          text: 'Results',
          page:'/results'
        },
        {
          id: 6,
          text: 'Add team',
          page:'/addteam'
        },
        {
          id: 5,
          text: 'Add admin',
          page:'/addadmin'
        },
      ]
    }
  }
}
</script>

<style scoped>
.services {
  background-image: url('~@/assets/images/questionmark.jpeg');
  width: 100%;
  height: 1000px;
  background-size: 100%;
  display: inline-block;
  text-align: right;
  width: 100%;
  padding-right: 100px;
  padding-top: 20px;
}
.router-link { 
    Margin-right: 50px;
    font-family: 'Dosis', sans-serif;
    font-weight: 300;
    font-size: 28px;
    color: white;
    text-decoration: none;
  } 
  .router-link:hover {
    opacity: 0.7;
  }
</style>