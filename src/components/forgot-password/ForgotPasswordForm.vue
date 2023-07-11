<template>
  <form>
    <ion-list>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Email" required></base-input>
          <ion-icon type="email" slot="start" :icon="mailOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="OTP"></base-input>
          <ion-icon type="text" slot="start" :icon="createOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="New Password"></base-input>
          <ion-icon type="password" slot="start" :icon="keyOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Confirm Password"></base-input>
          <ion-icon type="password" slot="start" :icon="keyOutline"></ion-icon>
        </div>
      </ion-item>
    </ion-list>
    <base-button>Reset Password</base-button>
  </form>
</template>
  
  <script>
import { IonList, IonItem, IonIcon } from "@ionic/vue";
import { keyOutline, createOutline, mailOutline } from "ionicons/icons";

export default {
  components: {
    IonList,
    IonItem,
    IonIcon,
  },
  data() {
    return { keyOutline, createOutline, mailOutline };
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
</style>