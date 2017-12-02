<template>
    <div id="app" class="app">

        <app-header v-if="isAuth"></app-header>

        <router-view>
        </router-view>
    </div>
</template>

<script>
    import authLayout from './components/auth/login/Login.vue';
    import Header from './components/auth/header/header.vue';
    //Dummy data
    // localStorage.setItem('bitflax:userAccessToken', 'lolobindatika');
    localStorage.getItem('bitflax:userAccessToken');

    global.userInfo = {
        isUserLogin: (localStorage.getItem('bitflax:userAccessToken')) ? true : null,
        userAccessToken: localStorage.getItem('bitflax:userAccessToken'),
        AccountNo: null,
        TwoFactor: null,
        expires_in: null,
        user_name: null,
    };

    export default {
        name: 'app',
        components: {
            'auth-layout': authLayout,
            'app-header':Header
        },
        computed: {

            isAuth() {
                return global.userInfo.isUserLogin;
            }

        }
    }
</script>