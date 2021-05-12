<template>
  <div>
    <div class="container">
      <h3 class="mt-5 mb-5 text-center">All Courses</h3>
      <Courses />
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  auth: false,
}
</script>

<style></style>
