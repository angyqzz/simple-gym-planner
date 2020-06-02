<template>
  <div class="groups">
    <label>{{title}}</label>
    <div class="group-body">
      <div class="exercise-item" v-for="ex in exercises" :key="ex.id">
        <input type="checkbox" />
        <div>Rattas 5 minutit</div>
      </div>
      <!-- <div class="exercise-item">
        <input type="checkbox" />
        <div>Rattas 5 minutit</div>
      </div>
      <div class="exercise-item">
        <input type="checkbox" />
        <div>Jalapress 4 x 15, Goal: 25kg</div>
      </div>
      <div class="exercise-item">
        <input type="checkbox" />
        <div>Jalapdfgfdfgfdgdfgress 4 x 15, Goal: 25kg</div>
      </div>-->
    </div>
    <div class="group-footer">
      <div>Total 0 min</div>
      <div class="spacer" />
      <el-button type="warning" circle icon="el-icon-plus" @click="$emit('add-new-item')"></el-button>
    </div>
  </div>
</template>

<script>
const Group = {
  name: "Group",
  props: ["title", "exercises"],
  components: {},
  methods: {},
  computed: {},
  data() {
    return {};
  }
};

export default Group;
</script>

<style lang="less" scoped>
.groups {
  margin: 24px 0;
  border: 2px solid #ef5458;
  border-radius: 6px;
  position: relative;
  min-height: 100px;
  padding: 16px;
  display: flex;
  flex-direction: column;
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
  .group-footer {
    margin-top: auto;
    padding-top: 16px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
  }
  .group-body {
    .exercise-item {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 6px 0;
      & > div {
        background: #fff;
        color: #ef5458;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 14px;
      }
    }
  }
}
</style>
