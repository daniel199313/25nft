<template>
<div class="zanzhu container">
  <div class="row">
    <div class="title-h">合辦:</div>  
    <div class="content">
      <img class="heban_item" src="/src/assets/香港各界慶典委員會logo.jpg" alt=""/>
      <img class="heban_item title" src="/src/assets/廣西社團總會_logo-1.png" alt=""/>
      <img class="heban_item title" src="/src/assets/江蘇社團總會_logo.jpg" alt=""/>
      <img class="heban_item title" src="/src/assets/滬港logo_style 01-ok.png" alt=""/>
      <img class="heban_item" src="/src/assets/湖南.png" alt=""/>
      <img class="heban_item title" src="/src/assets/湖北社團總會.png" alt=""/>
      <img class="heban_item" src="/src/assets/山東社團總會.jpg" alt=""/>
      <img class="heban_item" src="/src/assets/江西logo.jpg" alt=""/>
      <img class="heban_item" src="/src/assets/cd.png" alt=""/>
      <img class="heban_item title" src="/src/assets/香港菁英會.png" alt=""/>
      <img class="heban_item" src="/src/assets/dwqqnzcxh.png" alt=""/>
      <img class="heban_item " src="/src/assets/WX20220614-160227@2x.png" alt=""/>
      <img class="heban_item title" src="/src/assets/大灣區金融科技促進總會logo-H.png" alt=""/>      
    </div>
  </div>
  <div class="row">
    <div class="title-h">協辦:</div>  
    <div class="content">
      <img class="heban_item title" src="/src/assets/CMI_logo_set_colour_Horizontal (Bilingual).png" alt=""/>
      <img class="heban_item " src="/src/assets/dhgj.png" alt=""/>
      <img class="heban_item title" src="/src/assets/dcgj.png" alt=""/>
      <img class="heban_item title" src="/src/assets/wis.png" alt=""/>
    </div>
  </div>  
</div>
<a href="https://www.1boxnft.com" class="floor"><img src="/src/assets/icon/onebox.svg" alt=""> 提供技術支持</a>
</template>

<style lang="less" scoped>
.floor {
  background-color: #8E54E9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  padding: 0.25em;
  img {
    margin: 0.5em;
  }
}
.zanzhu {
  padding: 1rem;
  .row {
    .title-h {
      font-size: 2em;
    }
    .content {
      display: flex;   
      flex-wrap:wrap;  
      overflow: hidden; 
      align-items: center;
    }
  }
  .heban_item {
    width: 100px;
    margin: 0.5em;
    flex-shrink:0;
    display: inline-block;
    // flex:1;
    &.title {
      width: calc(50% - 1em);
      flex: 1;
      max-width: 200px;
    }
  }
}
</style>