<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/api/base.js';
import { useUserStore } from '@/store/user.js';
import cryptoJS from 'crypto-js';
const router = useRouter();
const userStore = useUserStore();
const formObj = reactive({
  phoneNum: '',
  password: '',
});
const onSubmit = () => {
  const params = {
    phoneNum: formObj.phoneNum,
    password: cryptoJS.SHA256(formObj.password).toString(),
  };
  userStore.login(params);
};

const registry = () => {
  router.push({
    name: 'Registry',
  });
};
</script>

<template>
  <div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <!-- <van-field
          v-model="formObj.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        /> -->
        <van-field
          v-model="formObj.phoneNum"
          autocomplete="off"
          name="手机号"
          label="手机号"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请输入手机号' }]"
        />
        <van-field
          v-model="formObj.password"
          autocomplete="off"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
        <van-button
          style="margin-top: 0.2rem"
          plain
          round
          block
          type="primary"
          @click="registry"
        >
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped></style>
