<template>
  <div class="vault-details">Display all of the keeps for a vault here....</div>
</template>


<script>
export default {
  name: "vault-details",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
  mounted() {
    console.log("route: ", this.$route.params);
    return this.$store.dispatch("getKeepsByVaultId", this.$route.params.id);
  }
};
</script>


<style scoped>
</style>