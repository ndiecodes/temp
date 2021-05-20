<template>
  <!-- <body class="hold-transition sidebar-mini layout-fixed"> -->
  <div class="hold-transition sidebar-mini layout-fixed">
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
                  <h3>150</h3>

                  <p>Total Categories</p>
                </div>
                <div class="icon">
                  <i class="ion ion-bag"></i>
                </div>
                <nuxt-link to="admin/categories" class="small-box-footer"
                  >More info <i class="fas fa-arrow-circle-right"></i
                ></nuxt-link>
              </div>
            </div>
            <!-- ./col -->
            <div class="col-lg-6 col-6">
              <!-- small box -->
              <div class="small-box bg-success">
                <div class="inner">
                  <h3>53<sup style="font-size: 20px">%</sup></h3>

                  <p>Total Videos</p>
                </div>
                <div class="icon">
                  <i class="ion ion-stats-bars"></i>
                </div>
                <nuxt-link to="admin/videos" class="small-box-footer"
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
                    Create Categories
                  </button>
                </div>

                <div id="create-categories-modal" class="modal fade">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="modal-title">Create Categories</h4>
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
                              <label for="vimeoId">Vimeo ID</label>
                              <input
                                id="vimeoId"
                                type="text"
                                class="form-control"
                                placeholder="Enter Vimeo ID"
                              />
                            </div>
                            <div class="form-group">
                              <label>Category ID</label>
                              <select class="form-control">
                                <option>option 1</option>
                                <option>option 2</option>
                                <option>option 3</option>
                                <option>option 4</option>
                                <option>option 5</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="section">Section</label>
                              <input
                                id="section"
                                type="text"
                                class="form-control"
                                placeholder="Enter Section"
                              />
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

    <footer class="main-footer">
      <strong
        >Copyright &copy; 2021
        <nuxt-link to="/">Blockvilla.com</nuxt-link>.</strong
      >
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block"></div>
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
