let actions = {
    async fetchUser({commit}) {
        await this.$axios.get('http://127.0.0.1:8000/api/me')
            .then(res => {
                commit('FETCH_USER', res.data)
            }).catch(err => {
            console.log(err)
        })
    },
    async createUser({commit}, user) {
        let errors = [];
        await this.$axios.post('http://127.0.0.1:8000/api/auth/register', user)
            .then(res => {
                commit('CREATE_USER', res.data)
            }).catch(err => {
                let errorResponse = err.response.data.errors.email
                errors.push(errorResponse)
                console.log(errors)
        })
    }
}
export default actions