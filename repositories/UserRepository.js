const resource = '/user'
export default ($axios) => ({
  index() {
    return $axios.get(`${resource}`)
  },

  show(id) {
    return $axios.get(`${resource}/?_id=${id}`)
  },

  recoverPassword(payload) {
    return $axios
      .post(`/auth/password/email`, payload)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response))
  },

  create(payload) {
    return $axios
      .post(`/api/v1/auth/register`, payload)
      .then((response) => response.data)
      .catch((error) => Promise.resolve(error.response))
  },

  resetPassword(payload) {
    return $axios
      .put(`/auth/password/reset`, payload)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response))
  },

  updateMerchant(id, payload) {
    return $axios.post(`${resource}/merchant/${id}`, payload)
  },

  confirmEmail(token) {
    return $axios.get(`/confirm_email?token=${token}`)
  },

  delete(id) {
    return $axios.delete(`${resource}/${id}`)
  },

  createTransaction(payload) {
    return $axios
      .post(`/api/v1/transactions`, payload)
      .then((response) => response.data)
      .catch((error) => Promise.resolve(error.response))
  },
  updateTransaction(payload) {
    return $axios
      .put(`/api/v1/transactions/${payload.id}`, payload)
      .then((response) => response.data)
      .catch((error) => Promise.resolve(error.response))
  },
  transactionByHash(hash) {
    return $axios
      .get(`/api/v1/transactions/${hash}`)
      .then((response) => response.data)
      .catch((error) => Promise.resolve(error.response))
  },
})
