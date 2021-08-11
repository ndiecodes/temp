<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Upload Videos</h4>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body p-0">
        <form method="post" @submit.prevent="createVideo">
          <div class="card-body">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                id="title"
                v-model="video.title"
                type="text"
                name="title"
                class="form-control"
                placeholder="Enter title"
              />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                id="description"
                v-model="video.description"
                class="form-control"
                rows="3"
                placeholder="Enter description"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="summary">Summary</label>
              <textarea
                id="summary"
                v-model="video.summary"
                class="form-control"
                rows="3"
                placeholder="Enter summary"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="vimeoId">Vimeo ID</label>
              <input
                id="vimeoId"
                v-model="video.vimeoId"
                type="text"
                class="form-control"
                placeholder="Enter Vimeo ID"
              />
            </div>
            <div class="form-group">
              <label>Category ID</label>
              <select v-model="video.categoryId" class="form-control">
                <option
                  v-for="(course, i) in courses"
                  :key="i"
                  :value="course.id"
                >
                  {{ course.title || '' }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="section">Section</label>
              <input
                id="section"
                v-model="video.section"
                type="text"
                class="form-control"
                placeholder="Enter Section"
              />
            </div>
            <div class="form-group">
              <label for="premium">Premium</label>
              <div class="form-check">
                <input
                  v-model="video.premium"
                  class="form-check-input"
                  type="radio"
                  name="radio1"
                  value="true"
                />
                <label class="form-check-label">Yes</label>
              </div>
              <div class="form-check">
                <input
                  v-model="video.premium"
                  class="form-check-input"
                  type="radio"
                  name="radio1"
                  value="false"
                />
                <label class="form-check-label">No</label>
              </div>
            </div>
          </div>

          <div class="card-footer">
            <button type="submit" class="btn btn-primary">Submit</button>
            <span class="p-3 error" :class="{ success: success }">{{
              message
            }}</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      video: {},
      message: '',
      success: false,
    }
  },
  computed: {
    ...mapState({
      courses: (state) => {
        return state.course.allCourses
      },
    }),
  },
  methods: {
    async createVideo() {
      const data = await this.$store.dispatch('course/createVideo', this.video)

      if (data) {
        const { success, message } = data
        this.success = success
        this.message = message
      } else {
        this.success = false
        this.message = 'Internal server error, please try again'
      }
    },
  },
}
</script>

<style scoped>
.success {
  color: green !important;
}

.error {
  color: red;
  font-size: 1rem;
}
</style>
