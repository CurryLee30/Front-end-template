<script setup>
import { ref } from 'vue'
import myDialog from '@/components/Dialog'
defineProps({
  msg: String,
})
const show = ref(false)
const count = ref(0)
const showDialog = () => {
  show.value = true
}
</script>

<template>
  <div class="containerBox">
    <button @click="showDialog">点击弹框</button>
    <myDialog :visible="show">
      <slot>不同意条款与细则，系统将不能提供相关产品与服务。</slot>
    </myDialog>
  </div>
  
</template>

<style scoped>
.containerBox {
  font-size: 14px;
}
</style>
