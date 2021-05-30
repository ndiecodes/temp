const resource = '/api/v1/courses'
export default ($axios) => ({
  index() {
    return $axios
      .get(`/api/v1/secure/courses/all`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response))
  },

  videos() {
    return $axios
      .get(`/api/v1/secure/videos`)
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
      .post(`/api/v1/secure/videos`, payload)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response))
  },

  createCourse(payload) {
    return $axios
      .post(`/api/v1/secure/courses`, payload)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  updateVideo(payload) {
    console.log(payload)
    return $axios
      .patch(`/api/v1/secure/videos/${payload.id}`, payload)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response))
  },

  updateCourse(payload) {
    return $axios
      .patch(`/api/v1/secure/courses/${payload.id}`, payload)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
  },

  delete(id) {
    return $axios.delete(`${resource}/${id}`)
  },
})
