<template>
  <nav class="py-4 bg-gray h-100 pb-4">
    <div class="container-fluid d-flex flex-column h-100 px-0">
      <RouterLink to="/Assignment" class="px-4"
        ><img src="/public/images/logo-ANSWER.svg" alt="logo" height="50"
      /></RouterLink>
      <ul class="list-group mt-4 font-lato">
        <li
          :class="{ sideLiActive: location.path === '/Assignment' }"
          class="list-group-item bg-gray fs-5 fw-bold mb-1 rounded-0 border-gray"
        >
          <RouterLink
            to="/Assignment"
            class="d-flex align-items-center"
            :class="{ sideBtnActive: location.path === '/Assignment' }"
          >
            <span class="material-icons me-3"> assessment </span>Dashboard</RouterLink
          >
        </li>
        <li class="list-group-item bg-gray fs-5 fw-bold border-0 mb-1 px-4">
          <a href="#" class="d-flex align-items-center"
            ><span class="material-icons me-3"> question_answer </span>Question</a
          >
        </li>
        <li class="list-group-item bg-gray fs-5 fw-bold border-0 mb-1 px-4">
          <a href="#" class="d-flex align-items-center"
            ><span class="material-icons me-3"> assignment </span>Assignment</a
          >
        </li>
        <li class="list-group-item bg-gray fs-5 fw-bold border-0 mb-1 px-4">
          <a href="#" class="d-flex align-items-center"
            ><span class="material-icons me-3"> video_library </span>Course</a
          >
        </li>
        <li
          :class="{ sideLiActive: location.path === '/Admin' }"
          class="list-group-item bg-gray fs-5 fw-bold mb-1 rounded-0 border-gray"
        >
          <RouterLink
            to="/Admin"
            class="d-flex align-items-center"
            :class="{ sideBtnActive: location.path === '/Admin' }"
            ><span class="material-icons me-3"> people </span>Admin</RouterLink
          >
        </li>
        <li class="list-group-item bg-gray fs-5 fw-bold border-0 mb-1 px-4">
          <a href="#" class="d-flex align-items-center"
            ><span class="material-icons me-3"> settings </span>Settings</a
          >
        </li>
      </ul>
      <div class="user d-flex align-items-center mt-auto px-4">
        <img
          src="/public/images/andychen.jpeg"
          alt="andy"
          width="40"
          height="40"
          class="rounded-circle me-2"
        />
        <div class="info">
          <p class="mb-0 font-lato fw-bold">Andy Chen</p>
          <p class="mb-0 font-lato text-gray">andy0401@mail.com</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { onMounted } from 'vue'

const location = useRoute()

onMounted(() => {
  {
    console.log(RouterView, '124')
  }
})
</script>

<style lang="scss" scoped></style>
