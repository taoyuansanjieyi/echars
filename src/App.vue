<template>
  <div id="app">
    <div class="common-report">
      <div class="common-report-header">
        <el-tabs
          v-model="activeName"
          type="card"
          @tab-click="handleClick">
          <el-tab-pane
            label="概览"
            name="CommonReportGeneral">
          </el-tab-pane>
          <el-tab-pane
            label="用户"
            name="CommonReportUser">
          </el-tab-pane>
          <el-tab-pane
            label="流量"
            name="CommonReportFlow">
          </el-tab-pane>
        </el-tabs>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommonReport',
    data () {
      return {
        activeName: 'CommonReportGeneral'
      }
    },
    methods: {
      handleClick (tab) {
        this.$router.push({ name: tab.name })
      }
    }
  }
</script>

<style lang="scss">
html,body{
  height: 100%;
}

.common-report {
  padding: 10px;
  box-sizing: border-box;
  background-color: #f0f2f5;

  &-header {
    background-color:#fff;
  }
}
</style>
