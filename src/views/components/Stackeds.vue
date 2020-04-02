<template>
  <div class="stackeds">
    <div
      class="Uctit">
      近3个月各车系活跃度
    </div>
    <div
      class="icon">
      图标
    </div>
    <Stacked
      :id="stackeds"
      :options="options"></Stacked>
  </div>
</template>

<script>
  import Stacked from './Stacked'

  export default {
    name: 'Stackeds',
    components: {
      Stacked
    },
    props: {},
    data () {
      return {
        stackeds: 'stack',
        options: {
          legend: {
            data: [
              'GKUI19', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他'
            ]
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              type: 'bar',
              barWidth: '0px', // 柱状图的宽度
              encode: {
                y: 'product'
              }
            },
            {
              name: 'GKUI19',
              type: 'bar',
              stack: '广告',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'bar',
              stack: '广告',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'bar',
              stack: '广告',
              data: [150, 232, 201, 154, 190, 330, 410]
            }
          ]
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .stackeds{
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
