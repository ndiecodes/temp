<template>
  <div class="row gx-5 mt-4">
    <Video v-for="(item, index) in videos" :key="index" :video="item" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      videos: (state) => {
        return state.course.videos
      },
    }),
  },
}
</script>

<style></style>
