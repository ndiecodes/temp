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
            ><i class="fas fa-play-circle"></i>
            {{ totalLessons }} lessions</span
          >
          <span class="pl-2"><i class="far fa-clock"></i> 10 hours</span>
          <span class="pl-2">Beginner</span>
        </div>
      </div>
      <div>
        <Button :link="link">Start Learning Now</Button>
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

    totalLessons() {
      if (this.course.Videos) return this.course.Videos.length
      return 0
    },
  },
}
</script>

<style></style>
