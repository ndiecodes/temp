<template>
  <nuxt-child />
</template>

<script>
export default {
  layout: 'dashboard',
  auth: true,
  middleware: 'user',
}
</script>

<style scoped></style>
