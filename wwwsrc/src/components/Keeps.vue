<template>
  <div class="keeps row mt-2">
    <div class="col-md-12">
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
  props: [],
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