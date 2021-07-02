export const state = () => ({
  courses: [],
  course: [],
  category: [],
  allCourses: [],
  videos: [],
  video: [],
  userCourses: [],
})

export const mutations = {
  storeCourses(state, courses) {
    state.courses = courses
  },

  storeAllCourses(state, courses) {
    state.allCourses = courses
  },
  storeAllVideos(state, videos) {
    state.videos = videos
  },
  storeCourse(state, course) {
    state.course = course
  },

  storeVideo(state, video) {
    state.video = video
  },

  storeCategory(state, category) {
    state.category = category
  },

  storeAllUserCourses(state, courses) {
    state.userCourses = courses
  },
}

export const getters = {
  getCourses: (state) => () => {
    return state.courses
  },

  getUserCourses: (state) => () => {
    return state.userCourses
  },

  getAllCourses: (state) => () => {
    return state.allCourses
  },

  getAllVideos: (state) => () => {
    return state.videos
  },

  getCourse: (state) => (slug) => {
    return state.courses.find((course) => course.slug === slug)
  },

  getVideo: (state) => (courseSlug, videoSlug) => {
    const course = state.courses.find((course) => course.slug === courseSlug)

    if (course) return course.Videos.find((video) => video.slug === videoSlug)
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

  getAllUserCourses({ dispatch, commit }) {
    return this.$repositories.course
      .userCourses(this.$auth.user.id)
      .then((data) => {
        const { success } = data
        if (success) {
          commit('storeAllUserCourses', data.courses)
        }
        return data
      })
      .catch((error) => console.log(error))
  },

  getAllVideos({ dispatch, commit }) {
    return this.$repositories.admin
      .videos()
      .then((data) => {
        const { success } = data
        // console.log(data)
        if (success) {
          commit('storeAllVideos', data.videos)
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

  createCourse({ dispatch, commit }, payload) {
    return this.$repositories.admin
      .createCourse(payload)
      .then((data) => {
        const { success } = data
        if (success) {
          commit('storeCategory', data.course)
        }
        return data
      })
      .catch((error) => console.log(error, 'error'))
  },

  createUserCourse({ dispatch, commit }, payload) {
    return this.$repositories.course
      .createUserCourse(payload)
      .then((data) => {
        const { success } = data
        if (success) {
          console.log(data)
          // commit('storeCategory', data.course)
        }
        return data
      })
      .catch((error) => console.log(error, 'error'))
  },

  updateCourse({ dispatch, commit }, payload) {
    return this.$repositories.admin
      .updateCourse(payload)
      .then((data) => {
        const { success } = data
        if (success) {
          commit('storeCategory', data.course)
        }
        return data
      })
      .catch((error) => console.log(error, 'error'))
  },

  updateVideo({ dispatch, commit }, payload) {
    return this.$repositories.admin
      .updateVideo(payload)
      .then((data) => {
        const { success } = data
        if (success) {
          commit('storeVideo', data.video)
        }
        return data
      })
      .catch((error) => console.log(error, 'error'))
  },
}
