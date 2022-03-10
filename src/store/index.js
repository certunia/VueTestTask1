import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cards: [
            {
                email: 'mail@mail.com',
                text: 'First card'
            },
            {
                email: 'mail@mail.com',
                text: 'Second card'
            },
        ]
    },
    mutations: {
        addCard (state, payload) {
            state.cards.push(payload);
        }
    },
    actions: {
        addCard ({commit}, payload) {
            commit('addCard',payload);
        }
    },
    getters: {
        getCards (state) {
            return state.cards;
        }
    }
});