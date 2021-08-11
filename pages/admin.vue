<template>
  <nuxt-child />
</template>

<script>
export default {
  layout: 'admin',
  auth: true,
  middleware: 'admin',
}
</script>

<style scoped></style>
