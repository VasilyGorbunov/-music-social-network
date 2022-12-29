<template>
<div>
  <div class="mx-auto py-4">
    <div class="flex flex-wrap font-bold text-gray-100">
      <div class="text-gray-900 text-xl">Posts</div>
      <div class="bg-green-500 w-full h-1"></div>
      <div class="w-full mt-4">
        <RouterLinkButton class="ml-2" btn-text="Create Post" color="green" url="/account/create-post"/>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap mb-4">
    <div class="my-1 py-1 w-full md:w-1/2 lg:w-1/2">

      <div class="rounded-lg border">
        <a href="#">
          <img class="rounded-t-lg" src="https://via.placeholder.com/500x300" alt="" />
        </a>
        <div class="p-2 md:p-4">
          <div class="text-lg">
            <router-link
                to=""
                class="underline text-blue-500 hover:text-blue-600"
            >
              Test Title
            </router-link>
          </div>
          <p class="py-2">Location: Test Location</p>
          <p class="text-gray-darker text-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ex fuga fugit. Ad assumenda aut ducimus id mollitia nihil quia repudiandae tempora temporibus vitae. Dolor perspiciatis quo repellat sed unde!
          </p>
          <div>
            <router-link
                to=""
                class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded-full"
            >
              Edit post
            </router-link>
            <button
                class="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-1 px-2 rounded-full"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>

</style>
