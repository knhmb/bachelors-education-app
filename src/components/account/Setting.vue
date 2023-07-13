<template>
  <small>Setting</small>
  <ion-card>
    <div class="item">
      <p>Privacy Policy</p>
      <ion-icon :icon="chevronForwardOutline"></ion-icon>
    </div>
    <div class="item">
      <p>Terms & Conditions</p>
      <ion-icon :icon="chevronForwardOutline"></ion-icon>
    </div>
    <div class="item">
      <p>About Us</p>
      <ion-icon :icon="chevronForwardOutline"></ion-icon>
    </div>
    <div class="item">
      <p>Contact Us</p>
      <ion-icon :icon="chevronForwardOutline"></ion-icon>
    </div>
    <div class="item">
      <p>Logout</p>
      <ion-icon :icon="chevronForwardOutline"></ion-icon>
    </div>
  </ion-card>
  <base-button id="open-delete-dialog">Delete Account</base-button>
  <delete-account-dialog></delete-account-dialog>
</template>

<script>
import { IonIcon, IonCard } from "@ionic/vue";
import { chevronForwardOutline } from "ionicons/icons";
import DeleteAccountDialog from "./DeleteAccountDialog.vue";

export default {
  components: {
    IonIcon,
    IonCard,
    DeleteAccountDialog,
  },
  data() {
    return {
      chevronForwardOutline,
    };
  },
};
</script>

<style scoped>
ion-card {
  margin-top: 0;
  --background: var(--ion-color-primary-contrast);
}

small {
  color: #86909c;
  font-family: var(--ion-font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0.5rem;
  display: block;
}

ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  --border-color: #e5e6eb;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #e5e6eb;
  padding-bottom: 0.5rem;
}

.item:last-of-type {
  border: none;
}

.item p {
  color: var(--ion-text-color-primary);
  font-family: var(--ion-font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 0.5rem;
}

.item p,
.item ion-icon {
  padding: 0 1rem;
}

ion-icon {
  font-size: 1.5rem;
  color: #c9cdd4;
}

ion-button::part(native) {
  background: #f53f3f;
}
</style>