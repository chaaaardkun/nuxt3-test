<script setup>
import IconBackID from '~/assets/svg/back-id.svg';
import IconFrontID from '~/assets/svg/front-id.svg';
import IconUpload from '~/assets/svg/upload.svg';

const props = defineProps(['type']);
</script>

<template>
  <div class="upload-wrapper">
    <IconBackID class="mb-2" v-if="props.type === 'backId'" />
    <IconFrontID class="mb-2" v-else-if="props.type === 'frontId'" />
    <IconUpload class="mb-2" v-else />
    <h5>Upload Front</h5>
    <h6 class="mb-4">JPEG or PNG only</h6>
    <div class="custom-file">
      <input type="file" class="file-input" id="inputGroupFile03" />
      <label class="file-btn" for="inputGroupFile03">Select files</label>
    </div>
  </div>
</template>

<style scoped lang="scss">
h5 {
  font-size: 1rem;
  font-weight: 600;
}
h6 {
  font-weight: 300;
  font-size: 0.875rem;
}
.upload-wrapper {
  flex-direction: column;
  border: solid 1px #e8e8f3;
  border-radius: 0.5rem;
  padding: 1.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.file-btn {
  background-color: #f29820;
  padding: 0.625rem 1.25rem;
  color: white;
  border-radius: 1.5rem;
  cursor: pointer;
}
.file-input {
  display: none;
}
</style>
