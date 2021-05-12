<template>
  <div class="row gx-5 mt-4">
    <Course v-for="(item, index) in courses" :key="index" :course="item" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
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
