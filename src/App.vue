<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/board">Board</router-link>
    </div>
    <hr />
    <!-- This is where the component from the router will be injected you can put a footer under it too-->
    <div id="content-wrap">
      <router-view />
    </div>

    <footer class="footer">
      <p>
        &copy; 2021 Jacob McKenzie & Zarin Loosli, Inc. &middot;
        <a href="https://github.com/fogoplayer/260-creative-3">Repository</a> |
        <a href="#">Back to top</a>
      </p>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100%;
}

#nav {
  padding: 20px;
  font-size: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  border-radius: 5px;
  padding: 4px;
}

#nav a:hover {
  color: white;
  background-color: rgb(66, 66, 66);
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  color: white;
  background-color: black;
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem; /* Footer height */
}
#content-wrap {
  padding-bottom: 2.5rem; /* Footer height */
}
</style>
