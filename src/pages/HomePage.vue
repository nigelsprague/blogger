<script setup>
import { AppState } from '@/AppState';
import BlogCard from '@/components/globals/BlogCard.vue';
import { blogsService } from '@/services/BlogsService';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';

const blogs = computed(() => AppState.blogs)

onMounted(() => {
  getAllBlogs()
})

async function getAllBlogs() {
  try {
    await blogsService.getAllBlogs()
  }
  catch (error){
    Pop.meow(error);
  }
}
</script>

<template>
  <div class="container">
    <section v-for="blog in blogs" :key="blog.id" class="row my-3">
      <BlogCard :blogProp="blog" />
    </section>
  </div>
</template>

<style scoped lang="scss">

</style>
