<template>
  <main class="bg-grey-lightest">
    <section class="bg-grey-lightest">
      <div class="container py-4 bg-grey-lightest">
        <div class="d-flex justify-content-between text-grey-dark">
          <div class="d-flex">
            <span class="text-muted">
              <nuxt-link to="lessons/test">Courses</nuxt-link></span
            >
            <span class="px-2">
              <i class="fas fa-angle-right px-1"></i>
              <nuxt-link to="lessons/test"
                >Laravel 8 From Scratch</nuxt-link
              ></span
            >

            <span class="px-1">
              <i class="fas fa-angle-right px-1"></i>
              <nuxt-link to="lessons/test">Test</nuxt-link></span
            >
          </div>
          <span> 3:30</span>
        </div>
      </div>
    </section>
    <section class="bg-grey-darkest">
      <div
        class="container mx-auto px-4 sm:px-6 lg:px-8"
        style="position: block"
      >
        <div style="position: relative; padding-top: 56.25%">
          <iframe
            src="https://player.vimeo.com/video/139645901"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            class="py-2"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            allow="autoplay; encrypted-media"
            data-ready="true"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </section>

    <section class="bg-grey-lightest">
      <div class="container py-5">
        <p>
          Stripe makes accepting payments seamless, and in this course, we'll be
          looking at how to accept payment with Stripe in an AdonisJS 5
          application. Though there are a couple of ways to accept payment with
          Stripe, in this course, we'll be using Stripe Elements, which allows
          us to have a custom, but yet secure checkout flow. So come along!
        </p>

        <div class="mt-5">
          <div id="accordionExample" class="accordion">
            <div class="accordion-item">
              <h2 id="headingOne" class="accordion-header p-2">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Introduction
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body row">
                  <div class="d-flex justify-content-between mt-1 mb-4">
                    <span>
                      <i class="fas fa-play"></i>
                      <nuxt-link to="lessons/test"
                        >Introduction</nuxt-link
                      ></span
                    >
                    <span> 3:30</span>
                  </div>

                  <div class="d-flex justify-content-between mt-1 mb-4">
                    <span
                      ><i class="fas fa-play"></i>
                      <nuxt-link to="lessons/test"
                        >Introduction</nuxt-link
                      ></span
                    >
                    <span> 3:30</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 id="headingTwo" class="accordion-header p-2">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Getting Started
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body row">
                  <div class="d-flex justify-content-between mt-1 mb-4">
                    <span
                      ><i class="fas fa-play"></i>
                      <nuxt-link to="lessons/test"
                        >Introduction</nuxt-link
                      ></span
                    >
                    <span> 3:30</span>
                  </div>
                  <div class="d-flex justify-content-between mt-1 mb-4">
                    <span
                      ><i class="fas fa-play"></i>
                      <nuxt-link to="lessons/test"
                        >Introduction</nuxt-link
                      ></span
                    >
                    <span> 3:30</span>
                  </div>
                  <div class="d-flex justify-content-between mt-1 mb-4">
                    <span
                      ><i class="fas fa-play"></i>
                      <nuxt-link to="lessons/test"
                        >Introduction</nuxt-link
                      ></span
                    >
                    <span> 3:30</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 id="headingThree" class="accordion-header p-2">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Checkout
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body row">
                  <div class="d-flex justify-content-between mt-1 mb-4">
                    <span
                      ><i class="fas fa-play"></i>
                      <nuxt-link to="lessons/test"
                        >Introduction</nuxt-link
                      ></span
                    >
                    <span> 3:30</span>
                  </div>
                  <div class="d-flex justify-content-between mt-1 mb-4">
                    <span>
                      <i class="fas fa-play"></i>
                      <nuxt-link to="lessons/test"
                        >Introduction</nuxt-link
                      ></span
                    >
                    <span> 3:30</span>
                  </div>
                  <div class="d-flex justify-content-between mt-1 mb-4">
                    <span
                      ><i class="fas fa-play"></i>
                      <nuxt-link to="lessons/test"
                        >Introduction</nuxt-link
                      ></span
                    >
                    <span> 3:30</span>
                  </div>
                  <div class="d-flex justify-content-between mt-1 mb-4">
                    <span>
                      <i class="fas fa-play"></i>
                      <nuxt-link to="lessons/test"
                        >Introduction</nuxt-link
                      ></span
                    >
                    <span> 3:30</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 id="headingFour" class="accordion-header p-2">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Purchases
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body row">
                  <div class="d-flex justify-content-between mt-1 mb-4">
                    <span
                      ><i class="fas fa-play"></i>
                      <nuxt-link to="lessons/test"
                        >Introduction</nuxt-link
                      ></span
                    >
                    <span> 3:30</span>
                  </div>
                  <div class="d-flex justify-content-between mt-1 mb-4">
                    <span
                      ><i class="fas fa-play"></i>
                      <nuxt-link to="lessons/test"
                        >Introduction</nuxt-link
                      ></span
                    >
                    <span> 3:30</span>
                  </div>
                  <div class="d-flex justify-content-between mt-1 mb-4">
                    <span>
                      <i class="fas fa-play"></i>
                      <nuxt-link to="lessons/test"
                        >Introduction</nuxt-link
                      ></span
                    >
                    <span> 3:30</span>
                  </div>
                  <div class="d-flex justify-content-between mt-1 mb-4">
                    <span>
                      <i class="fas fa-play"></i>
                      <nuxt-link to="lessons/test"
                        >Introduction</nuxt-link
                      ></span
                    >
                    <span> 3:30</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 id="headingFive" class="accordion-header p-2">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Webhook
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body row">
                  <div class="d-flex justify-content-between mt-1 mb-4">
                    <span>
                      <i class="fas fa-play"></i>
                      <nuxt-link to="lessons/test"
                        >Introduction</nuxt-link
                      ></span
                    >
                    <span> 3:30</span>
                  </div>
                  <div class="d-flex justify-content-between mt-1 mb-4">
                    <span
                      ><i class="fas fa-play"></i>
                      <nuxt-link to="lessons/test"
                        >Introduction</nuxt-link
                      ></span
                    >
                    <span> 3:30</span>
                  </div>
                  <div class="d-flex justify-content-between mt-1 mb-4">
                    <span>
                      <i class="fas fa-play"></i>
                      <nuxt-link to="lessons/test"
                        >Introduction</nuxt-link
                      ></span
                    >
                    <span> 3:30</span>
                  </div>
                  <div class="d-flex justify-content-between mt-1 mb-4">
                    <span
                      ><i class="fas fa-play"></i>
                      <nuxt-link to="lessons/test"
                        >Introduction</nuxt-link
                      ></span
                    >
                    <span> 3:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'lesson',
  middleware: ['auth'],
  auth: false,

  mounted() {
    const iframe = document.querySelector('iframe')
    // eslint-disable-next-line no-undef
    const player = new Vimeo.Player(iframe)

    player.on('play', function () {
      console.log('played the video!')
    })

    player.getVideoTitle().then(function (title) {
      console.log('title:', title)
    })
  },
}
</script>

