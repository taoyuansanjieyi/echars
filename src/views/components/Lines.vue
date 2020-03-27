<template>
  <div class="lines">
    <Lin
      :id="line"
      :options="options"></Lin>
  </div>
</template>

<script>
  import Lin from './Lin'

  export default {
    name: 'Lines',
    components: {
      Lin
    },
    props: {},
    data () {
      return {
        line: 'lins',
        options: {
          title: {
            text: '近1年用户活跃度趋势',
            textStyle: {
              fontWeight: 'normal'
            }
          },
          grid: {
            left: '8%',
            top: '25%',
            right: '20%',
            width: '80%', // 图表的大小
            height: '50%',
            containLabel: true
          },
          left: 'left',
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {
              normal: {
                color: '#FFDFA9'
              }
            },
            itemStyle: {
              normal: {
                color: '#FFDFA9',
                lineStyle: {
                  color: '#FFDFA9'
                }
              }
            }
          }]
        }
      }
    }
  }
</script>

<style scoped>
  .lines{
    width: 49.5%;
    height: 240px;
    background-color: #fff;
  }
</style>
