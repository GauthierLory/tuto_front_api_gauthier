<template>
  <v-list>
        <div v-if="authenticated">
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-title>
            <NuxtLink to="/">Home Page</NuxtLink>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-office-building</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <NuxtLink :to="`/users/immeubles/${user.id}`" >Mes Immeubles</NuxtLink>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
            <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-account-minus</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <a class="navbar-item" @click="logout">Logout</a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <div v-else>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-login</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <NuxtLink to="/login">Connexion</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <NuxtLink to="/register">Inscription</NuxtLink>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        
      </v-list>
</template>

<script>
export default {
  computed: {
    authenticated() {
      return this.$store.state.auth.loggedIn;
    },
    user() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  }
}
</script>