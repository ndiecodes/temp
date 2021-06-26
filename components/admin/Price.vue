<template>
  <div id="create-price-modal" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Set Price</h4>
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
          <form @submit.prevent="setPrice">
            <div class="card-body">
              <div class="form-group">
                <label for="type">Type</label>
                <select v-model="price.type" class="form-control" required>
                  <option value="free" selected>Free</option>
                  <option value="month">Monthly</option>
                  <option value="year">Yearly</option>
                </select>
              </div>
              <div class="form-group">
                <label for="amount">Amount</label>
                <input
                  id="amount"
                  v-model="price.amount"
                  class="form-control"
                  placeholder="Enter amount"
                  required
                />
              </div>
              <div class="form-group">
                <label for="saves">Saves</label>
                <input
                  id="saves"
                  v-model="price.saves"
                  class="form-control"
                  placeholder="Enter saves"
                />
              </div>
              <div class="form-group form-check">
                <input
                  id="preferred"
                  v-model="price.preferred"
                  type="checkbox"
                  class="form-check-input"
                />
                <label class="form-check-label" for="preferred"
                  >Most Preferred Choice</label
                >
              </div>
            </div>

            <div class="card-footer">
              <button type="submit" class="btn btn-primary">Set</button>
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
      price: {
        type: 'Free',
      },
      message: '',
      success: false,
    }
  },

  methods: {
    async setPrice() {
      const data = await this.$store.dispatch('user/setPrice', this.price)
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
