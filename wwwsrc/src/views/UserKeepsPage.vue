<template>
  <div class="user-keeps-page bg-primary container-fluid">
    <div class="row">
      <div class="col-12">
        <create-keep />
        <userKeeps class="border border-warning rounded p-2 no-gutters" />
      </div>
    </div>
  </div>
</template>

<script>
import createKeep from "../components/CreateKeep.vue";
import userKeeps from "../components/UserKeeps.vue";

export default {
  name: "user-keeps-page",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  components: { userKeeps, createKeep },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  created() {
    return this.$store.dispatch("getUserKeeps");
  }
};
</script>
