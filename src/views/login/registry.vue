<script setup>
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { registry } from '@/api/authDog/user';
// import { registry, getUersList } from '@/api/base.js';
import { generateUniqueId } from '@/utils/common.js';
import cryptoJS from 'crypto-js';
import { datePickerProps } from 'vant';
const router = useRouter();
const formObj = reactive({
  username: '', //用户名只能包含字母和数字并以字母开头
  password: '',
  phoneNum: '',//密码长度必须在8-16位之间
});

const onSubmit = () => {
  // const params = {
  //   username: formObj.username,
  //   password: cryptoJS.SHA256(formObj.password).toString(),
  //   phoneNum: formObj.phoneNum
  // }
  const bodyData = {
    baseBody: {
      "timestamp": Date.now(),
      "clientVersion": "V1.0.0",
      "deviceId": generateUniqueId(20),
      // "deviceId": "fa6a91ef9baa242de0b354a212e8cf83",
      // "osType": "android",
      // "brand": "XIAOMI",
      // "model": "MI13"
    },
    name: formObj.username,
    password:formObj.password,
    mobile: formObj.phoneNum,   
  }
  const authdogParams = {
    appid: 3,
    data:JSON.stringify({
      name: formObj.username,
      password:formObj.password,
      mobile: formObj.phoneNum,
      deviceId: generateUniqueId(30)
    }) 
    
  }
  // const paramsStr = JSON.stringify(authdogParams);
  // console.log('paramsStr1111111',paramsStr)
  registry(authdogParams).then((res) => {
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
          autocomplete="off"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="formObj.phoneNum"
          autocomplete="off"
          type="number"
          name="手机号码"
          label="手机号码"
          placeholder="手机号码"
          :rules="[{ required: true, message: '请填写手机号码' }]"
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
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped></style>
