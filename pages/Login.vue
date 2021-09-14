<template>
  <v-container fluid>
    <v-col md="6" offset-md="3">
      <v-card class="mx-auto">
        <div class="d-flex flex-column ma-6 mb-6">
          <h1 class="text-md-center" >Connexion</h1>
          <form method="post" @submit.prevent="login">
            <v-layout column>
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
              <v-flex class="text-xs-center">
                <v-btn color="primary" type="submit">Connexion</v-btn>
              </v-flex>
            </v-layout>
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
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.login({ data: this.form})
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>