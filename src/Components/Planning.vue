<template>
  <div>
    <el-page-header @back="goBack" content="Planning"></el-page-header>
    <!-- <el-menu
      background-color="#222"
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="today">Today</el-menu-item>
      <el-menu-item index="tomorrow">Tomorrow</el-menu-item>
    </el-menu>
    {{activeIndex}}-->
    <group
      @add-new-item="addNewItem"
      :title="config.warmup.title"
      :exercises="config.warmup.exercises"
    />

    <group v-for="(item, index) in config.train" :key="index" :title="item.title" />
    <div class="flex">
      <div class="spacer" />
      <el-button type="danger" @click="addNewGroup">Add group</el-button>
    </div>
    <group :title="config.stretching.title" :exercises="config.stretching.exercises" />

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
    addNewGroup() {
      this.config.train.push({
        title: "Legs"
      });
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
      activeIndex: "today",
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
      config: {
        warmup: {
          title: "Warm up",
          exercises: [
            {
              id: 1,
              label: "Rattas",
              type: "timing",
              duration: "00:05:00"
            }
          ]
        },
        train: [],
        stretching: {
          title: "Stretching"
        }
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
