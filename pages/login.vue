<template>
  <b-container class="p-5">
    <b-row class="justify-content-between">
      <b-col class="content">
        <UnauthForm ref="form" title="Hello, welcome back!">
          <div class="error">{{ error_msg }}</div>
          <form class="mt-4" @submit.prevent="userLogin">
            <UnauthInput
              ref="email-input"
              v-model="user.email"
              class="white mb-4"
              placeholder="Email"
              type="email"
            ></UnauthInput>
            <UnauthInput
              ref="password-input"
              v-model="user.password"
              class="white"
              placeholder="Password"
              type="password"
            ></UnauthInput>
            <nuxt-link class="mt-3" to="/forgot">Forgot Password?</nuxt-link>
            <UnauthButton ref="loginbtn" type="submit">Login</UnauthButton>
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
  name: 'Login',
  middleware: ['auth'],
  auth: 'guest',
  data() {
    return {
      error_msg: '',
      user: {
        password: '',
        email: '',
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        return await this.$store.dispatch('user/login', this.user)
      } catch (error) {
        this.error_msg = 'Password/email combination is incorrect'
      }
    },
  },
}
</script>

<style scoped>
.error {
  color: red;
  text-align: center;
  margin-top: 2em;
}
</style>
