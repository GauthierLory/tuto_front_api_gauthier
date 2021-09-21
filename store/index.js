import Vuex from 'vuex'
import immeubles from "./immeubles"
import users from "./users"
import accounts from "./accounts"

export const store = new Vuex.Store({
    module: {
        immeubles,
        users,
        accounts
    }
})
