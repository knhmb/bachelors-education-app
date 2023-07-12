<template>
  <base-layout page-title="News Detail" page-back-link="/news">
    <ion-img src="/assets/image-9.png"></ion-img>
    <div class="news-content">
      <p>(Title) 2022 regular courses are now recruiting</p>
      <p>
        (Content) <br />
        Modern Junior Bachelor 2022 Regular Course has been launched! Places are
        limited, first come first served, please check with the nearest branch
        immediately! Parents can call 2142 1111 for enquiries.
      </p>
    </div>
  </base-layout>
</template>

<style scoped>
.news-content {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.news-content p {
  color: var(--ion-color-primary);
  font-family: var(--ion-font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}

.news-content p:nth-of-type(2) {
  color: #4e5969;
  font-size: 14px;
  font-weight: 400;
}
</style>