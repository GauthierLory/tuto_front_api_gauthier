<template>
  <v-list>
        <div v-if="authenticated">
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <NuxtLink to="/">Home</NuxtLink>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <NuxtLink to="/user">{{ user.pseudo }} </NuxtLink>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-office-building</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <NuxtLink to="/immeuble">Immeubles</NuxtLink>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
            <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <NuxtLink to="/logout">Deconnexion</NuxtLink>
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
  methods: {
    async login() {
      try {
        await this.$auth.logout({ data: this.form})
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>