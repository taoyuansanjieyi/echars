<template>
  <div class="scatter-point">
    <Columnar
      :id="scatterpoint"
      :options="options"
      :height="height"></Columnar>
  </div>
</template>

<script>
  import Columnar from './Columnar'

  export default {
    name: 'ScatterPoint',
    components: {
      Columnar
    },
    props: {},
    data () {
      return {
        scatterpoint: 'scat',
        height: '300px',
        options: {
          legend: {
            data: [
              '1月以下', '[1,2月]', '[2,3月]', '[3,4月]', '[4,5月]', '[5,6月]', '[6,7月]', '[7,8月]', '[8,9月]', '[9,10月]', '[10,11月]', '[11,12月]', '[1,2年]', '[2,3年]', '[3,4年]', '[4,5年]', '[5,6年]'
            ],
            orient: 'vertical',
            right: 25
          },
          title: {},
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          xAxis: {
            type: 'category',
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            },
            axisLabel: {
              interval: 0,
              rotate: -90,
              margin: 5
            },
            data: [
              '1月以下', '[1,2月]', '[2,3月]', '[3,4月]', '[4,5月]', '[5,6月]', '[6,7月]', '[7,8月]', '[8,9月]', '[9,10月]', '[10,11月]', '[11,12月]', '[1,2年]', '[2,3年]', '[3,4年]', '[4,5年]', '[5,6年]'
            ]
          },
          yAxis: {
            type: '',
            max: 60,
            minInterval: 20,
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            }
          },
          series: [
            {
              type: 'scatter',
              symbolSize: function (data) {
                return Math.sqrt(data[2])
              },
              emphasis: {
                label: {
                  show: true,
                  formatter: function (param) {
                    return param.data[0]
                  },
                  position: 'top'
                }
              },
              itemStyle: {
                shadowBlur: 10,
                shadowColor: function (param) {
                  return param.data[3]
                },
                shadowOffsetY: 5,
                color: function (param) {
                  return param.data[3]
                }
              },
              data: [
                ['1月以下', 30, 4000, 'rgba(46, 111, 207, 0.5)'],
                ['[1,2月]', 21, 3700, 'rgba(46, 196, 216, 0.5)'],
                ['[2,3月]', 33, 8341, 'rgba(43, 235, 18, 0.5)'],
                ['[3,4月]', 32, 4142, 'rgba(218, 30, 117, 0.5)'],
                ['[4,5月]', 42, 2251, 'rgba(241, 163, 89, 0.911)'],
                ['[5,6月]', 38, 8000, 'rgba(20, 238, 191, 0.685)'],
                ['[6,7月]', 30, 5413, 'rgba(238, 20, 74, 0.842)'],
                ['[7,8月]', 26, 3100, 'rgba(238, 20, 238, 0.842)'],
                ['[8,9月]', 32, 9011, 'rgba(37, 182, 81, 0.658)'],
                ['[9,10月]', 31, 4344, 'rgba(236, 195, 10, 0.89)'],
                ['[10,11月]', 38, 10230, 'rgba(236, 130, 10, 0.89)'],
                ['[11,12月]', 41, 3124, 'rgba(10, 134, 236, 0.89)'],
                ['[1,2年]', 42, 8742, 'rgba(175, 66, 62, 0.89)'],
                ['[2,3年]', 39, 2234, 'rgba(175, 62, 62, 0.89)'],
                ['[3,4年]', 33, 2084, 'rgba(175, 62, 169, 0.89)'],
                ['[4,5年]', 35, 4783, 'rgba(104, 163, 240, 0.89)'],
                ['[5,6年]', 25, 4012, 'rgba(197, 230, 14, 0.89)']
              ]
            },
            {
              name: '[1,2月]', type: 'bar'
            },
            {
              name: '[2,3月]', type: 'bar'
            },
            {
              name: '[3,4月]', type: 'bar'
            },
            {
              name: '[4,5月]', type: 'bar'
            },
            {
              name: '[5,6月]', type: 'bar'
            },
            {
              name: '[6,7月]', type: 'bar'
            },
            {
              name: '[7,8月]', type: 'bar'
            },
            {
              name: '[8,9月]', type: 'bar'
            }
          ]
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .scatter-point{
    height: 300px;
    background-color: #fff;
    #col{
      height: 240px;
    }
  }
</style>
