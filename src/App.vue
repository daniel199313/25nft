<template>
<Header/>

<div class="section-1 container">
  <img src="/src/assets/block-1.png" alt=""/>
  <img src="/src/assets/block-2.svg" alt=""/>
</div>
<div class="section-2 container">
  <div class="line">
    <img src="/src/assets/icon/user.svg" alt="" class="icon">
    登入《紫荊》雜誌手機 APP
  </div>
  <div class="line">
    <img src="/src/assets/icon/gift.svg" alt="" class="icon">
    NFT 空投到你的小狐狸錢包
  </div>
  <div class="line">
    <img src="/src/assets/icon/edit.svg" alt="" class="icon">
    填寫
    <img src="/src/assets/icon/metamask.svg" alt="" class="icon">
    小狐狸錢包地址 (ETH)
  </div>
  <div class="line">
    <img src="/src/assets/icon/setting.svg" alt="" class="icon">
    轉讓和上架 OpenSea Marketplace 你的 NFT
  </div>            
</div>

<div class="section-3">
  完成登記後，你的錢包地址會被列入空投名單，<span>你就可以在 7 月 10 日前收到屬於你自己的 NFT </span>。
  收到後，您便能進行轉讓和上架 OpenSea Marketplace 等操作。
</div>
<div class="section-4 container">
  <div class="btn-group">
    <img src="/src/assets/icon/mobile.svg" alt="">
    <div class="text">
      <div class="text1">限量空投, 先到先得</div>
      <hr>
      <div class="text2">記得在 7 月 1 日後回來看空投名單哦!</div>
    </div>
    <button disabled="true">
      <div class="mash"></div>
      6 月 15 日 00:00 準時開搶！
    </button>
  </div>
</div>
<div class="section-5">
  <h1><span>《紫荊》</span>雜誌</h1>
  <div>創刊於1990年10月，是香港出版的一本以政治、經濟、新聞評論為主，<br> 集社會、民生、軍事、文化、歷史等多方面內容的綜合性新聞月刊．</div>    
</div>
<div class="container section-6">
   <div class="list" :style="{
     marginLeft: left + 'px',
   }">
    <div class="item" v-for="(item,index) in list">
      <img :key="index" :src="item" alt="">
    </div>                  
  </div> 
</div>

<div class="container section-7">
  <h1>Airdrop is Coming!</h1>
  <div class="list">
    <div class="item">
      <img src="/src/assets/icon/icon-1.svg" alt="">
      <span>
        下載紫荊雜誌 APP

        <div class="message" @click="openDownloadApp">
          官方下載《紫荊》手機 APP
        </div>
      </span>
    </div>
    <div class="item">
      <img src="/src/assets/icon/icon-2.svg" alt="">
      <span>
        下載小狐狸錢包

        <a class="message" href="https://metamask.io/download/" target="_blank">
          官方下載 小狐狸錢包 手機 APP。
        </a>
      </span>
    </div>
    <div class="item">
      <img src="/src/assets/icon/icon-3.svg" alt="">
      <span>
        免費得到 ETH 錢包地址

        <a target="_blank" href="https://1box.gitbook.io/1box-support/guide/how-to-use-metamask-on-mobile#step-2-set-up-network" class="message">
        1Box Exchange 手把手教你創建和設置 小狐狸 ETH 錢包。
        </a>
      </span>
    </div>
    <div class="item">
      <img src="/src/assets/icon/icon-4.svg" alt="">
      <span>
        查詢空投結果

        <div class="message">
          7 月 1 日 香港時間 10 AM 後, 在《紫荊》手機 APP 查看
        </div>
      </span>
    </div>
    <div class="item">
      <img src="/src/assets/icon/icon-5.svg" alt="">
      <span>
        領取 NFT

        <div class="message">
        最快完成登記的 2500 位幸運兒，紫荊 將在 7 月 10 日前, 直接發送到你的 ETH 錢包。        
        </div>
      </span>
    </div>
    <div class="item">
      <img src="/src/assets/icon/icon-6.svg" alt="">
      <span>
        查看你的 NFT

        <div class="message">
          收到後, 屬於你的, 世界獨一的 NFT 會馬上在小狐狸錢包看到。 
        </div>
      </span>
    </div>                      

  </div>
</div>

<Alert :show="showAlert" title="Ooops. 手機 APP， 一定要用手機下載哦！" text="2500 NFTs 免費送出, 先到先得！" @ok="()=>closeAlert()"></Alert>

</template>

