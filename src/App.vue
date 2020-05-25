<template>
  <div id="app">
    <el-container>
      <el-main>
        <router-view name="content" class="content" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
const App = {
  name: "AppComponent",
  props: [],
  components: {},
  methods: {},
  computed: {},
  data() {
    return {};
  }
};

export default App;
</script>

<style lang="less">
@import "style/style.less";
</style>
