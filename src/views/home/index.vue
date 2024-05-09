<script setup>
import {getUersList} from "@/api/base.js"
const submit = () => {
  getUersList().then(res => {
    console.log("res333", res);
  })
}
</script>

<template>
  <div class="container">
    <van-button type="success" @click="submit">成功按钮</van-button>
  </div>
</template>

<style lang="sass" scoped>

</style>
