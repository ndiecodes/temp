<template>
  <div id="create-categories-modal" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Course</h4>
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
          <form @submit.prevent="updateCourse">
            <div class="card-body">
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  id="title"
                  v-model="editCourse.title"
                  type="text"
                  class="form-control"
                  placeholder="Enter title"
                />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea
                  id="description"
                  v-model="editCourse.description"
                  class="form-control"
                  rows="3"
                  placeholder="Enter description"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="summary">Summary</label>
                <textarea
                  id="summary"
                  v-model="editCourse.summary"
                  class="form-control"
                  rows="3"
                  placeholder="Enter summary"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="premium">Premium</label>
                <div class="form-check">
                  <input
                    v-model="editCourse.premium"
                    class="form-check-input"
                    type="radio"
                    name="radio1"
                    value="true"
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input
                    v-model="editCourse.premium"
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
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      Array,
      default: () => {},
    },
  },
  data() {
    return {
      editCourse: [],
      message: '',
      success: false,
    }
  },

  created() {
    this.editCourse = { ...this.course }
  },

  methods: {
    async updateCourse() {
      const data = await this.$store.dispatch(
        'course/updateCourse',
        this.editCourse
      )

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
