<script setup>
import { useUserStore } from "@/store/user.js";
import { useRouter } from 'vue-router';
import { logOut } from "@/api/base.js";
const userStore = useUserStore();
const userInfo = userStore.userInfo;
const router = useRouter();
const exit = () => {
  logOut().then(res => {
    const { successed,message } = res
    if (successed) {
      userStore.resetState();
      showToast({
        type: 'success',
        message: message,
        duration: 500,
        onClose: () => {
          router.push({
            name: 'Login',
          });
        },
      });
    }
    // userStore.setToken('')
  })
  
}
</script>

<template>
  <div class="container">
    <div class="portrait">
      <van-image width="0.8rem" height="0.8rem" fit="cover" position="left"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      <div class="right">
        <p class="name">
          {{ userInfo.username }}
        </p>
        <p class="phoneNum">
          <span>手机号:</span>
          <span>{{ userInfo.phoneNum }}</span>
        </p>
      </div>
      <div class="arrow">
        <van-icon style="margin-right: 0.2rem" name="qr" color="#979494" size="0.2rem" />
        <van-icon name="arrow" color="#979494" size="0.2rem" />
      </div>
    </div>
    <div class="exit">
      <van-button type="default" round block @click="exit">退出</van-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .portrait {
    display: flex;
    align-items: center;
    margin: 0.2rem;
    .right {
      flex: 1;
      margin-left: 0.2rem;
      .name {
        font-size: 0.2rem;
        font-weight: 500;
      }
      .phoneNum {
        color: #979494;
        font-size: 0.14rem;
        margin-top: 0.1rem;
      }
    }
  }
  .exit {
    margin-top: 1rem;
    padding: 0.3rem;
    box-sizing: border-box;
  }
}
</style>
