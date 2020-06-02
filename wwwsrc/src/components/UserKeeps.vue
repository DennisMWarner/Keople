<template class="container-fluid">
  <div class="user-keeps row">
    <div class>
      <keep v-for="keep in userKeeps" :keepData="keep" :key="keep.id"></keep>
    </div>
  </div>
</template>


<script>
import keep from "./Keep.vue";
export default {
  name: "user-keeps",
  data() {
    return {};
  },
  computed: {
    userKeeps() {
      return this.$store.state.userKeeps;
    }
  },
  methods: {},
  created() {
    return this.$store.dispatch("getUserKeeps");
  },
  components: { keep }
};
</script>


<style scoped>
</style>