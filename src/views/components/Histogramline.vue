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
            left: '5%',
            top: '15%',
            bottom: '30%',
            right: '20%',
            width: '80%', // 图表的大小
            height: '50%',
            containLabel: true
          },
          legend: { // 图形固定说明文字
            show: true,
            left: 'right',
            orient: 'vertical', // 调整文字的距离
            padding: [30, 10, 0, 0]
          },
          xAxis: [
            {
              name: '',
              axisLabel: { // 坐标轴字体大小
                fontSize: 12,
                color: 'black'
              },
              min: 0,
              max: 200,
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
            {
              name: '',
              type: 'value',
              min: 0,
              max: 60,
              axisTick: { // 坐标轴刻度
                show: false
              },
              axisLabel: { // 坐标轴字体大小
                fontSize: 12,
                color: 'black'
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
            }
          ],
          yAxis: [
            {
              type: 'category',
              axisTick: { // 坐标轴刻度
                show: false
              },
              axisLabel: { // 坐标轴字体大小
                fontSize: 12,
                color: 'black'
              },
              axisLine: {
                lineStyle: {
                  color: '#ccc'
                }
              },
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            {
              type: 'category',
              show: false,
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          series: [
            {
              type: 'bar',
              name: '流量消耗',
              barWidth: '8px', // 柱状图的宽度
              color: '#41B6FF',
              smooth: true,
              lineStyle: {
                normal: {
                  width: 3,
                  shadowColor: 'rgba(0,0,0,0.4)',
                  shadowBlur: 10,
                  shadowOffsetY: 10
                }
              },
              data: [60, 80, 56.5, 46.5, 100.1, 120, 105]
            },
            {
              type: 'line',
              name: '用户数',
              color: '#838AFF',
              data: [20, 10, 80, 40, 50, 60, 80]
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
