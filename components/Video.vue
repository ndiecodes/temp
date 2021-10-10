<template>
  <div class="col-md-4 py-3">
    <div class="card1 shadow rounded border-0">
      <nuxt-link :to="'/courses/' + video.slug">
        <div class="card">
          <img :src="banner" :alt="video.title" />
        </div>
      </nuxt-link>
      <div class="px-3 py-4">
        <nuxt-link :to="'/courses/' + video.slug">
          <h4>{{ video.title }}</h4>
          <p class="mt-2">
            {{ video.description }}
          </p>
        </nuxt-link>
        <div class="d-flex justify-content-between text-black-50 mt-1">
          <span><i class="far fa-clock"></i> 10 hours</span>
          <span>Course: {{ video.Course ? video.Course.title : 'N/A' }}</span>
        </div>
        <button
          type="button"
          class="btn bg-gradient-info mt-3"
          data-toggle="modal"
          data-target="#upload-videos-modal"
        >
          Edit Videos
        </button>
      </div>
    </div>
    <EditVideo :video="video" />
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      default: () => {},
    },
    edit: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    banner() {
      if (this.video.banner) {
        return this.video.banner
      }
      return 'https://res.cloudinary.com/mezie/image/upload/v1527784441/learn-adonisjs/Learn_AdonisJs_from_zero_to_deploy_j5t6kd.png'
    },
  },
}
</script>

<style scoped>
a {
  color: inherit;
}
</style>
