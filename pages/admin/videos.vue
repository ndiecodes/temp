<template>
  <div>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Dashboard</h1>
            </div>
            <!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li class="breadcrumb-item">
                  <nuxt-link to="/dashboard/admin">Admin</nuxt-link>
                </li>
                <li class="breadcrumb-item active">Videos</li>
              </ol>
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <!-- Main row -->
          <Courses :edit="true" />
        </div>
        <!-- /.container-fluid -->
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <AdminFooter />

    <!-- /.control-sidebar -->
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    try {
      const getCourses = store.getters['course/getAllCourses']
      const courses = getCourses()
      if (!courses.length) {
        await store.dispatch('course/getAllCourses')
      }
    } catch (error) {
      console.log(error, 'error')
    }
  },
}
</script>

<style></style>
