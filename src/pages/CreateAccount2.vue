<template>
  <base-layout
    :add-padding="true"
    page-title="Create Account"
    page-back-link="/create-account"
    :hide-footer="true"
  >
    <h3>Please enter your email address We will send your the OTP via email</h3>
    <create-account-form-2></create-account-form-2>
  </base-layout>
</template>

<script>
import CreateAccountForm2 from "../components/create-account/CreateAccountForm2.vue";

export default {
  components: {
    CreateAccountForm2,
  },
};
</script>

<style scoped>
h3 {
  color: var(--ion-text-color-primary);
  text-align: center;
  font-family: var(--ion-font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin-bottom: 1.5rem;
}
</style>