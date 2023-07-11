<template>
  <base-layout
    class="create-account"
    page-title="Create Account"
    page-back-link="/login"
  >
    <h3>Please enter your details</h3>
    <create-account-form></create-account-form>
  </base-layout>
</template>

<script>
import CreateAccountForm from "../components/create-account/CreateAccountForm.vue";

export default {
  components: {
    CreateAccountForm,
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