<template>
  <div id="addSong" class="container mx-auto max-w-4xl pt-20 px-6 ">
    <div class="text-gray-900 text-xl">Add Song</div>
    <div class="bg-green-500 w-full h-1"></div>

    <TextInput
        label="Title"
        placeholder="Coll New Song"
        v-model:input="title"
        input-type="text"
        error="This a test error"
    />
    <div class="w-full">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Select Image
      </label>
      <div class="mb-3 w-full">
        <input
            type="file"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="image"
            ref="fileInput"
            @change="getUploadedImage"
        >
      </div>
    </div>
    <SubmitFormButton
        btn-text="Add Song"
    />
  </div>
</template>

<script setup>

import TextInput from "@/components/global/TextInput";
import SubmitFormButton from "@/components/global/SubmitFormButton";
</script>
