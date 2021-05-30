<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Create Courses</h4>
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
        <form method="post" @submit.prevent="createCategory">
          <div class="card-body">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                id="title"
                v-model="course.title"
                type="text"
                class="form-control"
                placeholder="Enter title"
              />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                id="description"
                v-model="course.description"
                class="form-control"
                rows="3"
                placeholder="Enter description"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="summary">Summary</label>
              <textarea
                id="summary"
                v-model="course.summary"
                class="form-control"
                rows="3"
                placeholder="Enter summary"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="premium">Premium</label>
              <div class="form-check">
                <input
                  v-model="course.premium"
                  class="form-check-input"
                  type="radio"
                  name="radio1"
                  value="true"
                />
                <label class="form-check-label">Yes</label>
              </div>
              <div class="form-check">
                <input
                  v-model="course.premium"
                  class="form-check-input"
                  type="radio"
                  name="radio1"
                  value="false"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      course: {},
      message: '',
      success: false,
    }
  },
  methods: {
    async createCategory() {
      const data = await this.$store.dispatch(
        'course/createCourse',
        this.course
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
