<script setup>
import { Blog } from '@/models/Blog';


const props = defineProps({
  blogProp: {type: Blog, required: true}
})
</script>


<template>
  <div class="card">
    <section class="row p-3">
        <div class="col-8">
          <div class="d-flex align-items-center mb-2">
            <img class="img-fluid profile-img me-2" :src="blogProp.creator.picture" :alt="blogProp.creator.name">
            <h6>{{ blogProp.creator.name }}</h6>
          </div>
          <h4>{{blogProp.title}}</h4>
          <p class="body ">{{ blogProp.body }}</p>
          <span>{{ blogProp.publishedOn }}</span>
        </div>
        <div class="col-4 img-fluid">
          <img class="blog-img" :src="blogProp.imgUrl" :alt="blogProp.title">
        </div>
   
    </section>
  </div>
</template>


<style lang="scss" scoped>
.blog-img{
  height: 25dvh;
  width: 100%;
}

.profile-img{
  height: 50px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
}

img{
  object-fit: cover;
  object-position: center;
}

.body{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
</style>