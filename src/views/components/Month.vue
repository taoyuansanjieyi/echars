<template>
  <div class="month">
    <div class="times">
      <div class="block">
        <span class="demonstration">开始时间</span>
        <el-date-picker
          v-model="value1"
          type="month"
          placeholder="选择月">
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">结束时间</span>
        <el-date-picker
          v-model="value2"
          type="month"
          placeholder="选择月">
        </el-date-picker>
      </div>
    </div>
    <div class="btnbox">
      <el-row>
        <el-button type="primary" plain>重置</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/index.css'

  export default {
    name: 'Month',
    data () {
      return {
        value1: '',
        value2: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .month{
    height: 50px;
    margin-left: 30px;
    display: flex;
    .times{
      flex:1;
      display: flex;
    }
    span{
      margin:0 15px;
    }
    .btnbox{
      width: 80px;
    }
  }
</style>
