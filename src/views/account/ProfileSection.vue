<template>
  <div class="container max-w-4xl mx-auto flex mt-10">
    <div class="w-1/3">
      <img
          class="w-full rounded-lg h-auto shadow-lg"
          :src="userStore.image"
          alt="Profile Pic">
    </div>
    <div class="w-full pl-4">
      <div class="flex">
        <div class="w-1/2">
          <h1 class="text-2xl md:text-4xl text-left text-gray-900">
            {{ userStore.firstName }} {{ userStore.lastName }}
          </h1>
          <span class="text-md text-gray-700">
            <i><b>{{ userStore.location }}</b></i>
          </span>
        </div>
        <div class="w-1/2 mt-2">
          <RouterLinkButton btn-text="Edit Profile" color="green" url="/account/edit-profile"/>
        </div>
      </div>
      <ProfileInfoSection/>
      <ProfileAboutSection/>
    </div>
  </div>
  <SongsSection/>
  <YouTubeVideoSection/>
  <PostsSection/>
</template>

<script setup>
import ProfileInfoSection from "@/components/partials/profile/ProfileInfoSection";
import ProfileAboutSection from "@/components/partials/profile/ProfileAboutSection";
import RouterLinkButton from "@/components/global/RouterLinkButton";
import SongsSection from "@/components/partials/profile/SongsSection";
import YouTubeVideoSection from "@/components/partials/profile/YouTubeVideoSection";
import PostsSection from "@/components/partials/profile/PostsSection";

import {useUserStore} from "@/store/user-store";

const userStore = useUserStore()
</script>

<style scoped>

</style>
