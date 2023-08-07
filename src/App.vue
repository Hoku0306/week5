<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
SideBar
</script>

<template>
  <div class="container-fluid ps-0">
    <div class="row">
      <div class="col-3"><SideBar></SideBar></div>
      <div class="col-9"><RouterView></RouterView></div>
    </div>
  </div>
</template>
