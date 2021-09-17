import Vue from 'vue'
import Vuex from 'vuex'
import immeubles from "./immeubles"
import users from "./users"

Vue.use(Vuex);

new Vuex.Store({
    module: {
        immeubles,
        users
    }
})
