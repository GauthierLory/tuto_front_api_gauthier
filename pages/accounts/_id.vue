<template>
<v-container fluid>
  <v-col lg="5" md="6" offset-lg="3" offset-md="3">
    <div v-for="account in accounts.data" :key=account.id>
      <v-card elevation="3" outlined shaped tile class="pa-6 ma-2">
        <v-card-title>
          Information propriétaire
        </v-card-title>
        <v-card-text>
          <li>ID Utilisateur :
            {{ account.id }}
          </li>
            <li> Pseudo :
            {{ account.pseudo }}
          </li>
            <li> Email : 
            {{ account.email }}
          </li>
            <li>Adresse : 
            {{ account.address }}
          </li>
            <li>Ville : 
            {{ account.city }}
          </li>
            <li> Télépone : 
            {{ account.phone }}
          </li>
        </v-card-text>
      </v-card>
      <v-card elevation="3" outlined shaped tile class="pa-6 ma-2">
        <v-card-title>
          Information Immeuble
        </v-card-title>
        <v-card-text>
            <li>Nom de l'immeuble : 
            {{ account.name }}
          </li>
            <li> Code immeuble : 
            {{ account.code_im }}
          </li>
            <li> Code société : 
            {{ account.code_soc }}
          </li>
            <li>Adresse de l'immeuble : 
            {{ account.address }}
          </li>
            <li>Contenu : 
            {{ account.content }}
          </li>
        </v-card-text>
      </v-card>
    </div>
  </v-col>
</v-container>


</template>

<script>

export default {
    data() {
      return { 
        accounts: [],
        immeubles: []
      }
    },
    created() {
      this.$axios.get("http://127.0.0.1:8000/api/accounts/" + this.$route.params.id)
      .then(res => (this.accounts = res.data))
      
    },
  
  }
</script>