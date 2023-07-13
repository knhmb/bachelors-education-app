<template>
  <base-layout
    page-title="Reservation History"
    :add-padding="true"
    :hide-footer="true"
    page-back-link="/account"
  >
    <ion-card v-for="item in 3" :key="item">
      <div class="reservation-item">
        <p>Reservation No.</p>
        <p>R0000001</p>
      </div>
      <div class="reservation-item">
        <p>Reservation Course</p>
        <p>Summer School</p>
      </div>
      <div class="reservation-item">
        <p>Contact Information</p>
        <p>Karen Chan</p>
        <p>9123 9123</p>
      </div>
      <div class="reservation-item">
        <p>Status</p>
        <p>In progress</p>
      </div>
    </ion-card>
  </base-layout>
</template>

<script>
import { IonCard } from "@ionic/vue";

export default {
  components: {
    IonCard,
  },
};
</script>

<style scoped>
ion-card {
  padding: 1rem;
  --background: var(--ion-color-primary-contrast);
  margin-top: 0;
}

.reservation-item p {
  font-family: var(--ion-font-family);
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  color: var(--ion-text-color-primary);
  font-size: 14px;
  margin-top: 0.5rem;
}

.reservation-item p:first-of-type {
  color: #86909c;
  font-size: 16px;
  margin: 0;
}
</style>