let actions = {
    async fetchImmeubles({commit}) {
        await this.$axios.get("http://127.0.0.1:8000/api/immeubles/" + this.$auth.user.id)
            .then(res => {
                commit('FETCH_IMMEUBLES', res.data)
                console.log(res.data)
            }).catch(err => {
            console.log(err)
        })
    }
}

export default actions