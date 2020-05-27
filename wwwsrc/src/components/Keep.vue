<template>
  <div class="keep">
    <div class="card col-4">
      <img :src="keepData.img" class="card-img-top p-1" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{keepData.name}}</h5>
        <p class="card-text">{{keepData.description}}</p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "keep",
  data() {
    return {};
  },
  props: ["keepData"],
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>