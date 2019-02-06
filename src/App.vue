<template>
  <div>
    <h1>Vue App Started!</h1>
    <div id="nav">
      <ul>
        <li><router-link to="/hello">Go to Hello</router-link></li>
        <li><router-link to="/goodbye">Go to Goodbye</router-link></li>
      </ul>
    </div>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>
