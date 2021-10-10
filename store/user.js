export const state = () => ({
  user: [],
  prices: [],
  transaction: [],
  transactions: [],
})

export const mutations = {
  storeUser(state, user) {
    state.user = user
  },

  STORE_TRANSACTION(state, transaction) {
    state.transaction = transaction
  },

  STORE_TRANSACTIONS(state, transactions) {
    state.transactions = transactions
  },

  STORE_PRICES(state, prices) {
    state.prices = prices
  },
}

export const getters = {
  getPrices: (state) => () => {
    return state.prices
  },

  getTransactions: (state) => () => {
    return state.transactions
  },

  getPriceByType: (state) => (type) => {
    return state.prices.find((price) => price.type === type)
  },

  getTransactionByHash: (state) => (hash) => {
    if (state.transaction.hash === hash) {
      return state.transaction
    }
  },
}

export const actions = {
  register({ dispatch, commit }, form) {
    return this.$repositories.user.create(form).then((data) => {
      const { success } = data
      if (success) {
        // form.id = data.data._id;
        // commit("storeUser", form);
        // Do something
      }
      return data
    })
  },

  setPrice({ commit }, price) {
    return this.$repositories.admin.setPrice(price).then((data) => {
      const { success } = data
      if (success) {
        // commit('STORE_PRICE', data.price)
      }
      return data
    })
  },

  getPrices({ commit }, price) {
    return this.$repositories.admin.getPrices().then((data) => {
      const { success } = data
      if (success) {
        commit('STORE_PRICES', data.prices)
      }
      return data
    })
  },

  async login({ dispatch, commit }, data) {
    try {
      const response = await this.$auth.loginWith('local', {
        data,
      })
      this.$auth.setUser(response.data.user)
      commit('storeUser', response.data.user)
      return Promise.resolve(response.data.user)
    } catch (err) {
      if (err.response?.data) {
        return Promise.reject(err.response)
      }
    }
  },

  recoverPassword({ dispatch, commit }, form) {
    return this.$repositories.user.recoverPassword(form).then((data) => {
      const { success } = data
      if (success) {
        // form.id = data.data._id;
        // commit("storeUser", form);
        // Do something
      }
      return data
    })
  },

  resetPassword({ dispatch, commit }, form) {
    return this.$repositories.user.resetPassword(form).then((data) => {
      const { success } = data
      if (success) {
        // form.id = data.data._id;
        // commit("storeUser", form);
        // Do something
      }
      return data
    })
  },

  createTransaction({ dispatch, commit }, payload) {
    return this.$repositories.user.createTransaction(payload).then((data) => {
      const { success } = data
      if (success) {
        commit('STORE_TRANSACTION', data.newtransaction)
      }
      return data.newtransaction
    })
  },

  updateTransaction({ dispatch, commit }, payload) {
    return this.$repositories.user.updateTransaction(payload).then((data) => {
      const { success } = data
      if (success) {
        commit('STORE_TRANSACTION', data.transaction)
      }
      return data.transaction
    })
  },

  getTransactionByHash({ dispatch, commit }, hash) {
    return this.$repositories.user.transactionByHash(hash).then((data) => {
      const { success } = data
      if (success) {
        commit('STORE_TRANSACTION', data.transaction)
      }
      return data.transaction
    })
  },

  getTransactions({ dispatch, commit }, hash) {
    return this.$repositories.admin.getTransactions().then((data) => {
      const { success } = data
      if (success) {
        commit('STORE_TRANSACTIONS', data.transactions)
      }
      return data
    })
  },
}
