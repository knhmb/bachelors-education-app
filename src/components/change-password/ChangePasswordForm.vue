<template>
  <form>
    <ion-list>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Current Password" required></base-input>
          <ion-icon type="password" slot="start" :icon="keyOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="New Password" required></base-input>
          <ion-icon type="password" slot="start" :icon="keyOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Confirm New Password" required></base-input>
          <ion-icon type="password" slot="start" :icon="keyOutline"></ion-icon>
        </div>
      </ion-item>
    </ion-list>
    <base-button>Reset Password</base-button>
  </form>
</template>
  
  <script>
import { IonList, IonItem, IonIcon } from "@ionic/vue";
import { keyOutline } from "ionicons/icons";

export default {
  components: {
    IonList,
    IonItem,
    IonIcon,
  },
  data() {
    return {
      keyOutline,
    };
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