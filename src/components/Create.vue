<template>
    <section id="create-account">
        <div class="decoration-line"></div>
        <div class="progress-area">
            <div class="check-circle"></div>
            <div class="circle-general"></div>
            <div class="circle-update"></div>
            <div class="circle-payment"></div>
        </div>
        <h1 class="title">Create Account</h1>
        <p>Glad to see you here!</p>
        <form class="create-area">
            <div class="account-area">
                <label for="">Account</label>
                <input type="email" class="account" :class="{vailed: emailVailed}" placeholder="example@email.com" v-model="email">
                <i class="fas fa-exclamation-triangle" v-if="emailVailed"></i>
                <p class="warn-message" v-if="emailVailed">INVALID EMAIL</p>
            </div>
            <div class="password-area">
                <label for="">Password</label>
                <input type="password" class="password" placeholder="●●●●●●●●" v-model="password" :class="{vailed: passwordVailed}">
                <i class="fas fa-exclamation-triangle" v-if="passwordVailed"></i>
                <p class="warn-message" v-if="passwordVailed">MINIMUM 8 CHARACTERS</p>
            </div>
            <div class="comfirm-area">
                <label for="">Comfirm Password</label>
                <input type="password" class="comfirm" placeholder="●●●●●●●●" :class="{vailed: comfirm}" v-model="comfirmPassword">
                <i class="fas fa-exclamation-triangle" v-if="comfirm"></i>
                <p class="warn-message" v-if="comfirm">NOT MATCH</p>
            </div>
            <router-link to="general" class="submit" :disabled="emailVailed">SUBMIT & NEXT</router-link>
        </form>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                email: "",
                password: "",
                comfirmPassword: ''
            }
        },
        computed: {
            emailVailed() {
                if(!this.email) false
                else if(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(this.email)) {
                    return false
                }else {
                    return true
                }
            },
            passwordVailed() {
                if(!this.password) false
                else if(this.password.length < 8) {
                    return true
                }else {
                    return false
                }
            },
            comfirm() {
                
                if(this.comfirmPassword !== this.password) {
                    return true
                }else {
                    return false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
section#create-account {
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
        .check-circle {
            position: absolute;
            left: -8px;
            height: 16px;
            width: 16px;
            top: -8px;
            border-radius: 50%;
            border: 2px solid #0275D8;
            background-color: #fff;
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
        .circle-general {
            position: absolute;
            left: 33%;
            height: 16px;
            width: 16px;
            top: -8px;
            border-radius: 50%;
            background-color: #fff;
            border: 2px solid #BEE1FF;
        }
        .circle-update {
            position: absolute;
            left: 66%;
            height: 16px;
            width: 16px;
            top: -8px;
            border-radius: 50%;
            background-color: #fff;
            border: 2px solid #BEE1FF;
        }
        .circle-payment {
            position: absolute;
            left: 99%;
            height: 16px;
            width: 16px;
            top: -8px;
            border-radius: 50%;
            background-color: #fff;
            border: 2px solid #BEE1FF;
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
    .create-area {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: left;
        .account-area {
            position: relative;
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
            .fa-exclamation-triangle {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 20px;
                color: #F5A623;
            }
            .warn-message {
                position: absolute;
                right: -150px;
                top: 50%;
                transform: translateY(-50%);
                background-color: #F5A623;
                font-size: 14px;
                font-weight: 200;
                padding: 10px; 
                color: white;
                &:before {
                    content: '';
                    display: block;
                    width: 10px;
                    height: 10px;
                    background-color: #F5A623;
                    transform: rotate(45deg) translateY(-50%);
                    position: absolute;
                    left: -8px;
                    top: 50%;
                }
            }
            .account.vailed {
                border: 3px solid #F5A623;
            }
        }
        .password-area {
            position: relative;
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
            .fa-exclamation-triangle {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 20px;
                color: #F5A623;
            }
            .warn-message {
                position: absolute;
                right: -220px;
                top: 50%;
                transform: translateY(-50%);
                background-color: #F5A623;
                font-size: 14px;
                font-weight: 200;
                padding: 10px; 
                color: white;
                &:before {
                    content: '';
                    display: block;
                    width: 10px;
                    height: 10px;
                    background-color: #F5A623;
                    transform: rotate(45deg) translateY(-50%);
                    position: absolute;
                    left: -8px;
                    top: 50%;
                }
            }
            .password.vailed {
                border: 3px solid #F5A623;
            }
        }

        .comfirm-area {
            position: relative;
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
            .fa-exclamation-triangle {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 20px;
                color: #F5A623;
            }
            .warn-message {
                position: absolute;
                right: -220px;
                top: 50%;
                transform: translateY(-50%);
                background-color: #F5A623;
                font-size: 14px;
                font-weight: 200;
                padding: 10px; 
                color: white;
                &:before {
                    content: '';
                    display: block;
                    width: 10px;
                    height: 10px;
                    background-color: #F5A623;
                    transform: rotate(45deg) translateY(-50%);
                    position: absolute;
                    left: -8px;
                    top: 50%;
                }
            }
            .comfirm.vailed {
                border: 3px solid #F5A623;
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
