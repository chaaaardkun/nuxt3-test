<template>
  <div class="d-block">
    <p class="d-flex justify-content-between">
      Profile Completeness
      <span>90%</span>
    </p>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        aria-label="Basic example"
        style="width: 90%"
        aria-valuenow="90"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
p {
  font-size: 0.875rem;
}
.progress {
  width: 219px;
  height: 4px;

  &-bar {
    background-color: #f29820;
  }
}
</style>
