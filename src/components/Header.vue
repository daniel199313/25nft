<template>
<div class="header">
  <img class="bg-pc" width="1440"  src="/src/assets/images/banner.jpg" alt="">
  <img class="bg-m" src="/src/assets/images/banner-m.jpg" alt="">
  <div class="box">
    <!-- <div class="timer-plan">
      <div class="title">Registration {{
        getStage() == 0 ? 'Opens': 'Close'
      }} in</div>
      <div class="timer">
        <div class="number">{{day}}</div>
     
        <div class="number"><span>:</span> {{hours}}</div>
     
        <div class="number"><span>:</span> {{minutes}}</div>
     
        <div class="number"><span>:</span> {{seconds}}</div>                        
      </div>
      <div class="utils">
        <div>
          Days
        </div>
        <div>
          Hours
        </div>
        <div>
          Minutes
        </div>
        <div>
          Seconds
        </div>                        
      </div>
    </div> -->
  </div>
</div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue';
import {getNextStageSec,getStage} from './timelist'

const S = 1
const M = S * 60
const H = M * 60
const D = H * 24




const timecount = ref(getNextStageSec())

let day = computed(()=>Math.floor(timecount.value / D))
let hours = computed(()=>Math.floor(timecount.value % D / H))
let minutes = computed(()=>Math.floor(timecount.value % D % H / M))
let seconds = computed(()=>Math.floor(timecount.value % D % H % M))

if (getStage()<2) {
  const timer = setInterval(()=> {
    timecount.value = getNextStageSec()
  },1000)  
  onUnmounted(()=> clearInterval(timer))
}



</script>

<style lang="less" scoped>
  .header {
  margin: 0 auto;
  position: relative;
  max-width: 1440px;
  img {
    width: 100%;
  }

  .box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
.timer-plan {
    /* Registration open in: */

  /* Title 2 */
  font-family: 'Inter';
  font-style: normal;
  // font-weight: 300;
  font-size: 20px;

  /* identical to box height, or 30px */
  position: absolute;
  top: 0;
  right: 0;

  /* 1Box_White */
  color: #FFFFFF;
  margin-top: 40px;
  margin-right: 230px;
  .title {
    font-weight: 500;
  }
  .timer {
    width: 300px;
    // background: linear-gradient(90deg, #a8ff4d 0%, #01fffe 100%);
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    // background-clip: text;
    // text-fill-color: transparent;
    color: #a8ff4d;
    display: flex;
    font-size: 36px;
    font-weight: 600;
    .number {
      width: 2em;
      display: flex;
      justify-content: space-around;
    }
  }
  .utils {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 16px;
    div {
      flex: 1;
      text-align: center;
    }
  }
}

.bg-m {
  display: none;
}
.bg-pc {
  display: block;
}

@media screen and (max-width: 768px) {
  .bg-pc {
    display: none;
  }
  .bg-m {
    display: block;
  }

  .timer-plan {
    margin: 2em;
    zoom: 0.5;
  }
}
</style>