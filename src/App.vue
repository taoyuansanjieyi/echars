<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        首页
      </router-link> |
      <router-link to="/general">
        概览
      </router-link> |
      <router-link to="/user">
        用户
      </router-link> |
      <router-link to="/flow">
        流量
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
