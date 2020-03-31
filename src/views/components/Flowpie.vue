<template>
  <div class="flowpie">
    <div
      class="Pctits">
      用户数TOP5省份
    </div>
    <div
      class="icon">
      图标
    </div>
    <PieChart
      :id="Flowpie"
      :options="options"
      :height="height"></PieChart>
  </div>
</template>

<script>
  import PieChart from './PieChart'

  export default {
    name: 'Flowpie',
    components: {
      PieChart
    },
    props: {},
    data () {
      return {
        Flowpie: 'flowp',
        height: '240px',
        options: {
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '50%', // 半径
              center: ['50%', '55%'], // 距离父元素的距离
              data: [
                {
                  value: 335
                },
                {
                  value: 310
                },
                {
                  value: 300
                }
              ],
              label: { // 引导线
                normal: {
                  show: false
                }
              },
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
  .flowpie{
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
  .Pctits{
    position: absolute;
    left: 5px;
    top: 5px;
  }
</style>
