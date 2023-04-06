<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#">Dashboard</a>
        <font-awesome-icon :icon="['fas', 'angle-down']" />
      </li>
      <li class="breadcrumb-item">
        <a href="#">Sponsor Profile</a>
        <font-awesome-icon :icon="['fas', 'angle-down']" />
      </li>
      <li class="breadcrumb-item active" aria-current="page">Verification</li>
    </ol>
  </nav>
</template>

<style scoped lang="scss">
.breadcrumb-item {
  color: #f29820;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  &:before {
    content: none;
  }
  a {
    font-size: 0.875rem;
    color: #f29820;
    text-decoration: none;
  }
}
svg {
  transform: rotate(-90deg);
}
</style>
