<template>
  <v-container fluid>
    <v-col md="6" offset-md="3">
      <v-card class="mx-auto">
        <div class="d-flex flex-column ma-6">
          <h1 class="text-md-center" >Inscription</h1>
          <form method="post" @submit.prevent="register">
            <v-layout column>
              <v-flex>
                <v-text-field
                  v-model="form.pseudo"
                  label="pseudo"
                  id="pseudo"
                  type="pseudo"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="form.bio"
                  label="bio"
                  id="bio"
                  type="bio"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="form.address"
                  label="address"
                  id="address"
                  type="address"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="form.phone"
                  label="phone"
                  id="phone"
                  type="phone"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="form.city"
                  label="city"
                  id="city"
                  type="city"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="form.country"
                  label="country"
                  id="country"
                  type="country"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="form.zipcode"
                  label="zipcode"
                  id="zipcode"
                  type="zipcode"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="form.email"
                  label="Email"
                  id="email"
                  type="email"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="form.password"
                  label="Password"
                  id="password"
                  type="password"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex class="text-xs-center">
                <v-btn color="primary" type="submit">Inscription</v-btn>
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