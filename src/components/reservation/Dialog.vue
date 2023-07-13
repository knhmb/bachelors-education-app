<template>
  <ion-modal id="example-modal" ref="modal" trigger="open-reservation-dialog">
    <div class="wrapper">
      <h4>Reservation Successful</h4>
      <p>
        Thank you for reserving our Course. Your reservation has been received
        successfully. We will contact you soon to confirm the details of your
        reservation. If you need to cancel or reschedule your reservation,
        please contact us in advance.
      </p>
      <ion-button fill="clear">Confirm</ion-button>
    </div>
  </ion-modal>
</template>

<script>
import { IonModal, IonButton } from "@ionic/vue";

export default {
  components: {
    IonModal,
    IonButton,
  },
};
</script>

<style scoped>
ion-modal#example-modal {
  --width: fit-content;
  --max-width: 260px;
  --height: fit-content;
  --border-radius: 6px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  --background: var(--ion-color-primary-contrast);
}

ion-modal#example-modal h4 {
  color: var(--ion-text-color-primary);
  font-family: var(--ion-font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

ion-modal#example-modal p,
ion-modal#example-modal h4 {
  margin: 20px 20px 10px 20px;
}

ion-modal#example-modal p {
  color: #4e5969;
  font-family: var(--ion-font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

ion-modal#example-modal ion-button {
  color: #165dff;
  font-family: var(--ion-font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  width: 100%;
}

ion-modal#example-modal ion-button::part(native) {
  width: fit-content;
  margin-left: auto;
  margin-right: 20px;
}

ion-modal#example-modal .wrapper {
  margin-bottom: 10px;
}
</style>