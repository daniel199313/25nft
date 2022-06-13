<template>
  <div class="mass" v-if="show">
    <div class="modal">
      <div class="content">
          <h1>{{title}}</h1>
          <div class="text">{{text}}</div>
      </div>
      <a href="javascript:;" class="button" @click="$emit('ok')">
        OK
      </a>
    </div>  
  </div>
</template>
<script lang="ts" setup>
import { defineProps,withDefaults } from 'vue';

interface IProps {
  show: boolean
  title: string
  text: string
}

const props = withDefaults(defineProps<IProps>(),{
  show:false,
  title: "title",
  text:"通知"
})

</script>

<style lang="less" scoped>
.modal {
  width: 375px;
  background: linear-gradient(90deg, #4776E6 0%, #8E54E9 100%);
  border-radius: 16px;
  position: absolute;
  color: #fff;
  padding: 1rem;
  margin: 200px auto;
  .button {
/* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 80px;
    color: #fff;
    text-decoration: none;
    background: linear-gradient(90deg, #5490E9 0%, #EC008C 100%);
    border-radius: 6px;   
    margin-top: 2em; 
  }
}
.mass {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  top:0;
  left: 0;
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: center;
}
</style>