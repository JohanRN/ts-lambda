import { createStore } from 'vuex'

let requestOptions = {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer pk_test_LsRb12fdsvdew21',
    'Content-Type': 'application/json',
  },
  body: ''
};

export default createStore({
  state: {
    tokensArray: [],
    tokensCondition: false,
  },
  getters: {
  },
  mutations: {
    SettokensArray(state, payload) {
      state.tokensArray = payload
    },
    SettokensCondition(state, payload) {
      state.tokensCondition = payload
    }

  },
  actions: {
    async fetchToken({ commit }, _token) {
      try {
        const requestBody = {
          token: _token
        };
        requestOptions.body = JSON.stringify(requestBody);
        const res = await fetch('http://localhost:3000/dev/gettokens', requestOptions)
        const data = await res.json();
        if (res.status === 200) {
          commit('SettokensArray', data);
          commit('SettokensCondition', true);
        } else if (res.status === 404) {
          commit('SettokensArray', data);
          commit('SettokensCondition', false);
        } else if (res.status === 501) {
          commit('SettokensArray', data);
          commit('SettokensCondition', false);
        }
      } catch (error) {
        console.log(error)
      }
    },
    async registerToken({ commit }, _token) {
      const requestBody = {
        "email": _token.email,
        "card_number": _token.cardNumber,
        "cvv": _token.cvv,
        "expiration_year": _token.expirationYear,
        "expiration_month": _token.expirationMonth
      };
      requestOptions.body = JSON.stringify(requestBody);
      const res = await fetch('http://localhost:3000/dev/tokens', requestOptions)
      const data = await res.json();
      if (res.status === 200) {
        commit('SettokensArray', data);
        commit('SettokensCondition', true);
      } else if (res.status === 404) {
        commit('SettokensArray', data);
        commit('SettokensCondition', false);
      } else if (res.status === 501) {
        commit('SettokensArray', data);
        commit('SettokensCondition', false);
      }
    }
  },
  modules: {
  }
})
