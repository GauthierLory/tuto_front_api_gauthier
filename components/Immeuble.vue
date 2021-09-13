<template>
  <v-container fluid>
    <v-col md="6" offset-md="3">
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
              <tr
                v-for="immeuble in immeubles"
                :key="immeuble.id"
              >
                <td>{{ immeuble.name }}</td>
                <td>{{ immeuble.address }}</td>
                <td>{{ immeuble.code_im }}</td>
                <td>{{ immeuble.code_soc }}</td>
                <td>{{ immeuble.id }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <button @click="$fetch">Refresh</button>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
  export default {
    data() {
      return { 
        immeubles: []
      }
    },
    async fetch() {
      this.immeubles = await fetch(
        'http://127.0.0.1:8000/api/immeubles'
      ).then(res => res.json())
    }
  }
</script>
