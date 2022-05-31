<template>
<div class="header">
  <div class="box">
    <div class="left">
      <div class="slogan">
            紫荊與你 <br>
      堅定夢想, 踏實前行
      </div>
      <div class="small">
      慶回歸紀念NFT
      </div>
      <div class="small2">限量 2500 枚</div>

      <div class="timer-plan">
        <div class="title">
          Registration open in:   
        </div> 
        <div class="timer">
          <div class="util">
            <div class="number">{{day}}</div>
            <div class="ut">Days</div>
          </div>
          <div class="symbol">:</div>

          <div class="util">
            <div class="number">{{hours}}</div>
            <div class="ut">Hours</div>
          </div>
          <div class="symbol">:</div>

          <div class="util">
            <div class="number">{{minutes}}</div>
            <div class="ut">Minutes</div>
          </div>
          <div class="symbol">:</div>

          <div class="util">
            <div class="number">{{seconds}}</div>
            <div class="ut">Seconds</div>
          </div>                            
        </div>
      </div>

    </div>

    <div class="qrcode">
      <img  src="./qrcode.svg" alt="">
      <span>
      登入紫荊 App 免費收到 " 永遠盛開的紫荊花" NFT
      </span>
    </div>
  </div>
</div>
</template>

<style lang="less">
body {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.header {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-image: url(/src/assets/images/bg-zijinghua.svg);
  background-size: cover;
  background-attachment: fixed;

  .box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .qrcode {
      bottom: 0;
      left: 0;
      position: absolute;
      span {
        color: #fff;
        font-size: 24px;
        font-weight: 600;
        padding: 0.7rem;
      }
      display: flex;
      align-items: flex-end;
    }
    .left {
      padding:20px;
      max-width: 1440px;
      height: 100vh;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .slogan {
        /* 紫荊與你 堅定夢想, 踏實前行 */

        // position: absolute;
        width: 366px;
        // height: 96px;
        // left: 136px;
        // top: 95px;

        /* Headling */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;
        letter-spacing: -0.04em;

        /* 1Box_Exchange_Orange_Gradient */
        background: linear-gradient(90deg, #E65C00 0%, #F9D423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
      .small {
        /* 慶回歸紀念NFT */

        /* Title 1 */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        /* identical to box height */

        /* 1Box_White */
        color: #FFFFFF;
        margin-top: 8px;
      }
      .small2 {

        /* Title 2 */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 150%;
        /* identical to box height, or 30px */

        /* 1Box_White */
        color: #FFFFFF;
        margin-top: 24px;
      }

    }
  }
}
.timer-plan {
    /* Registration open in: */

  /* Title 2 */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 150%;
  /* identical to box height, or 30px */

  /* 1Box_White */
  color: #FFFFFF;
  margin-top: 66px;
  .timer {
    display: flex;
    margin-top: 17px;
    .util {
      width: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      

      .number {
        /* Subheading */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 36px;
        color: #F7941E;
      }
      .ut {
        /* Overline */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 12px;
        text-align: center;

        /* 1Box_White */
        color: #FFFFFF;

        opacity: 0.5;
        margin-top: 8px;
      }
    }
    .symbol {
      /* Subheading */
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      line-height: 36px;
      /* 1Box_White */
      color: #FFFFFF;
      width: 30px;
      text-align: center;
    }
  }
}
</style>

<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue';
import moment from 'moment';

const S = 1
const M = S * 60
const H = M * 60
const D = H * 24

function dateFormatStr (time:string) {  //time为 yyyy-mm-dd格式日期
  return moment(time,'YYYY-MM-DD HH:mm:ss').toDate()
}

const endTime = dateFormatStr('2022-06-15 00:00:00')

const timecount = ref(0)

let day = computed(()=>Math.floor(timecount.value / D))
let hours = computed(()=>Math.floor(timecount.value % D / H))
let minutes = computed(()=>Math.floor(timecount.value % D % H / M))
let seconds = computed(()=>Math.floor(timecount.value % D % H % M))

const timer = setInterval(()=> {
  timecount.value = (endTime.getTime() - Date.now())/1000
},1000)

onUnmounted(()=> clearInterval(timer))

</script>