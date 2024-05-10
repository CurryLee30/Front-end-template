<script setup>
import { reactive,ref } from 'vue';
const active = ref(3)

</script>

<template>
  <div>
    <router-view/>
  </div>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="guide-o" dot>发现</van-tabbar-item>
      <van-tabbar-item icon="list-switching">管理</van-tabbar-item>
      <van-tabbar-item to="/layout/mine" icon="friends-o" badge="5">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped></style>
