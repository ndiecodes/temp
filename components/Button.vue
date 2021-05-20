<template>
  <nuxt-link :to="link" class="btn btn-light btn__round rounded-pill px-4 mt-4"
    ><slot
  /></nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '#',
    },
  },
}
</script>

<style></style>
