<template>
    <div class="container  mt-5">
        <div class="text-center p-4">
            <h1>Credit Card Search.</h1>
        </div>
        <div class="row justify-content-center">
            <div class="card p-4 col-6">
                <div class="mb-3">
                    <label for="token" class="form-label">Token</label>
                    <input type="text" class="form-control" id="token" v-model="formData.token">
                </div>
                <button class="btn btn-primary" @click="searchToken(formData.token)">Submit</button>
            </div>
            <div v-if="!tokensCondition && tokensArray.message" class="mt-5 alert alert-danger" role="alert">
                {{ tokensArray.message }}
            </div>
            <div v-if="tokensCondition" class="mt-5 alert alert-success" role="alert">
                {{ tokensArray.message }}
            </div>
            <div v-if="tokensCondition" class="container mt-5">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Result data</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="cardNumber">Email</label>
                            <input type="text" disabled class="form-control" v-model="tokensArray.data.email"
                                placeholder="Card Number">
                        </div>
                        <div class="form-group">
                            <label for="cardNumber">Card Number</label>
                            <input type="text" disabled class="form-control" v-model="tokensArray.data.card_number"
                                placeholder="Card Number">
                        </div>
                        <div class="form-row">
                            <div class="col">
                                <label for="expiryDate">Expiration year</label>
                                <input type="text" disabled class="form-control" v-model="tokensArray.data.expiration_year"
                                    placeholder="Expiration year">
                            </div>
                            <div class="col">
                                <label for="cvv">Expiration month</label>
                                <input type="text" disabled class="form-control" v-model="tokensArray.data.expiration_month"
                                    placeholder="Expiration month">
                            </div>
                        </div>
                    </div>
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
                token: ''
            }
        };
    },
    setup() {
        const store = useStore()
        const searchToken = token => {
            store.dispatch('fetchToken', token)
        }
        const tokensArray = computed(() => store.state.tokensArray)
        const tokensCondition = computed(() => store.state.tokensCondition)
        return {
            searchToken,
            tokensArray,
            tokensCondition
        };
    },

}
</script>