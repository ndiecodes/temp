<template>
  <b-container class="p-5">
    <b-row class="justify-content-between">
      <b-col class="content">
        <UnauthForm title="Forgot password?">
          <form class="mt-4" @submit.prevent="recoverPassword">
            <UnauthInput
              v-model="user.email"
              type="email"
              class="white mb-4"
              placeholder="Email"
            />
            <UnauthButton>Recover Password</UnauthButton>
            <p class="mt-4">
              New to Blockvilla?
              <nuxt-link to="/plans">Create account</nuxt-link>
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
  data() {
    return {
      errors: {},
      user: {},
    }
  },
  methods: {
    async recoverPassword() {
      return await this.$store.dispatch('user/recoverPassword', this.user)
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
