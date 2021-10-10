<template>
  <button class="button btn btn-light btn__round rounded-pill px-4 mt-4">
    <slot></slot>
  </button>
</template>
<style scoped>
.button {
  display: block;
  width: 100%;

  background: #011537;
  /* border-radius: 0 !important; */
  border-radius: 7px;
  color: #fff;
  font-size: 1.3vw;
  font-weight: bold;
  border: none;
  text-align: center;
  margin-top: 4vh;
  padding: 10px 25px;
}
</style>
