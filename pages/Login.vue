<template>
<v-container fluid>
  <v-col lg="4" md="6" offset-lg="3" offset-md="3">
    <v-card outlined class="mx-auto">
      <v-card>
          <v-card-title>Connexion</v-card-title>
          <v-card-text>
               <form method="post" @submit.prevent="login">
              <p class="text-md-center" v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                  <li style="list-style: none" v-for="error in errors">{{ error }}</li>
                </ul>
              </p>
              <v-flex>
                <v-text-field
                v-model="form.email"
                  name="email"
                  label="Email"
                  id="email"
                  type="email"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                v-model="form.password"
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  required
                ></v-text-field>
              </v-flex>
                <v-btn color="primary" type="submit">Connexion</v-btn>
          </form>
          </v-card-text>
      </v-card>
    </v-card>

  </v-col>

</v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: ''
    }
  },
  methods: {
    async login() {
      this.errors = [];
          try {
            await this.$auth.loginWith('local',{ data: this.form})
          } catch (error) {
            let errorResponse = error.response.data.errors.email
             this.errors.push(errorResponse)
          }
    },
  }
}
</script>