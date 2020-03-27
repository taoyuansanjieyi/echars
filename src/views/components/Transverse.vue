<!-- 横向柱状图 https://www.echartsjs.com/examples/zh/editor.html?c=dataset-encode0&theme=light -->
<template>
  <div class="transverse">
    <Histogram
      :id="transverse"
      :options="options"></Histogram>
  </div>
</template>

<script>
  import Histogram from './Histogram'

  export default {
    name: 'Histograms',
    components: {
      Histogram
    },
    props: {},
    data () {
      return {
        transverse: 'tran',
        options: {
          title: {
            text: '2020年1月各版本用户活跃度',
            textStyle: {
              fontWeight: 'normal'
            }
          },
          dataset: {
            source: [
              ['score', 'amount', 'product'],
              [89.3, 58212, 'GKUI19'],
              [57.1, 78254, 'GKUI20'],
              [74.4, 41032, 'GKUI1.5'],
              [50.1, 12755, '非GKUI']
            ]
          },
          grid: {
            // 调整图表距离父元素的距离
            left: '10%',
            top: '15%',
            bottom: '30%',
            right: '20%',
            width: '80%', // 图表的大小
            height: '40%',
            containLabel: true
          },
          xAxis: {
            name: '',
            axisLabel: { // 坐标轴字体大小
              fontSize: '20px'
            }
          },
          yAxis: {
            type: 'category'
          },
          visualMap: {
            orient: 'horizontal',
            left: 'center',
            text: ['High Score', 'Low Score'],
            // Map the score column to color
            dimension: 0
            // inRange: {
            //   color: ['#86D4CE', '#86D4CE']
            // }
          },
          series: [
            {
              type: 'bar',
              barWidth: '10px', // 柱状图的宽度
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
  .transverse{
    width: 100%;
    height: 240px;
    background-color: #fff;
    margin: 10px 0 15px 0;
  }
</style>
