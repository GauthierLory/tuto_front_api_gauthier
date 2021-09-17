let getters = {
    authenticated(state) {
        return state.auth.loggedIn
    },

    user(state) {
        return state.auth.user
    },
    immeubles: state => {
        return state.immeubles
    }
}

export default  getters