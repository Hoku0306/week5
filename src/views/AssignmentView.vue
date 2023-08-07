<template>
  <section class="">
    <div class="ps-0">
      <nav class="d-flex align-items-center w-auto p-4 ps-0">
        <h2 class="fs-3 me-4">Assignment</h2>
        <div class="dropdown">
          <button
            class="btn font-lato fw-bold d-flex"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All Courses<span class="material-icons text-green"> expand_more </span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">test</a></li>
            <li><a class="dropdown-item" href="#">test</a></li>
            <li><a class="dropdown-item" href="#">test</a></li>
          </ul>
        </div>
        <div class="function d-flex ms-auto">
          <span class="material-icons me-4"> search </span>
          <span class="material-icons"> notifications_active </span>
        </div>
      </nav>
    </div>
  </section>
  <section class="pb-4">
    <div class="container-fluid row pe-0">
      <div class="taskList col-4 ps-0">
        <div class="dropdown">
          <button
            class="btn font-lato fw-bold p-0 d-flex"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All(4)<span class="material-icons text-green"> expand_more </span>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">test</a></li>
            <li><a class="dropdown-item" href="#">test</a></li>
            <li><a class="dropdown-item" href="#">test</a></li>
          </ul>
        </div>
        <ul class="list-group">
          <li class="list-group-item p-3 bg-gray">
            <p class="fs-sm font-lato d-flex justify-content-between mb-0">
              Chapter Assignment 2
              <span>4 hrs ago</span>
            </p>
            <p class="fs-6 fw-bold d-flex justify-content-between mb-0">
              Please check this file…<span class="fs-sm fw-normal">Emily Wang</span>
            </p>
          </li>
          <li class="list-group-item p-3">
            <p class="fs-sm font-lato d-flex justify-content-between mb-0">
              Chapter Assignment 1<span>12 hrs ago</span>
            </p>
            <p class="fs-6 fw-bold d-flex justify-content-between mb-0">
              My Homework<span class="fs-sm fw-normal">David Xu</span>
            </p>
          </li>
          <li class="list-group-item p-3">
            <p class="fs-sm font-lato d-flex justify-content-between mb-0">
              Final Assignment<span>18 hrs ago</span>
            </p>
            <p class="fs-6 fw-bold d-flex justify-content-between mb-0">
              Have a problem with this…<span class="fs-sm fw-normal">Tony Wei</span>
            </p>
          </li>
          <li class="list-group-item p-3">
            <p class="fs-sm font-lato d-flex justify-content-between mb-0">
              Final Assignment<span>19 hrs ago</span>
            </p>
            <p class="fs-6 fw-bold d-flex justify-content-between mb-0">
              Did I do it right?<span class="fs-sm fw-normal">Christina Lin</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="col-8 px-2">
        <p class="fs-sm text-gray text-end mb-2">2 comments</p>
        <ul class="list-group">
          <li class="list-group-item p-3 bg-gray d-flex align-items-center justify-content-between">
            <div class="comment">
              <p class="mb-0 fs-sm">Chapter Assignment 2 / HTML&CSS</p>
              <p class="mb-0 fs-6 fw-bold">Please check this file for me, thanks!</p>
            </div>
            <a href="#"><span class="material-icons"> more_vert </span></a>
          </li>
          <li class="list-group-item p-3 d-flex border-bottom-0">
            <div class="pic">
              <img
                src="/public/images/emilywang.jpeg"
                alt="emily"
                width="40"
                height="40"
                class="rounded-circle me-2"
              />
            </div>
            <div class="text">
              <h3 class="fs-6 fw-bold mb-0">Emily Wang</h3>
              <p class="fs-sm text-gray">10:38 AM (4 hours ago)</p>
              <p class="my-3">
                Hi Teacher, the attached file is my homework of chapter 2. And here comes a
                question: Why in the following code the height of the
                <span class="text-green bg-gray rounded-1 p-1">div</span> is bigger than the height
                of the <span class="text-green bg-gray rounded-1 p-1">img</span> ? There is a gap
                below the image, but it doesn’t seems to be a padding/margin. What is the gap or
                extra space below image?
              </p>
              <button type="button" class="btn bg-gray fw-bold d-flex">
                <span class="material-icons me-2"> attach_file </span>HW-2-David.zip
              </button>
            </div>
          </li>
          <li class="list-group-item d-flex">
            <div class="pic pt-3">
              <img
                src="/public/images/andychen.jpeg"
                alt="emily"
                width="40"
                height="40"
                class="rounded-circle me-2"
              />
            </div>
            <div class="text border-top pt-3">
              <h3 class="fs-6 fw-bold mb-0">Andy Chen (You)</h3>
              <p class="fs-sm text-gray">13:24 AM (1 hours ago)</p>
              <p class="my-3">
                Hi David, by default, an image is rendered inline, like a letter so it sits on the
                same line that a, b, c and d sit on. There is space below that line for the
                descenders you find on letters like g, j, p and q.<br />
                <br />
                You can:
                <br />
                <br />
                • adjust the <span class="text-green bg-gray rounded-1 p-1">vertical-align</span> of
                the image to position it elsewhere (e.g. the
                <span class="text-green bg-gray rounded-1 p-1">middle</span> ) or
                <br />
                • change the <span class="text-green bg-gray rounded-1 p-1">display</span> so it
                isn’t inline.
              </p>
            </div>
            <div class="position-absolute bottom-custom end-0 reply">
              <div class="commentNav navbar bg-gray p-2 border">
                <div class="dropdown d-flex align-items-center">
                  <button
                    class="btn dropdown-toggle text-black fw-bold p-0 fs-3 me-3"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Body Text
                  </button>
                  <a href="#" class="me-3 d-flex"
                    ><span class="material-icons"> format_bold </span></a
                  >
                  <a href="#" class="me-3 d-flex"
                    ><span class="material-icons"> format_italic </span></a
                  >
                  <a href="#" class="me-3 d-flex"
                    ><span class="material-icons"> format_list_bulleted </span></a
                  >
                  <a href="#" class="me-3 d-flex"
                    ><span class="material-icons"> format_list_numbered </span></a
                  >
                  <a href="#" class="me-3 d-flex"><span class="material-icons"> image </span></a>
                  <a href="#" class="me-3 d-flex"><span class="material-icons"> link </span></a>
                  <a href="#" class="me-3 d-flex"><span class="material-icons"> code </span></a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">test</a></li>
                    <li><a class="dropdown-item" href="#">test</a></li>
                    <li><a class="dropdown-item" href="#">test</a></li>
                  </ul>
                </div>
              </div>
              <div class="form-floating position-relative">
                <textarea
                  class="form-control rounded-0"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style="height: 303px"
                ></textarea>
                <label for="floatingTextarea" class="text-gray">Reply an answer…</label>
                <div class="submit d-flex justify-content-end mt-3 position-absolute btnInReply">
                  <button type="button" class="btn text-green px-4 me-3 border-green btnClose">
                    Cancel
                  </button>
                  <button type="button" class="btn bg-green px-4 text-white position-relative">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="submit d-flex justify-content-end mt-3">
          <button class="btn text-green px-4 me-3 border-green">Mark as read</button>

          <button class="btn bg-green px-4 text-white position-relative btnOpen">Reply</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const btnOpen = document.querySelector('.btnOpen')
  const btnClose = document.querySelector('.btnClose')
  console.log(btnOpen, btnClose)
  btnOpen.addEventListener('click', function () {
    document.querySelector('.reply').classList.add('commentActive')
  })
  btnClose.addEventListener('click', function () {
    document.querySelector('.reply').classList.remove('commentActive')
  })
})
</script>
