<template>
  <v-container fluid>
    <v-col md="6" offset-md="3">
      <v-card class="mx-auto">
        <div class="d-flex flex-column ma-6">
          <h1 class="text-md-center" >{{ user.id }}</h1>
          <form method="post" @submit.prevent="update">
            <v-layout column>
              <v-flex>
                <v-text-field
                  :value="user.pseudo"
                  label="pseudo"
                  id="pseudo"
                  type="pseudo"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  label="bio"
                  id="bio"
                  type="bio"
                  :value="user.bio"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  :value="user.address"
                  label="address"
                  id="address"
                  type="address"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  :value="user.phone"
                  label="phone"
                  id="phone"
                  type="phone"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  :value="user.phone"
                  label="city"
                  id="city"
                  type="city"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  :value="user.country"
                  label="country"
                  id="country"
                  type="country"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  :value="user.zipcode"
                  label="zipcode"
                  id="zipcode"
                  type="zipcode"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  :value="user.email"
                  label="Email"
                  id="email"
                  type="email"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  :value="user.password"
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
          pseudo:this.pseudo,
          bio:this.bio,
          address:this.address,
          country:this.country,
          city:this.city,
          phone:this.phone,
          zipcode: this.zipcode,
          email: this.email,
          password: this.password,
        _method:"patch"
        }
    }
  },
  methods: {
    async update() {
      try {
        await this.$axios.patch("http://127.0.0.1:8000/api/users/edit/66", this.form)
        
      //   this.$auth.login({ data: this.form })
      //   this.$router.push({ name: 'Immeuble' })

      } catch (e) {
        console.log(e)
      }
    }
  }
};
</script>