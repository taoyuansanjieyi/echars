<template>
  <div class="picturel">
    <div
      class="Uctit">
      2020年1月新增用户数
    </div>
    <div
      class="icon">
      图标
    </div>
    <Practice
      :id="picturel"
      :options="options"
      :height="height"></Practice>
  </div>
</template>

<script>
  import Practice from './Ipractice'

  export default {
    name: 'Practicel',
    components: {
      Practice
    },
    props: {},
    data () {
      return {
        picturel: 'picture',
        height: '240px',
        options: {
          title: {
            textStyle: {
              fontWeight: 'normal'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          toolbox: {
            show: true,
            feature: {
              mark: {
                show: true
              },
              restore: {
                show: true
              }
            }
          },
          series: [
            {
              name: '面积模式',
              type: 'pie',
              radius: [55, 65],
              center: ['45%', '50%'],
              roseType: 'area',
              emphasis: {
                label: {
                  show: true
                }
              },
              data: [
                {
                  value: 10, name: '领克01'
                },
                {
                  value: 5, name: '帝豪G5'
                },
                {
                  value: 15, name: '领克03'
                },
                {
                  value: 25, name: '全新帝豪'
                },
                {
                  value: 20, name: '缤越'
                },
                {
                  value: 35, name: '博越PRO'
                },
                {
                  value: 30, name: '18 款博越'
                },
                {
                  value: 40, name: 'ICON'
                },
                {
                  value: 25, name: '博越'
                }
              ]
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .picturel{
    width: 100%;
    height: 240px;
    background-color: #fff;
    position: relative;
  }
  .icon{
    position: absolute;
    right: 30px;
    top: 5px;
  }
  .Uctit{
    position: absolute;
    left: 5px;
    top: 5px;
  }
</style>
