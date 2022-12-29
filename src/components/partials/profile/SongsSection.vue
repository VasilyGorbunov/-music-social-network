<template>
<div>
  <div class="mx-auto py-4">
    <div class="flex flex-wrap font-bold text-gray-100">
      <div class="text-gray-900 text-xl">Songs</div>
      <div class="bg-green-500 w-full h-1"></div>
      <div class="w-full mt-4">
        <RouterLinkButton class="ml-2" btn-text="Delete Song" color="red" url="/account/delete-song"/>
        <RouterLinkButton btn-text="Add Song" color="green" url="/account/add-song"/>
      </div>
    </div>
  </div>
  <div>
    <SongPlayer/>
  </div>
</div>
</template>

<script setup>

import RouterLinkButton from "@/components/global/RouterLinkButton";
import SongPlayer from "@/components/partials/profile/SongPlayer";
</script>

<style scoped>

</style>
