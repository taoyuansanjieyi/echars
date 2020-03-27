<template>
  <div class="pictures">
    <Practice
      :id="pictures"
      :options="options"></Practice>
  </div>
</template>

<script>
  import Practice from './practice'

  export default {
    name: 'Practices',
    components: {
      Practice
    },
    props: {},
    data () {
      return {
        pictures: 'picture',
        options: {
          title: {
            text: '累计用户数',
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
              radius: [50, 70],
              center: ['50%', '40%'],
              roseType: 'area',
              emphasis: {
                label: {
                  show: true
                }
              },
              data: [
                {
                  value: 10, name: 'rose'
                },
                {
                  value: 5, name: 'rose2'
                },
                {
                  value: 15, name: 'rose3'
                },
                {
                  value: 25, name: 'rose4'
                },
                {
                  value: 20, name: 'rose5'
                },
                {
                  value: 35, name: 'rose6'
                },
                {
                  value: 30, name: 'rose7'
                },
                {
                  value: 40, name: 'rose8'
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
  .pictures{
    width: 100%;
    height: 240px;
    background-color: #fff;
    margin: 0 0 15px 0;
  }
</style>
