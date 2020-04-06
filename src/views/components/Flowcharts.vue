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
          legend: { // 图形固定说明文字
            show: true,
            left: 'right',
            orient: 'vertical', // 调整文字的距离
            padding: [50, 15, 0, 0]
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '60%', // 半径
              center: ['40%', '60%'], // 距离父元素的距离
              label: {
                normal: {
                  textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12 // 文字的字体大小
                  },
                  formatter: '{c}' // 图形上面显示数字
                }
              },
              labelLine: {
                normal: {
                  length: 5,
                  length2: 4,
                  smooth: true
                }
              },
              color: ['#47C7FF', '#8990FF', '#EF95FB', '#FB578F', '#FBDF25'],
              data: [
                {
                  value: 20,
                  name: '高德导航'
                },
                {
                  value: 25,
                  name: '伴听/多媒体'
                },
                {
                  value: 28,
                  name: '喜马拉雅'
                },
                {
                  value: 18,
                  name: '天气/语音'
                },
                {
                  value: 5,
                  name: '其他'
                }
              ],
              itemStyle: {
                normal: {
                  borderWidth: 1,
                  borderColor: '#ffffff'
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
