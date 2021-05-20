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
  data() {
    return {
      errors: {},
      user: {},
    }
  },
  methods: {
    async register() {
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
      }
      //   if (this.validateEmail(this.user.email)) {
      //     this.suscribeNewsletter()
      //   } else this.errors.email = 'Enter a valid email'
    },
    // suscribeNewsletter() {
    //   this.$refs.form.submit()
    // },
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
