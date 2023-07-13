<template>
  <base-layout page-title="Reservation" :hide-back-button="true">
    <ion-img src="/assets/image-11.png"></ion-img>
    <h3>
      網上留位 <br />
      Online Reservation
    </h3>
    <div class="reservation-content">
      <p>
        Please ensure the information of your child in the account is accurate
        as we will use it for registration.
      </p>
      <ion-select
        :toggleIcon="chevronDownOutline"
        placeholder="Course Category"
        shape="round"
        fill="outline"
      ></ion-select>
      <ion-select
        :toggleIcon="chevronDownOutline"
        placeholder="Course"
        shape="round"
        fill="outline"
      ></ion-select>
      <ion-select
        :toggleIcon="chevronDownOutline"
        placeholder="Contact Name"
        shape="round"
        fill="outline"
      ></ion-select>
      <ion-select
        :toggleIcon="chevronDownOutline"
        placeholder="Contact Number"
        shape="round"
        fill="outline"
      ></ion-select>
      <base-button id="open-reservation-dialog">Submit</base-button>
    </div>
    <Dialog />
  </base-layout>
</template>

<script>
import { IonSelect, IonImg, IonButton } from "@ionic/vue";
import { chevronDownOutline } from "ionicons/icons";
import Dialog from "../components/reservation/Dialog.vue";

export default {
  components: {
    Dialog,
    IonSelect,
    IonImg,
    IonButton,
  },
  data() {
    return {
      chevronDownOutline,
    };
  },
};
</script>

<style scoped>
.reservation-content {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

h3 {
  color: var(--ion-color-primary-contrast);
  font-family: var(--ion-font-family);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  position: absolute;
  top: 1.5rem;
  left: 1rem;
}

p {
  color: var(--ion-text-color-primary);
  text-align: center;
  font-family: var(--ion-font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

ion-select {
  width: 100%;
  min-height: 50px !important;
  background: var(--ion-color-primary-contrast);
  border-radius: 500px;
  padding: 0rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid var(--ion-color-primary);
}

ion-select::part(container) {
  width: 100%;
}
</style>