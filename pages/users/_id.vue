<template>
  <v-container fluid>
    <v-col md="6" offset-md="3">
      <v-card v-if='user' class="mx-auto">
        <div class="d-flex flex-column ma-6">
          <h1 class="text-md-center" >Edit user {{ user.pseudo }}</h1>
          <form method="patch" @submit.prevent="update"> 
              <v-layout column>
                <v-flex>
                <v-text-field
                    v-model="user.pseudo"
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
                    v-model="user.bio"
                    required
                ></v-text-field>
                </v-flex>
                <v-flex>
                <v-text-field
                    v-model="user.address"
                    label="address"
                    id="address"
                    type="address"
                    required
                ></v-text-field>
                </v-flex>
                <v-flex>
                <v-text-field
                    v-model="user.phone"
                    label="phone"
                    id="phone"
                    type="phone"
                    required
                ></v-text-field>
                </v-flex>
                <v-flex>
                <v-text-field
                    v-model="user.city"
                    label="city"
                    id="city"
                    type="city"
                    required
                ></v-text-field>
                </v-flex>
                <v-flex>
                <v-text-field
                    v-model="user.country"
                    label="country"
                    id="country"
                    type="country"
                    required
                ></v-text-field>
                </v-flex>
                <v-flex>
                <v-text-field
                    v-model="user.zipcode"
                    label="zipcode"
                    id="zipcode"
                    type="zipcode"
                    required
                ></v-text-field>
                </v-flex>
                <v-flex>
                <v-text-field
                    v-model="user.email"
                    label="Email"
                    id="email"
                    type="email"
                    required
                ></v-text-field>
                </v-flex>
            </v-layout>
              <v-flex class="text-xs-center">
                <v-btn color="primary" type="submit">Modification</v-btn>
              </v-flex>
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
          user: {

          }
      }
    },

created() {
      this.$axios.get("http://127.0.0.1:8000/api/me").then(res => {
      this.user = res.data
    })
},

  methods: {
    async update() {
      try {
        await this.$axios.patch("http://127.0.0.1:8000/api/users/470", this.user)
      } catch (e) {
        console.log(e)
      }
    }
  }
};
</script>