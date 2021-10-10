const resource = '/api/v1/courses'
export default ($axios) => ({
  index() {
    return $axios
      .get(`${resource}`)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response))
  },

  userCourses(userId) {
    return $axios
      .get(`/api/v1/secure/users/${userId}/courses`)
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

  createUserCourse(payload) {
    return $axios
      .post(`/api/v1/secure/users/${payload.user_id}/courses`, payload)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error.response))
  },

  delete(id) {
    return $axios.delete(`${resource}/${id}`)
  },
})
