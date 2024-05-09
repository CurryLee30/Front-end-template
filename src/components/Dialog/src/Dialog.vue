<script setup>
import { ref } from 'vue'

defineProps({
  visible: {
    default: false,
    type:Boolean
  },
  title: {
    type: String,
    default:'确认'
  }
})

</script>

<template>
  <div v-if="visible" class="dialog-overlay">
    <div class="dialog">
      <div class="dialog-title">{{ title }}</div>
      <div class="dialog-content">
        <slot></slot>
        
      </div>
      <div class="button-container">
          <div @click="confirm" class="btnSubmit">继续阅读</div>
          <div class="btnCancel">不同意并退出</div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog {
  width:266px;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  font-family: PingFang SC;
}
.dialog-title {
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 25px;
  color: #2B2B2B;
}

.dialog-content {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height:23px;
  color:#585858;
  margin-top:16px;
  
}

.button-container {
  margin-top: 20px;
  /* margin: 20px auto 0px; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.btnSubmit {
  width:226px;
  height:36px;
  border-radius: 23px;
  text-align: center;
  line-height: 36px;
  background: #001E8D;
  font-size: 16px;
  color:#ffffff;
}

.button-container button {
  margin-bottom: 10px;
}
</style>
