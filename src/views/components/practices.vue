<template>
  <div class="pictures">
    <Practice
      :id="pictures"
      :options="options"
      :height="height"></Practice>
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
        height: '240px',
        options: {
          title: {
            text: '累计用户数',
            textStyle: {
              fontWeight: 'normal'
            }
          },
          color: ['#FFD05A', '#04C4D7', '#D05C8B', '#E36CE8', '#72E3E8'],
          series: [
            {
              name: '面积模式',
              type: 'pie',
              radius: [60, 80],
              center: ['50%', '55%'],
              avoidLabelOverlap: false,
              hoverAnimation: false, // 鼠标滑过是否显示效果
              roseType: 'radius', // 是否按照百分比显示
              labelLine: { // 引导线
                show: true,
                length: 10,
                length2: 8,
                smooth: 0.1
              },
              data: [
                {
                  value: 130, name: '帝豪GS'
                },
                {
                  value: 20, name: '帝豪GL'
                },
                {
                  value: 160, name: '18款博越'
                },
                {
                  value: 25, name: 'ICON'
                },
                {
                  value: 20, name: '博越PRO'
                },
                {
                  value: 35, name: '缤瑞'
                },
                {
                  value: 30, name: '星越'
                },
                {
                  value: 40, name: '缤越'
                },
                {
                  value: 35, name: '领克02'
                },
                {
                  value: 130, name: '全新帝豪'
                },
                {
                  value: 40, name: '领克03'
                },
                {
                  value: 40, name: '领克01'
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
