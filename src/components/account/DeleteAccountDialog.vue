<template>
  <ion-modal id="example-modal" ref="modal" trigger="open-delete-dialog">
    <div class="wrapper">
      <h4>Delete Account</h4>
      <p>
        Are you sure you want to delete your account? <br />
        Once you confirm this action, the account will be deleted immediately.
        You can’t undo this action.
      </p>
      <base-button @click="confirm">Delete My Account</base-button>
      <base-button @click="confirm">Back</base-button>
    </div>
  </ion-modal>
</template>
  
  <script>
import { IonModal, IonButton, modalController } from "@ionic/vue";

export default {
  components: {
    IonModal,
    IonButton,
  },
  methods: {
    confirm() {
      return modalController.dismiss("null", "confirm");
    },
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
  text-align: center;
  font-family: var(--ion-font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}

ion-modal#example-modal p,
ion-modal#example-modal h4 {
  margin: 20px 20px 10px 20px;
}

ion-modal#example-modal p {
  color: #4e5969;
  text-align: center;
  font-family: var(--ion-font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

ion-modal#example-modal ion-button {
  font-family: var(--ion-font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  --background: #f53f3f;
  --color: var(--ion-color-primary-contrast);
  --background-activated: #eb7b7bc7;
}

ion-modal#example-modal ion-button:nth-of-type(2) {
  --background: var(--ion-color-primary-contrast);
  --border-color: #e5e6eb;
  --border-width: 2px;
  --border-style: solid;
  --color: #86909c;
  margin-top: 0.5rem;
  --background-activated: var(--ion-color-primary-contrast);
}

ion-modal#example-modal ion-button::part(native) {
  width: 100%;
  margin-left: auto;
  margin-right: 20px;
}

ion-modal#example-modal .wrapper {
  margin-bottom: 10px;
}
</style>