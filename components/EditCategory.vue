<template>
  <div id="create-categories-modal" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Categories</h4>
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
          <form>
            <div class="card-body">
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="Enter title"
                  :value="course.title"
                />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea
                  id="description"
                  class="form-control"
                  rows="3"
                  placeholder="Enter description"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="summary">Summary</label>
                <textarea
                  id="summary"
                  class="form-control"
                  rows="3"
                  placeholder="Enter summary"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="premium">Premium</label>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio1" />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio1" />
                  <label class="form-check-label">No</label>
                </div>
              </div>
            </div>
            <!-- /.card-body -->

            <div class="card-footer">
              <button type="submit" class="btn btn-primary">Submit</button>
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
}
</script>

<style></style>
