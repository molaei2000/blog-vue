<script setup lang="ts">
import { onMounted, ref } from 'vue'
import api from '@/plugin/api'
import type { blog } from '@/types'
import { useRouter } from 'vue-router'

const blogs = ref<blog[]>([])

const router = useRouter()

onMounted(async () => {
  const { data } = await api<blog[]>('posts', { method: 'get' })
  blogs.value = data
})
</script>

<template>
  <div class="container mx-auto">
    <ul>
      <li
        v-for="blog in blogs"
        :key="blog.id"
        @click="router.push({ name: 'post.single', params: { id: blog.id } })"
      >
        {{ blog.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
