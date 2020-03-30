<template>
  <div class="discountBs">
    <div
      class="Uctit">
      近1年用户增长趋势
    </div>
    <div
      class="icon">
      图标
    </div>
    <Discount
      :id="discountBs"
      :options="options"></Discount>
  </div>
</template>

<script>
  import Discount from './Discount'

  export default {
    name: 'DiscountBs',
    components: {
      Discount
    },
    props: {},
    data () {
      return {
        discountBs: 'dib',
        options: {
          xAxis: [
            {
              type: 'category',
              data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '水量',
              min: 0,
              max: 250,
              interval: 50
            },
            {
              type: 'value',
              name: '温度',
              min: 0,
              max: 25,
              interval: 5
            }
          ],
          series: [
            {
              name: '降水量',
              type: 'bar',
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 15.9, 22.7, 2.6, 5.9, 9.0, 26.4, 28.7, 15.9, 22.7, 2.6, 5.9, 9.0, 26.4, 28.7, 38.2, 48.6, 15.9, 22.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
              name: '平均温度',
              type: 'line',
              yAxisIndex: 1,
              data: [2.0, 2.2, 3.3, 4.5, 6.3, 2.0, 2.2, 2.0, 2.2, 3.3, 4.5, 6.3, 3.3, 4.5, 6.3, 2.0, 2.2, 3.3, 4.5, 6.3, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
          ]
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .discountBs{
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
