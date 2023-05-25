<template>
  <div class="row gx-5 mt-4">
    <Course
      v-for="(item, index) in courses"
      :key="index"
      :course="item"
      :edit="edit"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['edit'],
  computed: {
    ...mapState({
      courses: (state) => {
        return state.course.courses
      },
    }),
  },
}
</script>

<style></style>
