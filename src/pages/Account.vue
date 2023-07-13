<template>
  <base-layout
    page-title="Account"
    :hide-back-button="true"
    :add-padding="true"
  >
    <small>Personal</small>
    <ion-card>
      <div class="item" @click="$router.push('/edit-profile')">
        <p>Edit Profile</p>
        <ion-icon :icon="chevronForwardOutline"></ion-icon>
      </div>
      <div class="item" @click="$router.push('/change-password')">
        <p>Change Password</p>
        <ion-icon :icon="chevronForwardOutline"></ion-icon>
      </div>
      <div class="item" @click="$router.push('/reservation-history')">
        <p>Reservation History</p>
        <ion-icon :icon="chevronForwardOutline"></ion-icon>
      </div>
    </ion-card>
    <Setting />
  </base-layout>
</template>

<script>
import { IonIcon, IonCard } from "@ionic/vue";
import { chevronForwardOutline } from "ionicons/icons";
import Setting from "../components/account/Setting.vue";

export default {
  components: {
    IonIcon,
    Setting,
    IonCard,
  },
  data() {
    return {
      chevronForwardOutline,
    };
  },
};
</script>

<style scoped>
ion-card {
  margin-top: 0;
  --background: var(--ion-color-primary-contrast);
}

small {
  color: #86909c;
  font-family: var(--ion-font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0.5rem;
  display: block;
}

ion-item {
  --padding-start: 0;
  --inner-padding-end: 0;
  --border-color: #e5e6eb;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #e5e6eb;
  padding-bottom: 0.5rem;
}

.item:last-of-type {
  border: none;
}

.item p {
  color: var(--ion-text-color-primary);
  font-family: var(--ion-font-family);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 0.5rem;
}

.item p,
.item ion-icon {
  padding: 0 1rem;
}

ion-icon {
  font-size: 1.5rem;
  color: #c9cdd4;
}
</style>