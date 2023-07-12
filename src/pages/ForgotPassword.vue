<template>
  <base-layout
    :add-padding="true"
    page-title="Forgot Password"
    page-back-link="/login"
    :hide-footer="true"
  >
    <p>Please enter your email address We will send your the OTP via email</p>
    <forgot-password-form></forgot-password-form>
  </base-layout>
</template>

<script>
import ForgotPasswordForm from "../components/forgot-password/ForgotPasswordForm.vue";

export default {
  components: {
    ForgotPasswordForm,
  },
};
</script>

<style scoped>
p {
  color: var(--ion-text-colot-primary);
  text-align: center;
  font-family: var(--ion-font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
</style>