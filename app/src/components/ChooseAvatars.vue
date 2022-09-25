<template>
  <ul class="divide-y divide-gray-200">
    <li v-for="avatar in this.avatars" :key="avatar.name" class="p-3 rounded overflow-hidden shadow-lg">
      <img class="h-20" :src="require('@/assets/images/' + avatar.url)" alt="" />
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">{{ avatar.name }}</p>
      </div>
      <form @submit.prevent class="">
        <label for="name">Name:</label>
        <input v-model="name" id="name" maxlength="255" type="text" />
        <label for="superpower">Super power:</label>
        <input v-model="superpower" id="superpower" type="text" maxlength="255"/>
        <button  @click="claimAnAvatar(avatar.name)" class="bg-red-900 text-white font-bold p-2 rounded-md">Claim</button>
      </form>
    </li>
  </ul>
  <!-- 
    Open form to enter superpower and claim it
    API to post to db
    todo: learn how to store image assets properly in mongo
    write API to 
  -->
</template>

<script>
import { getAvatars, claimAvatar } from '@/services/api.js'

export default {
  data() {
    return {
      avatars: [],
      name: '',
      superpower: ''
    }
  },
  beforeMount() {
    getAvatars().then((data) => {
      this.avatars = data 
    }) 
  },
  methods: {
    claimAnAvatar(person) {
      claimAvatar(person, this.name, this.superpower).then(data => {
        console.log(data);
      })
    }
  }
}
</script>