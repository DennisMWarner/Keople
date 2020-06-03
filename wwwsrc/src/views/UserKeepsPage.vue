<template>
  <div class="user-keeps-page bg-primary">
    <create-keep />
    <userKeeps />
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
