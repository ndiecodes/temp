<template>
  <div>
    <Header />
    <div class="container">
      <section class="text-center">
        <h3 class="mt-5 text-center">Featured Courses</h3>
        <p>A list of our most highly watched and valued courses.</p>
        <Courses class="text-left" />
        <Button
          class="d-blok text-white text-center text-uppercase"
          style="background: #011537; border-radius: 0 !important"
          link="#"
          >Browse more Courses <i class="pl-2 fas fa-arrow-right"></i>
        </Button>
        <!-- <hr /> -->
      </section>
      <section class="text-center">
        <h3 class="mt-5 pt-5 text-center">Upcoming Courses</h3>
        <p>We're always on the clock to get new content out every week.</p>
        <Courses class="text-left" />
      </section>
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

<style lang="css" scoped>
hr {
  height: 0.001rem;
}
</style>
