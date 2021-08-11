<template>
  <section>
    <div class="container">
      <div class="row mt-5">
        <div
          class="alert alert-primary d-flex justify-content-between"
          role="alert"
        >
          <p>Don’t have bitcoin? You can buy bitcoin with naira from us.</p>
          <a href="https://blockvila.com" class="btn btn-primary">Buy</a>
        </div>
      </div>
      <div class="row card p-3">
        <div class="card-body">
          <div class="row">
            <p class="col-md-8">Contract: {{ transaction.hash }}</p>
            <div class="col-md-4 d-flex flex-column justify-content-start">
              <h3 class="text-right">
                ${{ price.amount }} [ ₦{{ price.naira || '190,000.00' }} ]
              </h3>
              <small class="text-right"
                >{{ price.btc || '0.01171916' }} BTC</small
              >
              <p class="text-right">
                Contract status:
                <strong class="text-primary">{{ transaction.status }}</strong>
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <img src="/img/QR.png" alt="QR" />
            </div>
            <div class="col-md-8 mb-4">
              <h6>Send BTC</h6>
              <small
                >Send {{ price.btc || '0.01171916' }} BTC to the address below.
                Make sure you send enough to cover any coin transaction
                fees!.</small
              >
              <input
                class="form-control"
                value="15VgZhSHjjftfPHpZHfFFmtKcRdx1HSqfk"
                disabled
              />
              <ol class="mt-4">
                <li>Copy the displayed address</li>
                <li>Send your BTC to that address.</li>
                <li>Wait for 3 Minutes and click on "Confirm Order".</li>
                <li>
                  Upon transaction confirmation, you will see your purchase in
                  your account balance.
                </li>
                <li>
                  This transaction can be found in your transaction hitstory.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div class="mb-5 d-flex justify-content-between bg-light pt-3">
          <p>Confirms needed: 5</p>
          <p>
            Expires:
            {{ expiredDate }}
          </p>
        </div>
        <div class="d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-success"
            @click.prevent="confirm"
          >
            Confirm Order
          </button>
          <button type="button" class="btn btn-warning" @click="back">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async asyncData({ store }) {
    // July 05, 2021 at 04:44 AM
    try {
      const getPrices = store.getters['user/getPrices']
      const prices = getPrices()

      // const getTransactions = store.getters['user/getTransactions']
      // const transactions = getTransactions()

      // if (transactions.length) {
      //   await store.dispatch('user/getTransactions')
      // }
      if (!prices.length) {
        await store.dispatch('user/getPrices')
      }
    } catch (error) {
      console.log(error, 'error')
    }
  },
  data() {
    return {
      price: [],
    }
  },

  computed: {
    ...mapState({
      transaction: (state) => {
        return state.user.transaction
      },
    }),
    expiredDate() {
      const someDate = new Date()
      someDate.setDate(someDate.getDate() + 3)
      return someDate.toUTCString()
    },
  },

  mounted() {
    // Redirect to Checkout here
    if (this.$route.query.type === 'free') {
      //   await this.login()
    }

    const getPrice = this.$store.getters['user/getPriceByType']
    this.price = getPrice(this.$route.query.type)
    // if (this.price) {
    // }
  },

  async created() {
    if (this.$auth.loggedIn) {
      await this.createTransaction()
    } else {
      // Mutate Transaction
      this.getTransactionByHash(this.$route.query.contract)
    }
  },

  methods: {
    async confirm() {
      // Update Transaction and redirect
      const payload = {
        user: this.transaction.user_id,
        id: this.transaction.id,
        status: 'Processing',
      }
      await this.$store.dispatch('user/updateTransaction', payload)
      this.$router.push({
        name: 'transactions-hash',
        params: { hash: this.transaction.hash },
      })
    },

    async createTransaction() {
      const payload = {
        user: this.$auth.user.id,
        type: this.$route.query.type,
      }
      try {
        return await this.$store.dispatch('user/createTransaction', payload)
      } catch (error) {
        this.error_msg = 'Could not checkout, please try again later'
      }
    },

    async getTransactionByHash(hash) {
      const getTransaction = this.$store.getters['user/getTransactionByHash']
      const transaction = getTransaction(hash)
      if (!transaction) {
        await this.$store.dispatch('user/getTransactionByHash', hash)
      }
    },
    back() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
