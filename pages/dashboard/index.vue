<template>
  <div>
    <div class="container">
      <div class="text-center mt-5 mb-5">
        <h3 class="">Continue Learning</h3>
        <p>Here're the courses you're currently watching.</p>
      </div>
      <Watches />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: ['auth'],
}
</script>

<style lang="css" scoped></style>
