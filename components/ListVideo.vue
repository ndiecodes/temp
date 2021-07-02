<template>
  <div class="list d-flex justify-content-between mt-1 mb-4">
    <span :class="{ premium: !video.premium }">
      <i class="fas fa-play"></i>
      <nuxt-link :to="redirect">{{ video.title }}</nuxt-link></span
    >
    <span> 3:30</span>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: [Object, Array],
      default: () => [],
    },
    video: {
      type: [Object, Array],
      default: () => [],
    },
  },

  computed: {
    redirect() {
      const authURL = `/courses/${this.course.slug}/lessons/${this.video.slug}`
      if (!this.video.premium) {
        return authURL
      }
      if (this.video.premium && this.$auth.loggedIn) {
        return authURL
      }
      return '/login'
    },
  },
}
</script>

<style scoped>
div.list > span,
a {
  color: rgb(145, 144, 144) !important;
}

.premium {
  font-weight: bold;
}
</style>
