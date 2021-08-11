<template>
  <div class="row text-center justify-content-center">
    <div class="m-5 p-5 bg__primary header">
      <div class="pr-5 pl-5">
        <h1 class="text-white">{{ course.title }}</h1>

        <p class="mt-4 text-white">
          {{ course.summary }}
        </p>
        <div class="d-flex justify-content-center text-white mt-1">
          <span class="d-block pl-2"
            ><i class="fas fa-play-circle"></i> {{ totalLessons }} lessons</span
          >
          <span class="pl-2"
            ><i class="fab fa-youtube"></i> {{ premiumLabel }} Course</span
          >

          <!-- <span class="pl-2">Beginner</span> -->
        </div>
      </div>
      <div>
        <Button v-if="course.premium" :link="link">Start Learning Now</Button>
        <Button v-if="!course.premium" :link="previewLink"
          >Start Learning Now</Button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    link() {
      return `/courses/${this.course.slug}/lessons/${this.course.Videos[0].slug}`
    },

    premiumLabel() {
      return this.course.premium ? 'Paid' : 'Free'
    },

    previewLink() {
      const freeVideos = this.course.Videos.filter((video) => !video.premium)
      return `/courses/${this.course.slug}/lessons/${freeVideos[0].slug}`
    },

    totalLessons() {
      if (this.course.Videos) return this.course.Videos.length
      return 0
    },
  },
}
</script>

<style></style>
