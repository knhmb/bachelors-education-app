<template>
  <base-layout page-title="News" :hideBackButton="true" :add-padding="true">
    <ion-card v-for="item in 3" :key="item" router-link="/news/1">
      <!-- <ion-card-header>
        <ion-card-title>Card Title</ion-card-title>
        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
      </ion-card-header> -->

      <ion-card-content>
        <ion-img src="/assets/image-9.png"></ion-img>
        <div class="content">
          <p>(Title) 2022 regular courses are now recruiting</p>
          <ion-icon size="large" :icon="chevronForwardOutline"></ion-icon>
        </div>
      </ion-card-content>
    </ion-card>
  </base-layout>
</template>

<script>
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonImg,
  IonIcon,
} from "@ionic/vue";
import { chevronForwardOutline } from "ionicons/icons";

export default {
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonImg,
    IonIcon,
  },
  data() {
    return {
      chevronForwardOutline,
    };
  },
};
</script>

<style scoped>
.item {
  margin-bottom: 1rem;
}

ion-card {
  margin-top: 0;
}

ion-img::part(image) {
  border-radius: 10px;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.content p {
  color: var(--ion-color-primary);
  font-family: var(--ion-font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
</style>