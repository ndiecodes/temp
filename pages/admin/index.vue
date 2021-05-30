<template>
  <!-- <body class="hold-transition sidebar-mini layout-fixed"> -->
  <div class="hold-transitio sidebar-mini layout-fixed">
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
                  <nuxt-link to="/admin">Admin</nuxt-link>
                </li>
                <li class="breadcrumb-item active">Dashboard</li>
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
          <!-- Small boxes (Stat box) -->
          <div class="row">
            <div class="col-lg-6 col-6">
              <!-- small box -->
              <div class="small-box bg-info">
                <div class="inner">
                  <h3>{{ totalCourses }}</h3>

                  <p>Total Courses</p>
                </div>
                <div class="icon">
                  <i class="ion ion-bag"></i>
                </div>
                <nuxt-link to="/admin/categories" class="small-box-footer"
                  >More info <i class="fas fa-arrow-circle-right"></i
                ></nuxt-link>
              </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-6 col-6">
              <!-- small box -->
              <div class="small-box bg-success">
                <div class="inner">
                  <h3>{{ totalVideos }}</h3>

                  <p>Total Videos</p>
                </div>
                <div class="icon">
                  <i class="ion ion-stats-bars"></i>
                </div>
                <nuxt-link to="/admin/videos" class="small-box-footer"
                  >More info <i class="fas fa-arrow-circle-right"></i
                ></nuxt-link>
              </div>
            </div>
          </div>
          <!-- /.row -->
          <!-- Main row -->
          <div class="row">
            <!-- Left col -->
            <section class="col-lg-6 connectedSortable">
              <div class="row">
                <div class="col-md-6 col-12">
                  <button
                    type="button"
                    class="btn bg-gradient-success"
                    data-toggle="modal"
                    data-target="#create-categories-modal"
                  >
                    Create Courses
                  </button>
                </div>

                <div id="create-categories-modal" class="modal fade">
                  <CourseModal />
                </div>
              </div>
            </section>
            <!-- /.Left col -->
            <!-- right col (We are only adding the ID to make the widgets sortable)-->
            <section class="col-lg-6 connectedSortable">
              <div class="row">
                <div class="col-md-6 col-12">
                  <button
                    type="button"
                    class="btn btn-info"
                    data-toggle="modal"
                    data-target="#upload-videos-modal"
                  >
                    Upload Videos
                  </button>
                </div>

                <div id="upload-videos-modal" class="modal fade">
                  <VideoModal />
                </div>
              </div>
            </section>
            <!-- right col -->
          </div>
          <!-- /.row (main row) -->
        </div>
        <!-- /.container-fluid -->
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <AdminFooter />
    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
  <!-- ./wrapper -->
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

      const getVideos = store.getters['course/getAllVideos']
      const videos = getVideos()

      if (!videos.length) {
        await store.dispatch('course/getAllVideos')
      }
    } catch (error) {
      console.log(error, 'error')
    }
  },
  computed: {
    totalCourses() {
      if (this.$store.state.course.allCourses)
        return this.$store.state.course.allCourses.length
      return 0
    },

    totalVideos() {
      if (this.$store.state.course.videos) {
        return this.$store.state.course.videos.length
      }
      return 0
    },
  },
}
</script>

<style></style>
