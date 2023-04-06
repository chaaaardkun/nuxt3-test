<script setup>
const props = defineProps(['placeholder']);
</script>

<template>
  <input
    type="email"
    class="input form-control"
    id="input"
    :placeholder="props.placeholder"
    aria-describedby="emailHelp"
  />
</template>

<style scoped lang="scss">
.input {
  border-color: #666666;

  &::placeholder {
    color: #555555;
  }
}
</style>
