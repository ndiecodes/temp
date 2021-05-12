const resource = '/api/v1/courses'
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
})
