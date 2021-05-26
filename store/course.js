export const state = () => ({
  courses: [],
  course: [],
  category: [],
  allCourses: [],
})

export const mutations = {
  storeCourses(state, courses) {
    state.courses = courses
  },

  storeAllCourses(state, courses) {
    state.allCourses = courses
  },
  storeCourse(state, course) {
    state.course = course
  },

  storeCategory(state, category) {
    state.category = category
  },
}

export const getters = {
  getCourses: (state) => () => {
    return state.courses
  },

  getAllCourses: (state) => () => {
    return state.allCourses
  },

  getCourse: (state) => (id) => {
    return state.courses.find((course) => course.id === Number.parseInt(id))
  },

  getVideo: (state) => (courseId, videoId) => {
    const course = state.courses.find(
      (course) => course.id === Number.parseInt(courseId)
    )

    if (course)
      return course.Videos.find(
        (video) => video.id === Number.parseInt(videoId)
      )
  },
}

export const actions = {
  getCourses({ dispatch, commit }) {
    return this.$repositories.course
      .index()
      .then((data) => {
        const { success } = data
        if (success) {
          commit('storeCourses', data.courses)
        }
        return data
      })
      .catch((error) => console.log(error))
  },

  getCourse({ dispatch, commit }, id) {
    return this.$repositories.course
      .show(id)
      .then((data) => {
        const { success } = data
        if (success) {
          commit('storeCourse', data.courses)
        }
        return data
      })
      .catch((error) => console.log(error))
  },

  getAllCourses({ dispatch, commit }) {
    return this.$repositories.admin
      .index()
      .then((data) => {
        const { success } = data
        if (success) {
          commit('storeAllCourses', data.courses)
        }
        return data
      })
      .catch((error) => console.log(error))
  },

  createVideo({ dispatch, commit }, payload) {
    return this.$repositories.admin
      .create(payload)
      .then((data) => {
        const { success } = data
        if (success) {
          // commit('storeCourse', data.vid)
        }
        return data
      })
      .catch((error) => console.log(error))
  },

  createCategory({ dispatch, commit }, payload) {
    return this.$repositories.admin
      .createCategory(payload)
      .then((data) => {
        const { success } = data
        if (success) {
          commit('storeCategory', data.course)
        }
        return data
      })
      .catch((error) => console.log(error, 'error'))
  },
}
