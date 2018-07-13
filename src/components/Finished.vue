<template>
    <section id="finished-information">
        <div class="decoration-line"></div>
        <div class="progress-area">
            <i class="fas fa-check"></i>
            <i class="fas fa-check general"></i>
            <i class="fas fa-check update"></i>
            <i class="fas fa-check payment"></i>
        </div>
        <h1 class="title">Congratulations</h1>
        <p>Now you’re one of us! </p>
        <div class="finished-area">
            <i class="fas fa-smile"></i>
            <p>Redirected to homepage after 5 seconds…</p>
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
section#finished-information {
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
        .fas.fa-check.payment {
            left: 99%;
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

    .finished-area {
        width: 100%;
        text-align: left;
        color: #BEE1FF;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        i {
            font-size: 300px;
        }
        p {
            font-size: 20px;
            color: #0275D8;
            margin-top: 20px;
        }
    }
}

</style>
