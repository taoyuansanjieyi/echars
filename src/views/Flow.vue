<template>
  <div class="flow">
    <div class="flow-center">
      <div>数据更新时间：<b>2020.01.01  00:00:00</b></div>
      <div class="flow-mounth">
        <Month></Month>
      </div>
    </div>
    <div class="flow-content">
      <div
        v-for="(item,index) in list"
        :key="index">
        <div
          class="icon">
          图标
        </div>
        <div
          class="flow-tit">
          {{ item.title }}
        </div>
        <div
          class="flow-num">
          {{ item.num }}
        </div>
        <div :class="index == 2 ? 'active' : 'flow-conbottom'">
          <div><span>{{ item.content.left }}:</span><span class="green">{{ item.content.numl }}</span></div>
          <div><span>{{ item.content.center ? `${item.content.center}:` : '' }}</span><span class="green">{{ item.content.numc }}</span></div>
          <div><span>{{ item.content.right ? `${item.content.right}:` : '' }}</span><span class="green">{{ item.content.numr }}</span></div>
        </div>
        <div :class="index == 2 ? 'active' : 'flow-conbottom'">
          <div><span>{{ item.content.left1 }}</span><span class="green">{{ item.content.num1l }}</span></div>
          <div><span>{{ item.content.center1 ? `${item.content.center1}:` : '' }}</span><span class="green">{{ item.content.numc1 }}</span></div>
          <div><span>{{ item.content.right1 ? `${item.content.right1}:` : '' }}</span><span class="green">{{ item.content.numr1 }}</span></div>
        </div>
      </div>
    </div>
    <div class="flow-bottom">
      <div class="flow-botop">
        <div class="flow-botopL">
          <Doublecolumn></Doublecolumn>
        </div>
        <div class="flow-botopR">
          <Flowcolumn></Flowcolumn>
        </div>
      </div>
      <div class="flow-bocenter">
        <div class="flow-bocenL">
          <Pcharts></Pcharts>
        </div>
        <div class="flow-bocen">
          <Flowcharts></Flowcharts>
        </div>
        <div class="flow-bocenT">
          <Flowpie></Flowpie>
        </div>
        <div class="flow-bocenR">
          <Histogramline></Histogramline>
        </div>
      </div>
      <div class="flow-bbottom">
        <div class="flow-bbleft">
          <Flowlineleft></Flowlineleft>
        </div>
        <div class="flow-bbright">
          <Flowcolumns></Flowcolumns>
        </div>
      </div>
      <div class="flow-point">
        zuihou
      </div>
    </div>
  </div>
</template>

<script>
  import Month from './components/Month'
  import Doublecolumn from './components/Doublecolumn' // 双柱形折线图
  import Flowcolumn from './components/Flowcolumn' // 折线、柱状图
  import Pcharts from './components/Pcharts' // 饼图没有引导线
  import Flowcharts from './components/Flowcharts' // 饼图第二个
  import Flowpie from './components/Flowpie' // 饼图第三个
  import Histogramline from './components/Histogramline' // 饼图最后一个
  import Flowlineleft from './components/Flowlineleft' // 柱状图
  import Flowcolumns from './components/Flowcolumns' // 折线、柱状图

  export default {
    name: 'Flow',
    components: {
      Month,
      Doublecolumn,
      Flowcolumn,
      Pcharts,
      Flowcharts,
      Flowpie,
      Histogramline,
      Flowlineleft,
      Flowcolumns
    },
    data () {
      return {
        list: [
          {
            title: '发卡数',
            num: '10,000,000',
            content: {
              left: '移动发卡数',
              numl: '75,920',
              left1: '联通发卡数',
              num1l: '24,180'
            }
          },
          {
            title: '月活跃卡数',
            num: '8,000',
            content: {
              left: '移动活跃卡数',
              numl: '75,920',
              left1: '联通活跃卡数',
              num1l: '24,180'
            }
          },
          {
            title: '2020年1月流量消耗(GB)',
            num: '200,000',
            content: {
              left: '移动流量消耗',
              numl: '15,920',
              center: '公网',
              numc: '15,920',
              right: '前装',
              numr: '5,290',
              left1: '联通流量消耗',
              num1l: '4,180',
              center1: '私网',
              numc1: '120',
              right1: '后装',
              numr1: '5,290'
            }
          },
          {
            title: '2020年1月实名流量卡数',
            num: '3,000',
            content: {
              left: '移动流量卡数',
              numl: '15,920',
              left1: '联通流量卡数',
              num1l: '4,180'
            }
          }
        ]
      }
    }
  }
</script>

<style scoped lang='scss'>
  .flow{
    text-align: left;
    box-sizing: border-box;
  }
  .flow-top{
    text-align: left;
    height: 35px;
    line-height: 32px;
  }
  .flow-top>span{
    display: inline-block;
    width: 90px;
    height: 32px;
    text-align: center;
    border:1px solid #ccc;
    border-radius:5px;
    background-color: #fff;
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
