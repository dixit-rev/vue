import login from './components/auth/login/Login.vue';
import signUp from './components/auth/signup/Signup.vue';
import twoFactor from './components/auth/login/TwoFactor.vue';
import security from './components/auth/security/security.vue';
import dashboard from './components/auth/dashboard/dashboard.vue';
import app from './App.vue';

var homePage = (global.userInfo.userAccessToken) ? dashboard : login;
export default [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/signup',
        component: signUp
    },
    {
        path: '/twofactor',
        component: twoFactor
    },
    {
        path: '/security',
        component: security
    },
];