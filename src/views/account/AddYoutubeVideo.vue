<template>
  <div id="addYoutubeVideo" class="container mx-auto max-w-4xl pt-20 px-6 ">
    <div class="text-gray-900 text-xl">Add Youtube Video</div>
    <div class="bg-green-500 w-full h-1"></div>

    <TextInput
        class="mb-6"
        label="Title"
        placeholder="Coll New Video"
        v-model:input="title"
        input-type="text"
        error="This a test error"
    />

    <TextInput
        class="mb-2"
        label="Video URL"
        placeholder="Video URL"
        v-model:input="videoCode"
        input-type="text"
        error="This a test error"
    />

    <SubmitFormButton
        btn-text="Add Video"
    />
  </div>
</template>

<script setup>

import TextInput from "@/components/global/TextInput";
import SubmitFormButton from "@/components/global/SubmitFormButton";
</script>
