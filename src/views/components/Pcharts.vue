<template>
  <div class="pcharts">
    <div
      class="Pctits">
      用户数TOP5省份
    </div>
    <div
      class="icon">
      图标
    </div>
    <PieChart
      :id="Pcharts"
      :options="options"
      :height="height"></PieChart>
  </div>
</template>

<script>
  import PieChart from './PieChart'

  export default {
    name: 'Pcharts',
    components: {
      PieChart
    },
    props: {},
    data () {
      return {
        Pcharts: 'pies',
        height: '240px',
        options: {
          legend: { // 图形固定说明文字
            show: true,
            left: 'right',
            orient: 'vertical', // 调整文字的距离
            padding: [50, 30, 0, 0]
          },
          series: [
            {
              type: 'pie',
              radius: '70%', // 半径
              center: ['40%', '60%'], // 距离父元素的距离
              color: ['#48CAFF', '#838AFF'],
              label: {
                normal: {
                  position: 'inner',
                  textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12 // 文字的字体大小
                  },
                  formatter: '{c}', // 图形上面显示数字
                  color: 'black'
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {
                  value: 200,
                  name: 'G品牌',
                  itemStyle: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 0, color: '#8289FF' // 0% 处的颜色
                        },
                        {
                          offset: 1, color: '#8382FF' // 100% 处的颜色
                        }
                      ],
                      global: false // 缺省为 false
                    }
                  }
                },
                {
                  value: 55,
                  name: 'L品牌',
                  itemStyle: {
                    normal: {
                      borderWidth: 1,
                      borderColor: '#ffffff'
                    },
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 0, color: '#8289FF' // 0% 处的颜色
                        },
                        {
                          offset: 1, color: '#8382FF' // 100% 处的颜色
                        }
                      ],
                      global: false // 缺省为 false
                    }
                  }
                }
              ]
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .pcharts{
    height: 240px;
    background-color: #fff;
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
