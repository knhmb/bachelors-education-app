<template>
  <ion-page>
    <ion-header :class="{ 'is-hidden': hideHeader }">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            :class="{ 'is-hidden': hideBackButton }"
            text=""
            :default-href="pageBackLink"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :class="{ 'ion-padding': addPadding }">
      <slot />
    </ion-content>
    <ion-footer :class="{ 'is-hidden': hideFooter }">
      <ion-toolbar class="footer-toolbar">
        <Tabs />
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonFooter,
} from "@ionic/vue";
import Tabs from "../Tabs.vue";

export default {
  props: [
    "pageTitle",
    "pageBackLink",
    "hideHeader",
    "hideFooter",
    "hideBackButton",
    "addPadding",
  ],
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    Tabs,
    IonFooter,
  },
};
</script>

<style scoped>
.is-hidden {
  display: none !important;
}
</style>
