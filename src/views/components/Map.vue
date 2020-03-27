<template>
  <div class="map">
    <div id="container"></div>
  </div>
</template>

<script type="text/javascript" src="https://api.map.baidu.com/api?v=3.0&&type=webgl&ak=sjovuVR9Cw6lyZDmoUzG0WAzNp74BtPI"></script>
<script type="text/javascript">
  export default {
    name: 'Map',
    data () {
      return {

      }
    },
    mounted () {
      const maps = new BMapGL.Map('container');
      const point = new BMapGL.Point(110, 36);
      maps.centerAndZoom(point, 4.4);
    }
  }
</script>

<style scoped>
  .map{
    width: 100%;
    height: 100%;
  }
</style>
