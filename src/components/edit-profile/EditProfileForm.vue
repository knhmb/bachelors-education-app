<template>
  <form>
    <ion-list>
      <ion-item lines="none">
        <div class="input-content">
          <base-input
            v-model="id"
            disabled
            placeholder="Id"
            required
          ></base-input>
          <ion-icon type="text" slot="start" :icon="idCardOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input
            v-model="email"
            disabled
            placeholder="Email"
            required
          ></base-input>
          <ion-icon type="email" slot="start" :icon="mailOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Username" required></base-input>
          <ion-icon type="text" slot="start" :icon="personOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Phone required"></base-input>
          <ion-icon type="tel" slot="start" :icon="callOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Child's Name" required></base-input>
          <ion-icon type="text" slot="start" :icon="personOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Child's Age" required></base-input>
          <ion-icon
            type="text"
            slot="start"
            :icon="calendarNumberOutline"
          ></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <div class="input-content">
          <base-input placeholder="Child's Grade" required></base-input>
          <ion-icon
            type="text"
            slot="start"
            :icon="calendarNumberOutline"
          ></ion-icon>
        </div>
      </ion-item>
    </ion-list>
    <base-button>Save</base-button>
  </form>
</template>

<script>
import { IonList, IonItem, IonIcon } from "@ionic/vue";
import {
  personOutline,
  callOutline,
  keyOutline,
  calendarNumberOutline,
  mailOutline,
  idCardOutline,
} from "ionicons/icons";

export default {
  components: {
    IonList,
    IonItem,
    IonIcon,
  },
  data() {
    return {
      personOutline,
      callOutline,
      keyOutline,
      calendarNumberOutline,
      mailOutline,
      idCardOutline,
      id: "19729461",
      email: "chantaiman@mail.com",
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