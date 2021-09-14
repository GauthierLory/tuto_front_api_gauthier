<template>
  <v-container fluid>
    <v-col md="6" offset-md="3">
      <v-card class="mx-auto">
        <div class="d-flex flex-column ma-6">
          <h1 class="text-md-center" >Inscription</h1>
          <form method="post" @submit.prevent="register">
            <RegisterForm/>
          </form>
        </div>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
export default {
data() {
    return {
        form : {
          pseudo:'',
          bio:'',
          address:'',
          country:'',
          city:'',
          phone:'',
          zipcode:'',
          email: '',
          password: ''
        }
    }
  },
  methods: {
    async register() {
      try {
        await this.$axios.post('http://127.0.0.1:8000/api/auth/register', this.form)
        
      //   this.$auth.login({ data: this.form })
      //   this.$router.push({ name: 'Immeuble' })

      } catch (e) {
        console.log(e)
      }
    }
  }
};
</script>