<template>
  <form>
    <ion-list>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Username" required></base-input>
          <ion-icon type="text" slot="start" :icon="personOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Phone"></base-input>
          <ion-icon type="tel" slot="start" :icon="callOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Password"></base-input>
          <ion-icon type="password" slot="start" :icon="keyOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Confirm Password"></base-input>
          <ion-icon type="password" slot="start" :icon="keyOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Child's Name"></base-input>
          <ion-icon type="text" slot="start" :icon="personOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Child's Age"></base-input>
          <ion-icon
            type="text"
            slot="start"
            :icon="calendarNumberOutline"
          ></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Child's Grade"></base-input>
          <ion-icon
            type="text"
            slot="start"
            :icon="calendarNumberOutline"
          ></ion-icon>
        </div>
      </ion-item>
    </ion-list>
    <base-button router-link="/create-account-2">Next</base-button>
  </form>
</template>

<script>
import { IonList, IonItem, IonIcon } from "@ionic/vue";
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
    IonIcon,
  },
  data() {
    return { personOutline, callOutline, keyOutline, calendarNumberOutline };
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