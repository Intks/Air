<template>
    <section id="general-information">
        <div class="decoration-line"></div>
        <div class="progress-area">
            <i class="fas fa-check"></i>
            <div class="circle-general"></div>
            <div class="circle-update"></div>
            <div class="circle-payment"></div>
        </div>
        <h1 class="title">General Infomation</h1>
        <p>Tell us who you are!</p>
        <div class="general-area">
            <div class="name">
                <label for="">Name<span>(optional)</span></label>
                <input type="text" placeholder="Example Name" v-model="name">
            </div>
            <div class="phone">
                <label for="">Phone</label>
                <input type="number" placeholder="0912 345 678" v-model="phone" :class="{vailed: phoneVailed}">
                <i class="fas fa-exclamation-triangle" v-if="phoneVailed"></i>
                <p class="warn-message" v-if="phoneVailed">NUMBERS ONLY</p>
            </div>
            <div class="brith-date">
                <label for="">Birth Date<span>(optional)</span></label>
                <input type="date" v-model="date">
            </div>
            <div class="address-area">
                <label for="">Address</label>
                <div class="city-area">
                    <select name="" id="" class="city">
                    <option value="台北市">台北市</option>
                    </select>
                    <select name="" id="" class="area">
                        <option value="信義區">信義區</option>
                    </select>
                </div>
                <input type="text" class="address" placeholder="Detail address"> 
            </div>
            <router-link to="update" class="submit">SUBMIT & NEXT</router-link>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            phone: '',
            date: '',
        }
    },
    computed: {
        phoneVailed() {
            if(/^[a-zA-Z]{1}\d{9}$/.test(this.phone)) {
                return true
            }else {
                return false
            }
        }
    }
}
</script>


<style lang="scss" scoped>
section#general-information {
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
            border: 2px solid #0275D8;
            background-color: #fff;
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

    .general-area {
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
        .name,.phone {
            display: inline-flex;
            justify-content: flex-start;
            flex-direction: column;
            text-align: left;
            width: 220px;
            label {
                font-size: 20px;
                display: inline;
                span {
                    font-size: 16px;
                    font-weight: 200;
                }
            }
            input {
                width: 220px;
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
        }
        .name {
            margin-right: 10px;
        }
        .brith-date {
            display: inline-flex;
            justify-content: flex-start;
            flex-direction: column;
            text-align: left;
            width: 100%;
            label {
                font-size: 20px;
                display: inline;
                span {
                    font-size: 16px;
                    font-weight: 200;
                }
            }
            .input-date {
                input {
                    width: 140px;
                }
                .month {
                    margin-right: 10px;
                    margin-left: 10px;
                }
            }
        }
        .address-area {
            width: 100%;
            .city-area {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                select {
                    width: 220px;
                    height: 52px;
                    margin: 10px;
                    background-color: #fff;
                    border: 2px solid #000;
                    font-size: 20px;
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
