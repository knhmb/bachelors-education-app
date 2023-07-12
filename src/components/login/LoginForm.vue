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
          <base-input placeholder="Password" required></base-input>
          <ion-icon type="password" slot="start" :icon="keyOutline"></ion-icon>
        </div>
      </ion-item>
      <ion-item lines="none">
        <p class="forgot-password" @click="$router.push('/forgot-password')">
          Forgot Password?
        </p>
      </ion-item>
      <ion-item>
        <base-button router-link="/news">Login</base-button>
      </ion-item>
      <ion-item lines="none">
        <base-button class="account-btn" router-link="/create-account"
          >Create Account</base-button
        >
      </ion-item>
    </ion-list>
  </form>
</template>
  
  <script>
import { IonIcon, IonList, IonItem } from "@ionic/vue";
import { mailOutline, keyOutline } from "ionicons/icons";

export default {
  components: {
    IonIcon,
    IonList,
    IonItem,
  },
  data() {
    return {
      mailOutline,
      keyOutline,
    };
  },
};
</script>
  
  <style scoped>
ion-img {
  margin-top: 3.5rem;
  width: 20rem;
  margin-left: auto;
  margin-right: auto;
}

p.forgot-password {
  color: var(--ion-color-primary);
  font-size: 16px;
  text-decoration-line: underline;
  margin-top: 0;
  font-family: var(--ion-font-family);
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  cursor: pointer;
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
  width: 100%;
  margin-bottom: 1rem;
  font-weight: 600;
}

ion-button.account-btn {
  --background: var(--ion-color-primary-contrast);
  --border-color: var(--ion-color-primary);
  --border-width: 1px;
  --border-style: solid;
  color: var(--ion-color-primary);
}
</style>