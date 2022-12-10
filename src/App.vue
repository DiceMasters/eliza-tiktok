<script setup>
import Navbar from './components/Navbar.vue'
import Content from './components/Content.vue'
</script>

<template>
  <main>
    <div class="app">
      <Content/>

      <Navbar/>
    </div>
  </main>
</template>

<style scoped>
  main {
    width: 100vw;
    height: 100vh;

    background-color: #232323;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .app {
    width: 393px;
    height: 100%;

    background-color: black;
  }
</style>
