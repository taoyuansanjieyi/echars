<template>
  <div :id="id" :style="style"></div>
</template>

<script>
  export default {
    name: 'Practice',
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
        default: '300px'
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
        charts: ''
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
          if (this.charts) {
            if (newVal) {
              this.charts.setOption(newVal)
            } else {
              this.charts.setOption(oldVal)
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
      this.charts.dispose()
    },
    methods: {
      // 初始化
      init () {
        this.charts = this.$echarts.init(document.getElementById(this.id))
        this.charts.setOption(this.options)
        // 重绘
        window.addEventListener('resize', this.charts.resize)
      }
    }
  }
</script>
