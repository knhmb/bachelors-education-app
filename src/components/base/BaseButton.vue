<template>
  <ion-button expand="block" shape="round"><slot /></ion-button>
</template>

<script>
import { IonButton } from "@ionic/vue";

export default {
  components: {
    IonButton,
  },
};
</script>

<style scoped>
ion-button {
  min-height: 50px;
  --box-shadow: none;
}
</style>