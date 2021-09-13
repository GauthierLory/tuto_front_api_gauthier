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
                  v-model="pseudo"
                  label="pseudo"
                  id="pseudo"
                  type="pseudo"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="bio"
                  label="bio"
                  id="bio"
                  type="bio"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="address"
                  label="address"
                  id="address"
                  type="address"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="phone"
                  label="phone"
                  id="phone"
                  type="phone"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="city"
                  label="city"
                  id="city"
                  type="city"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="country"
                  label="country"
                  id="country"
                  type="country"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="zipcode"
                  label="zipcode"
                  id="zipcode"
                  type="zipcode"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="email"
                  label="Email"
                  id="email"
                  type="email"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="password"
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

  methods: {
    async register() {
      try {
        await this.$axios.post('http://127.0.0.1:8000/api/register', {
          pseudo: this.pseudo,
          bio: this.bio,
          address: this.address,
          phone: this.phone,
          city: this.city,
          country: this.country,
          zipcode: this.zipcode,
          email: this.email,
          password: this.password
        })

      } catch (e) {
        console.log(e)
      }
    }
  }
};
</script>
