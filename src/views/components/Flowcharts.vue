<template>
  <div class="flowcharts">
    <div
      class="Fltit">
      用户数TOP5省份
    </div>
    <div
      class="icon">
      图标
    </div>
    <PieChart
      :id="flowcharts"
      :options="options"
      :height="height"></PieChart>
  </div>
</template>

<script>
  import PieChart from './PieChart'

  export default {
    name: 'Flowcharts',
    components: {
      PieChart
    },
    props: {},
    data () {
      return {
        flowcharts: 'flowchart',
        height: '240px',
        options: {
          title: {
            textStyle: {
              fontWeight: 'normal'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '45%', // 半径
              center: ['50%', '55%'], // 距离父元素的距离
              data: [
                {
                  value: 335, name: '直接访问'
                },
                {
                  value: 310, name: '邮件营销'
                },
                {
                  value: 234, name: '联盟广告'
                },
                {
                  value: 135, name: '视频广告'
                },
                {
                  value: 1548, name: '搜索引擎'
                }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0,0,0.5)'
                }
              }
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .flowcharts{
    width: 100%;
    height: 240px;
    background-color: #fff;
    margin: 15px 0 15px 0;
    position: relative;
  }
  .icon{
    position: absolute;
    right: 15px;
    top: 5px;
  }
  .Fltit{
    position: absolute;
    left: 5px;
    top: 5px;
  }
</style>
