<template>
  <div class="footer">
    <a href="https://www.facebook.com/" class="footer-icon"><img src="@/assets/images/facebook logo.svg" alt="logo"/></a>
    <a href="https://www.instagram.com/" class="footer-icon"><img src="@/assets/images/instagram logo.svg" alt="logo"/></a>
    <h1>&copy; 2019 Copyright: SimpleGolfBalls</h1>
  </div>
</template>

<script>

export default {
  name: 'Footer',
}
</script>

<style>
.footer {
  font-family: 'Dosis', sans-serif;
  font-size: 10px;
  color: white;
  text-decoration: none;
  font-weight: 50;
  padding-bottom: 20px;
}

.footer h1 {
  margin-block-end: 0px;
  font-weight: 100;
}

.footer-icon img {
  max-width: 40px;
  margin-right: 10px;
  margin-top: 10px;
  filter: invert(1.0);
}

.footer-icon img:hover {
    opacity: 0.7;
  }
</style>