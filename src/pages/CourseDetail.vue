<template>
  <base-layout page-title="Course Detail" page-back-link="/course">
    <ion-img src="/assets/image-3.png"></ion-img>
    <div class="course-content">
      <p>Summer School</p>
      <p class="description">
        (Content) <br />
        Preliminary study of subject content for the coming year: students
        entering primary one to secondary one Course objectives Learn the key
        knowledge of Chinese, English, and Mathematics courses in the next
        school year in advance, make full preparations, take the lead, and lay a
        solid foundation for the new school year, so that learning will get
        twice the result with half the effort. Course features 1. Divide into
        classes according to grades, teach students in accordance with their
        aptitude 2. Using exclusive refined note-taking materials 3. With the
        after-class evaluation report, students' learning progress can be seen
        at a glance
      </p>
    </div>
  </base-layout>
</template>
  
  <style scoped>
.course-content {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.course-content p {
  color: var(--ion-color-primary);
  font-family: var(--ion-font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}

.course-content p.description {
  color: #4e5969;
  font-size: 14px;
  font-weight: 400;
}
</style>