<template>
  
<v-container fluid>
  <v-col lg="5" md="6" offset-lg="3" offset-md="3">
    <v-card outlined class="mx-auto">
      <v-card>
        <v-card-title>Inscription</v-card-title>
        <v-card-text>
          <form method="post" @submit.prevent="register">
              <p class="text-md-center" v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                  <li style="list-style: none" v-for="error in errors">{{ error }}</li>
                </ul>
              </p>
            <v-row>
              <v-flex>
                <v-text-field class="pa-2"
                    v-model="user.pseudo"
                    label="pseudo"
                    id="pseudo"
                    type="pseudo"
                    
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field class="pa-2"
                    label="bio"
                    id="bio"
                    type="bio"
                    v-model="user.bio"
                    required
                ></v-text-field>
              </v-flex>
            </v-row>
            <v-row>
              <v-flex>
                <v-text-field class="pa-2"
                    v-model="user.address"
                    label="address"
                    id="address"
                    type="address"
                    required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field class="pa-2"
                    v-model="user.phone"
                    label="phone"
                    id="phone"
                    type="phone"
                    required
                ></v-text-field>
              </v-flex>
            </v-row>
            <v-row>
              <v-flex>
                <v-text-field class="pa-2"
                    v-model="user.city"
                    label="city"
                    id="city"
                    type="city"
                    required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field class="pa-2"
                    v-model="user.country"
                    label="country"
                    id="country"
                    type="country"
                    required
                ></v-text-field>
              </v-flex>
            </v-row>
            <v-row>
              <v-flex>
                <v-text-field class="pa-2"
                    v-model="user.zipcode"
                    label="zipcode"
                    id="zipcode"
                    type="zipcode"
                    required
                ></v-text-field>
              </v-flex>
            <v-flex>
              <v-text-field class="pa-2"
                  v-model="user.email"
                  label="Email"
                  id="email"
                  type="email"
                  required
                ></v-text-field>
              </v-flex>
            </v-row>
            <v-flex>
              <v-text-field
                  v-model="user.password"
                  label="password"
                  id="password"
                  type="password"
                  required
              ></v-text-field>
            </v-flex>
            <v-btn color="primary" type="submit">Inscription</v-btn>
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
        user : {
          pseudo:'',
          bio:'',
          address:'',
          country:'',
          city:'',
          phone:'',
          zipcode:'',
          email: '',
          password: ''
        },
      errors: ''
    }
  },

  auth: false,
  methods: {
    async register() {
      this.errors = [];
      try {
        await this.$axios.post('http://127.0.0.1:8000/api/auth/register', this.user)
      } catch (error) {
            let errorResponse = error.response.data.errors
            this.errors.push(errorResponse)
        }
    }
  }
};
</script>