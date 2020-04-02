<template>
  <div class="General">
    <div class="Gcenter">
      数据更新时间：<b>2020.01.01  00:00:00</b>
    </div>
    <div class="Gbottom">
      <div class="Gls">
        <div
          v-for="(item,index) in lists"
          :key="index">
          <div class="Gtit">
            {{ item.title }}
          </div>
          <div class="num">
            {{ item.num }}
          </div>
          <div class="num1">
            <span>{{ item.content.text ? `${item.content.text}:` : '' }}</span><span class="green">{{ item.content.num1 }}</span>
          </div>
        </div>
      </div>
      <div class="Gcontent">
        <div class="Gleft">
          <Practices></Practices>
          <Histograms></Histograms>
        </div>
        <div class="Gcente">
          <Map></Map>
        </div>
        <div class="Gright">
          <PieCharts></PieCharts>
          <Transverse></Transverse>
        </div>
      </div>
      <div class="Gnext">
        <Columnars></Columnars>
        <Lines></Lines>
      </div>
    </div>
  </div>
</template>

<script>
  import Practices from './components/practices' // 环状饼图
  import PieCharts from './components/PieCharts' // 饼图
  import Histograms from './components/Histograms' // 横向柱状图
  import Columnars from './components/Columnars' // 底部左侧柱状图
  import Lines from './components/Lines' // 底部右侧折线图
  import Transverse from './components/Transverse' // 横向柱状图二
  import Map from './components/Map'

  export default {
    name: 'General',
    components: {
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
        lists: [
          {
            title: '车机系统总用户数',
            num: '100000',
            content: {
              text: '日活',
              num1: '75920'
            }
          },
          {
            title: '总流量消耗',
            num: '8000',
            content: {}
          },
          {
            title: '总粉丝数',
            num: '80000',
            content: {}
          },
          {
            title: '2020年日人均在线时长',
            num: '1小时54分钟',
            content: {}
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .General{
    box-sizing: border-box;
  }
  .Gtop{
    text-align: left;
    height: 35px;
    line-height: 32px;
  }
  .Gtop>span{
    display: inline-block;
    width: 90px;
    height: 32px;
    text-align: center;
    border:1px solid #ccc;
    border-radius:5px;
    background-color: #fff;
  }
  .Gcenter{
    text-align: left;
    line-height: 50px;
    background-color: #fff;
    padding: 0 15px;
  }
  .Gls{
    height: 120px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top:15px;
    margin-bottom:15px;
  }
  .Gls>div{
    width: 24%;
    height: 100%;
    background-color: #fff;
  }
  .Gtit{
    font-weight: bold;
    font-size: 18px;
    line-height: 40px;
  }
  .num{
    font-weight: bold;
    color:rgb(27, 173, 231);
    font-size: 30px;
  }
  .Gcontent{
    display: flex;
    justify-content: space-between;
  }
  .Gleft{
    width: 24%;
  }
  .Gright{
    width: 24%;
  }
  .Gnext{
    height: 240px;
    display: flex;
    justify-content: space-between;
  }
  .Gcontent>.Gcente{
    width: 49.5%;
    height: 495px;
    background-color: #fff;
  }
  .num1{
    font-size: 12px;
    text-align-last: left;
    margin-left: 85px;
    line-height: 30px;
  }
  .green{
    color:rgb(23, 194, 23);
    font-weight: bold;
  }
</style>
