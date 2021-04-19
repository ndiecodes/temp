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
        <ul class="navbar-nav">
          <li class="nav-item me-4">
            <a class="nav-link active" aria-current="page" href="#"
              ><i class="fas fa-search"></i
            ></a>
          </li>
          <li class="nav-item me-2">
            <a class="nav-link" href="#">Sign In</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Get Started</a>
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

  created() {
    console.log(this.color)
  },
}
</script>

<style>
.navbar .navbar-nav a.nav-link {
  color: #011537;
}
</style>
