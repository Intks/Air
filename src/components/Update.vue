<template>
    <section id="update-information">
        <div class="decoration-line"></div>
        <div class="progress-area">
            <i class="fas fa-check"></i>
            <i class="fas fa-check general"></i>
            <div class="circle-update"></div>
            <div class="circle-payment"></div>
        </div>
        <h1 class="title">Update Profile Picture</h1>
        <p>We wanna know you more!</p>
        <div class="update-area">
            <label for="file-upload" class="custom-file-upload">
                <i class="fas fa-images"></i>
                <p>UPLOAD UP TO 3 PHOTOS<br>
MAX SIZE: 150*150px</p>
            </label>
            <input type="file" id="file-upload" @change="fileSelected">
            <div class="img-area">
                <img :src="image" alt="">
            </div>
            <router-link to="payment" class="submit">SUBMIT & NEXT</router-link>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            image: ''
        }
    },
    methods: {
        fileSelected(e) {
            let file = e.target.files.item(0)
            let reader = new FileReader();
            reader.addEventListener('load', this.imageLoaded)
            reader.readAsDataURL(file)
        },
        imageLoaded(e){
            this.image = e.target.result
        }
    }
}
</script>


<style lang="scss" scoped>
section#update-information {
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

    .update-area {
        width: 100%;
        text-align: left;
        .custom-file-upload {
            color: #4A90E2;
            border: 2px solid #4A90E2;
            display: inline-block;
            padding: 6px 12px;
            height: 140px;
            width: 460px;
            cursor: pointer;
            border-radius: 8px;
            margin-bottom: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            p {
                font-size: 20px;
                margin: 0;
                margin-left: 20px;
            }
            i {
                font-size: 60px;
                color: #4A90E2;
            }
        }
        .img-area {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            margin-bottom: 30px;
            img {
                height: 140px;
                width: 140px;

            }
        }
        input[type="file"] {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0,0,0,0);
            border: 0;
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
