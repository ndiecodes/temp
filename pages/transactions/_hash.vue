<template>
  <section>
    <div class="container">
      <div class="row mt-5">
        <div
          class="
            alert alert-success
            d-flex
            justify-content-between
            alert-dismissible
            fade
            show
          "
          role="alert"
        >
          <p>Transaction processing and awaiting confirmation.</p>
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <div class="row">
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
                $ {{ transaction.amount }}[ {{ price.naira || '190,000.00' }} ]
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
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  async asyncData({ store, route, router }) {
    try {
      const getTransaction = store.getters['user/getTransactionByHash']
      let transaction = getTransaction(route.params.hash)

      const getPrices = store.getters['user/getPrices']
      const prices = getPrices()

      if (!prices.length) {
        await store.dispatch('user/getPrices')
      }

      if (!transaction) {
        await store.dispatch('user/getTransactionByHash', route.params.hash)
        transaction = getTransaction(route.params.hash)
      }
      const getPrice = store.getters['user/getPriceByType']
      const price = getPrice(transaction.type)

      return { transaction, price }
    } catch (error) {
      // console.log(error, 'error')
    }
  },
}
</script>

<style></style>
