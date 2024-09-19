<script setup>
import { blogsService } from '@/services/BlogsService';
import Pop from '@/utils/Pop';
import { onMounted } from 'vue';

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
    <section class="row">
      <div class="col-12">
        <h1>blogs here</h1>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">

</style>
