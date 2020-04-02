<template>
  <div class="title-box">
    <div class="title">
      {{ item.title }}
    </div>
    <div class="value">
      {{ showText(item) }}
    </div>
    <el-row v-if="showContent">
      <el-col
        v-for="(info, index) in item.content"
        :key="index"
        :span="8"
        class="info">
        <span>{{ info.label }}:</span>
        <span class="info-value">{{ showText(info) }}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'TitleBox',
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
    computed: {
      showContent () {
        return this.item.content && this.item.content.length > 0
      }
    },
    methods: {
      showText ({ prop }) {
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
    .info {
      font-size: 12px;
      line-height: 30px;
      &-value {
        color: #17C217;
        font-weight: bold;
      }
    }
  }
</style>
