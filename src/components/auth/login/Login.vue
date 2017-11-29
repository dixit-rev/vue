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
                                <form id="ContForm" class="contact-form form-contact" novalidate="novalidate"
                                      v-on:submit="submitForm">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 email-field">
                                        <div class="form-group">
                                            <input id="emalid" v-model="email" name="emalid" placeholder="Email Id"
                                                   class="form-control emailid" data-toggle="floatLabel"
                                                   data-value="no-js">
                                            <label for="emalid" style="">Email Id</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 email-field">
                                        <div class="form-group">
                                            <input type="password" v-model="password" id="pwd" name="pwd"
                                                   placeholder="Password"
                                                   class="form-control pasword" data-toggle="floatLabel"
                                                   data-value="no-js">
                                            <label for="pwd" class="mat-label">Password</label>
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
                                        <input type="submit" value="Login" v-on:click="submitForm"
                                               class="dealersubmit"/>
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
                email: '',
                password: ''
            }
        },
        methods: {
            submitForm: function () {
                HTTP.post(`Account/signin`,
                    {
                        "UserName": this.email,//"admin@bfx.api.com",
                        "Password": this.password//"Bitflax@123"
                    }
                )
                    .then(response => {
                        userInfo['userAccessToken'] = response.data.value.access_token;
                        userInfo['AccountNo'] = response.data.value.AccountNo;
                        userInfo['TwoFactor'] = response.data.value.TwoFactor;
                        userInfo['user_name'] = response.data.value.user_name;
                        userInfo['expires_in'] = response.data.value.expires_in;
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        }
    }
</script>
