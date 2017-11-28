<template>
  <div id="app" class="app">
    <auth-layout v:title="dixit" v-if="isAuth"></auth-layout>
    <!-- <layout v-else></layout> -->
  </div>
</template>

<script>
//   import Layout from 'components/layout/Layout'
  import AuthLayout from './components/layout/Abc'
//   import VuesticPreLoader from './components/vuestic-components/vuestic-preloader/VuesticPreLoader.vue'

  export default {
    name: 'app',
    components: {
    //   VuesticPreLoader,
      AuthLayout,
    //   Layout
    },
    computed: {
      isAuth () {
          return true;
        // return this.$route.path.match('auth')
      }
    }
  }
</script>