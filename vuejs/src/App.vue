<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/token">Registration</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/search">Search</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
