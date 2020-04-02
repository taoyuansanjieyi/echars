<template>
  <div class="discounts">
    <div
      class="Uctit">
      近1年用户增长趋势
    </div>
    <div
      class="icon">
      图标
    </div>
    <Discount
      :id="discounts"
      :options="options"></Discount>
  </div>
</template>

<script>
  import Discount from './Discount'

  export default {
    name: 'Discounts',
    components: {
      Discount
    },
    props: {},
    data () {
      return {
        discounts: 'dis',
        options: {
          xAxis: [
            {
              type: 'category',
              boundaryGap: true
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
              max: 30,
              min: 0
            },
            {
              type: 'value',
              scale: true,
              max: 1200,
              min: 0
            }
          ],
          series: [
            {
              name: '预购队列',
              type: 'bar',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: (function () {
                var res = []
                var len = 10
                while (len--) {
                  res.push(Math.round(Math.random() * 1000))
                }
                return res
              })()
            },
            {
              name: '最新成交价',
              type: 'line',
              data: (function () {
                var res = []
                var len = 0
                while (len < 10) {
                  res.push((Math.random() * 10 + 5).toFixed(1) - 0)
                  len++
                }
                return res
              })()
            }
          ]
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .discounts{
    width: 100%;
    height: 240px;
    background-color: #fff;
    position: relative;
  }
  .icon{
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .Uctit{
    position: absolute;
    left: 5px;
    top: 5px;
  }
</style>
