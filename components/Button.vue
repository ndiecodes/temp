<template>
  <a :href="link" class="btn btn-light btn__round rounded-pill px-4 mt-4"
    ><slot
  /></a>
</template>

<script>
export default {
  props: ['link'],
}
</script>

<style></style>
