let mutations = {
    FETCH_ACCOUNTS(state, accounts) {
        return state.accounts = accounts
    },
    FETCH_ACCOUNT(state, account) {
        return state.account = account
    },
    
}
export default mutations