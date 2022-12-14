<script setup>
import Navbar from './components/Navbar.vue'
import Content from './components/Content.vue'
import Sidebar from './components/Sidebar.vue'
import Statusbar from './components/Statusbar.vue'
import TopSection from './components/TopSection.vue'
</script>

<template>
  <main>
    <div class="app">
      
      <Statusbar/>

      <TopSection/>

      <Content/>

      <Navbar/>

      <Sidebar/>
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

    position: relative;

    background-color: black;
  }
</style>
