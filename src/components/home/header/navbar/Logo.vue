<template>
  <div class="logo">
    <img src="@/assets/images/logo.png" alt="logo"/>
  </div>
</template>

<script>

export default {
  name: 'Logo',
}
</script>

<style>
.logo {
  display: inline-block;
  max-width: 150px;
  padding-left: 100px;
  text-align: center;
}
.logo img {
  max-width: 100%;
  filter: invert(1.0);
  padding-top: 40px;
}
</style>