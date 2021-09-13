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
      <v-spacer />
      <v-layout row style="max-width: 50px">
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
export default {
  head: {
    title: 'Register Page'
  },
  data () {
    return {
      drawer: true
    }
  }
}
</script>