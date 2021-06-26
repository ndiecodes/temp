<template>
  <div class="col-4 card-group">
    <div class="card" :class="{ 'text-white custom-bg': preferred }">
      <div class="card-body">
        <p class="free" :class="{ 'text-white': preferred }">{{ type }}</p>
        <div class="mt-0">
          <span class="text-4xl text-grey-darkest font-weight-bold"
            >${{ price }}</span
          ><span v-if="duration"> / {{ duration }}</span>
        </div>
      </div>
      <div class="card-body d-flex flex-column">
        <div class="d-flex mt-1 mb-1">
          <div style="width: 30px">
            <SVGIcon />
          </div>
          <div v-if="premium" class="pl-3">All courses</div>
          <div v-else class="pl-3">Free courses</div>
        </div>

        <div class="d-flex mt-1 mb-1">
          <div style="width: 30px">
            <SVGIcon />
          </div>
          <div v-if="premium" class="pl-3">All tutorials</div>
          <div v-else class="pl-3">Free tutorials</div>
        </div>

        <div v-if="premium" class="d-flex mt-1 mb-1">
          <div style="width: 30px">
            <SVGIcon />
          </div>
          <div class="pl-3">Download lessons for offline learning</div>
        </div>

        <div v-if="premium" class="d-flex mt-1 mb-1">
          <div style="width: 30px">
            <SVGIcon />
          </div>
          <div class="pl-3">Download projects source code</div>
        </div>

        <div class="d-flex mt-1 mb-1">
          <div style="width: 30px">
            <SVGIcon />
          </div>
          <div class="pl-3">Track learning progress</div>
        </div>

        <div class="d-flex mt-1 mb-1">
          <div style="width: 30px" class="text-white">
            <SVGIcon />
          </div>
          <div class="pl-3">Participate in lessons discussions</div>
        </div>

        <div class="d-flex mt-1 mb-1">
          <div style="width: 30px">
            <SVGIcon />
          </div>
          <div class="pl-3">Participate in discussions</div>
        </div>
      </div>
      <div class="card-body">
        <nuxt-link
          :to="{
            path: 'register',
            query: { type: duration },
          }"
          class="card-lnk btn btn-block"
          :class="{ 'btn-light': preferred }"
          :style="[!preferred ? { background: '#011537', color: '#fff' } : {}]"
          >Get Started</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    premium: {
      type: Boolean,
      default: false,
    },

    price: {
      type: Number,
      default: 0,
    },

    preferred: {
      type: Boolean,
      default: false,
    },

    duration: {
      type: String,
      default: '',
    },
  },

  computed: {
    type() {
      if (this.duration === 'month') {
        return 'Pro Monthly'
      }

      if (this.duration === 'year') {
        return 'Pro Yearly'
      }

      return 'Free'
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.custom-bg {
  background-color: #011537;
}

.free {
  font-weight: 600;
}

.card {
  border-radius: 15px;
}
</style>
