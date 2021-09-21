let actions = {
    async fetchAccounts({commit}) {
        await this.$axios.get("http://127.0.0.1:8000/api/accounts/")
            .then(res => {
                commit('FETCH_ACCOUNTS', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    async fetchAccount({commit}, id) {
        await this.$axios.get(`http://127.0.0.1:8000/api/accounts/${id}`)
            .then(res => {
                commit('FETCH_ACCOUNT', res.data)
                console.log(res.data)
            }).catch(err => {
            console.log(err)
        })
    }
}
export default actions