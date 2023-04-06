<script setup>
const props = defineProps(['placeholder']);
</script>

<template>
  <select class="form-select" :aria-label="props.placeholder">
    <option selected>{{ props.placeholder }}</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</template>

<style scoped lang="scss">
select {
  color: #555555;
}
</style>
