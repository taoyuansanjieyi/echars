<!-- 折线、柱状图 https://www.echartsjs.com/examples/zh/editor.html?c=dynamic-data -->
<template>
  <div
    :id="id"
    :style="style"></div>
</template>

<script>
  export default {
    name: 'Discount',
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
        discount: ''
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
          if (this.discount) {
            if (newVal) {
              this.discount.setOption(newVal)
            } else {
              this.discount.setOption(oldVal)
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
      this.discount.dispose()
    },
    methods: {
      // 初始化
      init () {
        this.discount = this.$echarts.init(document.getElementById(this.id))
        this.discount.setOption(this.options)
        // 重绘
        window.addEventListener('resize', this.discount.resize)
      }
    }
  }
</script>
