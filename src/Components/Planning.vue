<template>
  <div>
    <el-page-header @back="goBack" content="Planning"></el-page-header>
    <el-menu
      background-color="#222"
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="1">Today</el-menu-item>
      <el-menu-item index="2">Tomorrow</el-menu-item>
    </el-menu>

    <group @add-new-item="addNewItem" />
    <div class="flex">
      <div class="spacer" />
      <el-button type="danger">Lisa grupp</el-button>
    </div>
    <group />

    <el-dialog title="Shipping address" :visible.sync="dialogFormVisible" :fullscreen="true">
      <el-select v-model="value" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Group from "./Group";

const WelcomeApp = {
  name: "WelcomeApp",
  props: [],
  components: {
    Group
  },
  methods: {
    addNewItem() {
      this.dialogFormVisible = true;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goBack() {
      this.$router.push({
        name: "Welcome"
      });
    }
  },
  computed: {},
  data() {
    return {
      activeIndex: "1",
      dialogFormVisible: false,
      options: [
        {
          value: "Option1",
          label: "Option1"
        },
        {
          value: "Option2",
          label: "Option2"
        },
        {
          value: "Option3",
          label: "Option3"
        },
        {
          value: "Option4",
          label: "Option4"
        },
        {
          value: "Option5",
          label: "Option5"
        }
      ],
      value: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      config: {
        today: {},
        tomorrow: {}
      }
    };
  }
};

export default WelcomeApp;
</script>

<style lang="less" scoped>
.groups {
  margin: 24px 0;
  border: 2px solid #ef5458;
  border-radius: 6px;
  position: relative;
  min-height: 100px;
  padding: 16px;
  label {
    position: absolute;
    top: -10px;
    left: 15px;
    background: #222;
    padding: 0 4px;
    font-weight: bold;
    color: #ef5458;
    text-transform: uppercase;
    font-size: 12px;
  }
}
</style>
