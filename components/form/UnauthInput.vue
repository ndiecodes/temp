<template>
  <div class="unauth-input">
    <input
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: 'Input',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>
<style scoped>
div.unauth-input {
  margin-bottom: 0.9rem;
}
div.unauth-input .white input {
  background-color: #fff;
  border-color: #acacac;
}
input {
  border-radius: 7px;
  background: #dedede;
  padding: 10px 25px;
  color: #333;
  border: 2px solid transparent;
  outline: none;
  display: block;
  width: 100%;
  font-size: 1.3vw;
  font-weight: 500;
}
input.white {
  background-color: #fff;
  border-color: #acacac;
}
input:focus,
input:active {
  outline: none;
  border-color: #8e8e8e;
}
input::placeholder {
  color: #5e5e5e;
}
</style>
