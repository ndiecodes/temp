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
                  <nuxt-link to="/admin">Admin</nuxt-link>
                </li>
                <li class="breadcrumb-item active">Transactions</li>
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
          <table class="table table-hover">
            <thead>
              <td>S/N</td>
              <td>Name</td>
              <td>Payment Date</td>
              <td>Hash</td>
              <td>Amount</td>
              <td>Status</td>
              <td>Actions</td>
            </thead>
            <tr v-for="(trx, i) in transactions" :key="i">
              <td>{{ i + 1 }}</td>
              <td>{{ trx.User.name }}</td>
              <td>{{ new Date(trx.createdAt).toLocaleString() }}</td>
              <td>{{ trx.hash }}</td>
              <td>$ {{ trx.amount }}</td>
              <td>{{ trx.status }}</td>
              <td>
                <button
                  class="btn btn-success"
                  @click="approve(trx.id, trx.user_id)"
                >
                  Approve
                </button>
                <button
                  class="btn btn-danger"
                  @click="reject(trx.id, trx.user_id)"
                >
                  Reject
                </button>
              </td>
            </tr>
          </table>
        </div>
      </section>
    </div>

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
import { mapState } from 'vuex'
export default {
  async asyncData({ store }) {
    try {
      const getTransactions = store.getters['user/getTransactions']
      const transactions = getTransactions()
      if (!transactions.length) {
        await store.dispatch('user/getTransactions')
      }
    } catch (error) {
      console.log(error, 'error')
    }
  },

  computed: {
    ...mapState({
      transactions: (state) => {
        return state.user.transactions
      },
    }),
  },

  methods: {
    async approve(id, user) {
      const payload = {
        user,
        id,
        status: 'Approved',
      }
      await this.$store.dispatch('user/updateTransaction', payload)
    },

    async reject(id, user) {
      const payload = {
        user,
        id,
        status: 'Rejected',
      }
      await this.$store.dispatch('user/updateTransaction', payload)
    },
  },
}
</script>

<style></style>
