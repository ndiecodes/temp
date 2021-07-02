<template>
  <b-container class="p-5">
    <section class="banner">
      <div class="pt-5 mt-5 pb-4">
        <div class="text-center">
          <h1>You’re on the verge of becoming a certied crypto trader!</h1>
          <p>
            Select a plan that works best for you and you'll be on your way.
          </p>
        </div>
      </div>
    </section>
    <b-row class="justify-content-between">
      <PaymentCard
        v-for="price in prices"
        :key="price.id"
        :premium="isPremium(price.amount)"
        :price="price.amount"
        :duration="price.type"
        :preferred="price.preferred"
      />
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
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

  computed: {
    ...mapState({
      prices: (state) => {
        return [...state.user.prices].sort((a, b) => a.amount - b.amount)
      },
    }),
  },

  methods: {
    isPremium(price) {
      if (price > 0) {
        return true
      }
      return false
    },
  },
}
</script>

<style></style>
