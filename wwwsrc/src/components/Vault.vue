<template>
  <div class="vault col-6" @click="displayVaultDetailsPage()">
    <div class="row border rounded bg-success shadow p-3 m-auto">
      <div class="col-12">{{vaultData.name}}</div>

      <div class="col-12">{{vaultData.description}}</div>

      <div class="col-12">{{vaultData.userId}}</div>
      <div class="col-12">
        <button
          class="btn btn-block btn-danger p-2 border-white rounded shadow"
          @click="deleteVault()"
        >DELETE</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "vault",
  data() {
    return {};
  },
  props: ["vaultData"],
  computed: {},
  methods: {
    deleteVault() {
      this.$store.dispatch("deleteVault", this.vaultData.id);
    },
    displayVaultDetailsPage() {
      this.$router.push("/vault/" + this.vaultData.id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>