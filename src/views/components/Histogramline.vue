<template>
  <div class="histogramline">
    <div
      class="hist">
      用户数TOP5省份
    </div>
    <div
      class="icon">
      图标
    </div>
    <Histogram
      :id="histogramline"
      :options="options"
      :height="height"></Histogram>
  </div>
</template>

<script>
  import Histogram from './Histogram'

  export default {
    name: 'Histogramline',
    components: {
      Histogram
    },
    props: {},
    data () {
      return {
        histogramline: 'hislin',
        height: '350px',
        options: {
          dataset: {
            source: [
              ['score', 'amount', 'product'],
              [89.3, 58212, '星期一'],
              [57.1, 78254, '星期二'],
              [74.4, 41032, '星期三'],
              [50.1, 12755, '星期四'],
              [89.7, 20145, '星期五'],
              [68.1, 79146, '星期六'],
              [68.1, 79146, '星期日']
            ]
          },
          grid: {
            // 调整图表距离父元素的距离
            left: '10%',
            top: '15%',
            bottom: '30%',
            right: '20%',
            width: '80%', // 图表的大小
            height: '50%',
            containLabel: true
          },
          xAxis: [
            {
              name: '流量消耗',
              axisLabel: { // 坐标轴字体大小
                fontSize: '20px'
              },
              min: 0,
              max: 200
            },
            {
              name: '用户数',
              type: 'value',
              min: 0,
              max: 60
            }
          ],
          yAxis: [],
          visualMap: {
            orient: 'horizontal',
            left: 'center',
            text: ['High Score', 'Low Score'],
            // Map the score column to color
            dimension: 0,
            inRange: {
              color: ['#D7DA8B', '#E15457']
            }
          },
          series: [
            {
              type: 'bar',
              barWidth: '6px', // 柱状图的宽度
              encode: {
                y: 'product'
              }
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .histogramline{
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
  .hist{
    position: absolute;
    left: 5px;
    top: 5px;
  }
</style>
