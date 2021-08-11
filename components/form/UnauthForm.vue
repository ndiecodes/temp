<template>
  <div :class="{ 'unauth-form': addstyle }">
    <h2 v-if="title">{{ title }}</h2>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Form',
  props: {
    title: {
      type: String,
      default: '',
    },
    addstyle: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
<style>
.unauth-form {
  width: 100%;
  border-radius: 10px;
  background: #ededed;
  padding: 40px 25px;
}
.unauth-form h2 {
  text-align: center;
  font-weight: bold;
  size: 32px;
  color: #041836;
}
</style>
