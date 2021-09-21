<template>
  <v-container fluid>
  <v-col lg="5" md="6" offset-lg="3" offset-md="3">
    <v-card outlined class="mx-auto">
      <v-card>
        <v-card-title>Modifier {{ user.pseudo }}</v-card-title>
        <v-card-text>
          <form method="post" @submit.prevent="update">
            <v-row>
              <v-flex>
                <v-text-field class="pa-2"
                    v-model="user.pseudo"
                    label="pseudo"
                    id="pseudo"
                    type="pseudo"
                    required
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
            <v-btn color="primary" type="submit">Update</v-btn>
          </form>
        </v-card-text>
      </v-card>
    </v-card>
  </v-col>
</v-container>
</template>

<script>

import {mapGetters} from 'vuex'
export default {
  
  mounted() {
    this.$store.dispatch('users/fetchUser')
  },

  methods: {
    async update() {
      try {
        await this.$axios.patch("http://127.0.0.1:8000/api/users/470", this.user)
      } catch (e) {
        console.log(e)
      }
    }
  },

  computed: {
    ...mapGetters('users', ['user'])
  }
};
</script>