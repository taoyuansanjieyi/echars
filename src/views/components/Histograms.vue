<template>
  <div class="histograms">
    <Histogram
      :id="histograms"
      :options="options"></Histogram>
  </div>
</template>

<script>
  import Histogram from './Histogram'

  export default {
    name: 'Histograms',
    components: {
      Histogram
    },
    props: {},
    data () {
      return {
        histograms: 'his',
        options: {
          title: {
            text: '累计用户数',
            textStyle: {
              fontWeight: 'normal'
            }
          },
          dataset: {
            source: [
              ['score', 'amount', 'product'],
              [89.3, 58212, '18款博越'],
              [57.1, 78254, '帝豪GL'],
              [74.4, 41032, '帝豪GS'],
              [50.1, 12755, '领克01'],
              [89.7, 20145, '领克03'],
              [68.1, 79146, '全新帝豪'],
              [19.6, 91852, '领克02'],
              [10.6, 101852, '缤越'],
              [32.7, 20112, 'ICON'],
              [32.7, 20112, '星越']
            ]
          },
          grid: {
            containLabel: true
          },
          xAxis: {
            name: ''
          },
          yAxis: {
            type: 'category'
          },
          visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: 5,
            max: 10,
            text: ['High Score', 'Low Score'],
            // Map the score column to color
            dimension: 0,
            inRange: {
              color: ['#D7DA8B', '#E15457']
            }
          },
          series: [
            {
              type: 'bar',
              encode: {
                // Map the "amount" column to X axis.
                // x: 'amount',
                // Map the "product" column to Y axis
                y: 'product'
              }
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .histograms{
    width: 350px;
    height: 300px;
    background-color: #fff;
  }
</style>
