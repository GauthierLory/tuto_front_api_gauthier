<template>
  <v-container fluid>
    <v-col lg="6" offset-lg="3">
      <v-card class="mx-auto">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Nom
                </th>
                <th class="text-left">
                  Adresse
                </th>
                <th class="text-left">
                  Code immeuble
                </th>
                <th class="text-left">
                  Code société
                </th>
                <th class="text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="immeuble in immeubles" :key="immeuble.id">
                <td>{{ immeuble.name }}</td>
                <td>{{ immeuble.address }}</td>
                <td>{{ immeuble.code_im }}</td>
                <td>{{ immeuble.code_soc }}</td>
                <td><NuxtLink :to="`/immeubles/details/${immeuble.id}`">{{ immeuble.id }}</NuxtLink></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>


import {mapGetters} from 'vuex'

export default {
  mounted() {
    this.$store.dispatch('immeubles/fetchImmeubles')
  },
  computed: {
    ...mapGetters('immeubles', ['immeubles'])
  }
}
</script>
