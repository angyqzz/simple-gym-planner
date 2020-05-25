<template>
  <div>
    <div class="intro">
      <h1 class="accent-color">Simple Gym Planning</h1>
      <h2>
        For you
        <span class="accent-color-2">lazy wannabe fit ass</span>
      </h2>
      <h3>#фитоняша</h3>
    </div>
    <div class="action">
      <el-button type="warning" @click="start">Start</el-button>
    </div>
  </div>
</template>

<script>
const WelcomeApp = {
  name: "WelcomeApp",
  props: [],
  components: {},
  methods: {
    start() {
      this.$router.push({
        name: "Planning"
      });
    }
  },
  computed: {},
  data() {
    return {};
  }
};

export default WelcomeApp;
</script>

<style lang="less" scoped>
.intro {
  margin: 24px 0;
}
.action {
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  font-size: 15vmin;
  text-transform: uppercase;
  line-height: 1em;
}
h2 {
  font-size: 14vmin;
  text-transform: uppercase;
  line-height: 0.9em;
}
</style>
