<template>
  <div class="flowpie">
    <div
      class="Pctits">
      用户数TOP5省份
    </div>
    <div
      class="icon">
      图标
    </div>
    <PieChart
      :id="Flowpie"
      :options="options"
      :height="height"></PieChart>
  </div>
</template>

<script>
  import PieChart from './PieChart'

  export default {
    name: 'Flowpie',
    components: {
      PieChart
    },
    props: {},
    data () {
      return {
        Flowpie: 'flowp',
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
              radius: '68%', // 半径
              center: ['37%', '60%'], // 距离父元素的距离
              color: ['#45C1FF', '#8C94FF', '#E78DF8'],
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
                  value: 9784,
                  name: '非新增实名'
                },
                {
                  value: 11108,
                  name: '新增实名'
                },
                {
                  value: 3025,
                  name: '新增未实名'
                }
              ],
              itemStyle: {
                normal: {
                  borderWidth: 1,
                  borderColor: '#ffffff'
                }
              }
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .flowpie{
    width: 100%;
    height: 240px;
    background-color: #fff;
    margin: 15px 0 15px 0;
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
