<template>
  <div class="keeps">
    <div class>
      <keep v-for="keep in keeps" :keepData="keep" :key="keep.id"></keep>
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
      return this.$store.state.publicKeeps;
    }
  },
  methods: {},
  components: { keep }
};
</script>


<style scoped>
</style>