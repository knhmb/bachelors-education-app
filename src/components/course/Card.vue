<template>
  <div
    class="card"
    v-for="item in 5"
    :key="item"
    @click="$router.push('/course/1')"
  >
    <div class="left">
      <ion-img src="/assets/img.png"></ion-img>
    </div>
    <div class="right">
      <p class="title">Summer School</p>
      <p>
        {{
          `Objects of previewing subject content for the coming year: Curriculum
        objectives for students entering Primary One to Secondary One to learn
        the key knowledge of Chinese, English, and Mathematics courses in the
        next school year in advance, to make sufficient preparations, first…`.substring(
            0,
            45
          )
        }}...
      </p>
    </div>
  </div>
  <!-- <ion-card>

    <ion-card-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-img src="/assets/img.png"></ion-img>
          </ion-col>
          <ion-col>
            Here's a small text description for the card content. Nothing more,
            nothing less.
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-content>
  </ion-card> -->
</template>

<script>
import { IonCard, IonCardHeader, IonCardContent, IonImg } from "@ionic/vue";

export default {
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonImg,
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 0.5rem;
  display: flex;
  /* align-items: center; */
  background: var(--ion-color-primary-contrast);
}

.card ion-img {
  width: 10rem;
}

.card .right {
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card p.title {
  font-weight: 700;
  width: 100%;
}

.card p {
  /* overflow: hidden; */
  color: var(--ion-color-primary);
  /* text-overflow: ellipsis; */
  /* white-space: nowrap; */
  font-family: var(--ion-font-family);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin: 0;
  /* width: 10rem; */
}
</style>