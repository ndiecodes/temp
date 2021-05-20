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
                <li class="breadcrumb-item active">Categories</li>
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
          <div class="row">
            <div class="col-md-3">
              <div class="card card-outline card-info">
                <div class="card-header">
                  <h3 class="card-title">Category 1</h3>
                </div>
                <div class="card-body">
                  <button
                    type="button"
                    class="btn bg-gradient-info"
                    data-toggle="modal"
                    data-target="#create-categories-modal"
                  >
                    Edit Categories
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card card-outline card-info">
                <div class="card-header">
                  <h3 class="card-title">Category 2</h3>
                </div>
                <div class="card-body">
                  <button
                    type="button"
                    class="btn bg-gradient-info"
                    data-toggle="modal"
                    data-target="#create-categories-modal"
                  >
                    Edit Categories
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card card-outline card-info">
                <div class="card-header">
                  <h3 class="card-title">Category 3</h3>
                </div>
                <div class="card-body">
                  <button
                    type="button"
                    class="btn bg-gradient-info"
                    data-toggle="modal"
                    data-target="#create-categories-modal"
                  >
                    Edit Categories
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card card-outline card-info">
                <div class="card-header">
                  <h3 class="card-title">Category 4</h3>
                </div>
                <div class="card-body">
                  <button
                    type="button"
                    class="btn bg-gradient-info"
                    data-toggle="modal"
                    data-target="#create-categories-modal"
                  >
                    Edit Categories
                  </button>
                </div>
              </div>
            </div>

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
                            <input
                              class="form-check-input"
                              type="radio"
                              name="radio1"
                            />
                            <label class="form-check-label">Yes</label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="radio1"
                            />
                            <label class="form-check-label">No</label>
                          </div>
                        </div>
                      </div>
                      <!-- /.card-body -->

                      <div class="card-footer">
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- /.modal-content -->
              </div>
              <!-- /.modal-dialog -->
            </div>
          </div>
          <!-- /.row (main row) -->
        </div>
        <!-- /.container-fluid -->
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <footer class="main-footer">
      <strong
        >Copyright &copy; 2014-2021
        <a href="https://adminlte.io">AdminLTE.io</a>.</strong
      >
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.1.0
      </div>
    </footer>

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
  layout: 'admin',
  auth: false,
}
</script>

<style></style>
