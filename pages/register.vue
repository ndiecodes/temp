<template>
  <b-container class="p-5">
    <b-row class="justify-content-between">
      <b-col class="content">
        <UnauthForm :title="title" :addstyle="addstyle">
          <form
            ref="form"
            class="mt-4"
            action="#"
            method="post"
            @submit.prevent="register"
          >
            <em>{{ errors.name }}</em>
            <UnauthInput
              v-model="user.name"
              name="FNAME"
              :class="{ 'white mb-4': addstyle }"
              placeholder="Name"
              required
            />
            <em>{{ errors.email }}</em>
            <UnauthInput
              v-model="user.email"
              name="EMAIL"
              :class="{ 'white mb-4': addstyle }"
              placeholder="Email"
              type="email"
              required
            />
            <em>{{ errors.password }}</em>
            <UnauthInput
              v-model="user.password"
              :class="{ 'white mb-4': addstyle }"
              placeholder="Password"
              type="password"
            />
            <UnauthButton class="action">{{ btntitle }}</UnauthButton>
            <p v-show="addstyle" class="mt-4">
              Already have an account?
              <nuxt-link to="/login">Login</nuxt-link>
            </p>
          </form>
        </UnauthForm>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  middleware: ['auth'],
  auth: 'guest',
  props: {
    addstyle: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: 'Hello. Create an account!',
    },
    btntitle: {
      type: String,
      default: 'Create Account',
    },
  },

  async asyncData({ store }) {
    try {
      const getPrices = store.getters['user/getPrices']
      const prices = getPrices()
      if (!prices.length) {
        await store.dispatch('user/getPrices')
      }
    } catch (error) {
      console.log(error, 'error')
    }
  },
  data() {
    return {
      errors: {},
      user: {},
    }
  },

  computed: {
    ...mapState({
      prices: (state) => {
        return [...state.user.prices].sort((a, b) => a.amount - b.amount)
      },
    }),
  },
  methods: {
    async register() {
      this.user.roles = 'user'
      const res = await this.$store.dispatch('user/register', this.user)
      if (!res.success) {
        const { data, message } = res.data
        const o = {}
        if (message === 'Validation failed') {
          for (const [key, value] of Object.entries(data.errors)) {
            o[key] = `${value}`
          }
        }
        this.errors = o
        return
      }

      // Redirect to Checkout here
      if (this.$route.query.type === 'free') {
        await this.login()
      }

      const getPrice = this.$store.getters['user/getPriceByType']
      const price = getPrice(this.$route.query.type)
      if (price) {
        this.processCheckout()
      }

      await this.login()
    },

    async login() {
      try {
        return await this.$store.dispatch('user/login', this.user)
      } catch (error) {
        this.error_msg = 'Password/email combination is incorrect'
      }
    },

    processCheckout() {
      try {
        // Checkout here
      } catch (error) {
        this.error_msg = 'Could not checkout, please try again later'
      }
    },

    validateEmail(email) {
      if (email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(email)
      }
      return false
    },
  },
}
</script>

<style>
em {
  color: red;
}
</style>
