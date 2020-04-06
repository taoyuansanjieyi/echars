<!-- https://gallery.echartsjs.com/editor.html?c=x6gVmkrCLW -->
<template>
  <div class="time-axis">
    <div
      class="time-titles">
      近一年流量消耗区间用户分布
    </div>
    <div
      class="icon">
      图标
    </div>
    <!-- <PieChart
      :id="timeaxis"
      :options="options"
      :height="height"></PieChart> -->
    <div
      ref="main"
      style="width:100%;height:570px;"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: 'TimeAxis',
    props: {},
    data () {
      return {
        timeaxis: 'tim',
        height: '840px',
        options: {
          timeline: {
            data: [
              '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
            ],
            axisType: 'category',
            show: true,
            autoPlay: false,
            lineStyle: {
              color: '#a3a4a9'
            }
          },
          options: [
            {
              backgroundColor: 'rgba(0,0,0,0)',
              legend: {
                show: true,
                right: 50,
                top: 50,
                textStyle: {
                  color: '#a3a4a9'
                }
              },
              grid: {
                top: '18%',
                left: '15%',
                right: '15%',
                bottom: '25%'
                // containLabel: true
              },
              xAxis: [{
                type: 'category',
                boundaryGap: true,
                axisLine: { // 坐标轴轴线相关设置。数学上的x轴
                  show: true,
                  lineStyle: {
                    color: 'rgba(255,255,255,0.4)'
                  }
                },
                axisLabel: { // 坐标轴刻度标签的相关设置
                  textStyle: {
                    color: '#a3a4a9',
                    margin: 15
                  }
                },
                axisTick: {
                  show: false
                },
                data: ['1M以下', '【1,100】', '【200,300】', '【300,400】', '【400,500】', '【500,600】', '【600,700】', '【700,800】', '【800,900】', '【900,1G】', '【2G,3G】']
              }],
              yAxis: [{
                        type: 'value',
                        min: 0,
                        max: 1500,
                        splitLine: {
                          show: false,
                          lineStyle: {
                            color: 'rgba(255,255,255,0.1)'
                          }
                        },
                        axisLine: {
                          show: false
                        },
                        axisLabel: {
                          show: true,
                          margin: 20,
                          textStyle: {
                            color: '#a3a4a9'
                          }
                        },
                        axisTick: {
                          show: false
                        },
                        data: [0, 500, 1000, 1500]
                      },
                      {
                        type: 'value',
                        min: 0,
                        max: 600,
                        data: [0, 200, 400, 600]
                      }],
              series: [{
                         name: '流量消耗',
                         xAxisIndex: 0,
                         yAxisIndex: 0,
                         type: 'line',
                         // smooth: true, //是否平滑曲线显示
                         symbol: 'none', // 默认是空心圆（中间是白色的），改成实心圆
                         showAllSymbol: true,
                         // symbol: 'image://./static/images/guang-circle.png',
                         symbolSize: 4,
                         lineStyle: {
                           normal: {
                             color: '#72C3FF' // 线条颜色
                           }
                         },
                         itemStyle: {
                           normal: {
                             color: '#75C4FF'
                           }
                         },
                         sampling: 'average',
                         stack: 'a',
                         color: {
                           type: 'linear',
                           x: 0,
                           y: 0,
                           x2: 0,
                           y2: 1,
                           colorStops: [{
                                          offset: 0, color: '#75C4FF' // 0% 处的颜色
                                        },
                                        {
                                          offset: 1, color: '#D6EDFF' // 100% 处的颜色
                                        }],
                           global: false // 缺省为 false
                         },
                         areaStyle: {
                           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                             {
                               offset: 0,
                               color: '#75C4FF'
                             },
                             {
                               offset: 1,
                               color: '#D6EDFF'
                             }])
                         },
                         data: [1100, 1030, 1080, 1200, 1378, 1450, 1450, 1050, 1000, 1300, 1050, 1200]
                       },
                       {
                         name: '用户数',
                         type: 'line',
                         // smooth: true, //是否平滑曲线显示
                         symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
                         xAxisIndex: 0,
                         yAxisIndex: 1,
                         // symbol: 'image://./static/images/guang-circle.png',
                         lineStyle: {
                           normal: {
                             color: '#8C92FF' // 线条颜色
                           }
                         },
                         data: [100, 300, 500, 900]
                       }]
            },
            {
              series: [{
                         data: [1000, 1130, 1080, 1200, 1378, 1450, 1450, 1050, 1000, 1300, 1050, 1200]
                       },
                       {
                         data: [100, 200, 400, 300, 100, 200, 300]
                       }]
            },
            {
              series: [{
                         data: [1100, 1030, 1080, 1200, 1378, 1450, 1450, 1050, 1000, 1300, 1050, 1200]
                       },
                       {
                         data: [300, 100, 200, 400, 300, 100, 200, 300]
                       }
              ]
            }
          ]
        }
      }
    },
    mounted () {
      var myChart = echarts.init(this.$refs.main)
      myChart.setOption(this.options)
    }
  }
</script>

<style scoped>
  .time-axis{
    height: 570px;
    background-color: #fff;
    position: relative;
  }
  .icon{
    position: absolute;
    right: 15px;
    top: 5px;
  }
  .time-titles{
    position: absolute;
    left: 5px;
    top: 5px;
  }
</style>
