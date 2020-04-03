<template>
  <div>
    <div class="user-top">
      <div class="title-line mg-b10">
        数据更新时间：<span>{{ form.updateTime }}</span>
      </div>
      <div class="user-changetime">
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
        <user-title
          :item="item"
          :data="form"></user-title>
      </el-col>
    </el-row>

    <el-row
      :gutter="gutter"
      class="mg-b10">
      <el-col :span="6">
        <Practicel></Practicel>
      </el-col>
      <el-col :span="6">
        <PieChartm></PieChartm>
      </el-col>
      <el-col :span="12">
        <Stackeds></Stackeds>
      </el-col>
    </el-row>

    <el-row
      :gutter="gutter"
      class="mg-b10">
      <el-col :span="12">
        <Columnarl></Columnarl>
      </el-col>
      <el-col :span="12">
        <Discounts></Discounts>
      </el-col>
    </el-row>

    <el-row
      :gutter="gutter"
      class="mg-b10">
      <el-col :span="24">
        <DiscountBs></DiscountBs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Month from './components/Month'
  import UserTitle from './components/UserTitle'
  import Practicel from './components/Ipracticel' // 环状饼图
  import PieChartm from './components/PieChartm' // 饼图
  import Stackeds from './components/Stackeds' // 折叠柱状图
  import Columnarl from './components/Columnarl' // 中间左侧柱状图
  import Discounts from './components/Discounts' // 折线、柱状图
  import DiscountBs from './components/DiscountBs' // 底部折线、柱状图

  export default {
    name: 'User',
    components: {
      Month,
      Practicel,
      PieChartm,
      Stackeds,
      Columnarl,
      Discounts,
      DiscountBs,
      UserTitle
    },
    data () {
      return {
        gutter: 10,
        form: {
          updateTime: '2020.01.01  00:00:00',
          allUsers: '100000',
          dayCount: '75920',
          allFlow: '8000',
          allFunNum: '1000',
          peopleOnLineTime: '69%',
          proportion: '16.7%'
        },
        list: [
          {
            title: '月增车机系统用户数',
            prop: 'allUsers',
            content: [{
              label: '日增',
              prop: 'dayCount'
            }]
          },
          {
            title: '月活',
            prop: 'allFlow',
            content: [{
              label: '月活占比',
              prop: 'proportion'
            }]
          },
          {
            title: '日活',
            prop: 'allFunNum'
          },
          {
            title: '用户活跃度峰值',
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
  .mg-b10 {
    margin-bottom: 10px;
  }
  .user-top{
    background-color: #fff;
    padding: 0 15px;
    margin:0 0 10px 0;
    display: flex;
    .user-changetime{
      flex:1;
    }
  }
  .icon{
    position: absolute;
    right: 10px;
    top: 5px;
  }
</style>
