<script setup>
import Logo from '@/assets/logo.svg';
import DropdownProfile from '~/components/ui/DropdownProfile.vue';
</script>

<template>
  <nav class="navbar">
    <div
      class="container d-flex justify-content-between flex-nowrap align-items-center"
    >
      <a class="navbar-brand" href="#">
        <Logo />
      </a>

      <div class="search-input input-group">
        <input
          class="form-control border-end-0 border"
          placeholder="Smart Search"
          id="example-search-input"
        />
        <span class="input-group-append">
          <button
            class="btn btn-search-icon btn-outline-secondary bg-white border-start-0 border ms-n5 p-3"
            type="button"
          >
            <font-awesome-icon icon="fa-solid fa-search " />
          </button>
        </span>
      </div>

      <DropdownProfile />
    </div>
  </nav>
</template>

<style scoped>
.btn-search-icon {
  border-radius: 0.75rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: black;
}

.search-input {
  max-width: 312px;
}

.search-input input {
  border-radius: 0.75rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-color: #999999;
}
</style>
