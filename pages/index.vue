<script setup>
import Header from '~/components/layout/Header.vue';
import Subheader from '~/components/layout/Subheader.vue';
import ProfileCard from '~/components/templates/ProfileCard.vue';
import Input from '~/components/ui/Input.vue';
import DropdownSelect from '~/components/ui/DropdownSelect.vue';
import UploadWrapper from '~/components/templates/UploadWrapper.vue';
</script>

<template>
  <Header />
  <Subheader />

  <div class="wrapper container">
    <div class="row">
      <div class="col-md-4">
        <ProfileCard class="w-100" />
      </div>

      <div class="col-md-8">
        <section class="section row">
          <div class="col-6">
            <Input placeholder="Select Country Code" />
          </div>
          <div class="col-6">
            <Input placeholder="Phone Number" />
          </div>
        </section>

        <section class="section mt-4 row">
          <Input placeholder="Email" class="email" />
        </section>

        <section class="section mt-4 row">
          <div class="row">
            <div class="d-flex align-items-center gap-2 mb-2">
              <p>Choose an ID Type to add</p>
              <div class="tooltip-icon">?</div>
            </div>

            <div class="col-6">
              <DropdownSelect placeholder="Issuing Country/Region" />
            </div>
            <div class="col-6">
              <DropdownSelect placeholder="Choose Identification" />
            </div>
          </div>

          <hr class="mt-4" />

          <div class="row">
            <div class="d-flex align-items-center gap-2 mb-2">
              <p>Upload Images of your ID</p>
              <div class="tooltip-icon">?</div>
            </div>
            <div class="col-6">
              <UploadWrapper type="frontId" />
            </div>

            <div class="col-6">
              <UploadWrapper type="backId" />
            </div>
          </div>

          <hr class="mt-4" />

          <div class="row">
            <div class="d-flex align-items-center gap-2 mb-2">
              <p>Take a photo of yourself with your ID</p>
              <div class="tooltip-icon">?</div>
            </div>
            <UploadWrapper />
          </div>
        </section>
      </div>
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

.section {
  border: solid 1px #e8e8f3;
  padding: 1.875rem;
  border-radius: 0.875rem;
}

.email {
  box-shadow: none;
  border: 0;
}

.tooltip-icon {
  display: flex;
  justify-content: center;
  border: solid 1px white;
  background: #888888;
  color: white;
  border-radius: 999999px;
  font-size: 0.5rem;
  padding: 0.125rem;
  width: 1.125rem;
}
</style>
