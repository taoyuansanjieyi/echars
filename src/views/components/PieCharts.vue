<template>
  <div class="pies">
    <PieChart
      :id="pieCharts"
      :options="options"></PieChart>
  </div>
</template>

<script>
  import PieChart from './PieChart'

  export default {
    name: 'PieCharts',
    components: {
      PieChart
    },
    props: {},
    data () {
      return {
        pieCharts: 'pie',
        options: {
          title: {
            text: '某站点用户访问来源',
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
              radius: '55%',
              center: ['50%', '60%'],
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
  .pies{
    width: 350px;
    height: 300px;
    background-color: #fff;
  }
</style>
