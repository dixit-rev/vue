<template>
    <div class="right-inner-content">
        <div class="col-md-12">
            <ul class="top-exchange-blocks">
                <li><span>BFX Wallet</span> BFX: 0.000000</li>
                <li><span>Lending Wallet</span>$ 0.00</li>
                <li class="buttons-list"><button class="btn btn-primary"><i class="fa fa-angle-right" aria-hidden="true"></i> Transfer <i class="fa fa-angle-right" aria-hidden="true"></i></button></li>
                <li><span>Bitflax Wallet</span><i class="fa fa-university" aria-hidden="true"></i> 3.0000000</li>
                <li class="buttons-list"><button class="btn btn-primary"><i class="fa fa-angle-left" aria-hidden="true"></i> Exchange <i class="fa fa-angle-right" aria-hidden="true"></i></button></li>
                <li><span>Bitcoin Wallet</span><i class="fa fa-bitcoin" aria-hidden="true"></i> 3.0000000</li>
            </ul>
        </div>
        <div class="col-md-12 top-copy-link-block">
            <form action="#" class="pull-left">
                <div class="input-group">
                    <input class="ct-up" type="text" value="http://bitflax.devserver.co.in/">
                    <button class="btn btn-orange" type="submit"><i class="fa fa-files-o" aria-hidden="true"></i> Copy</button>
                </div>
            </form>
            <button class="lending-guide-btn btn btn-primary pull-right"><i class="fa fa-building-o" aria-hidden="true"></i> Lending Guide</button>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-12">
            <div class="tabs-same-all">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <h4 class="panel-title">
                                <a class="" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Lend Bitflax / Reinvest
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div class="panel-body">
                                <button class="btn btn-primary">Lend Bitflax</button>
                                <button class="btn btn-primary">Reinvest</button>
                                <p>you will receive daily profit based on your investment option. Upon investment term completion, you will receive your CAPITAL BACK to take out from the Bitflax lending platform or optionally reinvest back in lending platform to continue receiving daily profit. Learn more</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--./panel-group-->
            </div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="tabs-same-all">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <h4 class="panel-title">
                                <a class="" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsetwo" aria-expanded="true" aria-controls="collapsetwo">
                                    Bitcoin wallet
                                </a>
                            </h4>
                        </div>
                        <div id="collapsetwo" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div class="panel-body">
                                <h2 class="lg-color">Receive Bitcoin (BTC)</h2>
                                <p>Get address to accept Bitcoin payments</p>
                                <button class="btn btn-success">Deposit Bitcoin(BTC)</button>
                                <span class="red-alert">Note: We will not refund an incorrect withdrawal/ Deposit. This deposit address is for BitCoin (BTC) only.</span>
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingOne">
                                            <h4 class="panel-title">
                                                <a class="" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsetwo-one" aria-expanded="true" aria-controls="collapsetwo-one">
                                                    Incoming Bitcoin Transactions
                                                    <div class="btn-group tooltips-btns" role="group">
                                                        <i class="fa fa-question-circle" aria-hidden="true" title="We require minimum 3 confirmations to complete transaction. On average, each confirmation takes about 10 minutes. It can take more time depending on the Bitcoin network so do not worry and wait quietly."></i>
                                                    </div>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapsetwo-one" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                            <div class="panel-body">
                                                <div class="table-responsive in-table-bit">
                                                    <table>
                                                        <thead>
                                                        <th>ADDRESS</th>
                                                        <th>BFX</th>
                                                        <th>CONFIRMATION</th>
                                                        </thead>
                                                        <tr class="not-found-table">
                                                            <td colspan="3">No Incoming BitCoin transactions found.</td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--./panel-group-->
                                <div class="forms-in">
                                    <h2 class="lg-color">Send Bitcoin (BTC)</h2>
                                    <p>Your Bitcoin wallet balance: <strong>0.00000000</strong> BTC</p>
                                    <form>
                                        <div class="form-group">
                                            <label>To Address</label>
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="glyphicon glyphicon glyphicon-home"></i></span>
                                                <input id="login-password" type="text" class="form-control" placeholder="Bitcoin Address">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Quantity in Bitcoin</label>
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="glyphicon glyphicon glyphicon-pencil"></i></span>
                                                <input id="login-password" type="text" class="form-control" name="password" placeholder="Quantity in Bitcoin">
                                            </div>
                                            <span class="red-alert">Ensure amount no less than 0.005 BTC.</span>
                                        </div>
                                        <div class="form-group">
                                            <label>Password</label>
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="glyphicon glyphicon glyphicon-user"></i></span>
                                                <input id="login-password" type="password" class="form-control" placeholder="Enter your password">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button class="btn btn-primary"><i class="fa fa-bitcoin" aria-hidden="true"></i> Withdraw from BTC wallet</button>
                                        </div>
                                    </form>
                                    <div class="black-overlay">
                                        <h2>Login Shield Verification</h2>
                                        <button class="btn btn-primary"><i class="fa fa-envelope" aria-hidden="true"></i> click here to send verification e-mail</button>
                                        <h3>This verification method is mandatory to send coin from this wallet.</h3>
                                        <ul>
                                            <li>We noticed that you're attempting to log in from a new browser.</li>
                                            <li>Send new browser verification link to your registered e-mail address(dotnet.rev@gmail.com) and verify it to send coin from this wallet.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--./panel-group-->
            </div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="tabs-same-all">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <h4 class="panel-title">
                                <a class="" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsethree" aria-expanded="true" aria-controls="collapsethree">
                                    bitflax wallet (BFX)
                                </a>
                            </h4>
                        </div>
                        <div id="collapsethree" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div class="panel-body">
                                <h2 class="lg-color">Receive Bitflax (BFX)</h2>
                                <p>Get address to accept Bitcoin payments</p>
                                <button class="btn btn-success">Deposit Bitcoin(BFX)</button>
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div class="panel panel-default">
                                        <div class="panel-heading" role="tab" id="headingOne">
                                            <h4 class="panel-title">
                                                <a class="" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsethree-one" aria-expanded="true" aria-controls="collapsethree-one">
                                                    Incoming Bitflax Transactions
                                                    <div class="btn-group tooltips-btns" role="group">
                                                        <i class="fa fa-question-circle" aria-hidden="true" title="We require minimum 3 confirmations to complete transaction. On average, each confirmation takes about 10 minutes. It can take more time depending on the Bitflax network so do not worry and wait quietly."></i>
                                                    </div>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapsethree-one" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                            <div class="panel-body">
                                                <div class="table-responsive in-table-bit">
                                                    <table>
                                                        <thead>
                                                        <th>ADDRESS</th>
                                                        <th>BFX</th>
                                                        <th>CONFIRMATION</th>
                                                        </thead>
                                                        <tr class="not-found-table">
                                                            <td colspan="3">No Incoming Bitflax transactions found.</td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--./panel-group-->
                                <div class="forms-in">
                                    <h2 class="lg-color">Send Bitflax (BFX)</h2>
                                    <p>Your Bitcoin wallet balance: <strong>0.00000000</strong> BTC</p>
                                    <form>
                                        <div class="form-group">
                                            <label>To Address</label>
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="glyphicon glyphicon glyphicon-home"></i></span>
                                                <input id="login-password" type="text" class="form-control" placeholder="Bitflax Address">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Quantity in Bitcoin</label>
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="glyphicon glyphicon glyphicon-pencil"></i></span>
                                                <input id="login-password" type="text" class="form-control" name="password" placeholder="Quantity in Bitflax">
                                            </div>
                                            <span>Transaction Fee: 0.0001 BFX</span>
                                        </div>
                                        <div class="form-group">
                                            <label>Password</label>
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="glyphicon glyphicon glyphicon-user"></i></span>
                                                <input id="login-password" type="password" class="form-control" placeholder="Enter your password">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <button class="btn btn-primary"><i class="fa fa-bitcoin" aria-hidden="true"></i> Withdraw from BFX wallet</button>
                                        </div>
                                    </form>
                                    <div class="black-overlay">
                                        <h2>Login Shield Verification</h2>
                                        <button class="btn btn-primary"><i class="fa fa-envelope" aria-hidden="true"></i> click here to send verification e-mail</button>
                                        <h3>This verification method is mandatory to send coin from this wallet.</h3>
                                        <ul>
                                            <li>We noticed that you're attempting to log in from a new browser.</li>
                                            <li>Send new browser verification link to your registered e-mail address(dotnet.rev@gmail.com) and verify it to send coin from this wallet.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--./panel-group-->
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="col-md-12">
            <ul class="btm-list">
                <li>Total investment<strong>$ 0.00</strong></li>
                <li>Active investment<strong>$ 0.00</strong></li>
                <li>Total capital released<strong>$ 0.00</strong></li>
                <li>Total Earned</li>
            </ul>
            <div class="clearfix"></div>
            <div class="width7">
                <div class="table-responsive in-table-bit">
                    <table>
                        <thead>
                        <th></th>
                        <th></th>
                        <th></th>
                        </thead>
                        <tr>
                            <td colspan="3" class="text-center">No Transaction Found</td>
                        </tr>
                    </table>
                </div>
                <div class="clearfix"></div>
                <div class="pagination">
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    <nav aria-label="Page navigation">
                        <ul class="pagination">
                            <li>
                                <a href="#" aria-label="Previous">
                                    <span aria-hidden="true">«</span>
                                </a>
                            </li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li>
                                <a href="#" aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <ul class="btm-list btm-list-two">
                <li><span><i class="fa fa-lock" aria-hidden="true"></i></span> Lender<span><i class="fa fa-refresh" aria-hidden="true"></i></span><strong>0 (Total Feedback)</strong></li>
                <li><span><i class="fa fa-lock" aria-hidden="true"></i></span> Trader<span><i class="fa fa-refresh" aria-hidden="true"></i></span><strong>0 (Total Feedback)</strong></li>
                <li><span><i class="fa fa-unlock" aria-hidden="true"></i></span> Seller<strong>0 (Total Feedback)</strong></li>
                <li class="btn-group" role="group">
                    <div aria-hidden="true" title="Once unlocked, you can register a local Bitflax store under Bitflax system to serve local Bitflax community, and earn the highest level of rewards.">
            			<span>
            			  <i class="fa fa-unlock" aria-hidden="true"></i>
            			</span> Bit Store<strong>0 (Total Feedback)</strong>
                    </div>
                </li>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Question popup</button>
            </ul>
        </div>
    </div>

    <!--<app-header></app-header>-->
    <!--<div class="container-fluid counter_secnew">-->
        <!--<div class="container">-->
            <!--Header yaha se ayega yoyo.-->

        <!--</div>-->
    <!--</div>-->
</template>

<script>
    import {HTTP} from '../../../main.js';
    // import Header from '../header/header.vue';
    // //add variable for header and footer


    export default {
        name: 'signUp',
        components: {
            // 'app-header': Header,
            // 'app-footer': Footer
        },
        data() {
            return {
                //Initializing all variables for this page

            }
        },
        methods: {
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result && (this.signup.sponsor !== this.signup.userName)) {

                    }
                });
            },

        }
    }
</script>
