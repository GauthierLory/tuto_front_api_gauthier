<template>

    <p>index page {{ isLogged.pseudo }}</p>

</template>

<script>
export default {
  data() {
    return {
      isLogged: []
    }
  },
  methods: {
    async userLogin() {
      isLogged = this.$auth.$state
      console.log(isLogged)
    }
  }
}
</script>
