<template>
    <swiper :modules="modules" :pagination="{ clickable: true }">
      <swiper-slide><img src="../assets/logo.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/logo.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/logo.png" alt=""></swiper-slide>
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    // Import Swiper styles
    import 'swiper/css';

    import { Pagination} from 'swiper';
    import 'swiper/css/pagination';
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      data(){
        return{
            modules:[Pagination]
        }
      }
    };
  </script>
<style scoped>


</style>