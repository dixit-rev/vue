<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="verification-block">
                        <h2>Google app based Two-Factor authentication</h2>
                        <span>Attempting to log in as dotnetrevinfo.</span>
                        <img src="img/authenticator-security.png" class="img-responsive center-block">
                        <p>Enter the six-digit code number from your mobile app here.</p>
                        <form>
                            <input type="text" name="code" v-model="code"
                                   v-validate="'required'" :class="{'input': false, 'is-danger': errors.has('code') }"
                                   placeholder="000000" class="form-control">
                            <input type="submit" name="" value="Verify" class="btn btn-success">
                        </form>
                        <a href="change_email.html" class="text-remove-center">Remove G2FA</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {HTTP} from '../../../main.js';

    export default {

        name: 'twofactor',
        data() {
            return {
                code: ''
            }
            // HTTP.get(`Security/getgoogleauth`,
            // ).then(function (response) {
            //     console.log(response,"response");
            // });

        },
        methods: {
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    console.log(result, "result");
                    if (result) {
                        ///Security/getgoogleauth
                        //     HTTP.get(`Security/getgoogleauth`,
                        //         // {
                        //         //     "code": this.email,//"admin@bfx.api.com",
                        //         //     "Password": this.password//"Bitflax@123"
                        //         // }
                        //     )
                        //         .then(response => {
                        //             userInfo['userAccessToken'] = response.data.value.access_token;
                        //             userInfo['AccountNo'] = response.data.value.AccountNo;
                        //             userInfo['TwoFactor'] = response.data.value.TwoFactor;
                        //             userInfo['user_name'] = response.data.value.user_name;
                        //             userInfo['expires_in'] = response.data.value.expires_in;
                        //         })
                        //         .catch(e => {
                        //             this.errors.push(e)
                        //         });
                    }
                });
            }
        }
    }
</script>
