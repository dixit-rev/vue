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

                                <form id="ContForm1" class="contact-form form-contact"
                                      @submit.prevent="validateBeforeSubmit"
                                      novalidate="novalidate">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                        <div class="form-group">
                                            <input id="fname" v-model="signup.firstName" name="first name"
                                                   placeholder="First Name" class="form-control usernameicon"
                                                   data-toggle="floatLabel" data-value="" required=""
                                                   aria-required="true" v-validate="'required'"
                                                   :class="{'input': true, 'is-danger': errors.has('first name') }">
                                            <label for="fname">First Name</label>
                                            <span v-show="errors.has('first name')" class="help is-danger">{{ errors.first('first name') }}</span>
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
                                                   aria-required="true" type="email" v-validate="'required|email'"
                                                   :class="{'input': true, 'is-danger': errors.has('email') }">
                                            <label for="emalid" style="">Email Id</label>
                                            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                        <div class="form-group">
                                            <input id="uname" v-model="signup.userName" name="user name"
                                                   placeholder="User Name" class="form-control usernameicon"
                                                   data-toggle="floatLabel" data-value="" required=""
                                                   aria-required="true" v-validate="'required'"
                                                   :class="{'input': true, 'is-danger': errors.has('user name') }">
                                            <label for="uname" style="">User Name</label>
                                            <span v-show="errors.has('user name')" class="help is-danger">{{ errors.first('user name') }}</span>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                        <div class="form-group">
                                            <input id="pwdd" name="password" v-model="signup.password"
                                                   placeholder="Password" class="form-control pasword"
                                                   data-toggle="floatLabel" data-value="" required=""
                                                   aria-required="true" type="password" v-validate="'required'"
                                                   :class="{'input': true, 'is-danger': errors.has('password') }">
                                            <label for="pwdd" class="mat-label">Password</label>
                                            <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                        <div class="form-group">
                                            <input id="cnfpwd" name="confirm password" v-model="signup.confirmPassword"
                                                   placeholder="Confirm Password" class="form-control pasword"
                                                   data-toggle="floatLabel" data-value="" required=""
                                                   aria-required="true" type="password" v-validate="'required'"
                                                   :class="{'input': true, 'is-danger': errors.has('confirm password') }">
                                            <label for="cnfpwd">Confirm Password</label>
                                            <span v-show="errors.has('confirm password')" class="help is-danger">{{ errors.first('confirm password') }}</span>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                        <div class="form-group">
                                            <input id="tel" placeholder="Contact Number" v-model="signup.contactNo"
                                                   class="form-control contact" data-toggle="floatLabel" data-value=""
                                                   required="" aria-required="true" v-validate="'required|numeric'">
                                            <label for="tel">Contact Number</label>
                                            <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 email-field">
                                        <div class="form-group">
                                            <input id="sponsor" placeholder="Sponsor" v-model="signup.sponsor"
                                                   class="form-control sponsor" data-toggle="floatLabel" data-value=""
                                                   required="" aria-required="true" type="text"
                                                   :class="{'input': true, 'is-danger': (signup.sponsor == signup.userName) && signup.sponsor }">
                                            <label for="sponsor">Sponsor</label>
                                            <span>If you don't have sponsor, then leave it blank</span>
                                            <span class="help is-danger"
                                                  v-if="(signup.sponsor == signup.userName) && signup.sponsor">User name and sponsor can not be same.</span>
                                        </div>
                                    </div>

                                    <div class="col-md-12 col-xs-12 dob-field">
                                        <div class="form-group">
                                            <input id="dob" placeholder="D-O-B" v-model="signup.dob"
                                                   name="date of birth"
                                                   class="form-control dob" data-toggle="floatLabel" data-value=""
                                                   required="" aria-required="true" type="date" v-validate="'required'"
                                                   :class="{'input': true, 'is-danger': errors.has('date of birth') }">
                                            <label for="dob">DOB</label>
                                            <span v-show="errors.has('date of birth')" class="help is-danger">{{ errors.first('date of birth') }}</span>
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
                                                <input id="termsCheckbox" type="checkbox" name="terms"
                                                       v-validate="'required'"
                                                       :class="{'input': false, 'is-danger': errors.has('terms') }"
                                                >
                                                <label for="termsCheckbox">
                                                    I agree and have read the <a href="javascript:;">Terms of Use</a>
                                                </label>
                                                <span class="help is-danger" v-show="errors.has('terms')">{{ errors.first('terms') }}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-12 col-xs-12 resend_link">
                                        <p>
                                            <a href="javascript:;">Click Here</a> to resend your activation link
                                        </p>
                                    </div>

                                    <div class="botm_buttons">
                                        <input value="SIgn Up" class="dealersubmit" type="submit">
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
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result && (this.signup.sponsor !== this.signup.userName)) {
                        var self = this;

                        //Format modification for date
                        var currentDate = new Date(self.signup['dob']);
                        var day = currentDate.getDate();
                        var month = ((currentDate.getMonth() + 1) > 9) ? currentDate.getMonth() + 1 : '0' + (currentDate.getMonth() + 1);
                        var year = currentDate.getFullYear();
                        self.signup['dob'] = month + '-' + day + '-' + year;

                        $.get("http://api.ipify.org/?format=json", function (data) {
                            console.log(data.ip, "data");
                            self.signup['ipAddress'] = data.ip;
                            self.signup['location'] = "IN";
                            self.signup['macAddress'] = "22-55-66-99-78-44";
                            self.signup['browser'] = navigator.appName;
                            self.signup['userAgent'] = navigator.userAgent;

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
                    return;
                });
            },

        }
    }
</script>
