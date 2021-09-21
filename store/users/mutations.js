let mutations = {
    FETCH_USER(state, user) {
        return state.user = user
    },
    CREATE_USER(state, user) {
        state.user(user)
    },
    
}
export default mutations