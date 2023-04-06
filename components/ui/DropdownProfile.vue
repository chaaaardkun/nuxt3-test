<template>
  <div class="d-flex gap-3 align-items-center">
    <font-awesome-icon :icon="['fas', 'file']" />
    <font-awesome-icon :icon="['fas', 'bell']" />
    <font-awesome-icon :icon="['fas', 'envelope']" />

    <div class="dropdown">
      <a
        class="btn btn-dropdown dropdown-toggle d-flex flex-column gap-0"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sponsor
        <font-awesome-icon :icon="['fas', 'angle-down']" />
      </a>

      <div class="avatar-wrapper">
        <img src="https://i.pravatar.cc/40" class="avatar" />
      </div>
      <div class="notification-bubble">57</div>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dropdown {
  display: flex;

  .btn-dropdown {
    background: white;
    border: solid 1px #999999;
    border-right: 0;
    height: 44px;
    border-radius: 1.5rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
}
.btn-dropdown::after {
  content: none;
}

.notification-bubble {
  position: absolute;
  right: -5px;
  border: solid 1px white;
  top: 25px;
  background: #3abeff;
  color: white;
  border-radius: 999999px;
  font-size: 0.75rem;
  line-height: 0.75rem;
  padding: 0.25rem;
}

.avatar-wrapper {
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  border: solid 1px #999999;
  border-left: 0;
}
.avatar {
  border-radius: 999999px;
  border: solid 1px #999999;
}
</style>
