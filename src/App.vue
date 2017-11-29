<template>
  <div id="app" class="app">
    <!--<auth-layout v-if="isAuth"></auth-layout>-->
    <!--<auth-layout></auth-layout>-->
      <router-view> </router-view>
  </div>
</template>

<script>
  import authLayout from './components/auth/login/Login.vue';
  //Dummy data
  localStorage.setItem('bitflax:userAccessToken','lolobindatika');
  localStorage.getItem('bitflax:userAccessToken');

   global.userInfo={
      isUserLogin:(localStorage.getItem('bitflax:userAccessToken'))?true:null,
      userAccessToken:localStorage.getItem('bitflax:userAccessToken'),
      AccountNo:null,
      TwoFactor:null,
      expires_in:null,
      user_name:null,
  };

  export default {
    name: 'app',
    components: {
        'auth-layout':authLayout,
    },
    computed: {

      isAuth () {
        return global.userInfo.isUserLogin;
      }

    }
  }
</script>