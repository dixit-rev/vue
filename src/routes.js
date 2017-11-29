import login from './components/auth/login/Login.vue';
import signUp from './components/auth/signup/Signup.vue';
import app from './App.vue';
console.log(global.userInfo.userAccessToken);
export default [
    {
        path: '/',
        component: app
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/signup',
        component: signUp
    },
];