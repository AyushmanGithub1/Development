<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/completed">Completed Tasks</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  padding: 20px;
}

nav {
  margin-bottom: 20px;
}

router-link {
  margin-right: 10px;
  text-decoration: none;
  color: #42b983;
}

router-link.router-link-exact-active {
  font-weight: bold;
}
</style>
