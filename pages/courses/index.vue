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

  async asyncData({ store }) {
    try {
      const getCourses = store.getters['course/getCourses']
      const courses = getCourses()
      if (!courses.length) {
        await store.dispatch('course/getCourses')
      }
    } catch (error) {
      console.log(error, 'error')
    }
  },
}
</script>

<style></style>
