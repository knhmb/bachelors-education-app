<template>
  <base-layout
    :add-padding="true"
    page-title="Change Password"
    :hide-footer="true"
    page-back-link="/account"
  >
    <h4>Enter your new password</h4>
    <change-password-form></change-password-form>
  </base-layout>
</template>
  
  <script>
import ChangePasswordForm from "../components/change-password/ChangePasswordForm.vue";

export default {
  components: {
    ChangePasswordForm,
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