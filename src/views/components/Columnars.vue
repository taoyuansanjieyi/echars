<template>
  <div class="columnars">
    <Columnar
      :id="columnars"
      :options="options"
      :height="height"></Columnar>
  </div>
</template>

<script>
  import Columnar from './Columnar'

  export default {
    name: 'Columnars',
    components: {
      Columnar
    },
    props: {},
    data () {
      return {
        columnars: 'col',
        height: '240px',
        options: {
          title: {
            text: '累计卡数',
            textStyle: {
              fontWeight: 'normal'
            }
          },
          grid: {
            // 调整图表距离父元素的距离
            left: '8%',
            top: '30%',
            right: '20%',
            width: '80%', // 图表的大小
            height: '50%',
            containLabel: true
          },
          legend: {
            data: ['用户数', '环比'],
            left: 'right'
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月']
            },
            {
              type: 'category',
              boundaryGap: true
            }
          ],
          yAxis: [
            {
              type: 'value',
              scale: true,
              max: 80000000,
              min: 0,
              boundaryGap: [0.2, 0.2]
            },
            {
              type: 'value',
              scale: true,
              max: 80,
              min: 0,
              axisLabel: {
                show: true,
                interval: 'auto',
                formatter: '{value} %'
              }
            }
          ],
          series: [
            {
              name: '用户数',
              type: 'bar',
              xAxisIndex: 1,
              yAxisIndex: 1,
              color: '#FFCD59',
              barWidth: '15px',
              data: ['70', '50', '20', '10', '8', '15', '25', '35', '35', '15']
            },
            {
              name: '环比',
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              color: 'skyblue',
              data: ['10', '30', '20', '8', '7', '6', '5', '8', '9', '10']
            }
          ]
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .columnars{
    height: 240px;
    background-color: #fff;
    #col{
      height: 240px;
    }
  }
</style>
