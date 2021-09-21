let actions = {
    async fetchImmeubles({commit}) {
        await this.$axios.get("http://127.0.0.1:8000/api/immeubles/users/" + this.$auth.user.id)
            .then(res => {
                commit('FETCH_IMMEUBLES', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    async fetchImmeuble({commit}, immeubleId) {
        await this.$axios.get("http://127.0.0.1:8000/api/immeubles/" + immeubleId + "/details")
            .then(res => {
                commit('FETCH_IMMEUBLE', res.data)
                console.log(res.data)
            }).catch(err => {
            console.log(err)
        })
    },

}
export default actions