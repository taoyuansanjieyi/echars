<template>
  <div class="columnars">
    <Columnar
      :id="columnars"
      :options="options"></Columnar>
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
            top: '25%',
            right: '20%',
            width: '80%', // 图表的大小
            height: '50%',
            containLabel: true
          },
          dataset: {
            // dimensions: ['2015', '2016', '2017'],
            source: [
              {
                product: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7
              },
              {
                product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1
              },
              {
                product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5
              },
              {
                product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1
              }]
          },
          xAxis: {
            type: 'category'
          },
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
            {
              type: 'bar'
            },
            {
              type: 'bar'
            },
            {
              type: 'bar'
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .columnars{
    width: 49.5%;
    height: 240px;
    background-color: #fff;
  }
</style>
