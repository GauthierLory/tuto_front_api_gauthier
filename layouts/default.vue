<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed clipped app>
      <Navbar/>
    </v-navigation-drawer>
    <v-app-bar color="primary" dense fixed clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Tuto Front Api</span>
      </v-toolbar-title>
        <v-spacer></v-spacer>

        <div v-if="authenticated">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="secondary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                <strong>{{ user.pseudo }} </strong>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>
                  <NuxtLink :to="`/users/${user.id}`">Mon Profile</NuxtLink>
                </v-list-item-title>
              </v-list-item>
              <v-list-item
                v-for="(account, id) in accounts"
                :key="id"
              >
                <v-list-item-title>
                  <NuxtLink :to="`/accounts/${account.immeuble_id}`">#{{ account.content }}</NuxtLink>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <v-layout row style="max-width: 50px" class="ml-3">
          <v-btn icon color="test" large @click="$vuetify.theme.dark = !$vuetify.theme.dark">
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-btn>
        </v-layout>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head: {
    title: 'Register Page'
  },
  data () {
    return {
      drawer: true, 
    }
  },
   mounted() {
    this.$store.dispatch('accounts/fetchAccounts');
  },
  computed: {
    authenticated() {
      return this.$store.state.auth.loggedIn;
    },
    user() {
      return this.$store.state.auth.user;
    },
    ...mapGetters('accounts', ['accounts'])
  },
}
</script>