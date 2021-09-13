<template>
  <v-list>
        <v-list-item v-for="item in items" :key="item.text" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <NuxtLink :to="`${item.link}`">{{ item.text }}</NuxtLink>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
</template>


<style scoped>
</style>
{{ item.icon }}
<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { icon: 'mdi-home',link: '/' ,text: 'Home' },
        { icon: 'mdi-account',link: '/users' ,text: 'Compte' },
        { icon: 'mdi-office-building', link: '/immeuble', text: 'Immeuble' },
        { icon: 'mdi-login', link:'/login', text: 'Connexion' },
        { icon: 'mdi-account-plus', link:'/register', text: 'Inscription' },
      ]
    }
  }
}
</script>