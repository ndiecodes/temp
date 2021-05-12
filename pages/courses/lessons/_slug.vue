<template>
  <div>
    <div class="container-fluid pt-2">
      <div class="justify-content-center">
        <iframe
          src="https://player.vimeo.com/video/139645901"
          width="100%"
          height="100%"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  auth: false,
}
</script>

<style scoped>
button:focus,
button:active {
  outline: none !important;
  box-shadow: none;
}
</style>
