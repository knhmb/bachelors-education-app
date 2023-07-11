<template>
  <ion-page>
    <ion-header :class="{ 'is-hidden': hide }">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            text=""
            :default-href="pageBackLink"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <slot />
    </ion-content>
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
} from "@ionic/vue";

export default {
  props: ["pageTitle", "pageBackLink", "hide"],
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
  },
};
</script>

<style scoped>
.is-hidden {
  display: none;
}
</style>
