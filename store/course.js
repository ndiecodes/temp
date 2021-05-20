export const state = () => ({
  courses: [],
  course: [],
})

export const mutations = {
  storeCourses(state, courses) {
    state.courses = courses
  },

  storeCourse(state, course) {
    state.course = course
  },
}

export const getters = {
  getCourses: (state) => () => {
    return state.courses
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
      .index()
      .then((data) => {
        const { success } = data
        if (success) {
          commit('storeCourse', data.courses)
        }
        return data
      })
      .catch((error) => console.log(error))
  },
}
