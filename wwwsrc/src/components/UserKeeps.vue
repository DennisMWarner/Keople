<template>
  <div class="keeps row mt-2">
    <div class="col-md-12 bg-primary">
      <div class="card-columns">
        <keep v-for="keep in userKeeps" :keepData="keep" :key="keep.id"></keep>
      </div>
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