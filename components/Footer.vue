<template>
  <footer class="text-center pt-5 header bg__primary">
    <div class="container -5">
      <div class="d-flex justify-content-center flex-column">
        <h2 class="text-white">
          Be in the know everytime we drop a new course
        </h2>

        <form
          class="px-3 py-4 d-flex justify-content-center row"
          method="post"
          action="#"
        >
          <div class="input-group mb-3 col-md-6">
            <input
              type="email"
              class="form-control p-4"
              placeholder="Enter your email"
              aria-label="Enter your email"
              aria-describedby="basic-addon2"
            />
            <button
              id="basic-addon2"
              type="submit"
              class="input-group-text text-white pl-3 pr-3"
            >
              Subscribe
            </button>
          </div>
        </form>
        <div class="pt-2 socials">
          <span class="pr-4"><i class="fab fa-facebook"></i></span>
          <span class="pr-4"> <i class="fab fa-twitter"></i></span>
          <span class="pr-4"> <i class="fab fa-youtube"></i></span>
          <span> <i class="fab fa-instagram"></i></span>
        </div>
      </div>

      <div class="mt-5 p-4">
        <p class="text-white">© 2021 Blockvila. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {}
</script>
<style scoped>
.bg__primary p {
  margin-bottom: 0 !important;
}

.bg__primary h2 {
  font-size: 2.5rem;
  font-weight: 500;
}

#basic-addon2 {
  background: #4645c7;
  border-color: #4645c7;
  font-size: 1.5rem;
  font-weight: 500;
}

.socials span {
  font-size: 2rem;
}
</style>
