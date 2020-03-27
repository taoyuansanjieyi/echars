<!-- 横向柱状图 https://www.echartsjs.com/examples/zh/editor.html?c=dataset-encode0&theme=light -->
<template>
  <div :id="id" :style="style"></div>
</template>

<script>
  export default {
    name: 'Histogram',
    props: {
      // 父组件需要传递的参数：id，width，height，options
      id: {
        type: String,
        default: ''
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '400px'
      },
      options: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        // 实例
        histogram: ''
      }
    },
    computed: {
      // 宽高
      style () {
        return {
          height: this.height,
          width: this.width
        }
      }
    },
    watch: {
      // 监控echarts属性变化
      options: {
        handler (newVal, oldVal) {
          if (this.histogram) {
            if (newVal) {
              this.histogram.setOption(newVal)
            } else {
              this.histogram.setOption(oldVal)
            }
          } else {
            this.init()
          }
        },
        deep: true
      }
    },
    mounted () {
      // 初始化
      this.init()
    },
    destroyed () {
      // 销毁
      this.histogram.dispose()
    },
    methods: {
      // 初始化
      init () {
        this.histogram = this.$echarts.init(document.getElementById(this.id))
        this.histogram.setOption(this.options)
        // 重绘
        window.addEventListener('resize', this.histogram.resize)
      }
    }
  }
</script>
