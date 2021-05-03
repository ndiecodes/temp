export const state = () => ({
  user: [],
})

export const mutations = {
  storeUser(state, user) {
    state.user = user
  },
  storeTopMerchants(state, merchants) {
    state.topMerchants = merchants
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
}
