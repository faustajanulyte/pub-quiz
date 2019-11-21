<template>
  <div class="body">
    <router-link class="body-link" to="/about">
      <div class="img-block">
        <h1>About</h1>
          <a class="body-icon">
            <img src="@/assets/images/friendship.svg" alt="about us" />
          </a>
      </div>
    </router-link>
    <router-link class="body-link" to="/shop">
      <div class="img-block">
        <h1>Shop</h1>
          <a class="body-icon">
            <img src="@/assets/images/golf.svg" alt="shop" />
          </a>
      </div>
    </router-link>
    <router-link class="body-link" to="/contact">
      <div class="img-block">
        <h1>Contact Us</h1>
          <a class="body-icon">
            <img src="@/assets/images/contact.svg" alt="contact" />
          </a>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Body',
  data() {
    return {
      links: [
        {
          id: 1,
          text: 'about us',
          page:'/about'
        },
        {
          id: 2,
          text: 'shop',
          page:'/shop'
        },
        {
          id: 3,
          text: 'contact',
          page:'/contact'
        },
      ]
    }
  }
}
</script>

<style>
.body-link {
  filter: invert(1.0);
}
.img-block {
  display: inline-block;
  text-align: right;
  width: 250px;
  padding-right: 100px;
  padding-top: 200px;
  padding-bottom: 300px;
}
.body-link:hover {
  opacity: 0.7;
}
.body {
  margin: 0px;
}
.img-block h1 {
  color: black;
  text-align: center;
}
</style>