<template>
  <div class="title-box">
    <div class="title">
      {{ item.title }}
    </div>
    <div class="value">
      {{ showText(item.prop) }}
    </div>
    <div
      class="icon">
      图标
    </div>
    <el-row v-if="showContent">
      <el-col
        v-for="(info, index) in item.content"
        :key="index"
        class="info">
        <el-row v-if="Object.keys(info).length <= 4">
          <el-row type="flex" justify="start" class="pad-20" >
            <span>{{ info.label }}:</span>
            <span class="info-value">{{ showText(info.prop) }}</span>
          </el-row>
          <el-row type="flex" justify="start" class="pad-20" >
            <span>{{ info.labels }}:</span>
            <span class="info-value">{{ showText(info.props) }}</span>
          </el-row>
        </el-row>
        <el-row v-else>
          <el-row :gutter="gutter" class="pad-10">
            <el-col :span='10'>
              <span>{{ info.label }}:</span>
              <span class="info-value">{{ showText(info.prop) }}</span>
            </el-col>
            <el-col :span='7'>
              <span>{{ info.publick }}:</span>
              <span class="info-value">{{ showText(info.punum) }}</span>
            </el-col>
            <el-col :span='7'>
              <span>{{ info.publick }}:</span>
              <span class="info-value">{{ showText(info.punum) }}</span>
            </el-col>
          </el-row>
          <el-row :gutter="gutter" class="pad-10">
            <el-col :span='10'>
              <span>{{ info.labels }}:</span>
              <span class="info-value">{{ showText(info.props) }}</span>
            </el-col>
            <el-col :span='7'>
              <span>{{ info.publicks }}:</span>
              <span class="info-value">{{ showText(info.punums) }}</span>
            </el-col>
            <el-col :span='7'>
              <span>{{ info.strarts }}:</span>
              <span class="info-value">{{ showText(info.strnums) }}</span>
            </el-col>
          </el-row>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'FlowTitle',
    props: {
      item: {
        type: Object,
        default: function () {
          return {}
        }
      },
      data: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data () {
      return {
        gutter: 3
      }
    },
    computed: {
      showContent () {
        return this.item.content && this.item.content.length > 0
      }
    },
    methods: {
      showText (prop) {
        console.log(this.data)
        if (!this.data[prop]) {
          return '--'
        }
        return this.data[prop]
      }
    }
  }
</script>

<style scoped lang="scss">
  .title-box {
    background: white;
    height: 120px;
    padding: 10px;
    text-align: center;
    position: relative;
    .title {
      font-weight: bold;
      font-size: 18px;
      line-height: 40px;
    }
    .value {
      font-weight: bold;
      color: #409EFF;
      font-size: 30px;
    }
    .icon{
      position: absolute;
      top: 3px;
      right: 5px;
    }
    .info {
      font-size: 12px;
      line-height: 30px;
      &-value {
        color: #17C217;
        font-weight: bold;
      }
    }
    .pad-20{
        padding-left: 40px;
        line-height: 20px;
    }
    .pad-10{
      line-height: 20px;
    }
  }
</style>
