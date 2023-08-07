<template>
  <section class="p-4">
    <div class="container-fluid pe-1 ps-0">
      <nav class="d-flex align-items-center w-auto">
        <h2 class="fs-3 me-4">Assignment</h2>
        <div class="dropdown">
          <button
            class="btn font-lato fw-bold d-flex"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            aria-expanded="false"
          >
            <span class="material-icons text-green me-1"> add </span>Add New Admin
          </button>

          <!-- new admin modal-->
          <div
            class="modal"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
              <div class="modal-content rounded-0 p-2">
                <div class="modal-header border-0">
                  <h2 class="modal-title fs-4 fw-bold" id="exampleModalLabel">New Admin</h2>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <h2 class="fs-4 mb-3">Account</h2>
                  <form class="d-flex flex-column border-bottom pb-4">
                    <label for="name" class="fs-sm">Name</label>
                    <input type="text" class="p-3 border-1 border-black mb-3" name="name" />
                    <label for="email" class="fs-sm">Email</label>
                    <input type="text" class="p-3 border-1 border-black" name="email" />
                  </form>
                  <div class="verify border-bottom pb-4">
                    <h2 class="fs-4 my-3">Verification</h2>
                    <p class="d-flex fw-bold align-items-center">
                      <span class="material-icons text-danger me-2"> warning </span>Unverified
                    </p>
                    <button
                      type="button"
                      class="btn text-green rounded-0 w-100 text-center border py-3"
                    >
                      Send Verification Mail
                    </button>
                  </div>
                  <div class="dropdown border-bottom pb-4">
                    <h2 class="fs-4 my-3">Access Level</h2>
                    <button
                      class="btn fs-6 text-gray border border-black w-100 rounded-0 text-start py-3 d-flex justify-content-between"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      -Choose access level-<span class="material-icons"> expand_more </span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">test</a></li>
                      <li><a class="dropdown-item" href="#">test</a></li>
                      <li><a class="dropdown-item" href="#">test</a></li>
                    </ul>
                  </div>
                  <div>
                    <h2 class="fs-4 my-3">Custom Access</h2>
                    <ul class="list-group">
                      <li class="list-group-item border-0">
                        <input
                          class="form-check-input me-2 border-2 border-black"
                          type="checkbox"
                          value=""
                          id="firstCheckbox"
                        />
                        <label class="form-check-label" for="firstCheckbox">Lecture</label>
                      </li>
                      <li class="list-group-item border-0">
                        <input
                          class="form-check-input me-2 border-2 border-black"
                          type="checkbox"
                          value=""
                          id="firstCheckbox"
                        />
                        <label class="form-check-label" for="firstCheckbox">Coupon</label>
                      </li>
                      <li class="list-group-item border-0">
                        <input
                          class="form-check-input me-2 border-2 border-black"
                          type="checkbox"
                          value=""
                          id="firstCheckbox"
                        />
                        <label class="form-check-label" for="firstCheckbox">Message</label>
                      </li>
                      <li class="list-group-item border-0">
                        <input
                          class="form-check-input me-2 border-2 border-black"
                          type="checkbox"
                          value=""
                          id="firstCheckbox"
                        />
                        <label class="form-check-label" for="firstCheckbox">Settings</label>
                      </li>
                      <li class="list-group-item border-0">
                        <input
                          class="form-check-input me-2 border-2 border-black"
                          type="checkbox"
                          value=""
                          id="firstCheckbox"
                        />
                        <label class="form-check-label" for="firstCheckbox">Tast Menu</label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="modal-footer border-0">
                  <button
                    type="button"
                    class="btn btn-outline-success px-5 rounded-0 me-2"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-success px-5 rounded-0">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="function d-flex ms-auto">
          <span class="material-icons me-4"> search </span>
          <span class="material-icons"> notifications_active </span>
        </div>
      </nav>
    </div>
  </section>
  <!-- table -->
  <section class="px-4">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="d-flex align-items-center">
            ID<a href="#"
              ><span class="material-icons fs-sm ms-1 text-green"> arrow_downward </span></a
            >
          </th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Verified</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in adminList" :key="index">
          <th scope="row" class="fw-normal py-3" width="70">
            <a href="#" class="adminBtn" data-bs-toggle="modal" data-bs-target="#exampleModal2">{{
              `#${index + 1}`
            }}</a>
          </th>
          <td class="py-3" width="250">
            <a href="#" class="adminBtn" data-bs-toggle="modal" data-bs-target="#exampleModal2">{{
              item.name
            }}</a>
          </td>
          <td class="py-3" width="350">
            <a href="#" class="adminBtn" data-bs-toggle="modal" data-bs-target="#exampleModal2">{{
              item.email
            }}</a>
          </td>
          <td class="py-3">
            <a href="#" class="adminBtn" data-bs-toggle="modal" data-bs-target="#exampleModal2">{{
              item.verify
            }}</a>
          </td>
          <td class="py-3 d-flex align-items-center justify-content-end">
            <a href="#" class="me-4" data-bs-toggle="modal" data-bs-target="#exampleModal2"
              ><span class="material-icons"> visibility </span></a
            ><a href="#" data-bs-toggle="modal" data-bs-target="#editAdmin"
              ><span class="material-icons"> edit </span></a
            >
          </td>
        </tr>
      </tbody>
    </table>
    <!-- admin info modal -->
    <div
      class="modal"
      id="exampleModal2"
      tabindex="-1"
      aria-labelledby="exampleModalLabel2"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-0">
          <div class="modal-body d-flex">
            <div class="me-3">
              <img src="/public/images/emir.jpeg" alt="emir" width="140" height="140" />
            </div>
            <div class="flex-fill" height="140">
              <div class="info">
                <h3 class="fs-6 mb-1 d-flex align-items-center justify-content-between">
                  #1<span
                    ><button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button
                  ></span>
                </h3>
                <p class="mb-0">Admin</p>
                <h2 class="fs-4 fw-bold mb-1">Emir Wicks</h2>
                <p class="fs-sm text-gray mb-2">emir.wicks@mail.com</p>
                <div class="link">
                  <a
                    class="btn d-flex p-0 toggleAtag"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    @click="toggle"
                  >
                    <span class="bg-gray px-2">Verified</span>
                    <span class="material-icons ms-auto tagChange text-green">
                      {{ expandIcon }}</span
                    >
                  </a>
                  <div class="collapse mt-4" id="collapseExample">
                    <span class="d-flex justify-content-end"
                      ><button
                        type="button"
                        class="btn btn-outline-danger me-3 px-5 fw-bold rounded-1"
                      >
                        Deactivate
                      </button>
                      <button type="button" class="btn btn-success rounded-1 fw-bold px-4">
                        Edit
                      </button></span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- edit admin modal -->
    <div
      class="modal"
      id="editAdmin"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content rounded-0 p-2">
          <div class="modal-header border-0">
            <h2 class="modal-title fs-4 fw-bold" id="exampleModalLabel">Edit Admin</h2>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h2 class="fs-4 mb-3">Account</h2>
            <form class="d-flex flex-column border-bottom pb-4">
              <label for="name" class="fs-sm">Name</label>
              <input
                type="text"
                class="p-3 border-0 bg-gray mb-3"
                name="name"
                placeholder="Emir Wicks"
              />
              <label for="email" class="fs-sm">Email</label>
              <input
                type="text"
                class="p-3 border-0 bg-gray"
                name="email"
                placeholder="emir.wicks@mail.com"
              />
            </form>
            <div class="verify border-bottom pb-4">
              <h2 class="fs-4 my-3">Verification</h2>
              <p class="d-flex fw-bold align-items-center">
                <span class="material-icons text-green me-2"> check_circle </span>Verified<span
                  class="fs-sm text-gray ms-auto fw-normal"
                  >2020/4/12</span
                >
              </p>
              <button type="button" class="btn text-gray w-100 text-center border py-3" disabled>
                Send Verification Mail
              </button>
            </div>
            <div class="dropdown border-bottom pb-4">
              <h2 class="fs-4 my-3">Access Level</h2>
              <button
                class="btn fs-6 text-gray border border-black w-100 rounded-0 text-start py-3 d-flex justify-content-between"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin<span class="material-icons"> expand_more </span>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">test</a></li>
                <li><a class="dropdown-item" href="#">test</a></li>
                <li><a class="dropdown-item" href="#">test</a></li>
              </ul>
            </div>
            <div class="border-bottom pb-4">
              <h2 class="fs-4 my-3">Custom Access</h2>
              <ul class="list-group">
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-2 border-2 border-black"
                    type="checkbox"
                    value=""
                    id="firstCheckbox"
                  />
                  <label class="form-check-label" for="firstCheckbox">Lecture</label>
                </li>
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-2 border-2 border-black"
                    type="checkbox"
                    value=""
                    id="firstCheckbox"
                  />
                  <label class="form-check-label" for="firstCheckbox">Coupon</label>
                </li>
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-2 border-2 border-black"
                    type="checkbox"
                    value=""
                    id="firstCheckbox"
                  />
                  <label class="form-check-label" for="firstCheckbox">Message</label>
                </li>
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-2 border-2 border-black"
                    type="checkbox"
                    value=""
                    id="firstCheckbox"
                  />
                  <label class="form-check-label" for="firstCheckbox">Settings</label>
                </li>
                <li class="list-group-item border-0">
                  <input
                    class="form-check-input me-2 border-2 border-black"
                    type="checkbox"
                    value=""
                    id="firstCheckbox"
                  />
                  <label class="form-check-label" for="firstCheckbox">Tast Menu</label>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="fs-4 my-3">Deactivate Account</h2>
              <p class="d-flex align-items-center text-danger">
                <span class="material-icons me-2"> warning </span>This cannot be undone!
              </p>
              <button type="button" class="btn btn-outline-danger w-100 py-3">
                Deactivate This Account
              </button>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-success px-5 rounded-0 me-2"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-success px-5 rounded-0">Update</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="px-4 mt-5">
    <nav aria-label="Page navigation example" class="ms-auto">
      <ul class="pagination pagination-sm justify-content-end">
        <li class="page-item border-green rounded-start d-flex align-items-center">
          <a class="p-2 text-black d-flex" href="#"
            ><span class="material-icons text-green"> chevron_left </span></a
          >
        </li>
        <li class="page-item border-green d-flex align-items-center">
          <a class="py-2 px-3 text-white bg-green" href="#">1</a>
        </li>
        <li class="page-item border-green d-flex align-items-center">
          <a class="py-2 px-3 text-black" href="#">2</a>
        </li>
        <li class="page-item border-green d-flex align-items-center">
          <a class="py-2 px-3 text-black" href="#">3</a>
        </li>
        <li class="page-item border-green rounded-end d-flex align-items-center">
          <a class="p-2 text-black d-flex" href="#"
            ><span class="material-icons text-green"> chevron_right </span></a
          >
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const adminList = [
      {
        name: 'Emir Wicks',
        email: 'emir.wicks@mail.com',
        verify: 'Yes'
      },
      {
        name: 'Zaina Goldsmith',
        email: 'zaina.goldsmith@mail.com',
        verify: 'Yes'
      },
      {
        name: 'Mahima Lopez',
        email: 'mahima.lopez@mail.com',
        verify: 'Yes'
      },
      {
        name: 'Pharrell Murray',
        email: 'pharrell.murray@mail.com',
        verify: 'Yes'
      },
      {
        name: 'Annika Mcbride',
        email: 'annika.mcbride@mail.com',
        verify: 'Yes'
      },
      {
        name: 'Fatimah Clark',
        email: 'fatimah.clark@mail.com',
        verify: 'Yes'
      },
      {
        name: 'Klaudia Rhodes',
        email: 'klaudia.rhodes@mail.com',
        verify: 'Yes'
      },
      {
        name: 'Tillie Lucero',
        email: 'tillie.lucero@mail.com',
        verify: 'Yes'
      },
      {
        name: 'Sabrina Stephenson',
        email: 'sabrina.stephenson@mail.com',
        verify: 'Yes'
      },
      {
        name: 'Annie Smith',
        email: 'annie.smith@mail.com',
        verify: 'Yes'
      }
    ]
    const expandIcon = ref('expand_more')

    const toggle = function () {
      if (expandIcon.value === 'expand_more') {
        expandIcon.value = 'expand_less'
      } else {
        expandIcon.value = 'expand_more'
      }
    }

    return {
      adminList,
      toggle,
      expandIcon
    }
  }
}
</script>
