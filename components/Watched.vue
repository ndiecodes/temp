<template>
  <div class="col-md-4 py-3">
    <div class="card card1 shadow border-0 b-radius">
      <img
        src="https://res.cloudinary.com/mezie/image/upload/v1527784441/learn-adonisjs/Learn_AdonisJs_from_zero_to_deploy_j5t6kd.png"
        alt=""
      />
      <div class="px-3 py-4">
        <h4>{{ course.Course.title }}</h4>
        <Button
          class="d-block text-white text-uppercase"
          style="background: #011537; border-radius: 0 !important"
          :link="link"
          >Continue <i class="pl-2 fas fa-arrow-right"></i>
        </Button>
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
      const authURL = `/courses/${this.course.Course.slug}/lessons/${this.course.Video.slug}`
      return authURL
    },
  },
}
</script>

<style></style>
