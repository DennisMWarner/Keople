<template>
  <div class="user-keeps-page mt-2">
    <create-keep class="col-11" />
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