<style scoped>
button:focus,
button:active {
  outline: none !important;
  box-shadow: none;
}
.text-grey-dark {
  --tw-text-opacity: 1;
  color: rgba(115, 124, 151, var(--tw-text-opacity));
}

.bg-grey-darkest {
  --tw-bg-opacity: 1;
  background-color: rgba(34, 34, 34, var(--tw-bg-opacity));
}

.bg-grey-lightest {
  --tw-bg-opacity: 1;
  background-color: rgba(248, 248, 255, var(--tw-bg-opacity));
}

.text-grey-dark {
  --tw-text-opacity: 1;
  color: rgba(115, 124, 151, var(--tw-text-opacity));
}

.accordion-body .d-flex > span,
a {
  color: rgb(145, 144, 144) !important;
}

.accordion-item h2 {
  background: #f0eef9 !important;
  border: 0;
}

.accordion-button {
  background: #f0eef9 !important;
  color: #484849;
  font-size: 1.1rem;
  font-weight: 500;
}

.accordion-button:hover {
  color: #6f6f70 !important;
}

.accordion-button:focus {
  color: #6f6f70 !important;
}

dt {
  background-color: #ccc;
  padding: 1em;
  font-weight: bold;
}

button:focus,
button:active {
  outline: none !important;
  box-shadow: none;
}
</style>
