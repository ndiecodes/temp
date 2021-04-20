<template>
  <div class="col-md-4 py-3">
    <div class="card1 shadow rounded border-0">
      <nuxt-link to="/courses/test">
        <div class="card">
          <img
            src="https://res.cloudinary.com/mezie/image/upload/v1527784441/learn-adonisjs/Learn_AdonisJs_from_zero_to_deploy_j5t6kd.png"
            alt=""
          />
        </div>
      </nuxt-link>
      <div class="px-3 py-4">
        <nuxt-link to="/courses/test">
          <h4>Laravel 8 From Scratch</h4>
          <p class="mt-2">
            We don't learn tools for the sake of learning tools. Instead, we
            learn them because they help us accomplish a particular goal...
          </p>
        </nuxt-link>
        <div class="d-flex justify-content-between text-black-50 mt-1">
          <span class="d-block"
            ><i class="fas fa-play-circle"></i> 12 lessions</span
          >
          <span><i class="far fa-clock"></i> 10 hours</span>
          <span>Beginner</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  color: inherit;
}
</style>
