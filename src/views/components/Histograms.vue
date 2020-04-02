<template>
  <div class="histograms">
    <Histogram
      :id="histograms"
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
        histograms: 'his',
        options: {
          title: {
            text: '累计用户数',
            textStyle: {
              fontWeight: 'normal'
            }
          },
          color: ['#8CDFD8'],
          dataset: {
            source: [
              ['score', 'amount', 'product'],
              [89.3, 58212, '18款博越'],
              [57.1, 78254, '帝豪GL'],
              [74.4, 41032, '帝豪GS'],
              [50.1, 12755, '领克01'],
              [89.7, 20145, '领克03'],
              [68.1, 79146, '全新帝豪'],
              [19.6, 91852, '领克02'],
              [10.6, 101852, '缤越'],
              [32.7, 20112, 'ICON'],
              [32.7, 20112, '星越']
            ]
          },
          grid: {
            // 调整图表距离父元素的距离
            left: '10%',
            top: '10%',
            bottom: '30%',
            right: '20%',
            width: '80%', // 图表的大小
            height: '50%',
            containLabel: true
          },
          xAxis: {
            name: '',
            axisLabel: { // 坐标轴字体大小
              fontSize: '20px',
              color: 'black',
              interval: 'auto',
              formatter: '{value} %'
            },
            axisTick: { // 坐标轴刻度
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            },
            splitLine: { // 分割线
              show: true,
              lineStyle: {
                color: '#eee'
              }
            }
          },
          yAxis: {
            type: 'category',
            axisLine: { // y轴坐标轴
              lineStyle: { // y轴刻度线颜色
                color: '#ccc'
              }
            },
            axisTick: { // 坐标轴刻度
              show: false
            },
            axisLabel: { // 刻度标签颜色
              color: 'black',
              fontSize: 12
            }
          },
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
  .histograms{
    width: 100%;
    height: 240px;
    background-color: #fff;
    margin: 10px 0 15px 0;
  }
</style>
