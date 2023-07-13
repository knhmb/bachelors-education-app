<template>
  <ion-tabs>
    <ion-router-outlet></ion-router-outlet>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="news" href="/news">
        <ion-icon :icon="volumeMediumOutline"></ion-icon>
        News
      </ion-tab-button>
      <ion-tab-button tab="course" href="/course">
        <ion-icon :icon="easelOutline"></ion-icon>
        Course
      </ion-tab-button>
      <ion-tab-button tab="reservation" href="/reservation">
        <ion-icon :icon="calendarOutline"></ion-icon>
        Reservation
      </ion-tab-button>
      <ion-tab-button tab="account" href="/account">
        <ion-icon :icon="personOutline"></ion-icon>
        Account
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  volumeMediumOutline,
  easelOutline,
  calendarOutline,
  personOutline,
} from "ionicons/icons";

export default {
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonRouterOutlet,
  },
  data() {
    return {
      volumeMediumOutline,
      easelOutline,
      calendarOutline,
      personOutline,
    };
  },
};
</script>

<style scoped>
ion-tabs {
  z-index: 9999 !important;
}

ion-tab-button {
  color: #c9cdd4;
  font-family: var(--ion-font-family);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  background: var(--ion-color-primary-contrast);
}

ion-tab-button.tab-selected {
  color: var(--ion-color-primary);
}
</style>