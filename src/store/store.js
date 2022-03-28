import { createStore } from "vuex";

export const store = createStore({
    state: {
        name: ''
    },
    mutations: {
        change(state, name) {
            state.name = name
        }
    },
    getters: {
        name: state => state.name
    }
})