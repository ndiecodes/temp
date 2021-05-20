<template>
  <div class="wrapper">
    <div
      class="preloader flex-column justify-content-center align-items-center"
    >
      <img
        class="animation__shake"
        src="/img/AdminLTELogo.png"
        alt="AdminLTELogo"
        height="60"
        width="60"
      />
    </div>

    <Aside />

    <section class="pb-5">
      <Nuxt />
    </section>
    <!-- <Footer /> -->
  </div>
</template>

<style></style>
