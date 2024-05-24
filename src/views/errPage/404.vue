<script setup>
import { reactive,ref } from 'vue';
const type = ref(404);
const types = reactive({
  403: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
    title: '403',
    desc: '抱歉，你无权访问该页面',
  },
  404: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
    title: '404',
    desc: '抱歉，你访问的页面不存在或仍在开发中',
  },
  500: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
    title: '500',
    desc: '抱歉，服务器出错了',
  },
});
</script>

<template>
  <div class="container">
    <div class="imgBlock">
      <van-image
        width="100%"
        height="1.75rem"
        fit="contain"
        :src="types[type].img"
      />
      <!-- <div
        :style="{ backgroundImage: `url(${types[type].img})` }"
        class="imgEle"
      ></div> -->
    </div>
    <div class="content">
      <h1>{{ types[type].title }}</h1>
      <div class="desc">{{ types[type].desc }}</div>
    </div>
    <div class="actions">
      <!-- <van-button type="info" @click="handleToHome">返回首页</van-button> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100vh;
  .imgBlock {
    width:85%;
  }
  .content {
    margin-top:0.1rem;
    h1 {
      text-align: center;
      font-size: 0.32rem;
    }
    .desc {
      padding: 0rem 0.2rem;
      text-align: center;
      font-size: 0.17rem;
      white-space: nowrap;
    }
  }
  .actions {
    display: flex;
    margin-top: 0.2rem;
    justify-content: center;
  }
}
</style>
