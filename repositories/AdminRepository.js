const resource = '/api/v1/courses'
export default ($axios) => ({
  index() {
    return $axios
      .get(`/api/v1/secure/courses/all`)
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
      .post(`/api/v1/secure/courses`, payload)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response))
  },

  createCategory(payload) {
    return $axios
      .post(`/api/v1/secure/categories`, payload)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  delete(id) {
    return $axios.delete(`${resource}/${id}`)
  },
})
