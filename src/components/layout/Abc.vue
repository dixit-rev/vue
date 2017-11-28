<template>
<div class="auth-layout">
  <div class="nav hidden-lg-up"><router-link class="i-vuestic" :to="{path: '/'}"></router-link></div>
  <div class="main row">
    <div class="auth-content col-lg-6 col-12">
      <!-- <router-view></router-view> -->
    </div>
    <div class="auth-wallpaper col-6 hidden-md-down">
      <div class="oblique"></div>
      <router-link class="i-vuestic" :to="{path: '/'}"></router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'abc'
}
</script>