<template>
  <ion-input></ion-input>
</template>

<script>
import { IonInput } from "@ionic/vue";

export default {
  components: {
    IonInput,
  },
};
</script>

<style scoped>
:deep(.native-input) {
  padding: 0rem 2.5rem;
}

.sc-ion-input-md-h:not(.legacy-input) {
  min-height: 50px;
}
</style>