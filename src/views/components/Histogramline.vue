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
              name: '',
              axisLabel: { // 坐标轴字体大小
                fontSize: '20px'
              },
              min: 0,
              max: 200
            },
            {
              name: '',
              type: 'value',
              min: 0,
              max: 60
            }
          ],
          yAxis: [
            {
              type: 'category',
              axisLine: {
                onZero: false
              },
              boundaryGap: false,
              data: ['周一', '周二', '周3', '周4', '周5', '周6', '周7']
            },
            {
              type: 'category',
              show: false,
              axisLine: {
                onZero: false
              },
              boundaryGap: false,
              data: ['周一', '周二', '周3', '周4', '周5', '周6', '周7']
            }
          ],
          // visualMap: {
          //   orient: 'horizontal',
          //   left: 'center',
          //   text: ['High Score', 'Low Score'],
          //   // Map the score column to color
          //   dimension: 0,
          //   inRange: {
          //     color: ['#D7DA8B', '#E15457']
          //   }
          // },
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
