<template>
  <div class="navigation">
    <nav>
      <router-link class="router-link" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'user',
          page:'/'
        },
        {
          id: 1,
          text: 'admin',
          page:'/admin'
        },
      ]
    }
  }
}
</script>

<style> 
.navigation {
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