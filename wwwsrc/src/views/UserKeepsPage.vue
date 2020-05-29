<template>
  <div class="user-keeps-page mt-2">
    <userKeeps />
  </div>
</template>

<script>
import userKeeps from "../components/UserKeeps.vue";

export default {
  name: "user-keeps-page",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  components: { userKeeps },
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
