<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <nuxt-link to="/" class="brand-link">
      <img
        src="/img/logo.png"
        alt="Logo"
        class="brand-image"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light pl-5"></span>
    </nuxt-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            src="/img/avatar3.png"
            class="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info">
          <a href="#" class="d-block">{{ $auth.user.name }}</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item">
            <nuxt-link :to="{ name: 'admin' }" class="nav-link active">
              <i class="fas fa-tachometer-alt nav-icon"></i>
              <p>Dashboard</p>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="{ name: 'admin-courses' }" class="nav-link">
              <i class="fas fa-file-alt nav-icon"></i>
              <p>Courses</p>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link :to="{ name: 'admin-videos' }" class="nav-link">
              <i class="fas fa-video nav-icon"></i>
              <p>Videos</p>
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {}
</script>

<style></style>
