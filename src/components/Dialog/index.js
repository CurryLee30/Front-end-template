import myDialog from './src/Dialog.vue';
 
myDialog.install = (Vue) => {
  Vue.component('myDialog',myDialog)
}
 
export default myDialog;