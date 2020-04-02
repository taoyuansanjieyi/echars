<template>
  <div class="columnarl">
    <div
      class="Uctit">
      2019年12月到2020年2月各车系用户数增长趋势
    </div>
    <div
      class="icon">
      图标
    </div>
    <Columnar
      :id="columnarl"
      :options="options"></Columnar>
  </div>
</template>

<script>
  import Columnar from './Columnar'

  export default {
    name: 'Columnarl',
    components: {
      Columnar
    },
    props: {},
    data () {
      return {
        columnarl: 'col',
        options: {
          tooltip: {},
          dataset: {
            dimensions: ['product', '2015', '2016', '2017'],
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
              }
            ]
          },
          xAxis: {
            type: 'category'
          },
          yAxis: {},
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

<style scoped lang="scss">
  .columnarl{
    width: 100%;
    height: 240px;
    background-color: #fff;
    position: relative;
  }
  .icon{
    position: absolute;
    right: 10px;
    top: 5px;
  }
  .Uctit{
    position: absolute;
    left: 5px;
    top: 5px;
  }
</style>
