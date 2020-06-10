<template>
  <div class="keeps row">
    <div class="col-12 bg-primary mx-auto">
      <div class="card-columns">
        <keep v-for="keep in keeps" :keepData="keep" :key="keep.id"></keep>
      </div>
    </div>
  </div>
</template>


<script>
import keep from "./Keep.vue";
export default {
  name: "Keeps",
  data() {
    return {};
  },
  computed: {
    keeps() {
      return this.$store.state.allKeeps;
    }
  },
  methods: {},
  components: { keep }
};
</script>


<style scoped>
</style>