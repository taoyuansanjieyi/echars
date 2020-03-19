<template>
  <div>
    <echarts
      :id="saleName"
      :options="options"></echarts>
  </div>
</template>

<script>
  import Echarts from './components/Echarts'

  export default {
    name: 'EchartsDemo',
    components: {
      Echarts
    },
    props: {},
    data () {
      return {
        saleName: 'sale',
        chartData: {
          xData: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          sData: [5, 20, 36, 10, 10, 70]
        },
        options: {
          title: { text: 'vue-echars' },
          tooltip: {},
          xAxis: {
            data: ['A', 'S', 'D', 'F', 'E', 'G']
          },
          yAxis: {},
          series: [{
            name: 'TEST',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        },

        showApi: false,
        propertyList: [
          { key: 'id', value: 'echarts 的id', type: 'String', default: '' },
          { key: 'height', value: 'echarts 高度', type: 'String', default: '300px' },
          { key: 'width', value: 'echarts 宽度', type: 'String', default: '100%' },
          { key: 'options', value: '配置图表类型及数据', type: 'Object', default: '{}' },
          { key: '---', value: '注意如果图标较复杂,事件较多,请调用上边我注释掉的', type: 'Object', default: '{}' }]
      }
    },
    mounted () {
      this.refreshData()
    },
    methods: {
      refreshData () {
        // 横轴数据
        const xData = this.chartData.xData
        // 系列值
        const sData = this.chartData.sData
        for (let i = 0; i < xData.length; i++) {
          setTimeout(() => {
            this.options.xAxis.data.push(xData[i])
            this.options.series[0].data.push(sData[i])
          }, 5000 * i)
        }
      }
    }
  }
</script>