<script lang="ts" setup>
import Header from './components/Header.vue';
import {ref,onMounted} from 'vue'
import Alert from './components/Alert.vue';
import post1 from '/src/assets/post1.png'
import post2 from '/src/assets/post2.jpeg'
import post3 from '/src/assets/post3.png'
import post4 from '/src/assets/post4.jpeg'
import post5 from '/src/assets/post5.jpeg'
import post6 from '/src/assets/post6.png'
import post7 from '/src/assets/post7.jpeg'

const left = ref(0)
const list = ref([
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,

  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,  
])
let count = 0
onMounted(()=> {
  setInterval(()=> {
    count += 1
    left.value -= 0.5
    if (count == 3000) {
      left.value = 0
    }
  },10)  
})

const showAlert = ref(false)
const closeAlert = ()=> {
  showAlert.value = false
}

const openDownloadApp = ()=> {
  if (isPcOrMb()) {
    showAlert.value = true
  } else {
    window.open('https://bau.com.hk/nmapp','_blank')
  }
}

function isPcOrMb() {
   var userAgentInfo = navigator.userAgent;
   var Agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"];
   var flag = true;
   for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
         flag = false;
         break;
      }
   }
   return flag;
}
</script>


<style lang="less">
body {
  padding: 0;
  margin: 0;
}
.container {
  max-width: 1440px;
  margin: 0 auto;
}

.section-1 {
  display: flex;
  justify-content: space-around;
  margin-top:60px;
  img {
    width: 512px;
    height: 512px;
    margin:0.5em;
    border-radius: 25px;
  }
  flex-wrap: wrap;
}

.section-2 {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  img {
    max-width: 85vw;
  }
  margin-top: 61px;
  .line {
    width: 45%;
    line-height: 2em;
    text-align: center;
    color: #979797;
    font-family: 'Inter';
    font-style: normal;
  }
}

.section-3 {
  max-width: 1000px;
  margin: 60px auto;
  padding: 0 1em;

  /* Title 2 */
  font-family: 'Inter';

  // font-size: 20px;
  line-height: 150%;
  /* or 30px */
  text-align: center;

  /* 1Box Dark Grey */
  color: #979797;
  span {
    color:#4776E6;
  }
}

.section-4 {
  padding: 0 1em;
  .btn-group {
    background: linear-gradient(90deg, #4776E6 0%, #8E54E9 100%);
    padding:1em;
    border-radius: 5em;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    hr {
      opacity: 0.2;
    }
    img {
      width: 115px;
      display: block;
    }
    .text {
      color: #fff;
      padding: 0 1em;
      flex: 1;
      .text2 {
        text-align: right;
      }
    }
    button {
      border: none;
      outline: none;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14.9965px;
      text-align: center;
      background: linear-gradient(90deg, #5490E9 0%, #EC008C 100%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 6px; 
      width: 281px;
      height: 50px;   
      margin-right:50px ;        

      /* 1Box_White */

      color: #FFFFFF;


      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0; 
      position: relative;   
      overflow: hidden;
      .mash {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
        background: rgba(0, 0, 0, 0.25);
      }  
    }
  }
}

.section-5 {
  margin-top: 52px;
  text-align: center;
  color: #979797;
  padding: 1em;
  h1 {
    color: #3b3b3b;
    span {
      font-size: 30px;
      color:#4776E6;
    }
  }
}

.section-6 {
  overflow-x: hidden;
  .list {
    display: flex;
    margin-top: 90px;
    padding: 1em;
    width:9000vw;  
    .item {
      margin: 1em;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      width: 270px;
      img {
        width: 100%;
      }      
    }
  }
}

.section-7 {
  text-align: center;
  .list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #979797;
      margin-top: 48px;
      width: 170px;
      img {
        width: 70px;
      }
      span {
        margin-top: 2em;
        .message {
          margin-top: 1em;
          display: none;
        }
      }
      &:hover {
        .message {
          display: block;
          cursor: pointer;
          &:hover {
            color:#4776E6;
          }
        }
      }      
    }
  }
  margin-bottom: 300px;
}

</style>
<style lang="less">
@media screen and (max-width: 414px) {
  .section-1 {
    margin-top: 1em;
    img {
      width: 85vw;
      height: 85vw;
    }
  }
  .section-2 {
    .line {
      width: 85%;
    }
  }
  .section-4 {
    .btn-group {
      flex-direction: column;
      border-radius: 25px;
      justify-content: center;
      align-items: center;
      text-align: center;
      .text {
        text-align: center;
        padding: 1em 0;
        box-sizing: border-box;
        width: 100%;
        .text1,.text2 {
          text-align: center;
        }
      }
      button {
        width: 100%;
        margin: 0;
      }
    }
  }
  .section-6 {
  .list {
    display: flex;
    margin-top: 40px;
    width:9000vw;  
    .item {
      margin: 1em;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      width: 150px;
      img {
        width: 100%;
      }      
    }
  }
  }
}
</style>