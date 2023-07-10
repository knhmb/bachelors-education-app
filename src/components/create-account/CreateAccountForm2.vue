<template>
  <form>
    <ion-list>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Email"></base-input>
          <ion-icon type="email" slot="start" :icon="mailOutline"></ion-icon>
          <p class="otp">Send OTP</p>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="OTP"></base-input>
          <ion-icon type="tel" slot="start" :icon="createOutline"></ion-icon>
        </div>
      </ion-item>
    </ion-list>
    <base-button>Create Account</base-button>
  </form>
</template>
  
  <script>
import { IonList, IonItem, IonButton, IonIcon } from "@ionic/vue";
import { mailOutline, createOutline } from "ionicons/icons";

export default {
  components: {
    IonList,
    IonItem,
    IonButton,
    IonIcon,
  },
  data() {
    return { mailOutline, createOutline };
  },
};
</script>
  
  <style scoped>
.input-content {
  position: relative;
  width: 100%;
}

ion-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
}

ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}

p.otp {
  color: var(--ion-text-color-primary-contrast);
  font-family: var(--ion-font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  z-index: 99;
  margin: 0;
  cursor: pointer;
}

/* .input-content.otp :deep(.native-input) {
  padding: 0.5rem 4rem;
} */
</style>