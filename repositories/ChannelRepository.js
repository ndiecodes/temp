const resource = '/channels'
export default ($axios) => ({
  index() {
    return $axios
      .get(`${resource}`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response))
  },

  show(id) {
    return $axios
      .get(`${resource}/${id}`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response))
  },

  create(payload) {
    return $axios
      .post(`${resource}`, payload)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response))
  },

  delete(id) {
    return $axios.delete(`${resource}/${id}`)
  },

  connected() {
    return $axios
      .get(`${resource}/connected`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response))
  },
  connect(data) {
    return $axios
      .post(`${resource}/connect`, data)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response))
  },
})
