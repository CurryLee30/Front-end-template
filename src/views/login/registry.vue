<script setup>
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { registry, getUersList } from '@/api/base.js';
import cryptoJS from 'crypto-js';
const router = useRouter();
const formObj = reactive({
  username: '',
  password: '',
  phoneNum: '',
});
const onSubmit = () => {
  const params = {
    username: formObj.username,
    password: cryptoJS.SHA256(formObj.password).toString(),
    phoneNum: formObj.phoneNum
  }
  registry(params).then((res) => {
    console.log('res', res);
    const { code, successed, message } = res;
    if (successed) {
      
      showToast ({
        type: 'success',
        message: message,
        duration:1000,
        onClose: () => {
          router.push({
            name: 'Login',
          });
        },
      });
    }
  });

  // getUersList().then(res => {
  //   console.log("res", res);
  // })
};
</script>

<template>
  <div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="formObj.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="formObj.phoneNum"
          type="number"
          name="手机号码"
          label="手机号码"
          placeholder="手机号码"
          :rules="[{ required: true, message: '请填写手机号码' }]"
        />
        <van-field
          v-model="formObj.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped></style>
