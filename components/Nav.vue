<template>
  <nav class="navbar navbar-expand-md" :class="{ 'navbar-light': !color }">
    <div class="container-fluid">
      <Logo />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarNav" class="collapse navbar-collapse flex-grow-0">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li v-if="!isAuthenticated" class="nav-item me-4">
            <nuxt-link class="nav-link active" aria-current="page" to="/"
              ><i class="fas fa-search"></i
            ></nuxt-link>
          </li>
          <li v-if="!isAuthenticated" class="nav-item me-2">
            <nuxt-link class="nav-link" to="/login">Sign In</nuxt-link>
          </li>
          <li v-if="!isAuthenticated" class="nav-item me-2">
            <nuxt-link class="nav-link" to="/register">Get Started</nuxt-link>
          </li>
          <li v-if="isAuthenticated" class="nav-item me-4">
            <nuxt-link class="nav-link" to="/courses">Courses</nuxt-link>
          </li>
          <li v-if="isAuthenticated" class="nav-item dropdown">
            <nuxt-link
              id="navbarDropdownMenuLink"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              to="#"
            >
              <img
                src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                width="40"
                height="40"
                class="rounded-circle"
              />
            </nuxt-link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <nuxt-link class="dropdown-item" to="dashboard"
                >Dashboard</nuxt-link
              >
              <nuxt-link class="dropdown-item" to="dashboard"
                >Edit Profile</nuxt-link
              >
              <li><hr class="dropdown-divider" /></li>
              <a class="dropdown-item" href="#">Log Out</a>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    color: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isAuthenticated() {
      return this.$auth.loggedIn
    },
    user() {
      return this.$auth.user
    },
  },
}
</script>

<style>
.navbar .navbar-nav a.nav-link {
  color: #011537;
}
</style>
