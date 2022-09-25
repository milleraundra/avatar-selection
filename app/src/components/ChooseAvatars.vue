<template>
  <ul class="divide-y divide-gray-200">
    <li v-for="person in this.people" :key="person.name" class="py-4 flex">
      <img class="h-10 w-10 rounded-full" :src="require('@/assets/images/' + person.url)" alt="" />
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">{{ person.name }}</p>
        <!-- <p class="text-sm text-gray-500">{{ person.email }}</p> -->
      </div>
    </li>
  </ul>
  <!-- 
    Write API to call get on service
    Render images and values
    Open form to enter superpower and claim it
    API to post to db
    todo: learn how to store image assets properly in mongo
    write API to 
  -->
</template>

<script>
import { getAvatars } from '@/services/api.js'

export default {
  data() {
    return {
      people: []
    }
  },
  beforeMount() {
    getAvatars().then((data) => {
      this.people = data 
    }) 
  },
}
</script>