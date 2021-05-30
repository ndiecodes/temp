<template>
  <div id="upload-videos-modal" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Videos</h4>
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
          <form @submit.prevent="updateVideo">
            <div class="card-body">
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  id="title"
                  v-model="editVideo.title"
                  type="text"
                  class="form-control"
                  placeholder="Enter title"
                />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea
                  id="description"
                  v-model="editVideo.description"
                  class="form-control"
                  rows="3"
                  placeholder="Enter description"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="summary">Summary</label>
                <textarea
                  id="summary"
                  v-model="editVideo.summary"
                  class="form-control"
                  rows="3"
                  placeholder="Enter summary"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="vimeoId">Vimeo ID</label>
                <input
                  id="vimeoId"
                  v-model="editVideo.vimeoId"
                  type="text"
                  class="form-control"
                  placeholder="Enter Vimeo ID"
                />
              </div>
              <div class="form-group">
                <label>Course ID</label>
                <select class="form-control">
                  <option disabled selected>
                    {{ editVideo.Course.title }}
                  </option>
                  <option
                    v-for="(course, i) in courses"
                    :key="i"
                    :value="course.id"
                  >
                    {{ course.title }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label for="section">Section</label>
                <input
                  id="section"
                  v-model="editVideo.section"
                  type="text"
                  class="form-control"
                  placeholder="Enter Section"
                />
              </div>
              <div class="form-group">
                <label for="premium">Premium</label>
                <div class="form-check">
                  <input
                    v-model="editVideo.premium"
                    class="form-check-input"
                    value="true"
                    type="radio"
                    name="radio1"
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input
                    v-model="editVideo.premium"
                    class="form-check-input"
                    value="false"
                    type="radio"
                    name="radio1"
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
            </div>
            <!-- /.card-body -->

            <div class="card-footer">
              <button type="submit" class="btn btn-primary">Submit</button>
              <span class="p-3 error" :class="{ success: success }">{{
                message
              }}</span>
            </div>
          </form>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    video: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      editVideo: [],
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

  created() {
    this.editVideo = { ...this.video }
  },

  methods: {
    async updateVideo() {
      const data = await this.$store.dispatch(
        'course/updateVideo',
        this.editVideo
      )

      const { success, message } = data
      this.success = success
      this.message = message
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
