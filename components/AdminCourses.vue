<template>
  <div class="row">
    <AdminCourse v-for="(course, i) in courses" :key="i" :course="course" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      courses: (state) => {
        return state.course.allCourses
      },
    }),
  },
}
</script>

<style></style>
