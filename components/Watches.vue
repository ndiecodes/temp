<template>
  <div class="row gx-5 mt-4">
    <div
      v-if="courses.length <= 0"
      class="d-flex justify-content-center flex-column p-5"
    >
      <p class="text-center">
        You seems not to have registered in any course yet, what are you waiting
        for, jump in right now:
      </p>
      <div class="row justify-content-center">
        <Button
          link="/courses"
          style="background: #011537"
          class="col-md-3 text-white btn1"
          >Browse Courses</Button
        >
      </div>
    </div>
    <Watched v-for="(item, index) in courses" :key="index" :course="item" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      courses: (state) => {
        return state.course.userCourses
      },
    }),
  },
}
</script>

<style scoped>
p {
  font-size: 1.5rem;
  color: red;
}

.btn1 {
  font-size: 1.5rem;
  font-weight: 500;
}
</style>
