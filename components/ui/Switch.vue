<template>
  <div class="form-check form-switch d-flex gap-3">
    <p class="form-check-label mr-3 label">Sponsor</p>
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDefault"
    />
    <label class="form-check-label" for="flexSwitchCheckDefault">Creator</label>
  </div>
</template>

<style scoped lang="scss">
.label {
  font-size: 0.875rem;
  left: -44px;
  position: relative;
}
label {
  font-size: 0.875rem;
}
.form-check-input {
  height: 20px;
  width: 40px;
  background-color: #f29820;
  border: 0;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}
</style>
