<template>
  <div class="General">
    <div class="Gtop">
      <span>概览</span>
      <span>用户</span>
      <span>流量</span>
      <span>概览</span>
      <span>用户</span>
      <span>流量</span>
    </div>
    <div class="Gcenter">数据更新时间：2020.01.01  00:00:00</div>
    <div class="Gbottom">
      <div class="Gls">
        <div v-for="(item,index) in list" :key="index">
          <div class="Gtit">{{item.title}}</div>
          <div class="num">{{item.num}}</div>
          <div class="num1">{{item.num1}}</div>
      </div>
      </div>
      <Practices></Practices>
      <PieCharts></PieCharts>
    </div>
  </div>
</template>

<script>
  import Practices from './components/practices'
  import PieCharts from './components/PieCharts'

  export default {
    name: 'General',
    components: {
      Practices,
      PieCharts
    },
    data () {
      return {
        list: [
          {
            title: '车机系统总用户数',
            num: '100000',
            num1: '日活：75920'
          },
          {
            title: '总流量消耗',
            num: '8000',
            num1: ''
          },
          {
            title: '总粉丝数',
            num: '80000',
            num1: ''
          },
          {
            title: '2020年日人均在线时长',
            num: '1小时54分钟',
            num1: ''
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .General{
    width: 100%;
    height: 100%;
    text-align: left;
    padding: 10px;
    box-sizing: border-box;
    background-color: #eaeff3;
  }
  .Gtop{
    width: 100%;
    height: 35px;
    line-height: 25px;
  }
  .Gtop>span{
    display: inline-block;
    width: 80px;
    height: 25px;
    text-align: center;
    border:1px solid #ccc;
    border-radius:5px;
  }
  .Gcenter{
    line-height: 50px;
    background-color: #fff;
    padding: 0 15px;
  }
  .Gls{
    width: 100%;
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
</style>
