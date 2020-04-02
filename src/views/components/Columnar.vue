<!-- 纵向柱状图 https://www.echartsjs.com/examples/zh/editor.html?c=dataset-simple1 -->
<template>
  <div
    :id="id"
    :style="style"></div>
</template>

<script>
  export default {
    name: 'Columnar',
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
        default: '240px'
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
        columnar: ''
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
          if (this.columnar) {
            if (newVal) {
              this.columnar.setOption(newVal)
            } else {
              this.columnar.setOption(oldVal)
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
      this.columnar.dispose()
    },
    methods: {
      // 初始化
      init () {
        this.columnar = this.$echarts.init(document.getElementById(this.id))
        this.columnar.setOption(this.options)
        // 重绘
        window.addEventListener('resize', this.columnar.resize)
      }
    }
  }
</script>
