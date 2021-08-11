<template>
  <div class="col-md-3">
    <div class="card card-outline card-info">
      <div class="card-header">
        <h3 class="card-title">{{ course.title }}</h3>
      </div>
      <div class="card-body">
        <p>{{ course.summary }}</p>
      </div>
      <div class="card-footer">
        <button
          type="button"
          class="btn bg-gradient-info"
          data-toggle="modal"
          data-target="#create-categories-modal"
        >
          Edit Course
        </button>
      </div>
    </div>
    <EditCourse :course="course" />
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
