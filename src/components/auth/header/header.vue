<template>
    <div class="container-fluid">
        <div class="row">
            <div class="left-sidemenu">
                <div class="logo-section">
                    <img src="../../../assets/img/logo.png">
                    <a href="JavaScript:void(0)" class="pull-rigth"><i class="fa fa-bars" aria-hidden="true"></i></a>
                </div>
                <div class="user-links">
                    <h6><span>Main </span>Menu</h6>
                    <ul>
                        <li><a href="javascript:;"><i class="fa fa-dashboard" aria-hidden="true"></i>
                            <router-link to="/">Dashboard</router-link></a></li>
                        <li><a href="javascript:;"><i class="fa fa-university" aria-hidden="true"></i> <span>BFX Exchange</span></a>
                        </li>
                        <li><a href="javascript:;"><i class="fa fa fa-file-text-o" aria-hidden="true"></i> <span>Transaction</span></a>
                        </li>
                        <li><a href="javascript:;"><i class="fa fa fa-share-alt" aria-hidden="true"></i>
                            <span>Referral</span></a></li>
                        <li><a href="javascript:;"><i class="fa fa-lock" aria-hidden="true"></i>
                            <router-link to="/security">security</router-link></a></li>
                        <li><a href="javascript:;"><i class="fa fa-support" aria-hidden="true"></i><span>support</span></a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <i class="fa fa fa-wrench" aria-hidden="true"></i>
                                <span>management tools</span>
                            </a>
                        </li>
                        <ul class="manage_menu">
                            <li>
                                <a href="javascript:;">
                                    <span>Mobile App</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <span>Profile</span>
                                </a>
                            </li>
                        </ul>

                    </ul>
                </div>
            </div>
            <div class="right-content">
                <div class="top-info-row">
                    <ul>
                        <li>
                            <p>USD
                                <small>0.69% <i class="fa fa-sort-asc" aria-hidden="true"></i></small>
                                <span>$6600.98</span></p>
                        </li>
                        <li>
                            <p>USD
                                <small>0.69% <i class="fa fa-sort-asc" aria-hidden="true"></i></small>
                                <span>$6600.98</span></p>
                        </li>
                        <li>
                            <p>USD
                                <small>0.69% <i class="fa fa-sort-asc" aria-hidden="true"></i></small>
                                <span>$6600.98</span></p>
                        </li>
                        <li>
                            <p>USD
                                <small>0.69% <i class="fa fa-sort-asc" aria-hidden="true"></i></small>
                                <span>$6600.98</span></p>
                        </li>
                    </ul>
                    <ul class="navbar-right hidden-xs">
                        <li class="dropdown">
                            <a href="" class="dropdown-toggle" data-toggle="dropdown"><img
                                    src="../../../assets/img/user.png"> {{global.userInfo.user_name}}<span
                                    class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {HTTP} from '../../../main.js';
console.log(global.userInfo,"global");
    export default {
        name: 'header',
        data() {
            return {
                data: 'kaliya',
                global:global
                //Initializing all variables for this page

            }
        },
        props: {
            userInfo: 'global.userInfo'
        },
        methods: {
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result && (this.signup.sponsor !== this.signup.userName)) {

                    }
                    return;
                });
            },

        }
    }
</script>
