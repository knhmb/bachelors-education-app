<template>
  <base-layout class="create-account" page-title="Create Account">
    <h3>Please enter your details</h3>
    <ion-list>
      <ion-item lines="none">
        <div class="input-content">
          <base-button placeholder="Username"></base-button>
          <ion-icon type="text" slot="start" :icon="personOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-button placeholder="Phone"></base-button>
          <ion-icon type="tel" slot="start" :icon="callOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-button placeholder="Password"></base-button>
          <ion-icon type="password" slot="start" :icon="keyOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-button placeholder="Confirm Password"></base-button>
          <ion-icon type="password" slot="start" :icon="keyOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-button placeholder="Child's Name"></base-button>
          <ion-icon type="text" slot="start" :icon="personOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-button placeholder="Child's Age"></base-button>
          <ion-icon
            type="text"
            slot="start"
            :icon="calendarNumberOutline"
          ></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-button placeholder="Child's Grade"></base-button>
          <ion-icon
            type="text"
            slot="start"
            :icon="calendarNumberOutline"
          ></ion-icon>
        </div>
      </ion-item>
      <ion-button expand="block" shape="round">Next</ion-button>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonButton } from "@ionic/vue";
import {
  personOutline,
  callOutline,
  keyOutline,
  calendarNumberOutline,
} from "ionicons/icons";

export default {
  components: {
    IonList,
    IonItem,
    IonButton,
  },
  data() {
    return { personOutline, callOutline, keyOutline, calendarNumberOutline };
  },
};
</script>

<style scoped>
h3 {
  color: var(--ion-text-color-primary);
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin-bottom: 1.5rem;
}

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

ion-button {
  min-height: 50px;
}
</style>