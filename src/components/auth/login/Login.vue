<template>
    <div class="container-fluid counter_secnew">
        <div class="container">
            <div class="login-page">
                <div class="logininner-page">
                    <div class="col-xs-12 col-sm-4 leftcolumn">
                        <div class="leftimage-main">
                            <div class="biltflaxheader">
                                <img src="img/logo-white.png" class="img-responsive">
                                <h4> It's free to join</h4>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-8 rightcolumn">
                        <div class="login_signuptabs">
                            <ul class="nav nav-tabs tabsnews">
                                <li class="active">
                                    <a data-toggle="tab" href="#">Login </a>
                                </li>
                            </ul>
                            <div class="forminnerdealr">
                                <form id="ContForm" class="contact-form form-contact"
                                      novalidate="novalidate" @submit.prevent="validateBeforeSubmit">

                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 email-field">
                                        <div class="form-group control">
                                            <input id="userName" v-validate="'required'"
                                                   :class="{'input': true, 'is-danger': errors.has('user name') }"
                                                   v-model="userName" name="user name" placeholder="User Name"
                                                   class="form-control" data-toggle="floatLabel"
                                                   data-value="no-js">
                                            <label for="userName">User Name</label>
                                            <span v-show="errors.has('user name')" class="help is-danger">{{ errors.first('user name') }}</span>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 email-field">
                                        <div class="form-group">
                                            <input type="password" v-model="password" id="password" name="password"
                                                   placeholder="Password"
                                                   v-validate="'required'"
                                                   :class="{'input': true, 'is-danger': errors.has('password') }"
                                                   class="form-control pasword" data-toggle="floatLabel"
                                                   data-value="no-js">
                                            <label for="password" class="mat-label">Password</label>
                                            <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
                                            <a class="forgot_links" href="#">Forgot Password?</a>
                                        </div>
                                    </div>

                                    <div class="col-md-12 col-sm-12 captcha-field">
                                        <div class="form-group">
                                            <div class="g-recaptcha"
                                                 data-sitekey="6LduJTkUAAAAAOu12_PxXiStAmsbceHSULdH3EKJ"></div>
                                        </div>
                                    </div>

                                    <div class="col-md-12 col-sm-12 resend_link">
                                        <p><a href="#">Click Here</a> to resend your activation link</p>
                                    </div>

                                    <div class="botm_buttons">
                                        <input type="submit" value="Login"
                                               class="dealersubmit"/>
                                        <!--v-on:click="submitForm"-->
                                    </div>

                                    <div class="col-md-12 text-center">
                                        <a class="forgot_links" href="javascript:;">
                                            <router-link to="/signup">Create an Account</router-link>
                                        </a>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {HTTP} from '../../../main.js';

    export default {
        name: 'login',
        data() {
            return {
                userName: '',
                password: ''
            }
        },
        methods: {
            validateBeforeSubmit() {

                // console.log(this.$router.go('/'));
                this.$validator.validateAll().then((result) => {
                    console.log(result, "result");
                    var self = this;
                    if (result) {
                        $.get("http://api.ipify.org/?format=json", function (data) {
                            console.log(data.ip, "data");
                            HTTP.post(`Account/signin`,
                                {
                                    "UserName": self.userName,//"admin@bfx.api.com",
                                    "Password": self.password,//"Bitflax@123",
                                    "MacAddress": "22-22-22-22-22-22",
                                    "IpAddress": data.ip,
                                    "Browser": navigator.appName,
                                    "UserAgent": navigator.userAgent,
                                    "Location": "IN"
                                }
                            )
                                .then(response => {
                                    localStorage.setItem('bitflax:userAccessToken', response.data.value.access_token);
                                    global.userInfo['userAccessToken'] = response.data.value.access_token;
                                    global.userInfo['AccountNo'] = response.data.value.AccountNo;
                                    global.userInfo['TwoFactor'] = response.data.value.TwoFactor;
                                    global.userInfo['user_name'] = response.data.value.user_name;
                                    global.userInfo['expires_in'] = response.data.value.expires_in;
                                    if (response.data.value.TwoFactor) {
                                        setTimeout(function () {
                                            self.$router.go('/twofactor');
                                        }, 1000);
                                    } else {
                                        setTimeout(function () {
                                            self.$router.go('/');
                                        }, 1000);
                                    }

                                })
                                .catch(e => {
                                    this.errors.push(e)
                                });
                        });
                        return;
                    }
                });
            }
        }
    }
</script>
