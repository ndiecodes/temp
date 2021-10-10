<template>
  <div>
    <header class="bg__primary">
      <div class="container pt-2">
        <CourseDetails :course="course" />
      </div>
    </header>
    <div class="container pt-5">
      <p>
        {{ course.description }}
      </p>

      <div class="mt-5">
        <Outline :course="course" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  auth: false,

  async asyncData({ store, params }) {
    try {
      const getCourse = await store.getters['course/getCourse']
      let course = await getCourse(params.course)
      if (!course) {
        await store.dispatch('course/getCourses')
        const getCourse = await store.getters['course/getCourse']
        course = await getCourse(params.course)
      }
      return { course }
    } catch (error) {
      console.log(error, 'error')
    }
  },
}
</script>
