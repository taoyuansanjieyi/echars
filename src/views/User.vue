<template>
  <div class="User">
    <div class="Utop">
      <span>概览</span>
      <span>用户</span>
      <span>流量</span>
      <span>概览</span>
      <span>用户</span>
      <span>流量</span>
    </div>
    <div class="Ucenter">
      <div>数据更新时间：<b>2020.01.01  00:00:00</b></div>
      <div class="Umounth">
        <Month></Month>
      </div>
    </div>
    <div class="Ubottom">
      <div class="Ubtop">
        <div
          v-for="(item,index) in list"
          :key="index">
          <div
            class="icon">
            图标
          </div>
          <div
            class="Utit">
            {{ item.tit }}
          </div>
          <div
            class="num">
            {{ item.num }}
          </div>
          <div
            class="num1">
            {{ item.add }}
          </div>
        </div>
      </div>
      <div class="Ucen">
        <div class="Ucenl">
          <practicel></practicel>
        </div>
        <div class="UcenC">
          <PieChartm></PieChartm>
        </div>
        <div class="Ucenr">
          <Stackeds></Stackeds>
        </div>
      </div>
      <div class="Ubot">
        <div class="Ubotl">
          <Columnarl></Columnarl>
        </div>
        <div class="Ubotr">
          <Discounts></Discounts>
        </div>
      </div>
      <div class="last">
        <DiscountBs></DiscountBs>
      </div>
    </div>
  </div>
</template>

<script>
  import Month from './components/Month'
  import practicel from './components/practicel' // 环状饼图
  import PieChartm from './components/PieChartm' // 饼图
  import Stackeds from './components/Stackeds' // 折叠柱状图
  import Columnarl from './components/Columnarl' // 中间左侧柱状图
  import Discounts from './components/Discounts' // 折线、柱状图
  import DiscountBs from './components/DiscountBs' // 底部折线、柱状图

  export default {
    name: 'User',
    components: {
      Month,
      practicel,
      PieChartm,
      Stackeds,
      Columnarl,
      Discounts,
      DiscountBs
    },
    data () {
      return {
        list: [
          {
            tit: '月增车机系统用户数',
            num: '10,000,000',
            add: '日增：1600'
          },
          {
            tit: '月活',
            num: '8,000',
            add: '月活占比：16.7%'
          },
          {
            tit: '日活',
            num: '1,000'
          },
          {
            tit: '用户活跃度峰值',
            num: '8,000'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .User{
    text-align: left;
    padding: 10px;
    box-sizing: border-box;
    background-color: #eaeff3;
  }
  .Utop{
    text-align: left;
    height: 35px;
    line-height: 32px;
  }
  .Utop>span{
    display: inline-block;
    width: 90px;
    height: 32px;
    text-align: center;
    border:1px solid #ccc;
    border-radius:5px;
    background-color: #fff;
  }
  .Ucenter{
    text-align: left;
    line-height: 60px;
    background-color: #fff;
    padding: 0 15px;
    display: flex;
    .Umounth{
      flex:1;
    }
  }
  .icon{
    position: absolute;
    right: 10px;
    top: 5px;
  }
  .Ubtop{
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
    .Utit{
      font-weight: bold;
      font-size: 18px;
      line-height: 40px;
    }
    .num{
      font-weight: bold;
      color:rgb(27, 173, 231);
      font-size: 30px;
    }
    .num1{
      font-size: 12px;
    }
  }
  .Ucen{
    display: flex;
    justify-content: space-between;
    .Ucenl,.UcenC{
      width: 24%;
      height: 100%;
    }
    .Ucenr{
      width: 49.5%;
      height: 100%;
    }
  }
  .Ubot{
    height: 240px;
    display: flex;
    justify-content: space-between;
    .Ubotl,.Ubotr{
      width: 49.4%;
      background-color: #ccc;
    }
  }
  .last{
    width: 100%;
    margin-top: 15px;
  }
</style>
