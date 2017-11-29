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
                                <li class="active"><a data-toggle="tab" href="#menu1">Signup</a></li>
                            </ul>
                            <div class="forminnerdealr">
                                <form id="ContForm1" class="contact-form form-contact" v-on:submit="onSignUp"
                                      novalidate="novalidate" method="post">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                        <div class="form-group">
                                            <input id="fname" v-model="signup.firstName" name="signup.fname"
                                                   placeholder="First Name" class="form-control usernameicon"
                                                   data-toggle="floatLabel" data-value="" required=""
                                                   aria-required="true">
                                            <label for="fname">First Name</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                        <div class="form-group">
                                            <input id="lname" v-model="signup.lastName" name="lname"
                                                   placeholder="Last Name" class="form-control usernameicon"
                                                   data-toggle="floatLabel" data-value="" required=""
                                                   aria-required="true">
                                            <label for="lname" style="">Last Name</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                        <div class="form-group">
                                            <input id="emalid" v-model="signup.emailID" name="email"
                                                   placeholder="Email Id" class="form-control emailid"
                                                   data-toggle="floatLabel" data-value="" required=""
                                                   aria-required="true" type="email">
                                            <label for="emalid" style="">Email Id</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                        <div class="form-group">
                                            <input id="uname" v-model="signup.userName" name="uname"
                                                   placeholder="User Name" class="form-control usernameicon"
                                                   data-toggle="floatLabel" data-value="" required=""
                                                   aria-required="true">
                                            <label for="uname" style="">User Name</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                        <div class="form-group">
                                            <input id="pwdd" name="password" v-model="signup.password"
                                                   placeholder="Password" class="form-control pasword"
                                                   data-toggle="floatLabel" data-value="" required=""
                                                   aria-required="true" type="password">
                                            <label for="pwd" class="mat-label">Password</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                        <div class="form-group">
                                            <input id="cnfpwd" name="cpassword" v-model="signup.confirmPassword"
                                                   placeholder="Confirm Password" class="form-control pasword"
                                                   data-toggle="floatLabel" data-value="" required=""
                                                   aria-required="true" type="password">
                                            <label for="cnfpwd">Confirm Password</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                        <div class="form-group">
                                            <input id="tel" placeholder="Contact Number" v-model="signup.contactNo"
                                                   class="form-control contact" data-toggle="floatLabel" data-value=""
                                                   required="" aria-required="true" type="number">
                                            <label for="tel">Contact Number</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                        <div class="form-group">
                                            <input id="sponsor" placeholder="Sponsor" v-model="signup.sponsor"
                                                   class="form-control sponsor" data-toggle="floatLabel" data-value=""
                                                   required="" aria-required="true" type="text">
                                            <label for="sponsor">Sponsor</label>
                                            <span>If you don't have sponsor, then leave it blank</span>
                                        </div>
                                    </div>

                                    <div class="col-md-12 col-xs-12 dob-field">
                                        <div class="form-group">
                                            <input id="dob" placeholder="D-O-B" v-model="signup.dob"
                                                   class="form-control dob" data-toggle="floatLabel" data-value=""
                                                   required="" aria-required="true" type="text">
                                            <label for="dob">DOB</label>
                                        </div>
                                    </div>

                                    <div class="col-md-12 col-xs-12 dob-field">
                                        <div class="form-group">
                                            <div class="g-recaptcha"
                                                 data-sitekey="6LduJTkUAAAAAOu12_PxXiStAmsbceHSULdH3EKJ"></div>
                                        </div>
                                    </div>

                                    <div class="col-md-12 col-xs-12">
                                        <div class="form-group">
                                            <div class="checkbox">
                                                <input id="termsCheckbox" type="checkbox">
                                                <label for="termsCheckbox">
                                                    I agree and have read the <a href="javascript:;">Terms of Use</a>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12 col-xs-12 resend_link">
                                        <p>
                                            <a href="javascript:;">Click Here</a> to resend your activation link
                                        </p>
                                    </div>

                                    <div class="botm_buttons">
                                        <input value="SIgn Up" class="dealersubmit" type="button" v-on:click="onSignUp">
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
        name: 'signUp',
        data() {
            return {
                //Initializing all variables for this page
                signup: {
                    firstName: '',
                    lastName: '',
                    emailID: '',
                    userName: '',
                    password: '',
                    confirmPassword: '',
                    contactNo: '',
                    sponsor: '',
                    dob: '',
                }
            }
        },
        methods: {
            onSignUp: function () {
                var self=this;
                $.get("http://api.ipify.org/?format=json", function (data) {
                    console.log(data.ip, "data");
                    self.signup['ipAddress'] = data.ip;
                    self.signup['location'] = "IN";
                    self.signup['macAddress'] = "22-55-66-99-78-44";
                    self.signup['browser'] = "Mozila";
                    self.signup['userAgent'] = "Mozila";

                        HTTP.post(`Account/register`, self.signup)
                            .then(response => {
                                console.log(response, "response in sign up page");
                                // userInfo['userAccessToken'] = response.data.value.access_token;
                                // userInfo['AccountNo'] = response.data.value.AccountNo;
                                // userInfo['TwoFactor'] = response.data.value.TwoFactor;
                                // userInfo['user_name'] = response.data.value.user_name;
                                // userInfo['expires_in'] = response.data.value.expires_in;
                            })
                            .catch(e => {
                                this.errors.push(e)
                            })
                    // return data.ip;
                });
            }
        }
    }
</script>
