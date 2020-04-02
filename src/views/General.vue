<template>
  <div>
    <div class="title-line mg-b10">
      数据更新时间：<span>{{ form.updateTime }}</span>
    </div>

    <el-row
      :gutter="gutter"
      class="mg-b10">
      <el-col
        v-for="(item, index) in lists"
        :key="index"
        :span="6">
        <title-box
          :item="item"
          :data="form"></title-box>
      </el-col>
    </el-row>

    <el-row
      :gutter="gutter"
      class="mg-b10">
      <el-col :span="6">
        <Practices></Practices>
        <Histograms class="mg-t10"></Histograms>
      </el-col>
      <el-col
        :span="12"
        class="map-container">
        <Map></Map>
      </el-col>
      <el-col :span="6">
        <PieCharts></PieCharts>
        <Transverse class="mg-t10"></Transverse>
      </el-col>
    </el-row>

    <el-row :gutter="gutter">
      <el-col :span="12">
        <Columnars></Columnars>
      </el-col>
      <el-col :span="12">
        <Lines></Lines>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import TitleBox from './components/TitleBox'

  import Practices from './components/Ipractices' // 环状饼图
  import PieCharts from './components/PieCharts' // 饼图
  import Histograms from './components/Histograms' // 横向柱状图
  import Columnars from './components/Columnars' // 底部左侧柱状图
  import Lines from './components/Lines' // 底部右侧折线图
  import Transverse from './components/Transverse' // 横向柱状图二
  import Map from './components/Map'

  export default {
    name: 'General',
    components: {
      TitleBox,
      Practices,
      PieCharts,
      Histograms,
      Columnars,
      Lines,
      Transverse,
      Map
    },
    data () {
      return {
        gutter: 10,
        form: {
          updateTime: '2020.01.01  00:00:00',
          allUsers: '100000',
          dayCount: '75920',
          allFlow: '8000',
          allFunNum: '80000',
          peopleOnLineTime: '1小时54分钟'
        },
        lists: [
          {
            title: '车机系统总用户数',
            prop: 'allUsers',
            content: [{
              label: '日活',
              prop: 'dayCount'
            }]
          },
          {
            title: '总流量消耗',
            prop: 'allFlow'
          },
          {
            title: '总粉丝数',
            prop: 'allFunNum'
          },
          {
            title: '2020年日人均在线时长',
            prop: 'peopleOnLineTime'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .title-line{
    text-align: left;
    line-height: 30px;
    background-color: #fff;
    padding: 0 15px;
    span {
      font-weight: bold;
    }
  }
  .map-container {
    height: 490px;
  }
  .mg-b10 {
    margin-bottom: 10px;
  }
  .mg-t10 {
    margin-top: 10px;
  }
</style>
