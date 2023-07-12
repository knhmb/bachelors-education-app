<template>
  <base-layout :hide-header="true" :hide-footer="true" :add-padding="true">
    <ion-img src="/assets/image-1.png"></ion-img>
    <p>Login to your account</p>
    <login-form></login-form>
  </base-layout>
</template>

<script>
import { IonImg } from "@ionic/vue";
import LoginForm from "../components/login/LoginForm.vue";

export default {
  components: {
    IonImg,
    LoginForm,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
ion-img {
  margin-top: 3.5rem;
  width: 20rem;
  margin-left: auto;
  margin-right: auto;
}

p {
  color: var(--ion-text-color-primary);
  text-align: center;
  font-family: var(--ion-font-family);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
</style>