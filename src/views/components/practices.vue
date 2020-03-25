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
            left: 'center'
          },
          series: [
            {
              name: '面积模式',
              type: 'pie',
              radius: [100, 80],
              center: ['50%', '50%'],
              roseType: 'area',
              seriesLayoutBy: 'row',
              data: [
                {
                  value: 10, name: 'rose1'
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
    width: 350px;
    height: 300px;
    border:1px solid #ccc;
  }
</style>
