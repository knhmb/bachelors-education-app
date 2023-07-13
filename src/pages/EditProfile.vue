<template>
  <base-layout
    :add-padding="true"
    page-title="Edit Profile"
    :hide-footer="true"
    page-back-link="/account"
  >
    <h4>Edit Your Profile</h4>
    <edit-profile-form></edit-profile-form>
  </base-layout>
</template>

<script>
import EditProfileForm from "../components/edit-profile/EditProfileForm.vue";

export default {
  components: {
    EditProfileForm,
  },
};
</script>

<style scoped>
h4 {
  color: var(--ion-text-color-primary);
  text-align: center;
  font-family: var(--ion-font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin: 1.5rem 0;
}
</style>