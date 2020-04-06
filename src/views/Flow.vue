<template>
  <div>
    <div class="flow-top">
      <div class="title-line mg-b10">
        数据更新时间：<span>{{ form.updateTime }}</span>
      </div>
      <div class="flow-changetime">
        <Month></Month>
      </div>
    </div>

    <el-row
      :gutter="gutter"
      class="mg-b10">
      <el-col
        v-for="(item, index) in list"
        :key="index"
        :span="6">
        <flow-title
          :item="item"
          :data="form"></flow-title>
      </el-col>
    </el-row>

    <el-row
      :gutter="gutter"
      class="mg-b10">
      <el-col :span="12">
        <Doublecolumn></Doublecolumn>
      </el-col>
      <el-col :span="12">
        <Flowcolumn></Flowcolumn>
      </el-col>
    </el-row>

    <el-row
      :gutter="gutter"
      class="mg-b10">
      <el-col :span="6">
        <Pcharts></Pcharts>
      </el-col>
      <el-col :span="6">
        <Flowcharts></Flowcharts>
      </el-col>
      <el-col :span="6">
        <Flowpie></Flowpie>
      </el-col>
      <el-col :span="6">
        <Histogramline></Histogramline>
      </el-col>
    </el-row>

    <el-row
      :gutter="gutter"
      class="mg-b10">
      <el-col :span="12">
        <Flowlineleft></Flowlineleft>
      </el-col>
      <el-col :span="12">
        <Flowcolumns></Flowcolumns>
      </el-col>
    </el-row>

    <el-row
      :gutter="gutter"
      class="mg-b10">
      <el-col :span="24">
        <time-axis></time-axis>
      </el-col>
    </el-row>

    <el-row
      :gutter="gutter"
      class="mg-b10">
      <el-col :span="24">
        <ScatterPoint></ScatterPoint>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Month from './components/Month'
  import FlowTitle from './components/FlowTitle'
  import Doublecolumn from './components/Doublecolumn' // 双柱形折线图
  import Flowcolumn from './components/Flowcolumn' // 折线、柱状图
  import Pcharts from './components/Pcharts' // 饼图没有引导线
  import Flowcharts from './components/Flowcharts' // 饼图第二个
  import Flowpie from './components/Flowpie' // 饼图第三个
  import Histogramline from './components/Histogramline' // 饼图最后一个
  import Flowlineleft from './components/Flowlineleft' // 柱状图
  import Flowcolumns from './components/Flowcolumns' // 折线、柱状图
  import TimeAxis from './components/TimeAxis' // 时间轴
  import ScatterPoint from './components/ScatterPoint' // 散点图

  export default {
    name: 'Flow',
    components: {
      Month,
      FlowTitle,
      Doublecolumn,
      Flowcolumn,
      Pcharts,
      Flowcharts,
      Flowpie,
      Histogramline,
      Flowlineleft,
      Flowcolumns,
      TimeAxis,
      ScatterPoint
    },
    data () {
      return {
        gutter: 10,
        form: {
          updateTime: '2020.01.01  00:00:00',
          allUsers: '10000000',
          moblieCount: '75920',
          allFlow: '8000',
          allFunNum: '2000000',
          peopleOnLineTime: '3000',
          proportion: '16.7%',
          mobileactive: '75,920',
          consumption: '15920',
          mobilecards: '15,920',
          punum: '15,920',
          unicom: '24,180',
          unicomactive: '24,180',
          unicocards: '4800',
          consumptions: '4180',
          punums: '120',
          strnums: '5,290'
        },
        list: [
          {
            title: '发卡数',
            prop: 'allUsers',
            content: [{
              label: '移动发卡数',
              prop: 'moblieCount',
              labels: '联通发卡数',
              props: 'unicom'
            }]
          },
          {
            title: '月活跃卡数',
            prop: 'allFlow',
            content: [{
              label: '移动活跃卡数',
              prop: 'mobileactive',
              labels: '联通活跃卡数',
              props: 'unicomactive'
            }]
          },
          {
            title: '2020年1月流量消耗(GB)',
            prop: 'allFunNum',
            content: [{
              label: '移动流量消耗',
              prop: 'consumption',
              publick: '公网',
              punum: 'punum',
              strart: '前装',
              strnum: '5,290',
              labels: '联通流量消耗',
              props: 'consumptions',
              publicks: '私网',
              punums: 'punums',
              strarts: '后装',
              strnums: 'strnums'
            }]
          },
          {
            title: '2020年1月实名流量卡数',
            prop: 'peopleOnLineTime',
            content: [{
              label: '移动流量卡数',
              prop: 'mobilecards',
              labels: '联通流量卡数',
              props: 'unicocards'
            }]
          }
        ]
      }
    }
  }
</script>

<style scoped lang='scss'>
  .title-line{
    text-align: left;
    line-height: 30px;
    background-color: #fff;
    padding: 0 15px;
    span {
      font-weight: bold;
    }
  }
  .mg-b10 {
    margin-bottom: 10px;
  }
  .flow-top{
    background-color: #fff;
    padding: 0 15px;
    margin:0 0 10px 0;
    display: flex;
    .flow-changetime{
      flex:1;
    }
  }
  .icon{
    position: absolute;
    right: 10px;
    top: 5px;
  }
  .flow{
    text-align: left;
    box-sizing: border-box;
  }
  .flow-center{
    text-align: left;
    line-height: 60px;
    background-color: #fff;
    padding: 0 15px;
    display: flex;
    .flow-mounth{
      flex:1;
    }
  }
  .flow-content{
    height: 120px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top:15px;
    margin-bottom:15px;
    >div{
      width: 24%;
      height: 100%;
      background-color: #fff;
      position: relative;
    }
    .flow-tit{
      font-weight: bold;
      font-size: 18px;
      line-height: 40px;
    }
    .flow-num{
      font-weight: bold;
      color:rgb(27, 173, 231);
      font-size: 30px;
    }
    .flow-num1{
      font-size: 12px;
    }
  }
  .icon{
    position: absolute;
    right: 10px;
    top: 5px;
  }
  .flow-conbottom{
    font-size: 12px;
    text-align-last: left;
    margin-left: 75px;
    line-height: 20px;
  }
  .active{
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    >div:nth-child(1){
      margin-left: 8px;
    }
    >div:nth-child(3){
      margin-right: 8px;
    }
  }
  .green{
    color:rgb(23, 194, 23);
    font-weight: bold;
  }
  .flow-botop,.flow-bocenter{
    display: flex;
    justify-content: space-between;
  }
  .flow-botopL,.flow-botopR,.flow-bbleft,.flow-bbright{
    width: 49.3%;
  }
  .flow-bocenL,.flow-bocen,.flow-bocenT,.flow-bocenR{
    width: 24%;
  }
  .flow-bbottom{
    display: flex;
    justify-content: space-between;
  }
  .flow-point{
    height: 240px;
    // background-color: pink;
    margin-top:15px;
  }
</style>
