<template>
  <div>
    <header class="bg__primary">
      <div class="container pt-2">
        <CourseDetails />
      </div>
    </header>
    <div class="container pt-5">
      <p>
        Stripe makes accepting payments seamless, and in this course, we'll be
        looking at how to accept payment with Stripe in an AdonisJS 5
        application. Though there are a couple of ways to accept payment with
        Stripe, in this course, we'll be using Stripe Elements, which allows us
        to have a custom, but yet secure checkout flow. So come along!
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
                    <nuxt-link to="/">Introduction</nuxt-link></span
                  >
                  <span> 3:30</span>
                </div>

                <div class="d-flex justify-content-between mt-1 mb-4">
                  <span
                    ><i class="fas fa-play"></i>
                    <nuxt-link to="/">Introduction</nuxt-link></span
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
                    <nuxt-link to="/">Introduction</nuxt-link></span
                  >
                  <span> 3:30</span>
                </div>
                <div class="d-flex justify-content-between mt-1 mb-4">
                  <span
                    ><i class="fas fa-play"></i>
                    <nuxt-link to="/">Introduction</nuxt-link></span
                  >
                  <span> 3:30</span>
                </div>
                <div class="d-flex justify-content-between mt-1 mb-4">
                  <span
                    ><i class="fas fa-play"></i>
                    <nuxt-link to="/">Introduction</nuxt-link></span
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
                    <nuxt-link to="/">Introduction</nuxt-link></span
                  >
                  <span> 3:30</span>
                </div>
                <div class="d-flex justify-content-between mt-1 mb-4">
                  <span>
                    <i class="fas fa-play"></i>
                    <nuxt-link to="/">Introduction</nuxt-link></span
                  >
                  <span> 3:30</span>
                </div>
                <div class="d-flex justify-content-between mt-1 mb-4">
                  <span
                    ><i class="fas fa-play"></i>
                    <nuxt-link to="/">Introduction</nuxt-link></span
                  >
                  <span> 3:30</span>
                </div>
                <div class="d-flex justify-content-between mt-1 mb-4">
                  <span>
                    <i class="fas fa-play"></i>
                    <nuxt-link to="/">Introduction</nuxt-link></span
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
                    <nuxt-link to="/">Introduction</nuxt-link></span
                  >
                  <span> 3:30</span>
                </div>
                <div class="d-flex justify-content-between mt-1 mb-4">
                  <span
                    ><i class="fas fa-play"></i>
                    <nuxt-link to="/">Introduction</nuxt-link></span
                  >
                  <span> 3:30</span>
                </div>
                <div class="d-flex justify-content-between mt-1 mb-4">
                  <span>
                    <i class="fas fa-play"></i>
                    <nuxt-link to="/">Introduction</nuxt-link></span
                  >
                  <span> 3:30</span>
                </div>
                <div class="d-flex justify-content-between mt-1 mb-4">
                  <span>
                    <i class="fas fa-play"></i>
                    <nuxt-link to="/">Introduction</nuxt-link></span
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
                    <nuxt-link to="/">Introduction</nuxt-link></span
                  >
                  <span> 3:30</span>
                </div>
                <div class="d-flex justify-content-between mt-1 mb-4">
                  <span
                    ><i class="fas fa-play"></i>
                    <nuxt-link to="/">Introduction</nuxt-link></span
                  >
                  <span> 3:30</span>
                </div>
                <div class="d-flex justify-content-between mt-1 mb-4">
                  <span>
                    <i class="fas fa-play"></i>
                    <nuxt-link to="/">Introduction</nuxt-link></span
                  >
                  <span> 3:30</span>
                </div>
                <div class="d-flex justify-content-between mt-1 mb-4">
                  <span
                    ><i class="fas fa-play"></i>
                    <nuxt-link to="/">Introduction</nuxt-link></span
                  >
                  <span> 3:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
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
