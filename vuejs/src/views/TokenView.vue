<template>
  <div class="container  mt-5">
    <div class="text-center p-4">
      <h1>Credit Card Registration.</h1>
    </div>
    <div class="row justify-content-center">
      <div class="card p-4 col-6">
        <form @submit.prevent="registerToken(formData)">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="text" class="form-control" id="email" v-model="formData.email">
          </div>
          <div class="mb-3">
            <label for="cardNumber" class="form-label">Card Number</label>
            <input type="text" class="form-control" id="cardNumber" v-model="formData.cardNumber">
          </div>
          <div class="mb-3">
            <label for="cvv" class="form-label">CVV</label>
            <input type="text" class="form-control" id="cvv" v-model="formData.cvv">
          </div>
          <div class="mb-3">
            <label for="expirationYear" class="form-label">Expiration year</label>
            <input type="text" class="form-control" id="expirationYear" v-model="formData.expirationYear">
          </div>
          <div class="mb-3">
            <label for="expirationMonth" class="form-label">Expiration month</label>
            <input type="text" class="form-control" id="expirationMonth" v-model="formData.expirationMonth">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <div v-if="!tokensCondition && tokensResult.message" class="mt-5 alert alert-danger" role="alert">
          {{ tokensResult.message }}
        </div>
        <div v-if="tokensCondition" class="mt-5 alert alert-success" role="alert">
          {{ tokensResult.data.token }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  data() {
    return {
      formData: {
        email: '',
        cardNumber: '',
        cvv: '',
        expirationYear: '',
        expirationMonth: ''
      }
    };
  },
  setup() {
    const store = useStore()
    const registerToken = token => {
      store.dispatch('registerToken', token)
    }
    const tokensResult = computed(() => store.state.tokensArray)
    const tokensCondition = computed(() => store.state.tokensCondition)
    return {
      registerToken,
      tokensResult,
      tokensCondition
    };
  },
}
</script>