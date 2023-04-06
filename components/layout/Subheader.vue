<script setup>
import Breadcrumbs from '~/components/ui/Breadcrumbs.vue';
import Switch from '~/components/ui/Switch.vue';
import ProgressBar from '~/components/ui/ProgressBar.vue';
</script>

<template>
  <div class="subheader">
    <div
      class="container d-flex justify-content-between flex-nowrap align-items-center"
    >
      <Breadcrumbs />
      <Switch :withLabels="true" />
      <ProgressBar />
    </div>
  </div>
</template>
