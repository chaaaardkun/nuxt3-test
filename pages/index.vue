<script setup>
import Header from '~/components/layout/Header/Header.vue';
import Breadcrumbs from '~/components/ui/Breadcrumbs.vue';
import Switch from '~/components/ui/Switch.vue';
import ProgressBar from '~/components/ui/ProgressBar.vue';
import ProfileCard from '~/components/templates/ProfileCard.vue';
</script>

<template>
  <Header />

  <div class="subheader">
    <div
      class="container d-flex justify-content-between flex-nowrap align-items-center"
    >
      <Breadcrumbs />
      <Switch />
      <ProgressBar />
    </div>
  </div>

  <div class="wrapper container">
    <div class="row">
      <ProfileCard class="col-2" />

      <ProfileCard class="col-10" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  margin-top: 2.313rem;
}
.subheader {
  padding: 1.25rem;
  border: solid 1px #e8e8f3;
  border-left: none;
  border-right: none;
}
</style>
