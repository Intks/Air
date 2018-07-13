<template>
    <section id="payment-information">
        <div class="decoration-line"></div>
        <div class="progress-area">
            <i class="fas fa-check"></i>
            <i class="fas fa-check general"></i>
            <i class="fas fa-check update"></i>
            <div class="circle-payment"></div>
        </div>
        <h1 class="title">Payment Method</h1>
        <p>Add your credit card infomation! </p>
        <div class="payment-area">
            <div class="card-area">
                <label for="">Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456">
                <i class="fab fa-cc-visa"></i>
            </div>
            <div class="card-info">
                <div class="holder-name">
                    <label for="">Cardholder Name</label>
                    <input type="text" class="holder" placeholder="EXAMPLE NAME">
                </div>
                <div class="bank-name">
                    <label for="">Bank Name</label>
                    <input type="text" class="bank" placeholder="EXAMPLE BANK">
                </div>
            </div>
            <div class="card-detail">
                <div class="card-cvv">
                    <label for="">CVV</label>
                    <input type="text" class="cvv">
                </div>
                <div class="expire-date">
                    <label for="">Expire Date</label>
                    <input type="month">
                </div>
            </div>
            <router-link to="finished" class="submit">DONE</router-link>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>


<style lang="scss" scoped>
section#payment-information {
    * {
        box-sizing: border-box;
    }
    height: 100%;
    width: 460px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    .decoration-line {
        width: 456px;
        height: 3px;
        background-color: #0275D8;
    }
    .progress-area {
        margin-top: 80px;
        margin-bottom: 20px;
        width: 230px;
        height: 2px;
        position: relative;
        background-color: #BEE1FF;
        .fas {
            position: absolute;
            top: -8px;
            left: 0%;
        }
        .fas.fa-check {
            color: white;
            background-color: #0275D8;
            border-radius: 50%;
            font-size: 12px;
            padding: 2px;
            line-height: 12px;
        }
        .fas.fa-check.general {
            left: 33%;
            &:after {
                content: '';
                height: 2px;
                position: absolute;
                width: 60px;
                left: -60px;
                top: 50%;
                transform: translateY(-50%);
                background-color: #0275D8;
            }
        }
        .fas.fa-check.update {
            left: 66%;
            &:after {
                content: '';
                height: 2px;
                position: absolute;
                width: 60px;
                left: -60px;
                top: 50%;
                transform: translateY(-50%);
                background-color: #0275D8;
            }
        }
        .circle-general {
            position: absolute;
            left: 33%;
            height: 16px;
            width: 16px;
            top: -8px;
            border-radius: 50%;
            border: 2px solid #0275D8;
            background-color: #fff;
            
        }
        .circle-update {
            position: absolute;
            left: 66%;
            height: 16px;
            width: 16px;
            top: -8px;
            border-radius: 50%;
            background-color: #fff;
            border: 2px solid #0275D8;
            &:after {
                content: '';
                height: 2px;
                position: absolute;
                width: 65px;
                left: -65px;
                top: 50%;
                transform: translateY(-50%);
                background-color: #0275D8;
            }
            
        }
        .circle-payment {
            position: absolute;
            left: 99%;
            height: 16px;
            width: 16px;
            top: -8px;
            border-radius: 50%;
            background-color: #fff;
            border: 2px solid #0275D8;
            &:after {
                content: '';
                height: 2px;
                position: absolute;
                width: 65px;
                left: -65px;
                top: 50%;
                transform: translateY(-50%);
                background-color: #0275D8;
            }
            &:before {
                content: '';
                display: block;
                height: 8px;
                width: 8px;
                border-radius: 50%;
                background-color: #0275D8;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
    }
    .title {
        font-size: 48px;
        margin-bottom: 0;
    }
    p {
        font-size: 24px;
        margin-top: 0;
        font-weight: 200;
    }

    .payment-area {
        width: 100%;
        text-align: left;
        label {
            font-size: 20px;
            }
        input {
            width: 460px;
            height: 52px;
            border-radius: 8px;
            outline: none;
            border: 2px solid #000;
            margin-bottom: 30px;
            font-size: 20px;
            padding: 10px;
            &::placeholder {
                font-size: 20px;
                line-height: 1.5em;
            }
        }
        .card-area {
            position: relative;
            .fab.fa-cc-visa {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 10px;
                font-size: 20px;
            }
            
        }
        .card-info {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .holder-name {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                width: 50%;
                .holder {
                    width: 220px;
                }
            }
            .bank-name {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                width: 50%;
                .bank {
                    width: 220px;
                }
            }
        }
        .card-detail {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .card-cvv {
                width: 33%;
                .cvv {
                    width: 140px;
                }
            }
            .expire-date {
                width: 66%;
                margin-left: 20px;
                input {
                    width: 280px;
                }
            }
        }
        .submit {
            width: 460px;
            height: 52px;
            border-radius: 8px;
            font-size: 20px;
            color: #fff;
            background-color: #BEE1FF;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: .5s;
            &:hover {
                transform: translateY(5px);
            }
        }
    }
}

</style>
