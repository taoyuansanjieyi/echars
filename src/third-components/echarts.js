import Vue from 'vue'
import * as echarts from 'echarts/lib/echarts'

// 柱状图
import 'echarts/lib/chart/bar'
// 饼图
import 'echarts/lib/chart/pie'
// 漏斗图
import 'echarts/lib/chart/funnel'
// 矩形树图
import 'echarts/lib/chart/treemap'
// 散点图
import 'echarts/lib/chart/scatter'
// 折线图
import 'echarts/lib/chart/line'
// 仪表盘
import 'echarts/lib/chart/gauge'

// 引入提示框组件、标题组件、工具箱、legend组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/legend'

Vue.prototype.$echarts = echarts
